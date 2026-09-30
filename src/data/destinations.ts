export interface Destination {
  slug: string;
  name: string;
  country: "Kenya" | "Tanzania" | "Uganda";
  tagline: string;
  heroImage: string;
  overview: string;
  bestTimeToVisit: string;
  wildlifeHighlights: string[];
  keyAttractions: string[];
  recommendedDays: string;
}

export const DESTINATIONS: Destination[] = [
  {
    "slug": "masai-mara",
    "name": "Masai Mara National Reserve",
    "country": "Kenya",
    "tagline": "The World's Greatest Wildlife Theatre & Migration Epicenter",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Spanning over 1,510 square kilometers of golden rolling savannah, the Masai Mara is universally acclaimed as Africa's premier wildlife sanctuary. Famous for the Great Wildebeest Migration crossing the Mara River between July and October, the reserve boasts the highest concentration of lions, cheetahs, and leopards on the continent.",
    "bestTimeToVisit": "July to October (Great Migration) | December to March (Predator activity & lush plains)",
    "wildlifeHighlights": [
      "Lion Prides",
      "Mara River Wildebeest",
      "Cheetah Coalitions",
      "Black Rhinos",
      "Leopards",
      "Elephants"
    ],
    "keyAttractions": [
      "Mara River Crossing Points",
      "Musiara Marsh",
      "Oloololo Escarpment",
      "Sunrise Hot Air Balloon Safaris",
      "Maasai Cultural Bomas"
    ],
    "recommendedDays": "3 to 5 Days"
  },
  {
    "slug": "amboseli",
    "name": "Amboseli National Park",
    "country": "Kenya",
    "tagline": "Land of Giant Tuskers in the Shadow of Mount Kilimanjaro",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "overview": "Nestled at the foot of snow-capped Mount Kilimanjaro, Amboseli is world-renowned for its massive herds of free-ranging elephants, including Africa's famous Big Tuskers. Its unique ecosystem transitions from dried-up Pleistocene lake beds to sulfur springs and lush emerald marshes teeming with pelicans and hippos.",
    "bestTimeToVisit": "June to October & January to February (Clear mountain vistas & dry plains)",
    "wildlifeHighlights": [
      "Big Tusker Elephants",
      "Lions",
      "Spotted Hyenas",
      "Cheetahs",
      "Giraffes",
      "Over 400 Bird Species"
    ],
    "keyAttractions": [
      "Observation Hill Panoramas",
      "Enkongo Narok Swamps",
      "Elephant Research Camp",
      "Kilimanjaro Sunrises"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "tsavo-east",
    "name": "Tsavo East National Park",
    "country": "Kenya",
    "tagline": "Vast Untamed Wilderness of the Red Dust Elephants",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Red_elephant_in_dirt.jpg/1280px-Red_elephant_in_dirt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Tsavo East is one of the oldest and largest national parks in Kenya, covering 13,747 square kilometers. Famous for its dust-red elephants that roll in the volcanic terracotta soil, the park features the world's longest lava flow (the 300km Yatta Plateau), the Galana River, and Aruba Dam.",
    "bestTimeToVisit": "June to October & January to February (Wildlife congregates around permanent water sources)",
    "wildlifeHighlights": [
      "Red Dust Elephants",
      "Lions of Tsavo",
      "Lesser Kudu",
      "Gerenuk",
      "Hippo Pools",
      "Over 500 Bird Species"
    ],
    "keyAttractions": [
      "Yatta Plateau",
      "Lugard Falls",
      "Mudanda Rock Catchment",
      "Aruba Dam Wildlife Waterhole"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "tsavo-west",
    "name": "Tsavo West National Park",
    "country": "Kenya",
    "tagline": "Dramatic Volcanic Craters & Crystal Springs",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Tsavo_West_National_Park%2C_Kenya.jpg/1280px-Tsavo_West_National_Park%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Characterized by rugged volcanic cones, dense acacia thickets, and natural springs, Tsavo West offers dramatic landscape contrast. Mzima Springs pours fifty million gallons of crystal-clear water every day into palm-fringed pools, complete with an underwater glass observation hide for watching hippos and fish.",
    "bestTimeToVisit": "Year-Round (Best visibility October to March)",
    "wildlifeHighlights": [
      "Black Rhinos (Ngulia Sanctuary)",
      "Hippos & Crocodiles",
      "Leopards",
      "Lions",
      "Cheetahs"
    ],
    "keyAttractions": [
      "Mzima Springs Underwater Chamber",
      "Shetani Lava Flow",
      "Ngulia Rhino Sanctuary",
      "Chaimu Volcanic Crater",
      "Poacher's Lookout"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "lake-nakuru",
    "name": "Lake Nakuru National Park",
    "country": "Kenya",
    "tagline": "Alkaline Flamingo Shores & Protected Rhino Sanctuary",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Birds_of_Lake_Nakuru_National_Park._Flamingos_2.jpg/1280px-Birds_of_Lake_Nakuru_National_Park._Flamingos_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Surrounding the picturesque alkaline lake on the Great Rift Valley floor, Lake Nakuru National Park is a sanctuary for both black and white rhinoceroses. The lake shores host millions of lesser and greater flamingos, while the yellow-barked acacia forest shelters endangered Rothschild giraffes.",
    "bestTimeToVisit": "Year-Round (Best birding and clear skies November to March)",
    "wildlifeHighlights": [
      "Black & White Rhinos",
      "Pink Flamingos",
      "Rothschild Giraffes",
      "Tree-climbing Lions",
      "Leopards"
    ],
    "keyAttractions": [
      "Baboon Cliff Viewpoint",
      "Makalia Falls",
      "Lion Hill",
      "Flamingo Lake Shoreline"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "samburu",
    "name": "Samburu National Reserve",
    "country": "Kenya",
    "tagline": "Rugged Northern Frontier & The Special Five Species",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Female_gerenuk_and_young_in_Samburu_National_Reserve%2C_Kenya.jpg/1280px-Female_gerenuk_and_young_in_Samburu_National_Reserve%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Located north of the equator in Kenya's arid northern country, Samburu is centered along the Ewaso Ng'iro River. It is celebrated for its unique biodiversity, hosting the 'Samburu Special 5' species that thrive only in dry northern habitats.",
    "bestTimeToVisit": "June to October & December to March (Wildlife gathers closely along the Ewaso Ng'iro river)",
    "wildlifeHighlights": [
      "Gerenuk (Giraffe-necked antelope)",
      "Grevy's Zebra",
      "Reticulated Giraffe",
      "Beisa Oryx",
      "Somali Ostrich",
      "Leopards"
    ],
    "keyAttractions": [
      "Ewaso Ng'iro Riverbanks",
      "Samburu Cultural Villages",
      "Koitogor Hill",
      "Elephant River Crossings"
    ],
    "recommendedDays": "2 to 4 Days"
  },
  {
    "slug": "ol-pejeta",
    "name": "Ol Pejeta Conservancy",
    "country": "Kenya",
    "tagline": "East Africa's Largest Black Rhino Sanctuary & Chimpanzee Haven",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Ceratotherium_simum_cottoni_-Ol_Pejeta_Conservancy%2C_Kenya.jpg/1280px-Ceratotherium_simum_cottoni_-Ol_Pejeta_Conservancy%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "A non-profit wildlife conservancy situated on the equator with spectacular views of Mount Kenya. Ol Pejeta is home to the last two remaining Northern White Rhinos on earth (Najin and Fatu), over 140 critically endangered black rhinos, and the Sweetwaters Chimpanzee Sanctuary.",
    "bestTimeToVisit": "Year-Round (Clear mountain views in January–March and July–October)",
    "wildlifeHighlights": [
      "World's Last 2 Northern White Rhinos",
      "Black Rhinos",
      "Rescued Chimpanzees",
      "Big Five",
      "African Wild Dogs"
    ],
    "keyAttractions": [
      "Northern White Rhino Enclosure",
      "Sweetwaters Chimpanzee Sanctuary",
      "Equator Crossing Marker",
      "Night Game Drives",
      "Bush Walks"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "diani-beach",
    "name": "Diani Beach & South Coast",
    "country": "Kenya",
    "tagline": "Turquoise Indian Ocean Waters & Powder-White Sands",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Diani_Beach_towards_the_south_next_to_the_Indian_Ocean_Beach_Club_hotel_near_Mombasa%2C_Coast_Province%2C_Kenya.jpg/1280px-Diani_Beach_towards_the_south_next_to_the_Indian_Ocean_Beach_Club_hotel_near_Mombasa%2C_Coast_Province%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Regularly voted Africa's leading beach destination, Diani Beach features 25 kilometers of soft white coral sand, vibrant coral reefs, and tranquil shallow lagoons. It is the premier coastal getaway to combine with a thrilling bush safari.",
    "bestTimeToVisit": "August to April (Warm sea temperatures and crystal-clear visibility)",
    "wildlifeHighlights": [
      "Whale Sharks",
      "Wild Dolphins",
      "Green Sea Turtles",
      "Colobus Monkeys",
      "Coral Reef Marine Life"
    ],
    "keyAttractions": [
      "Kisite-Mpunguti Marine Park",
      "Shimba Hills Elephant Reserve",
      "Kaya Kinondo Sacred Forest",
      "Dhow Sailing & Snorkeling"
    ],
    "recommendedDays": "3 to 5 Days"
  },
  {
    "slug": "lake-naivasha-hells-gate",
    "name": "Lake Naivasha & Hell's Gate",
    "country": "Kenya",
    "tagline": "Freshwater Birding Lake & Bicycle Safari Gorges",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Gorge%2C_Hell%27s_Gate_National_Park_-_panoramio.jpg/1280px-Gorge%2C_Hell%27s_Gate_National_Park_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Situated at the highest elevation of the Great Rift Valley, Lake Naivasha is a freshwater haven for over 400 bird species and large pods of hippos. Adjacent Hell's Gate National Park is one of the few reserves where visitors can hike and cycle past zebras and giraffes through dramatic volcanic gorges.",
    "bestTimeToVisit": "Year-Round (Excellent weekend getaway from Nairobi)",
    "wildlifeHighlights": [
      "Hippos",
      "Fish Eagles",
      "Zebras",
      "Giraffes",
      "Warthogs",
      "Colobus Monkeys"
    ],
    "keyAttractions": [
      "Hell's Gate Gorge Hiking & Cycling",
      "Crescent Island Walking Sanctuary",
      "Fischer's Tower Rock Climbing",
      "Naivasha Boat Safaris"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "mount-kenya",
    "name": "Mount Kenya National Park",
    "country": "Kenya",
    "tagline": "Africa's Second Highest Peak & Equatorial Glaciers",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Batian_peak_Mt_Kenya.jpg/1280px-Batian_peak_Mt_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "A UNESCO World Heritage site, Mount Kenya rises to 5,199 meters with dramatic jagged volcanic peaks, Afro-alpine moorlands, and ancient giant lobelias. The lower slopes feature dense bamboo and podocarpus forests inhabited by forest elephants, buffaloes, and bongo antelopes.",
    "bestTimeToVisit": "January to February & July to September (Driest conditions for peak trekking)",
    "wildlifeHighlights": [
      "Forest Elephants",
      "Colobus Monkeys",
      "Giant Forest Hogs",
      "Rock Hyraxes",
      "Rare Mountain Bongo"
    ],
    "keyAttractions": [
      "Point Lenana Summit Trek (4,985m)",
      "Lake Alice & Lake Michaelson",
      "Giant Senecio Moorlands",
      "Chogoria Route Gorges"
    ],
    "recommendedDays": "3 to 5 Days"
  },
  {
    "slug": "nairobi-national-park",
    "name": "Nairobi National Park & Giraffe Centre",
    "country": "Kenya",
    "tagline": "The World's Only Capital Wildlife Park & Giraffe Sanctuary",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Feeding_a_giraffe_at_the_Giraffe_Centre_in_Nairobi%2C_Kenya.webm/960px--Feeding_a_giraffe_at_the_Giraffe_Centre_in_Nairobi%2C_Kenya.webm.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo",
    "overview": "Located just 7 kilometers south of Nairobi's bustling skyscrapers, this unique 117-square-kilometer park features open grass plains dotted with wild lions, leopards, cheetahs, and over 50 black rhinos roaming with high-rises on the horizon.",
    "bestTimeToVisit": "Year-Round (Ideal daily departures)",
    "wildlifeHighlights": [
      "Black & White Rhinos",
      "Lions",
      "Rothschild Giraffes",
      "Leopards",
      "Cheetahs",
      "Cape Buffaloes"
    ],
    "keyAttractions": [
      "Sheldrick Wildlife Trust Elephant Orphanage",
      "Giraffe Centre Elevated Feeding",
      "Nairobi Safari Walk",
      "Ivory Burning Site Monument"
    ],
    "recommendedDays": "1 Day"
  },
  {
    "slug": "watamu-marine-park",
    "name": "Watamu & Malindi Marine National Park",
    "country": "Kenya",
    "tagline": "UNESCO Biosphere Reserve & Coral Reef Haven",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Watamu_Beach%2C_Kenya_11.jpg/1280px-Watamu_Beach%2C_Kenya_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Watamu Marine National Park is celebrated as one of the finest coral reef marine sanctuaries in East Africa. Clear turquoise shallows shelter over 600 species of fish, 110 species of coral, and critical nesting sites for endangered green sea turtles.",
    "bestTimeToVisit": "October to April (Calm waters, warm sea, best snorkeling visibility)",
    "wildlifeHighlights": [
      "Green & Hawksbill Sea Turtles",
      "Manta Rays",
      "Dolphins",
      "Moray Eels",
      "Whale Sharks"
    ],
    "keyAttractions": [
      "Mida Creek Mangrove Boardwalk",
      "Coral Garden Snorkeling",
      "Gede Ruins 12th Century City",
      "Arabuko Sokoke Forest"
    ],
    "recommendedDays": "2 to 4 Days"
  },
  {
    "slug": "serengeti",
    "name": "Serengeti National Park",
    "country": "Tanzania",
    "tagline": "Endless Horizons & The Great Circular Migration",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "The legendary Serengeti covers 14,750 square kilometers of sweeping grasslands, rocky granite kopjes, and riverine woodlands. Host to 1.5 million migrating wildebeest and the highest density of large predators on earth, it delivers the ultimate African safari experience.",
    "bestTimeToVisit": "January to March (Southern Calving) | June to July (Grumeti River) | August to October (Northern Crossings)",
    "wildlifeHighlights": [
      "Migrating Wildebeest",
      "Lions on Kopjes",
      "Cheetahs",
      "Leopards",
      "Hyenas",
      "Wild Dogs"
    ],
    "keyAttractions": [
      "Seronera River Valley",
      "Moru Kopjes Black Rhinos",
      "Grumeti River",
      "Retima Hippo Pool",
      "Hot Air Balloon Safaris"
    ],
    "recommendedDays": "3 to 5 Days"
  },
  {
    "slug": "ngorongoro-crater",
    "name": "Ngorongoro Conservation Area",
    "country": "Tanzania",
    "tagline": "The World's Largest Intact Volcanic Caldera & Eden of Africa",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg/1280px-Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "A UNESCO World Heritage site and natural wonder, Ngorongoro is a 260-square-kilometer unbroken caldera formed by a massive volcanic collapse 3 million years ago. Its 600-meter deep walls shelter an astounding 25,000 large animals, including critically endangered black rhinos and giant tuskers.",
    "bestTimeToVisit": "Year-Round (Permanent water ensures spectacular wildlife year-round)",
    "wildlifeHighlights": [
      "Black Rhinos",
      "Crater Lions",
      "Old Tuskers",
      "Lake Magadi Flamingos",
      "Cheetahs",
      "Spotted Hyenas"
    ],
    "keyAttractions": [
      "Crater Floor Game Drives",
      "Olduvai Gorge Archaeological Site",
      "Lake Magadi",
      "Lerai Fever Tree Forest",
      "Empakaai Crater Hike"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "kilimanjaro",
    "name": "Mount Kilimanjaro National Park",
    "country": "Tanzania",
    "tagline": "The Roof of Africa & The World's Highest Free-Standing Mountain",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/2/27/Mount_Kilimanjaro_Closeup_%284708_-_ISS006-E-45499_lrg%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "overview": "Rising majestically from the savannah plains to 5,895 meters (19,341 feet), Mount Kilimanjaro is the highest point on the African continent. Climbing Kilimanjaro takes trekkers through five distinct climatic zones: tropical rainforest, heath, alpine moorland, alpine desert, and arctic summit glaciers.",
    "bestTimeToVisit": "January to March & July to October (Clearest skies and lowest precipitation for trekking)",
    "wildlifeHighlights": [
      "Colobus Monkeys",
      "Blue Monkeys",
      "Sunbirds",
      "Abbott's Starlings",
      "Four-striped Grass Mice"
    ],
    "keyAttractions": [
      "Uhuru Peak (5,895m)",
      "Machame & Lemosho Trekking Routes",
      "Barranco Wall",
      "Shira Plateau",
      "Kibo Crater Rim"
    ],
    "recommendedDays": "6 to 8 Days"
  },
  {
    "slug": "tarangire",
    "name": "Tarangire National Park",
    "country": "Tanzania",
    "tagline": "Colossal Elephant Herds & Ancient Baobab Trees",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Elephants_in_Tarangire_National_Park_%282015%29.jpg/1280px-Elephants_in_Tarangire_National_Park_%282015%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Named after the Tarangire River that flows through it, this park is famous for holding the largest concentration of elephants in Tanzania and iconic thousand-year-old baobab trees that dot the rolling hills. During the dry season, wildlife floods into Tarangire from across the Maasai Steppe.",
    "bestTimeToVisit": "July to November (Dry season brings massive elephant and wildlife gatherings)",
    "wildlifeHighlights": [
      "Thousands of Elephants",
      "Tree-climbing Lions",
      "Leopards",
      "Oryx",
      "Gerenuk",
      "550+ Bird Species"
    ],
    "keyAttractions": [
      "Tarangire River Wildlife Watching",
      "Giant Baobab Forests",
      "Silale Swamps",
      "Walking Safaris"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "lake-manyara",
    "name": "Lake Manyara National Park",
    "country": "Tanzania",
    "tagline": "Tree-Climbing Lions & Treetop Canopy Walks",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Lakeshore_and_wildlife%2C_Lake_Manyara_National_Park_%282015%29.jpg/1280px-Lakeshore_and_wildlife%2C_Lake_Manyara_National_Park_%282015%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Ernest Hemingway described Lake Manyara as 'the loveliest I had seen in Africa.' Nestled beneath the steep western escarpment of the Great Rift Valley, it features lush groundwater forests fed by underground springs, an expansive soda lake pink with flamingos, and famous tree-climbing lions.",
    "bestTimeToVisit": "July to October (Big game viewing) | November to June (Bird watching and waterfalls)",
    "wildlifeHighlights": [
      "Tree-climbing Lions",
      "Massive Baboon Troops",
      "Pink Flamingos",
      "Elephants",
      "Hippos"
    ],
    "keyAttractions": [
      "Manyara Treetop Walkway (Canopy bridge)",
      "Rift Valley Escarpment",
      "Maji Moto Hot Springs",
      "Groundwater Forest"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "zanzibar",
    "name": "Zanzibar Archipelago (Unguja & Stone Town)",
    "country": "Tanzania",
    "tagline": "The Legendary Spice Island of Stone Town & Turquoise Atolls",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Zanzibar_2012_06_06_4166_%287592264546%29.jpg/1280px-Zanzibar_2012_06_06_4166_%287592264546%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Located 35km off the Tanzanian mainland in the Indian Ocean, Zanzibar is an enchanting archipelago celebrated for its powder-white beaches, turquoise lagoons, fragrant spice plantations, and the UNESCO World Heritage historical town of Stone Town with its carved wooden doors and sultan palaces.",
    "bestTimeToVisit": "June to October & December to February (Warm, sunny, calm seas)",
    "wildlifeHighlights": [
      "Red Colobus Monkeys (Jozani Forest)",
      "Wild Dolphins",
      "Green Sea Turtles",
      "Manta Rays"
    ],
    "keyAttractions": [
      "Stone Town Heritage Walking Tour",
      "Jozani Chwaka Bay National Park",
      "Mnemba Atoll Snorkeling",
      "Spice Farm Tours",
      "Nungwi Beach"
    ],
    "recommendedDays": "3 to 6 Days"
  },
  {
    "slug": "nyerere-selous",
    "name": "Nyerere National Park (Selous)",
    "country": "Tanzania",
    "tagline": "Africa's Largest Wilderness & Rufiji Boat Safaris",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Rufiji_River_Selous_Game_Reserve.jpg/1280px-Rufiji_River_Selous_Game_Reserve.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Formerly known as the Selous Game Reserve, Nyerere National Park covers over 30,000 square kilometers, making it one of the largest protected wildlife areas in Africa. Traversed by the mighty Rufiji River, it offers exceptional boat safaris, walking expeditions, and one of Africa's largest populations of endangered wild dogs.",
    "bestTimeToVisit": "June to October (Dry season when wildlife congregates along the Rufiji river and oxbow lakes)",
    "wildlifeHighlights": [
      "African Wild Dogs (Packs of Painted Wolves)",
      "Hippos & Crocodiles",
      "Elephants",
      "Lions",
      "Sable Antelope"
    ],
    "keyAttractions": [
      "Rufiji River Boat Safaris",
      "Stiegler's Gorge",
      "Walking Fly-Camping Safaris",
      "Lake Tagalala"
    ],
    "recommendedDays": "3 to 4 Days"
  },
  {
    "slug": "ruaha",
    "name": "Ruaha National Park",
    "country": "Tanzania",
    "tagline": "Rugged Predator Frontier & 10% of Africa's Lions",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Lion%2C_Ruaha_National_Park_%289%29_%2828407027344%29.jpg/1280px-Lion%2C_Ruaha_National_Park_%289%29_%2828407027344%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Tanzania's second-largest park is a rugged, untamed wilderness characterized by the Great Ruaha River and striking baobab forests. Ruaha supports 10% of the entire planet's wild lion population, enormous elephant herds, and both Greater and Lesser Kudu.",
    "bestTimeToVisit": "June to October (Peak predator activity around diminishing river pools)",
    "wildlifeHighlights": [
      "Super Prides of Lions (20+ individuals)",
      "Leopards",
      "Cheetahs",
      "Greater & Lesser Kudu",
      "African Wild Dogs"
    ],
    "keyAttractions": [
      "Great Ruaha River Sandbanks",
      "Jongomeru Wilderness",
      "Walking Safaris",
      "Baobab Landscapes"
    ],
    "recommendedDays": "3 to 4 Days"
  },
  {
    "slug": "mahale-mountains",
    "name": "Mahale Mountains National Park",
    "country": "Tanzania",
    "tagline": "Wild Chimpanzee Tracking on Lake Tanganyika's Pristine Shores",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mahale.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "overview": "One of Africa's most remote and breathtaking parks, Mahale Mountains rises directly from the crystal-clear waters of Lake Tanganyika. With no roads, access is exclusively by boat or light aircraft. It is home to over 1,000 wild chimpanzees habituated to human presence.",
    "bestTimeToVisit": "July to October (Chimpanzees descend to lower forest slopes near camp)",
    "wildlifeHighlights": [
      "Habituated Wild Chimpanzees",
      "Red Colobus",
      "Blue Duikers",
      "Cichlid Fish (Over 250 species)"
    ],
    "keyAttractions": [
      "On-Foot Chimpanzee Tracking",
      "Lake Tanganyika Kayaking & Swimming",
      "Dhow Sunset Cruises",
      "Mahale Forest Waterfalls"
    ],
    "recommendedDays": "3 to 5 Days"
  },
  {
    "slug": "arusha-national-park",
    "name": "Arusha National Park & Mount Meru",
    "country": "Tanzania",
    "tagline": "Black-and-White Colobus Monkeys & Mount Meru Crater",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Kilimanjaro_and_Arusha_National_Parks_map-he.svg/1280px-Kilimanjaro_and_Arusha_National_Parks_map-he.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "A gem located just outside Arusha city, this diverse park contains the rugged volcanic cone of Mount Meru (4,566m), the tranquil alkaline Momella Lakes, and the volcanic Ngurdoto Crater. It is one of the few places in Tanzania offering guided armed walking safaris.",
    "bestTimeToVisit": "June to February (Clearest views of Mount Meru and Kilimanjaro)",
    "wildlifeHighlights": [
      "Black-and-White Colobus Monkeys",
      "Giraffes",
      "Zebras",
      "Flamingos",
      "Leopards",
      "Waterbucks"
    ],
    "keyAttractions": [
      "Mount Meru Climb (4,566m)",
      "Momella Lakes Canoeing",
      "Ngurdoto Crater Rim",
      "Armed Walking Safaris"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "katavi",
    "name": "Katavi National Park",
    "country": "Tanzania",
    "tagline": "Raw, Untouched Western Wilderness & Epic Hippo Pods",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Katavi_sunset.jpg/1280px-Katavi_sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "For true adventurers seeking Africa as it was a century ago, Katavi is isolated and untouched. The seasonal Katuma River shrinks into mud pools during the dry season, forcing hundreds of hippos into massive brawling pods alongside thousands of cape buffaloes and thirsty lions.",
    "bestTimeToVisit": "July to October (Dry season produces dramatic concentrations of hippos and predators)",
    "wildlifeHighlights": [
      "Huge Hippo Pods (Up to 600 in one pool)",
      "Monster Crocodiles",
      "Vast Buffalo Herds",
      "Lions",
      "Roan Antelope"
    ],
    "keyAttractions": [
      "Katuma Riverbed Game Drives",
      "Lake Chada Floodplains",
      "Katisunga Plain",
      "Remote Fly-Camping"
    ],
    "recommendedDays": "3 to 4 Days"
  },
  {
    "slug": "bwindi-impenetrable",
    "name": "Bwindi Impenetrable National Park",
    "country": "Uganda",
    "tagline": "The World's Mountain Gorilla Sanctuary & Ancient Rainforest",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Gorila_de_monta%C3%B1a_%28Gorilla_beringei_beringei%29%2C_parque_nacional_de_la_Selva_Impenetrable_de_Bwindi%2C_Uganda%2C_2024-02-02%2C_DD_80.jpg/1280px-Gorila_de_monta%C3%B1a_%28Gorilla_beringei_beringei%29%2C_parque_nacional_de_la_Selva_Impenetrable_de_Bwindi%2C_Uganda%2C_2024-02-02%2C_DD_80.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "A UNESCO World Heritage site blanketed in primeval mist-covered rainforest over 25,000 years old. Bwindi is home to almost half of the world's critically endangered wild mountain gorillas. Trekking into the dense forest to sit quietly with a gentle silverback gorilla family is one of the most profound wildlife encounters on earth.",
    "bestTimeToVisit": "June to August & December to February (Drier forest trails and easier hiking)",
    "wildlifeHighlights": [
      "Mountain Gorillas (Habituated Families)",
      "Chimpanzees",
      "L'Hoest's Monkeys",
      "Black-and-White Colobus",
      "350 Bird Species"
    ],
    "keyAttractions": [
      "Mountain Gorilla Habituation & Trekking",
      "Batwa Pygmy Cultural Experience",
      "Munyaga Waterfall Trail",
      "Buhoma Community Village Walk"
    ],
    "recommendedDays": "3 to 4 Days"
  },
  {
    "slug": "murchison-falls",
    "name": "Murchison Falls National Park",
    "country": "Uganda",
    "tagline": "The World's Most Powerful Waterfall & River Nile Safaris",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/River_Nile%2C_Murchison_Falls_National_Park%2C_Uganda_35.jpg/1280px-River_Nile%2C_Murchison_Falls_National_Park%2C_Uganda_35.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Uganda's largest and oldest protected conservation area, bisected by the Victoria Nile River. Here, the entire Nile River is forced through a narrow 7-meter rock gorge before exploding 43 meters downward with thunderous power. Boat cruises along the river reveal thousands of hippos, giant crocodiles, and rare shoebill storks.",
    "bestTimeToVisit": "December to February & June to September (Excellent wildlife game drives and calm river cruises)",
    "wildlifeHighlights": [
      "Shoebill Storks",
      "Rothschild Giraffes",
      "Nile Crocodiles & Hippos",
      "Lions",
      "Elephants",
      "Leopards"
    ],
    "keyAttractions": [
      "Top of the Falls Hike",
      "Victoria Nile Boat Cruise to the Base of Falls",
      "Albert Delta Shoebill Boat Cruise",
      "Northern Savannah Game Drives"
    ],
    "recommendedDays": "3 to 4 Days"
  },
  {
    "slug": "queen-elizabeth-park",
    "name": "Queen Elizabeth National Park",
    "country": "Uganda",
    "tagline": "Tree-Climbing Lions of Ishasha & Kazinga Channel Cruises",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Hippos_at_Kazinga_Channel_in_Queen_Elizabeth_National_Park.jpg/1280px-Hippos_at_Kazinga_Channel_in_Queen_Elizabeth_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Set against the jagged Rwenzori Mountains, Queen Elizabeth National Park boasts volcanic crater lakes, lush savannahs, and papyrus swamps. It is famous for the unique tree-climbing lions of the Ishasha sector and the Kazinga Channel, which has the world's highest concentration of hippos.",
    "bestTimeToVisit": "January to February & June to July (Dry roads and great lion spotting in figs)",
    "wildlifeHighlights": [
      "Tree-climbing Lions (Ishasha)",
      "Hippos (Kazinga Channel)",
      "Forest Chimpanzees (Kyambura)",
      "Elephants",
      "Leopards"
    ],
    "keyAttractions": [
      "Kazinga Channel Boat Safari",
      "Ishasha Tree-Climbing Lion Drives",
      "Kyambura Gorge 'Valley of Apes' Trek",
      "Katwe Salt Crater Lakes"
    ],
    "recommendedDays": "3 to 4 Days"
  },
  {
    "slug": "kibale-forest",
    "name": "Kibale National Park",
    "country": "Uganda",
    "tagline": "The Primate Capital of the World & Chimpanzee Tracking",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/013_Alpha_male_chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/1280px-013_Alpha_male_chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Kibale is widely regarded as the primate capital of the world, containing the highest density and diversity of primates in Africa (13 species). Over 1,500 wild chimpanzees call this lush tropical moist evergreen rainforest home, offering the highest tracking success rate on the continent.",
    "bestTimeToVisit": "Year-Round (Best tracking trails December to February and June to August)",
    "wildlifeHighlights": [
      "Wild Chimpanzees",
      "Red Colobus Monkeys",
      "L'Hoest's Monkeys",
      "Grey-cheeked Mangabeys",
      "Olive Baboons",
      "Forest Elephants"
    ],
    "keyAttractions": [
      "Chimpanzee Tracking & Habituation Experience",
      "Bigodi Wetland Sanctuary Boardwalk",
      "Crater Lakes Scenic Drives",
      "Night Primate Forest Walks"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "kidepo-valley",
    "name": "Kidepo Valley National Park",
    "country": "Uganda",
    "tagline": "Africa's True Frontier & Rugged Narus Valley",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Landscape_of_Kidepo_Valley_National_Park_in_Uganda.jpg/1280px-Landscape_of_Kidepo_Valley_National_Park_in_Uganda.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Tucked into the far northeastern corner of Uganda bordering South Sudan and Kenya, Kidepo Valley was named by CNN Travel as one of Africa's best national parks. The sweeping golden savannah of the Narus Valley is flanked by the rugged Morungole mountain range, harboring wildlife found nowhere else in Uganda.",
    "bestTimeToVisit": "September to March (Dry season when wildlife concentrates around remaining Narus waterholes)",
    "wildlifeHighlights": [
      "Cheetahs",
      "Bat-eared Foxes",
      "Aardwolves",
      "Tree-climbing Lions",
      "Huge Buffalo Herds (Up to 1,000+)",
      "Ostriches"
    ],
    "keyAttractions": [
      "Narus Valley Predator Game Drives",
      "Kanangorok Hot Springs",
      "Karamojong Cultural Homestead Visits",
      "Mount Morungole Ik Community Hike"
    ],
    "recommendedDays": "3 to 5 Days"
  },
  {
    "slug": "lake-mburo",
    "name": "Lake Mburo National Park",
    "country": "Uganda",
    "tagline": "Zebra Plains, Walking Safaris & Whispering Grasslands",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/5/5d/A_group_of_Zebra_standing_in_a_lush_Ugandan_savanna_in_Lake_Mburo_National_Park_25.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "overview": "Conveniently located midway between Kampala and the gorilla parks of southwestern Uganda, Lake Mburo is a compact park sculpted by rolling acacia hills, open valleys, and a cluster of five lakes. Because there are no lions or elephants, it is the premier destination in Uganda for walking safaris, mountain biking, and horseback riding.",
    "bestTimeToVisit": "Year-Round (Dry months June–August and December–February)",
    "wildlifeHighlights": [
      "Burchell's Zebras",
      "Impalas (Only park in Uganda)",
      "Elands",
      "Rothschild Giraffes",
      "Leopards",
      "Hippos"
    ],
    "keyAttractions": [
      "Guided Bush Walking Safari",
      "Lake Mburo Boat Cruise",
      "Horseback Wildlife Riding",
      "Night Game Drives for Leopards"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "mgahinga-gorilla",
    "name": "Mgahinga Gorilla National Park",
    "country": "Uganda",
    "tagline": "Where Gold Meets Silver Beneath the Virunga Volcanoes",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Mgahinga_Gorilla_National_Park.jpg/1280px-Mgahinga_Gorilla_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Uganda's smallest national park protects the Ugandan slopes of three dramatic extinct Virunga volcanoes: Mount Muhavura, Mount Gahinga, and Mount Sabyinyo. It is the only park in Uganda where endangered mountain gorillas coexist with vibrant endangered golden monkeys in the high-altitude bamboo zones.",
    "bestTimeToVisit": "June to August & December to February (Best conditions for volcano climbing and trekking)",
    "wildlifeHighlights": [
      "Mountain Gorillas (Nyakagezi Family)",
      "Endangered Golden Monkeys",
      "Side-striped Jackals",
      "Giant Forest Hogs"
    ],
    "keyAttractions": [
      "Golden Monkey Tracking",
      "Mount Sabyinyo 3-Country Peak Hike",
      "Batwa Heritage Trail & Garama Cave",
      "Gorilla Trekking"
    ],
    "recommendedDays": "2 to 3 Days"
  },
  {
    "slug": "rwenzori-mountains",
    "name": "Rwenzori Mountains National Park",
    "country": "Uganda",
    "tagline": "The Fabled Mountains of the Moon & Equatorial Glaciers",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Rwenzori_night_Kitasamba.jpg/1280px-Rwenzori_night_Kitasamba.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "A UNESCO World Heritage site, the Rwenzori Mountains contain Africa's third-highest peak, Mount Stanley (Margherita Peak at 5,109m). Unlike Kilimanjaro, the Rwenzoris are not volcanic but rather a giant tectonic block. The mist-veiled range features otherworldly giant groundsels, alpine bogs, and permanent glaciers on the equator.",
    "bestTimeToVisit": "June to August & December to February (Drier months essential for high alpine trekking)",
    "wildlifeHighlights": [
      "Rwenzori Three-horned Chameleons",
      "Rwenzori Turacos",
      "Colobus Monkeys",
      "Giant Lobelias"
    ],
    "keyAttractions": [
      "Margherita Peak Summit Trek (5,109m)",
      "Central Circuit & Kilembe Trail",
      "Giant Heather Forests",
      "Alpine Glacial Lakes"
    ],
    "recommendedDays": "5 to 9 Days"
  },
  {
    "slug": "jinja-nile",
    "name": "Jinja & The Source of the River Nile",
    "country": "Uganda",
    "tagline": "The Adventure Capital of East Africa & Birthplace of the Nile",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/River_Nile%2C_Jinja%2C_Uganda_8.jpg/1280px-River_Nile%2C_Jinja%2C_Uganda_8.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Jinja is situated where the world's longest river, the Nile, flows out of Lake Victoria on its epic 6,650-kilometer journey north to the Mediterranean Sea. Known as the adventure capital of East Africa, Jinja attracts thrill-seekers for world-class Grade 5 white-water rafting, quad biking, and sunset riverboat cruises.",
    "bestTimeToVisit": "Year-Round (Warm tropical weather year-round)",
    "wildlifeHighlights": [
      "Nile Monitor Lizards",
      "Kingfishers",
      "Fish Eagles",
      "Otters",
      "Cormorants"
    ],
    "keyAttractions": [
      "Historic Source of the Nile Landmark",
      "Grade 5 White-Water Rafting on the Nile",
      "Kayaking & Stand-Up Paddleboarding",
      "Nile Sunset Dhow Cruises"
    ],
    "recommendedDays": "1 to 2 Days"
  },
  {
    "slug": "ziwa-rhino-sanctuary",
    "name": "Ziwa Rhino Sanctuary",
    "country": "Uganda",
    "tagline": "Uganda's Only Wild Rhino Sanctuary & On-Foot Tracking",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ziwa_rhino_sanctuary.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "overview": "Located in Nakasongola district en route to Murchison Falls, Ziwa Rhino Sanctuary covers 70 square kilometers of acacia and bush savannah. It is the only place in Uganda where wild Southern White Rhinos can be seen. Accompanied by armed expert rangers, visitors track these massive prehistoric giants on foot.",
    "bestTimeToVisit": "Year-Round (Best tracking conditions during morning and late afternoon)",
    "wildlifeHighlights": [
      "Southern White Rhinos",
      "Shoebill Storks",
      "Bushbucks",
      "Oribis",
      "Vervet Monkeys",
      "Over 300 Bird Species"
    ],
    "keyAttractions": [
      "On-Foot Rhino Trekking with Rangers",
      "Lugogo Swamp Canoe Ride for Shoebill Storks",
      "Night Nature Walks"
    ],
    "recommendedDays": "1 Day (Or overnight en-route)"
  },
  {
    "slug": "lake-bunyonyi",
    "name": "Lake Bunyonyi & The 29 Islands",
    "country": "Uganda",
    "tagline": "Place of Many Little Birds & Bilharzia-Free Emerald Lake",
    "heroImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Malachite_kingfisher_%28Corythornis_cristatus%29_-_Lake_Bunyonyi_16.jpg/1280px-Malachite_kingfisher_%28Corythornis_cristatus%29_-_Lake_Bunyonyi_16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "overview": "Believed to be the second deepest lake in Africa (up to 900m deep), Lake Bunyonyi is a serene high-altitude body of water dotted with 29 emerald green islands and ringed by terraced hillside farms. It is completely free of bilharzia, hippos, and crocodiles, making it one of the few safe swimming and canoeing lakes in Africa.",
    "bestTimeToVisit": "Year-Round (Perfect relaxation retreat after Bwindi gorilla trekking)",
    "wildlifeHighlights": [
      "Over 200 Bird Species (Kingfishers, Herons, Sunbirds)",
      "Otters"
    ],
    "keyAttractions": [
      "Dugout Canoe Island Hopping",
      "Punishment Island (Akampene) Historic Tour",
      "Zip-Lining Across the Lake",
      "Terraced Hillside Hikes"
    ],
    "recommendedDays": "2 to 3 Days"
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
