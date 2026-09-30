# Bliss Path Tours & Safaris - Official Website

> "Guided by passion, blessed by nature."

The official modern web platform for **Bliss Path Tours & Safaris**, an indigenous East African tour operator and safari outfitter based in Nairobi, Kenya.

- **Live Cloudflare Deployment**: https://blisspathtours.bliss-path-tours-and-safaris.workers.dev
- **GitHub Repository**: https://github.com/blisspathtours/blisspath-tours-and-safaris
- **Target Custom Domain**: https://blisspathtours.com

---

## 🌍 Platform Overview & Features

### 1. Curated Safari Packages (14 Signature Circuits)
- **Kenya**: Masai Mara Migration, Amboseli Kilimanjaro Giants, Classic 7-Day Circuit, Tsavo & Diani Bush-to-Beach, Samburu Special 5, Nairobi Day Excursions.
- **Tanzania**: Northern Circuit (Tarangire, Serengeti, Ngorongoro), Mount Kilimanjaro 7-Day Machame Climb, Bush-to-Beach (Serengeti to Zanzibar).
- **Uganda**: Bwindi Mountain Gorilla & Kibale Chimpanzee Expedition, Murchison Falls & Ziwa White Rhinos, Queen Elizabeth & Ishasha Tree-Climbing Lions.
- **Cross-Border**: Kenya & Tanzania Grand Odyssey (8 Days), East Africa Mega Grand Expedition (12 Days).
- Real market pricing, day-by-day itineraries, meal plans, accommodation previews, and direct WhatsApp booking buttons.

### 2. Comprehensive Destination Guides (34 National Parks & Sanctuaries)
- 12 Destinations in **Kenya**
- 11 Destinations in **Tanzania**
- 11 Destinations in **Uganda**
- 100% verified, active **Wikimedia Commons** photography.

### 3. SEO-Optimized Safari Field Blog (34 Guides, 2,100+ Words Each)
- Full architectural breakdown for every park: geography, wildlife trophic dynamics, seasons, 2026 entry tariffs, lodges, and packing lists.
- Schema.org multi-graph structured data: `BlogPosting`, `BreadcrumbList`, `FAQPage`, and `TravelAgency`.
- Table of Contents with jump-to anchor navigation.

### 4. Search Engine & AI Agent Readiness
- **Automated XML Sitemap**: Generated automatically via `@astrojs/sitemap` indexing all 89 pages (`/sitemap-index.xml`).
- **Robots Directive**: `/robots.txt` explicitly permitting Googlebot, Bingbot, and AI agent crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, etc.).
- **LLM Context File**: `/llms.txt` following the emerging AI standard for generative search engines and AI assistants.

---

## 🛠️ Technology Stack
- **Framework**: [Astro 7](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Hosting & Edge Delivery**: [Cloudflare Workers & Static Assets](https://developers.cloudflare.com/workers/)
- **Typography**: Playfair Display (Luxury Editorial Serif), Plus Jakarta Sans (UI), Caveat (Logo Display Script)
- **Data & Collections**: Astro Content Layer with Markdown (`src/content/blog/`) & TypeScript data models (`src/data/`)

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/blisspathtours/blisspath-tours-and-safaris.git
cd blisspath-tours-and-safaris

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321 in your browser
```

## 📦 Build & Deploy

```bash
# Compile static production build (output to ./dist)
npm run build

# Deploy to Cloudflare
npx wrangler deploy
```

---

## 🦁 Contact & Licensing
- **Headquarters**: Karen Plains Road, Nairobi, Kenya
- **Phone / WhatsApp**: +254 700 000 000
- **Email**: info@blisspathtours.com
- **Accreditations**: Licensed by Tourism Regulatory Authority (TRA/KEN), Member of Kenya Association of Tour Operators (KATO), EcoTourism Kenya Partner.

© 2026 Bliss Path Tours & Safaris. All rights reserved.
