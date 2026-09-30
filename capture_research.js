const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const SITES = [
  {
    id: "01_safaribookings",
    name: "SafariBookings",
    category: "Online Safari Marketplace",
    url: "https://www.safaribookings.com"
  },
  {
    id: "02_gadventures",
    name: "G Adventures",
    category: "Global Adventure & Small-Group Tours",
    url: "https://www.gadventures.com"
  },
  {
    id: "03_intrepid",
    name: "Intrepid Travel",
    category: "Sustainable Adventure & Wildlife Travel",
    url: "https://www.intrepidtravel.com"
  },
  {
    id: "04_abercrombie_kent",
    name: "Abercrombie & Kent",
    category: "Ultra-Luxury Bespoke Safaris & Travel",
    url: "https://www.abercrombiekent.com"
  },
  {
    id: "05_wilderness_destinations",
    name: "Wilderness Destinations",
    category: "Luxury African Eco-Safaris & Conservation",
    url: "https://www.wildernessdestinations.com"
  },
  {
    id: "06_singita",
    name: "Singita",
    category: "Iconic Luxury Safari Lodges & Reserves",
    url: "https://singita.com"
  },
  {
    id: "07_asilia_africa",
    name: "Asilia Africa",
    category: "East Africa Authentic Safaris & Camps",
    url: "https://www.asiliaafrica.com"
  },
  {
    id: "08_natgeo_expeditions",
    name: "National Geographic Expeditions",
    category: "Wildlife & Cultural Exploration Tours",
    url: "https://www.nationalgeographic.com/expeditions/"
  },
  {
    id: "09_trafalgar",
    name: "Trafalgar Tours",
    category: "Guided Vacations & Escorted Tours",
    url: "https://www.trafalgar.com"
  },
  {
    id: "10_pollmans",
    name: "Pollman's Tours & Safaris",
    category: "East Africa Inbound Tour Operator",
    url: "https://www.pollmans.com"
  }
];

const SCREENSHOT_DIR = path.join(__dirname, "screenshots");
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Starting Chrome Headless with CDP...");
  const tempDir = "C:/Users/pkim8/AppData/Local/Temp/chrome-tour-research";
  
  const chrome = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--no-sandbox",
    "--disable-gpu",
    "--window-size=1440,900",
    `--user-data-dir=${tempDir}`
  ]);

  await sleep(2000);

  const results = [];

  for (const site of SITES) {
    console.log(`\n========================================`);
    console.log(`Processing [${site.id}] ${site.name} (${site.url})`);

    let tab;
    let ws;
    try {
      const newTabRes = await fetch("http://127.0.0.1:9222/json/new", { method: "PUT" });
      tab = await newTabRes.json();

      ws = new WebSocket(tab.webSocketDebuggerUrl);
      let msgId = 1;
      const callbacks = new Map();

      function send(method, params = {}) {
        return new Promise((resolve, reject) => {
          const id = msgId++;
          const timeout = setTimeout(() => {
            callbacks.delete(id);
            reject(new Error(`Timeout waiting for CDP response: ${method}`));
          }, 20000);

          callbacks.set(id, (res) => {
            clearTimeout(timeout);
            resolve(res);
          });
          ws.send(JSON.stringify({ id, method, params }));
        });
      }

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.id && callbacks.has(data.id)) {
            callbacks.get(data.id)(data.result);
            callbacks.delete(data.id);
          }
        } catch (e) {}
      };

      await new Promise((resolve, reject) => {
        ws.onopen = resolve;
        ws.onerror = reject;
      });

      await send("Page.enable");
      await send("Network.enable");
      await send("Network.setUserAgentOverride", {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
      });

      console.log(`Navigating to ${site.url}...`);
      await send("Page.navigate", { url: site.url });

      // Wait for navigation & rendering
      await sleep(7000);

      // Clean up common cookie banners & extract data
      const cleanAndExtractScript = `
        (() => {
          // Remove cookie banners
          const selectors = [
            '#onetrust-consent-sdk',
            '.onetrust-pc-dark-filter',
            '[id*="cookie"]',
            '[class*="cookie"]',
            '[aria-label*="cookie"]',
            '[id*="consent"]',
            '.cc-banner',
            '.optanon-alert-box-wrapper'
          ];
          for (const sel of selectors) {
            document.querySelectorAll(sel).forEach(el => {
              try { el.remove(); } catch(e) {}
            });
          }

          // Unblock scrolling if blocked by modal
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';

          const title = document.title || '';
          const metaDesc = document.querySelector('meta[name="description"]')?.content ||
                           document.querySelector('meta[property="og:description"]')?.content || '';
          const h1 = document.querySelector('h1')?.innerText?.replace(/\\s+/g, ' ').trim() || '';
          const h2 = Array.from(document.querySelectorAll('h2')).slice(0, 3).map(el => el.innerText.replace(/\\s+/g, ' ').trim()).filter(Boolean);

          return { title, metaDesc, h1, h2 };
        })()
      `;

      let meta = { title: "", metaDesc: "", h1: "", h2: [] };
      try {
        const evalRes = await send("Runtime.evaluate", {
          expression: cleanAndExtractScript,
          returnByValue: true
        });
        if (evalRes && evalRes.result && evalRes.result.value) {
          meta = evalRes.result.value;
        }
      } catch (err) {
        console.warn("Could not extract metadata:", err.message);
      }

      console.log(`Title: ${meta.title}`);
      console.log(`H1: ${meta.h1}`);

      // Capture screenshot
      const shot = await send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false
      });

      const shotPath = path.join(SCREENSHOT_DIR, `${site.id}.png`);
      fs.writeFileSync(shotPath, Buffer.from(shot.data, "base64"));
      const fileSizeKb = Math.round(fs.statSync(shotPath).size / 1024);
      console.log(`Saved screenshot: ${shotPath} (${fileSizeKb} KB)`);

      results.push({
        ...site,
        screenshot: `screenshots/${site.id}.png`,
        fileSizeKb,
        meta
      });

      ws.close();
      await fetch(`http://127.0.0.1:9222/json/close/${tab.id}`, { method: "PUT" });
    } catch (err) {
      console.error(`Failed processing ${site.name}:`, err.message);
      if (ws) {
        try { ws.close(); } catch(e) {}
      }
      if (tab) {
        try { await fetch(`http://127.0.0.1:9222/json/close/${tab.id}`, { method: "PUT" }); } catch(e) {}
      }
    }

    await sleep(1000);
  }

  chrome.kill();
  console.log("\nFinished capturing all sites! Chrome stopped.");

  fs.writeFileSync(path.join(__dirname, "research_data.json"), JSON.stringify(results, null, 2));
  console.log("Saved research_data.json");
}

run().catch((err) => {
  console.error("Fatal script error:", err);
  process.exit(1);
});
