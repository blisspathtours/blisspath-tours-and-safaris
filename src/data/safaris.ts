export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  meals: string;
  accommodation: string;
  activities: string[];
}

export interface SafariPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "migration" | "big-five" | "luxury" | "bush-beach" | "day-tours" | "trekking";
  country: "Kenya" | "Tanzania" | "Uganda" | "Cross-Border";
  duration: string;
  durationDays: number;
  destinations: string[];
  mainImage: string;
  gallery: string[];
  price: number;
  priceNote: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  difficulty: string;
}

export const SAFARI_PACKAGES: SafariPackage[] = [
  // 1. KENYA: Masai Mara Great Migration
  {
    id: "masai-mara-migration",
    slug: "masai-mara-migration",
    title: "Masai Mara Great Migration & Big Five Safari",
    subtitle: "The World's Greatest Wildlife Spectacle on the African Plains",
    category: "migration",
    country: "Kenya",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    destinations: ["Nairobi", "Great Rift Valley", "Masai Mara National Reserve", "Mara River"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    ],
    price: 890,
    priceNote: "per person based on double occupancy",
    rating: 4.95,
    reviewsCount: 248,
    badge: "Most Popular",
    overview: "The Masai Mara is universally acclaimed as the crown jewel of African wildlife reserves. This 4-day private expedition puts you at the front row of the annual Great Wildebeest Migration, lion pride territories, cheetah hunts across the golden plains, and dramatic river crossings. Travel in a customized 4x4 Land Cruiser with an eagle-eyed Gold-rated native Kenyan guide.",
    highlights: [
      "Witness massive wildebeest & zebra herds crossing the predator-filled Mara River",
      "Guaranteed sightings of the Big Five: Lion, Leopard, Elephant, Rhino, and Buffalo",
      "Luxury canvas tented camp with private ensuite bathroom and savannah sunset deck",
      "Unlimited game drives with customized pop-up photography roof and charging ports",
      "Optional early morning sunrise Hot Air Balloon safari with champagne bush breakfast"
    ],
    bestTime: "July to October (Migration Crossings) | December to March (Lush plains & Big Cats)",
    difficulty: "Easy (Suitable for all ages, families & couples)",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Masai Mara via the Great Rift Valley",
        location: "Masai Mara National Reserve",
        description: "Your personal Bliss Path safari driver-guide meets you at your Nairobi hotel or Jomo Kenyatta International Airport at 07:30 AM. Depart Nairobi heading west through the scenic Great Rift Valley with a panoramic photo stop at the escarpment viewpoint. Arrive at your luxury tented camp in time for a warm welcome lunch. Set out on your first afternoon game drive as the sun softens into gold, spotting grazing giraffes, zebras, and resting lion prides.",
        meals: "Lunch, Dinner",
        accommodation: "Mara Sopa Lodge / Zebra Plains Mara Luxury Camp",
        activities: ["Scenic Rift Valley Escarpment View", "Check-in & Welcome Lunch", "Late Afternoon Golden Hour Game Drive", "Campfire Sundowners"]
      },
      {
        day: 2,
        title: "Full Day in the Mara Plains & Mara River Crossings",
        location: "Central & Northern Masai Mara",
        description: "Awake to birdsong and freshly brewed Kenyan coffee before heading out for a full-day game drive with a gourmet picnic lunch packed by the lodge. Today you track the Mara River crossing points where thousands of wildebeest brave the Nile crocodiles. Spot cheetahs scanning the plains from termite mounds, tree-climbing leopards, and majestic elephant families.",
        meals: "Breakfast, Picnic Lunch in the Bush, Dinner",
        accommodation: "Mara Sopa Lodge / Zebra Plains Mara Luxury Camp",
        activities: ["Full Day Game Drive", "Mara River Migration Crossing Tracking", "Picnic Lunch Under Acacia Shade", "Evening Predator Tracking"]
      },
      {
        day: 3,
        title: "Sunrise Balloon Safari (Optional) & Maasai Cultural Village",
        location: "Masai Mara National Reserve",
        description: "Optional pre-dawn departure for a Hot Air Balloon flight over the awakening Mara plains, drifting silently above grazing herds as sunrise paints the sky in amber. Touch down for a champagne breakfast in the wild. In the afternoon, visit an authentic Maasai community boma to experience traditional dances, fire-making rituals, and beadwork.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mara Sopa Lodge / Zebra Plains Mara Luxury Camp",
        activities: ["Early Morning Game Drive or Hot Air Balloon", "Bush Breakfast", "Afternoon Game Drive", "Maasai Cultural Village Visit"]
      },
      {
        day: 4,
        title: "Dawn Patrol Safari & Journey Back to Nairobi",
        location: "Masai Mara to Nairobi",
        description: "Enjoy a final sunrise game drive to catch active nocturnal predators on the hunt before returning to camp for breakfast. Check out and embark on your scenic drive back to Nairobi, arriving in the late afternoon with direct drop-off at your hotel or the international airport.",
        meals: "Breakfast, Lunch en route",
        accommodation: "Drop-off at Nairobi Hotel / Airport",
        activities: ["Early Morning Dawn Patrol Game Drive", "Scenic return drive", "Airport Transfer"]
      }
    ],
    inclusions: [
      "Private custom 4x4 Safari Land Cruiser with pop-up roof & window seat guarantee",
      "Services of a professional English-speaking certified Kenyan naturalist safari guide",
      "3 Nights luxury tented camp accommodation with ensuite bathroom & hot showers",
      "Full board meals as specified in the itinerary (Breakfast, Lunch, Dinner)",
      "All Masai Mara National Reserve park entrance & conservation fees",
      "Unlimited game drives with no mileage cap",
      "Bottled mineral water and cool box beverages throughout the safari",
      "All airport transfers and hotel pickups in Nairobi",
      "Emergency Flying Doctors medical evacuation insurance cover"
    ],
    exclusions: [
      "International roundtrip flight tickets and Kenya entry tourist visa",
      "Hot Air Balloon Safari over Masai Mara ($450 per person optional)",
      "Gratuities / tips for your safari guide and lodge staff",
      "Alcoholic beverages and premium spirits at camps",
      "Travel personal medical and cancellation insurance"
    ]
  },

  // 2. KENYA: Amboseli Kilimanjaro Giants
  {
    id: "amboseli-kilimanjaro",
    slug: "amboseli-kilimanjaro",
    title: "Amboseli Giants & Kilimanjaro Sunset Safari",
    subtitle: "Africa's Big Tuskers in the Shadow of the World's Tallest Free-Standing Mountain",
    category: "big-five",
    country: "Kenya",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    destinations: ["Nairobi", "Amboseli National Park", "Observation Hill", "Kilimanjaro Viewpoints"],
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Red_elephant_in_dirt.jpg/1280px-Red_elephant_in_dirt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    ],
    price: 650,
    priceNote: "per person based on double occupancy",
    rating: 4.92,
    reviewsCount: 182,
    badge: "Photographer's Pick",
    overview: "Amboseli National Park is world-renowned for its colossal herds of free-roaming African elephants, known as 'Big Tuskers', and the iconic snow-covered summit of Mount Kilimanjaro rising above the acacia groves. This 3-day adventure is a paradise for wildlife photographers and nature enthusiasts.",
    highlights: [
      "Spectacular uninhibited views of snow-capped Mount Kilimanjaro",
      "Encounter legendary big tusker elephant families up close",
      "Climb Observation Hill for panoramic views of swamps and hippos",
      "Exceptional birding with over 400 recorded species"
    ],
    bestTime: "June to October & January to February (Clear mountain views & dry game tracking)",
    difficulty: "Easy (Gentle roads & relaxing luxury lodge)",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli National Park",
        location: "Amboseli National Park",
        description: "Pick-up from your Nairobi hotel at 07:00 AM. Drive south across the Athi plains towards the Tanzania border, arriving in Amboseli in time for lunch. Late afternoon game drive watching herds of elephants bathe in the Enkongo Narok marshes with Mount Kilimanjaro gleaming in the evening light.",
        meals: "Lunch, Dinner",
        accommodation: "Amboseli Serena Safari Lodge / Ol Tukai Lodge",
        activities: ["Scenic drive across Athi Plains", "Lodge check-in", "Afternoon Elephant Tracking", "Kilimanjaro Sunset Viewing"]
      },
      {
        day: 2,
        title: "Full Day Wildlife Exploration of Amboseli",
        location: "Amboseli National Park",
        description: "Early morning start to capture Mount Kilimanjaro at its clearest before clouds gather. Drive to Observation Hill to gaze across the wetlands teaming with hippos, pelicans, and buffaloes. Spend the rest of the day discovering cheetahs, lions, spotted hyenas, and giraffes.",
        meals: "Breakfast, Picnic Lunch, Dinner",
        accommodation: "Amboseli Serena Safari Lodge / Ol Tukai Lodge",
        activities: ["Early Dawn Photography Drive", "Observation Hill Nature Walk", "Marshland Hippo & Bird Watching", "Sunset Sundowner"]
      },
      {
        day: 3,
        title: "Sunrise Game Drive & Return to Nairobi",
        location: "Amboseli to Nairobi",
        description: "Take in one last crisp sunrise game drive to spot any elusive predators active in the morning coolness. Enjoy a leisurely lodge breakfast before checking out and journeying back to Nairobi.",
        meals: "Breakfast, Lunch en route",
        accommodation: "Drop-off at Nairobi Hotel / Airport",
        activities: ["Morning Game Drive", "Return Drive to Nairobi"]
      }
    ],
    inclusions: [
      "Custom 4x4 Safari Land Cruiser with pop-up roof",
      "Certified Gold/Silver English-speaking safari guide",
      "2 Nights full-board lodge accommodation",
      "All Amboseli National Park conservation fees",
      "Unlimited game drives and mineral water",
      "Emergency Flying Doctors medical rescue cover"
    ],
    exclusions: [
      "International flights and visas",
      "Tips for guide and camp staff",
      "Alcoholic beverages and personal shopping"
    ]
  },

  // 3. KENYA: Classic 7-Day Wildlife Circuit
  {
    id: "classic-kenya-circuit",
    slug: "classic-kenya-circuit",
    title: "Classic Kenya 7-Day Premier Wildlife Circuit",
    subtitle: "Masai Mara, Lake Nakuru Rhinos, Lake Naivasha & Amboseli Kilimanjaro",
    category: "big-five",
    country: "Kenya",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    destinations: ["Nairobi", "Masai Mara", "Lake Nakuru", "Lake Naivasha", "Amboseli National Park"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Birds_of_Lake_Nakuru_National_Park._Flamingos_2.jpg/1280px-Birds_of_Lake_Nakuru_National_Park._Flamingos_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    ],
    price: 1650,
    priceNote: "per person based on double occupancy",
    rating: 4.97,
    reviewsCount: 198,
    badge: "Bestseller Circuit",
    overview: "The quintessential complete Kenya safari experience. Discover four world-class national reserves in one seamless journey: the predator kingdom of the Masai Mara, the protected rhinos and flamingos of Lake Nakuru, boat safaris among Lake Naivasha hippos, and the colossal elephant herds of Amboseli under Mount Kilimanjaro.",
    highlights: [
      "Complete Big Five viewing across four distinctly diverse ecosystems",
      "Black and White rhino tracking at Lake Nakuru National Park",
      "Scenic boat safari and walking among wild giraffes at Crescent Island",
      "Two full days in the world-famous Masai Mara plains",
      "Elephant herds framed by Mount Kilimanjaro in Amboseli"
    ],
    bestTime: "Year-Round (Best July to October & December to March)",
    difficulty: "Easy / Moderate",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Masai Mara National Reserve",
        location: "Masai Mara",
        description: "Morning departure from Nairobi via Great Rift Valley viewpoint. Arrive at Masai Mara for lunch followed by an afternoon game drive tracking lions and elephants.",
        meals: "Lunch, Dinner",
        accommodation: "Mara Sopa Lodge",
        activities: ["Rift Valley View", "Afternoon Game Drive"]
      },
      {
        day: 2,
        title: "Full Day Big Cats & Migration Tracking in Mara",
        location: "Masai Mara",
        description: "Full day tracking the Big Five and Mara River crossings with a scenic picnic lunch in the wild.",
        meals: "Breakfast, Bush Picnic Lunch, Dinner",
        accommodation: "Mara Sopa Lodge",
        activities: ["Full Day Game Drive", "Picnic in Savannah"]
      },
      {
        day: 3,
        title: "Masai Mara to Lake Nakuru National Park",
        location: "Lake Nakuru",
        description: "Drive north to Lake Nakuru National Park. Afternoon game drive along the alkaline lake observing thousands of flamingos, black rhinos, and Rothschild giraffes.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Sarova Lion Hill Game Lodge",
        activities: ["Flamingo Shoreline Drive", "Rhino Sanctuary Tracking"]
      },
      {
        day: 4,
        title: "Lake Nakuru to Lake Naivasha Crescent Island",
        location: "Lake Naivasha",
        description: "Short drive to freshwater Lake Naivasha. Afternoon motorboat safari among pods of hippos and walking safari on foot with harmless grazing wildlife on Crescent Island.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lake Naivasha Sopa Resort",
        activities: ["Naivasha Boat Safari", "Crescent Island Walking Safari"]
      },
      {
        day: 5,
        title: "Lake Naivasha to Amboseli National Park",
        location: "Amboseli National Park",
        description: "Depart the Great Rift Valley heading south to Amboseli. Arrive for lunch with views of Mount Kilimanjaro and enjoy an evening elephant tracking game drive.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ol Tukai Lodge Amboseli",
        activities: ["Scenic Cross-Country Drive", "Kilimanjaro Sunset Drive"]
      },
      {
        day: 6,
        title: "Full Day Exploring Amboseli's Wetlands & Giants",
        location: "Amboseli National Park",
        description: "Full day game drive across Amboseli wetlands, Observation Hill hike, and tracking giant tusker elephants.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ol Tukai Lodge Amboseli",
        activities: ["Observation Hill Walk", "Elephant Marsh Tracking"]
      },
      {
        day: 7,
        title: "Morning Game Drive & Transfer to Nairobi",
        location: "Amboseli to Nairobi",
        description: "Early morning safari before a hearty breakfast. Drive back to Nairobi arriving mid-afternoon for your hotel drop-off or airport departure.",
        meals: "Breakfast, Lunch",
        accommodation: "Drop-off in Nairobi",
        activities: ["Sunrise Game Drive", "Return Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Land Cruiser with pop-up roof for the entire 7 days",
      "6 Nights luxury lodge accommodation with private bathrooms",
      "All park entry fees for Mara, Nakuru, Naivasha & Amboseli",
      "Lake Naivasha boat safari & Crescent Island walking permit",
      "Full board meals, bottled water, Flying Doctors medical cover"
    ],
    exclusions: [
      "International flights and Kenya visa",
      "Optional Masai Mara hot air balloon safari ($450 pp)",
      "Gratuities for guide and lodge staff"
    ]
  },

  // 4. KENYA: Tsavo & Diani Beach Bush to Beach
  {
    id: "tsavo-diani-beach",
    slug: "tsavo-diani-beach",
    title: "Tsavo Red Elephants & Diani Beach Luxury Escape",
    subtitle: "The Quintessential African Bush to Tropical Indian Ocean Retreat",
    category: "bush-beach",
    country: "Kenya",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    destinations: ["Tsavo East", "Tsavo West", "Mzima Springs", "Diani Beach"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Diani_Beach_towards_the_south_next_to_the_Indian_Ocean_Beach_Club_hotel_near_Mombasa%2C_Coast_Province%2C_Kenya.jpg/1280px-Diani_Beach_towards_the_south_next_to_the_Indian_Ocean_Beach_Club_hotel_near_Mombasa%2C_Coast_Province%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Red_elephant_in_dirt.jpg/1280px-Red_elephant_in_dirt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Tsavo_West_National_Park%2C_Kenya.jpg/1280px-Tsavo_West_National_Park%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 1250,
    priceNote: "per person based on double occupancy",
    rating: 4.89,
    reviewsCount: 140,
    badge: "Bush to Beach",
    overview: "Experience the ultimate contrast of Kenya's raw beauty: the dust-red elephants and lava fields of Tsavo followed by three blissful days of turquoise ocean, coral reefs, and white powder sands at award-winning Diani Beach.",
    highlights: [
      "Spot the world-famous red-dust elephants of Tsavo East",
      "Underwater glass viewing chamber for hippos at Mzima Springs",
      "Seamless transfer from thrilling wild safari to private beachfront resort",
      "Snorkeling, dhow sailing, and sunset cocktail dining on Diani Beach"
    ],
    bestTime: "Year-Round (Best beach conditions August to April)",
    difficulty: "Easy / Relaxing",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Tsavo West National Park",
        location: "Tsavo West",
        description: "Depart Nairobi heading southeast along the Mombasa highway into Tsavo West. Visit the Shetani Lava flows, view leopards along the rocky bluffs, and check into your luxury lodge overlooking a floodlit waterhole.",
        meals: "Lunch, Dinner",
        accommodation: "Kilaguni Serena Safari Lodge",
        activities: ["Shetani Lava Flow", "Floodlit Waterhole Game Viewing"]
      },
      {
        day: 2,
        title: "Mzima Springs to Tsavo East Red Elephants",
        location: "Tsavo East",
        description: "Morning guided walk at Mzima Springs with underwater hippo observatory. Drive into the vast plains of Tsavo East to encounter dust-red elephants and the Mudanda Rock water catchment.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ashnil Aruba Lodge",
        activities: ["Mzima Springs Nature Walk", "Red Elephant Tracking"]
      },
      {
        day: 3,
        title: "Tsavo East to Diani Beach Paradise",
        location: "Diani Beach",
        description: "Morning game drive, then depart the wilderness towards the Indian Ocean coast. Arrive at Diani Beach, check into your 5-star beachfront resort, and sip fresh coconut water by the sea.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "The Sands at Nomad / Swahili Beach Resort",
        activities: ["Morning game drive", "Oceanfront Check-in", "Sunset Beach Walk"]
      },
      {
        day: 4,
        title: "Diani Beach Leisure & Coral Reef Snorkeling",
        location: "Diani Beach & Kisite Marine Park",
        description: "Full day at leisure. Relax by the pool, indulge in ocean spa treatments, or embark on a traditional wooden dhow boat trip to Kisite Mpunguti Marine Park to swim with wild dolphins.",
        meals: "Breakfast, Dinner",
        accommodation: "The Sands at Nomad / Swahili Beach Resort",
        activities: ["Beach Relaxation", "Optional Dolphin Dhow Cruise", "Spa Treatments"]
      },
      {
        day: 5,
        title: "Tropical Coastal Bliss & Seafood Dining",
        location: "Diani Beach",
        description: "Enjoy kite surfing, camel rides on the sand, or explore the sacred Kaya Kinondo indigenous coastal forest. Evening farewell beachfront seafood dinner under the stars.",
        meals: "Breakfast, Dinner",
        accommodation: "The Sands at Nomad / Swahili Beach Resort",
        activities: ["Water sports", "Beachfront Fine Dining"]
      },
      {
        day: 6,
        title: "Diani to Mombasa / Nairobi Airport",
        location: "Coast to Airport",
        description: "Breakfast overlooking the ocean, checkout, and transfer to Ukunda Airstrip or Mombasa Airport for your flight to Nairobi or international connection.",
        meals: "Breakfast",
        accommodation: "Transfer to Airport",
        activities: ["Airport Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Land Cruiser for safari segments",
      "Park entrance fees to Tsavo West and Tsavo East",
      "2 nights luxury safari lodge + 3 nights 5-star beach resort",
      "Domestic transfer to Diani Beach and airport transfers",
      "Breakfast and dinners at beach resort, full board on safari"
    ],
    exclusions: [
      "International flights and visas",
      "Optional water sports and marine park boat excursion ($80 pp)",
      "Gratuities and personal bar drinks"
    ]
  },

  // 5. KENYA: Samburu & Ol Pejeta
  {
    id: "samburu-ol-pejeta",
    slug: "samburu-ol-pejeta",
    title: "Samburu Special 5 & Ol Pejeta Chimpanzee Haven",
    subtitle: "Untamed Northern Kenya & The World's Foremost Rhino Sanctuary",
    category: "big-five",
    country: "Kenya",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    destinations: ["Nairobi", "Mount Kenya", "Ol Pejeta Conservancy", "Samburu National Reserve", "Ewaso Ng'iro River"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Female_gerenuk_and_young_in_Samburu_National_Reserve%2C_Kenya.jpg/1280px-Female_gerenuk_and_young_in_Samburu_National_Reserve%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Ceratotherium_simum_cottoni_-Ol_Pejeta_Conservancy%2C_Kenya.jpg/1280px-Ceratotherium_simum_cottoni_-Ol_Pejeta_Conservancy%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Female_gerenuk_and_young_in_Samburu_National_Reserve%2C_Kenya.jpg/1280px-Female_gerenuk_and_young_in_Samburu_National_Reserve%2C_Kenya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 980,
    priceNote: "per person based on double occupancy",
    rating: 4.96,
    reviewsCount: 115,
    badge: "Conservation Focus",
    overview: "Discover Kenya's rugged northern frontier. Track the rare 'Samburu Special 5' species found nowhere else south of the equator, and visit Ol Pejeta Conservancy to see the world's last two Northern White Rhinos and rescued chimpanzees.",
    highlights: [
      "Track the Samburu Special 5: Gerenuk, Grevy's Zebra, Somali Ostrich, Beisa Oryx, Reticulated Giraffe",
      "Visit the high-security sanctuary of the world's last 2 Northern White Rhinos",
      "Sweetwaters Chimpanzee Sanctuary experience founded with Dr. Jane Goodall",
      "Game drives along the palm-fringed banks of the red Ewaso Ng'iro River"
    ],
    bestTime: "Year-Round (Spectacular wildlife sightings in dry months)",
    difficulty: "Easy / Moderate",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Ol Pejeta Conservancy",
        location: "Ol Pejeta / Mount Kenya",
        description: "Drive north through lush coffee and pineapple plantations around Mount Kenya. Arrive at Ol Pejeta for lunch. Afternoon game drive visiting the Rhino Sanctuary and Sweetwaters Chimpanzee Sanctuary.",
        meals: "Lunch, Dinner",
        accommodation: "Sweetwaters Serena Camp",
        activities: ["Mount Kenya foothills drive", "Rhino & Chimpanzee Tracking"]
      },
      {
        day: 2,
        title: "Ol Pejeta to Samburu National Reserve",
        location: "Samburu National Reserve",
        description: "Journey further north into the dramatic semi-arid landscapes of Samburu. Arrive at your luxury lodge situated along the Ewaso Ng'iro River. Afternoon game drive tracking leopards and elephants.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Samburu Intrepids Luxury Tented Camp",
        activities: ["Scenic Northern Drive", "Riverine Game Drive"]
      },
      {
        day: 3,
        title: "Full Day Tracking the Samburu Special 5",
        location: "Samburu National Reserve",
        description: "Full day dedicated to spotting the unique northern species: long-necked gerenuks browsing on hind legs, Grevy's zebras, and blue-legged Somali ostriches. Enjoy sundowners by the river.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Samburu Intrepids Luxury Tented Camp",
        activities: ["Special 5 Tracking", "Samburu Cultural Interaction", "Riverfront Sundowner"]
      },
      {
        day: 4,
        title: "Morning Safari & Journey to Nairobi",
        location: "Samburu to Nairobi",
        description: "Final early morning game drive before breakfast. Drive back to Nairobi with panoramic views of Mount Kenya, arriving late afternoon.",
        meals: "Breakfast, Lunch en route",
        accommodation: "Drop-off at Nairobi Hotel / Airport",
        activities: ["Morning game drive", "Return transfer"]
      }
    ],
    inclusions: [
      "Private 4x4 Safari Land Cruiser with pop-up roof",
      "Professional guide, all park & conservation fees",
      "3 nights luxury accommodation, full board meals, mineral water",
      "Chimpanzee and Northern White Rhino sanctuary access fees"
    ],
    exclusions: [
      "International airfare and visas",
      "Guide gratuities and personal purchases"
    ]
  },

  // 6. KENYA: Nairobi Day Tour
  {
    id: "nairobi-day-tour",
    slug: "nairobi-day-tour",
    title: "Nairobi Wildlife Experience & Giraffe Sanctuary",
    subtitle: "The Ultimate 1-Day Capital Wildlife & Conservation Adventure",
    category: "day-tours",
    country: "Kenya",
    duration: "Full Day (8 Hours)",
    durationDays: 1,
    destinations: ["Nairobi National Park", "David Sheldrick Elephant Orphanage", "Giraffe Centre", "Karen Blixen"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Feeding_a_giraffe_at_the_Giraffe_Centre_in_Nairobi%2C_Kenya.webm/960px--Feeding_a_giraffe_at_the_Giraffe_Centre_in_Nairobi%2C_Kenya.webm.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Feeding_a_giraffe_at_the_Giraffe_Centre_in_Nairobi%2C_Kenya.webm/960px--Feeding_a_giraffe_at_the_Giraffe_Centre_in_Nairobi%2C_Kenya.webm.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    ],
    price: 180,
    priceNote: "per person (minimum 2 travelers)",
    rating: 4.97,
    reviewsCount: 320,
    badge: "Best Day Tour",
    overview: "Nairobi is the only capital city on earth bordering a wild national park with lions, rhinos, and giraffes roaming against the city skyline. This packed full-day tour covers the national park, the baby elephant rescue orphanage, and feeding endangered Rothschild giraffes by hand.",
    highlights: [
      "Morning game drive in Nairobi National Park with city skyline backdrop",
      "Adopt and watch baby rescued elephants during their 11:00 AM milk feeding mud bath",
      "Hand-feed friendly Rothschild giraffes from an elevated wooden platform",
      "Authentic Kenyan lunch and cultural craft market visit"
    ],
    bestTime: "Year-Round (Daily departures)",
    difficulty: "Very Easy",
    itinerary: [
      {
        day: 1,
        title: "Nairobi National Park, Elephant Orphanage & Giraffe Centre",
        location: "Nairobi, Kenya",
        description: "06:30 AM pickup from your Nairobi hotel. Morning game drive inside Nairobi National Park spotting lions, leopards, rhinos, and buffaloes. At 10:45 AM, proceed to the world-famous Sheldrick Elephant Orphanage for public feeding hour. Afterward, visit the Giraffe Centre to feed endangered giraffes by hand. Enjoy lunch at the Tamambo Karen Blixen restaurant before visiting the Kazuri beads women's pottery center. Drop-off by 17:00.",
        meals: "Lunch included",
        accommodation: "Drop-off at your hotel or airport",
        activities: ["Morning National Park Game Drive", "Sheldrick Elephant Orphanage", "Giraffe Centre Hand-Feeding", "Kenyan Lunch & Craft Shopping"]
      }
    ],
    inclusions: [
      "Private transport in safari tour vehicle with professional guide",
      "Nairobi National Park entry permits",
      "Sheldrick Elephant Orphanage entry ticket",
      "Giraffe Centre entry ticket",
      "Lunch at Karen Blixen restaurant",
      "Bottled mineral water throughout the day"
    ],
    exclusions: [
      "Personal items, souvenirs, and guide gratuities"
    ]
  },

  // 7. TANZANIA: Northern Circuit (Tarangire, Ngorongoro & Serengeti)
  {
    id: "tanzania-northern-circuit",
    slug: "tanzania-northern-circuit",
    title: "Tanzania Northern Circuit: Tarangire, Ngorongoro & Serengeti",
    subtitle: "Ancient Baobabs, Caldera Wonders & Endless Serengeti Plains",
    category: "luxury",
    country: "Tanzania",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    destinations: ["Arusha", "Tarangire National Park", "Serengeti National Park", "Ngorongoro Crater"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Elephants_in_Tarangire_National_Park_%282015%29.jpg/1280px-Elephants_in_Tarangire_National_Park_%282015%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg/1280px-Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 1850,
    priceNote: "per person based on double occupancy",
    rating: 4.98,
    reviewsCount: 176,
    badge: "Tanzania Classic",
    overview: "Tanzania's Northern Circuit is celebrated as the premier safari route in all of Africa. From the giant baobab trees and thousands of elephants in Tarangire, across the sweeping endless plains of the Serengeti, to descending 600 meters onto the lush wildlife floor of Ngorongoro Crater.",
    highlights: [
      "Encounter massive elephant herds browsing under ancient baobabs in Tarangire",
      "Two days tracking lion prides, leopards, and cheetahs across the Serengeti",
      "6-hour descent into Ngorongoro Crater, the world's most dense wildlife caldera",
      "Stay in boutique luxury tented camps with Michelin-quality bush dining"
    ],
    bestTime: "Year-Round (Peak dry season July–October & Calving Jan–March)",
    difficulty: "Easy / Moderate",
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        location: "Tarangire National Park",
        description: "Meet your safari driver in Arusha and depart for Tarangire National Park. Known as the Elephant Kingdom, Tarangire is famous for ancient baobab trees and huge family herds of elephants digging in the dry riverbeds.",
        meals: "Lunch, Dinner",
        accommodation: "Maramboi Tented Camp / Tarangire Sopa Lodge",
        activities: ["Scenic drive to Tarangire", "Afternoon Elephant & Baobab Game Drive"]
      },
      {
        day: 2,
        title: "Tarangire to Central Serengeti National Park",
        location: "Central Serengeti (Seronera)",
        description: "Drive through the Ngorongoro highlands and descend onto the endless plains of the Serengeti. Afternoon game drive tracking lions on rocky kopjes.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge / Serengeti Serena",
        activities: ["Scenic highland drive", "Serengeti Afternoon Predator Drive"]
      },
      {
        day: 3,
        title: "Full Day in the Heart of the Serengeti",
        location: "Serengeti National Park",
        description: "Full day dedicated to exploring the Seronera River valley. Spot cheetahs scanning the golden grass, tree-climbing leopards, and enormous migrating herds.",
        meals: "Breakfast, Picnic Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge / Serengeti Serena",
        activities: ["Full Day Serengeti Safari", "Picnic lunch under acacia trees"]
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro Crater Rim",
        location: "Ngorongoro Conservation Area",
        description: "Morning game drive in Serengeti, then depart towards Ngorongoro. Stop at Olduvai Gorge, the cradle of mankind. Check into your lodge perched directly on the crater rim with sweeping views.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ngorongoro Serena Safari Lodge",
        activities: ["Morning game drive", "Olduvai Gorge Museum", "Crater Rim Sunset"]
      },
      {
        day: 5,
        title: "Ngorongoro Crater Floor Safari",
        location: "Ngorongoro Crater Floor",
        description: "Early morning descent 600 meters into the volcanic caldera for an exhilarating 6-hour safari. Spot rare black rhinos, giant tuskers, and flamingo-filled Lake Magadi.",
        meals: "Breakfast, Picnic Lunch, Dinner",
        accommodation: "Bougainvillea Safari Lodge / Ngorongoro Farm House",
        activities: ["Crater floor descent", "Black Rhino Search", "Hippo Pool Picnic"]
      },
      {
        day: 6,
        title: "Karatu to Arusha / Kilimanjaro Airport",
        location: "Arusha to Airport",
        description: "Leisurely breakfast, visit a local coffee plantation or craft market, and transfer to Arusha or Kilimanjaro Airport (JRO) for your flight connection.",
        meals: "Breakfast, Lunch",
        accommodation: "Drop-off at Airport",
        activities: ["Coffee Farm Tour", "Airport Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Safari Land Cruiser with pop-up roof and window seat guarantee",
      "Services of professional certified Tanzanian naturalist driver-guide",
      "5 Nights luxury tented camp and lodge accommodation",
      "All park fees for Tarangire, Serengeti, and Ngorongoro Crater descent permit",
      "Full board meals, bottled water, Flying Doctors medical evacuation cover"
    ],
    exclusions: [
      "International flights and Tanzania tourist visa",
      "Serengeti Hot Air Balloon safari ($550 pp optional)",
      "Gratuities for guide and camp staff"
    ]
  },

  // 8. TANZANIA: Kilimanjaro Machame Route
  {
    id: "kilimanjaro-machame-climb",
    slug: "kilimanjaro-machame-climb",
    title: "Mount Kilimanjaro 7-Day Machame Route Trek",
    subtitle: "Climb the Roof of Africa to 5,895m Uhuru Peak on the 'Whiskey Route'",
    category: "trekking",
    country: "Tanzania",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    destinations: ["Moshi", "Machame Camp", "Shira Plateau", "Barranco Wall", "Uhuru Peak 5,895m"],
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mount_Kilimanjaro_Closeup_%284708_-_ISS006-E-45499_lrg%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Kilimanjaro_and_Arusha_National_Parks_map-he.svg/1280px-Kilimanjaro_and_Arusha_National_Parks_map-he.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Mount_Kilimanjaro_Closeup_%284708_-_ISS006-E-45499_lrg%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    ],
    price: 1950,
    priceNote: "per person (All park rescue fees, mountain guides & porters included)",
    rating: 4.96,
    reviewsCount: 142,
    badge: "Ultimate Trek",
    overview: "The Machame Route, known as the 'Whiskey Route', is universally recognized as the most scenic and successful climbing itinerary on Mount Kilimanjaro. Its 'climb high, sleep low' profile ensures optimal altitude acclimatization, boasting an exceptional 95% summit success rate to 5,895m Uhuru Peak.",
    highlights: [
      "Reach Uhuru Peak (5,895m / 19,341ft), the highest point on the African continent",
      "Experience five distinct ecological climate zones in seven unforgettable days",
      "Scramble up the thrilling Barranco Wall with majestic views of Kibo's glaciers",
      "Led by wilderness-first-responder certified head mountain guides and team of porters"
    ],
    bestTime: "January to March & July to October (Dry, crisp climbing seasons)",
    difficulty: "Strenuous (High altitude trekking, no technical climbing skills needed)",
    itinerary: [
      {
        day: 1,
        title: "Machame Gate (1,800m) to Machame Camp (3,000m)",
        location: "Rainforest Zone",
        description: "Transfer from Moshi to Machame Gate. Register with park rangers and begin your trek through the lush afro-montane tropical rainforest to Machame Camp.",
        meals: "Lunch, Dinner",
        accommodation: "Machame Mountain Camp (Tents)",
        activities: ["Rainforest Trekking (5-7 hours, 11km)"]
      },
      {
        day: 2,
        title: "Machame Camp (3,000m) to Shira Camp (3,840m)",
        location: "Moorland Zone",
        description: "Ascend past the rainforest canopy into the giant heather and moorland zone, crossing rocky ridges to the Shira Plateau with breathtaking sunset views of Kibo peak.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shira Cave Camp",
        activities: ["Moorland Trekking (4-6 hours, 5km)"]
      },
      {
        day: 3,
        title: "Shira Camp (3,840m) via Lava Tower (4,630m) to Barranco (3,950m)",
        location: "Alpine Desert Zone",
        description: "Essential acclimatization day: climb high to volcanic Lava Tower (4,630m) for lunch, then descend to sleep low at Barranco Camp beneath the giant Senecio trees.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Barranco Camp",
        activities: ["Acclimatization trek (6-8 hours, 10km)"]
      },
      {
        day: 4,
        title: "Barranco Camp (3,950m) to Karanga Camp (4,035m)",
        location: "Barranco Wall & Valley",
        description: "Scramble up the famous Barranco Wall using hands and feet (non-technical). Traverse ridges into the alpine Karanga Valley for an extra day of acclimatization.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Karanga Camp",
        activities: ["Barranco Wall Scramble (4-5 hours, 5km)"]
      },
      {
        day: 5,
        title: "Karanga Camp (4,035m) to Barafu Base Camp (4,640m)",
        location: "Arctic Summit Ridge",
        description: "Trek through the desolate alpine desert to Barafu Camp. Settle in, eat an early dinner, and rest before the midnight summit push.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Barafu Base Camp",
        activities: ["Trek to Base Camp (3-4 hours, 4km)"]
      },
      {
        day: 6,
        title: "Summit Push: Barafu to Uhuru Peak (5,895m) down to Mweka (3,100m)",
        location: "Uhuru Peak Summit",
        description: "Begin trekking at midnight by headlamp across frozen scree. Reach Stella Point (5,756m) at sunrise and push on to Uhuru Peak (5,895m) — the Roof of Africa! Descend to Mweka Camp.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mweka Camp",
        activities: ["Midnight Summit Push (6-8 hrs up, 5-7 hrs down)"]
      },
      {
        day: 7,
        title: "Mweka Camp (3,100m) to Mweka Gate (1,640m) & Moshi",
        location: "Mweka Gate to Hotel",
        description: "Descent through the warm rainforest to Mweka Gate. Receive your official gold summit certificates and transfer to your hotel in Moshi for a well-earned celebration.",
        meals: "Breakfast, Lunch",
        accommodation: "Hotel in Moshi",
        activities: ["Final Descent (3-4 hours), Summit Certificate Presentation"]
      }
    ],
    inclusions: [
      "All Kilimanjaro National Park entrance, camping, and rescue fees",
      "Certified Wilderness First Responder mountain guides, chef, and porters",
      "High-altitude mountain dome tents, thick sleeping pads, and dining tent",
      "3 hot nutritious mountain meals daily, boiled drinking water, pulse oximeter monitoring",
      "Transfers to/from mountain gates and hotel in Moshi"
    ],
    exclusions: [
      "International flights and Tanzania visa",
      "Personal trekking gear (sleeping bag, boots, poles - rentals available)",
      "Porters and guides tipping (industry standard $250-$300 total per climber)"
    ]
  },

  // 9. TANZANIA: Bush to Beach (Serengeti to Zanzibar)
  {
    id: "serengeti-zanzibar-beach",
    slug: "serengeti-zanzibar-beach",
    title: "Tanzania Bush to Beach: Serengeti, Ngorongoro & Zanzibar",
    subtitle: "Predator Plains & The Exotic Turquoise Waters of the Spice Island",
    category: "bush-beach",
    country: "Tanzania",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    destinations: ["Serengeti", "Ngorongoro Crater", "Zanzibar Island", "Stone Town", "Nungwi Beach"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Zanzibar_2012_06_06_4166_%287592264546%29.jpg/1280px-Zanzibar_2012_06_06_4166_%287592264546%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg/1280px-Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 2450,
    priceNote: "per person based on double occupancy",
    rating: 4.97,
    reviewsCount: 165,
    badge: "Ultimate Bush & Beach",
    overview: "The dream East African holiday combining Tanzania's premier wildlife theatres with the turquoise Indian Ocean paradise of Zanzibar. Spend four thrilling days tracking the Big Five and Great Migration in Serengeti and Ngorongoro, then fly directly to Zanzibar for tropical relaxation, spice tours, and dhow sunset sailing.",
    highlights: [
      "Full day safari in Ngorongoro Crater and two nights in the Serengeti",
      "Domestic bush flight from Serengeti airstrip directly to Zanzibar Island",
      "Historic walking tour of UNESCO Stone Town and Sultan Palaces",
      "Three nights at a luxury 5-star beachfront resort on Zanzibar's northern beaches"
    ],
    bestTime: "Year-Round (Best beach & safari July to October & December to March)",
    difficulty: "Easy / Relaxing",
    itinerary: [
      {
        day: 1,
        title: "Arusha to Ngorongoro Crater",
        location: "Ngorongoro Crater",
        description: "Depart Arusha and descend into the Ngorongoro Crater floor for an afternoon of black rhino, lion, and hippo tracking.",
        meals: "Lunch, Dinner",
        accommodation: "Ngorongoro Serena Safari Lodge",
        activities: ["Crater Floor Safari"]
      },
      {
        day: 2,
        title: "Ngorongoro to Serengeti National Park",
        location: "Serengeti",
        description: "Drive across the Malanja depression onto the sweeping Serengeti plains with afternoon predator tracking.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge",
        activities: ["Scenic drive", "Serengeti Game Drive"]
      },
      {
        day: 3,
        title: "Full Day in the Heart of the Serengeti",
        location: "Serengeti",
        description: "Full day tracking wildebeest migration herds, cheetah coalitions, and tree-climbing lions.",
        meals: "Breakfast, Picnic Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge",
        activities: ["Full Day Game Drive"]
      },
      {
        day: 4,
        title: "Serengeti Bush Flight to Zanzibar Island",
        location: "Serengeti to Zanzibar",
        description: "Morning game drive to Seronera Airstrip. Board your light aircraft flight over Mount Kilimanjaro directly to Zanzibar. Transfer to your beachfront resort in Nungwi.",
        meals: "Breakfast, Dinner",
        accommodation: "Riu Palace Zanzibar / Zuri Zanzibar Resort",
        activities: ["Bush Flight over East Africa", "Oceanfront Check-in"]
      },
      {
        day: 5,
        title: "Zanzibar Beach Relaxation & Mnemba Snorkeling",
        location: "Zanzibar Coast",
        description: "Day of pure leisure. Relax on powder-white sands or embark on an optional boat trip to Mnemba Atoll to snorkel with wild dolphins and sea turtles.",
        meals: "Breakfast, Dinner",
        accommodation: "Riu Palace Zanzibar / Zuri Zanzibar Resort",
        activities: ["Beach Relaxation", "Mnemba Reef Snorkeling"]
      },
      {
        day: 6,
        title: "Spice Tour & Historic Stone Town Exploration",
        location: "Stone Town, Zanzibar",
        description: "Guided walking tour through the labyrinthine alleys of Stone Town, visiting the House of Wonders, Old Fort, and fragrant clove and vanilla spice plantations.",
        meals: "Breakfast, Dinner",
        accommodation: "Riu Palace Zanzibar / Zuri Zanzibar Resort",
        activities: ["Stone Town Walking Tour", "Organic Spice Farm Experience"]
      },
      {
        day: 7,
        title: "Tropical Bliss & Sunset Dhow Sail",
        location: "Nungwi Beach",
        description: "Enjoy water sports, kayaking, and an unforgettable evening aboard a traditional wooden dhow sailboat with sundowner drinks as the sun slips into the Indian Ocean.",
        meals: "Breakfast, Dinner",
        accommodation: "Riu Palace Zanzibar / Zuri Zanzibar Resort",
        activities: ["Dhow Sunset Sail", "Seafood Beachfront Dinner"]
      },
      {
        day: 8,
        title: "Farewell Zanzibar & Airport Transfer",
        location: "Zanzibar Airport",
        description: "Leisurely breakfast overlooking the turquoise water, check out, and transfer to Zanzibar International Airport (ZNZ) for your departure flight.",
        meals: "Breakfast",
        accommodation: "Transfer to Airport",
        activities: ["Airport Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Land Cruiser on safari with professional guide",
      "All park fees for Ngorongoro Crater and Serengeti",
      "Domestic flight ticket from Serengeti to Zanzibar Island",
      "3 nights safari luxury camps + 4 nights 5-star beachfront resort in Zanzibar",
      "Full board on safari, half board at beach resort, airport transfers"
    ],
    exclusions: [
      "International flights and Tanzania visa",
      "Zanzibar infrastructure tax ($5 per night paid directly to hotel)",
      "Gratuities and personal purchases"
    ]
  },

  // 10. CROSS-BORDER: Kenya & Tanzania Grand Odyssey
  {
    id: "serengeti-mara-grand",
    slug: "serengeti-mara-grand",
    title: "Kenya & Tanzania Grand Safari Odyssey",
    subtitle: "The Ultimate Cross-Border African Wilderness Adventure",
    category: "luxury",
    country: "Cross-Border",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    destinations: ["Nairobi", "Masai Mara", "Serengeti National Park", "Ngorongoro Crater", "Lake Nakuru"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg/1280px-Cr%C3%A1ter_volc%C3%A1nico%2C_zona_de_conservaci%C3%B3n_de_Ngorongoro%2C_Tanzania%2C_2024-05-27%2C_DD_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 2450,
    priceNote: "per person based on double occupancy",
    rating: 5.0,
    reviewsCount: 94,
    badge: "Ultimate Odyssey",
    overview: "The quintessential East African safari across two legendary nations. Experience the unbroken ecosystem connecting Kenya's Masai Mara with Tanzania's vast Serengeti, culminate with a 600m descent into the UNESCO World Heritage Ngorongoro Crater, and encounter rare rhinos at Lake Nakuru.",
    highlights: [
      "Cross-border safari connecting Masai Mara and Serengeti ecosystems",
      "Descend into Ngorongoro Crater, the world's dense wildlife caldera",
      "Track endangered black and white rhinos at Lake Nakuru National Park",
      "Stay in boutique luxury tented camps with Michelin-quality bush dining"
    ],
    bestTime: "Year-Round (Serengeti calving Jan-Mar, Mara crossings Jul-Oct)",
    difficulty: "Moderate (Exciting overland & cross-border experience)",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Lake Nakuru National Park",
        location: "Lake Nakuru",
        description: "Depart Nairobi for the Great Rift Valley lake system. Arrive at Lake Nakuru for lunch. Afternoon game drive along alkaline shores, viewing thousands of pink flamingos, endangered Rothschild giraffes, and protected rhinos.",
        meals: "Lunch, Dinner",
        accommodation: "Sarova Lion Hill Game Lodge",
        activities: ["Rift Valley Views", "Flamingo & Rhino Tracking"]
      },
      {
        day: 2,
        title: "Lake Nakuru to Masai Mara",
        location: "Masai Mara",
        description: "Journey across the Loita plains into the iconic Masai Mara. Settle into your luxury camp followed by an evening predator drive.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Zebra Plains Mara Camp",
        activities: ["Scenic drive", "Evening Game Drive"]
      },
      {
        day: 3,
        title: "Full Day Exploring the Mara Ecosystem",
        location: "Masai Mara",
        description: "Full day in the Mara tracking big cats, elephant families, and the Mara riverbanks with a scenic picnic lunch in the wild.",
        meals: "Breakfast, Picnic Lunch, Dinner",
        accommodation: "Zebra Plains Mara Camp",
        activities: ["Full day safari", "Riverbank tracking"]
      },
      {
        day: 4,
        title: "Masai Mara across the border to Serengeti",
        location: "Serengeti National Park",
        description: "Cross into Tanzania via the Isebania border. Enter the northern Serengeti, where the golden plains seem to stretch to infinity.",
        meals: "Breakfast, Picnic Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge Serengeti",
        activities: ["Border crossing assistance", "En-route Serengeti Game Drive"]
      },
      {
        day: 5,
        title: "Full Day in the Heart of the Serengeti",
        location: "Central Serengeti (Seronera)",
        description: "Search for tree-climbing lions, cheetahs hunting gazelles across open kopjes, and massive resident herbivore herds.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge Serengeti",
        activities: ["Morning & Afternoon Game Drives", "Kopjes Exploration"]
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Conservation Area",
        location: "Ngorongoro Crater Rim",
        description: "Drive towards the Ngorongoro highlands with a stop at Olduvai Gorge, the cradle of mankind. Check into your lodge perched on the crater rim.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ngorongoro Serena Safari Lodge",
        activities: ["Olduvai Gorge Museum", "Crater Rim Sunset"]
      },
      {
        day: 7,
        title: "Ngorongoro Crater Floor Safari",
        location: "Ngorongoro Crater",
        description: "Descend 600 meters into the volcanic caldera for an exhilarating 6-hour safari. Spot critically endangered black rhinos, giant tuskers, and flamingo-filled Lake Magadi.",
        meals: "Breakfast, Bush Picnic Lunch, Dinner",
        accommodation: "Ngorongoro Serena Safari Lodge",
        activities: ["Crater floor descent", "Black Rhino Search", "Hippo Pool Picnic"]
      },
      {
        day: 8,
        title: "Ngorongoro to Arusha / Kilimanjaro Airport",
        location: "Arusha to Airport",
        description: "Leisurely breakfast in the misty highlands, drive to Arusha for farewell lunch, and transfer to Kilimanjaro Airport (JRO) or back to Nairobi.",
        meals: "Breakfast, Lunch",
        accommodation: "Drop-off at Airport",
        activities: ["Farewell Lunch", "Airport Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Safari Land Cruisers in both Kenya and Tanzania",
      "Seamless cross-border assistance and transfers",
      "7 Nights 5-star luxury lodge and luxury tented camp accommodation",
      "All park fees for Mara, Nakuru, Serengeti & Ngorongoro Crater descent permit",
      "Full board meals, bottled water, Flying Doctors medical cover"
    ],
    exclusions: [
      "International flights and visas for Kenya & Tanzania",
      "Hot air balloon flights ($550 per person optional in Serengeti/Mara)",
      "Staff gratuities and personal expenses"
    ]
  },

  // 11. UGANDA: Bwindi Gorillas & Kibale Chimpanzees
  {
    id: "bwindi-gorilla-safari",
    slug: "bwindi-gorilla-safari",
    title: "Uganda Mountain Gorilla & Chimpanzee Expedition",
    subtitle: "Trek the Gentle Giants of Bwindi & Kibale Rainforest Chimpanzees",
    category: "luxury",
    country: "Uganda",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    destinations: ["Entebbe", "Kibale National Park", "Bwindi Impenetrable National Park", "Lake Bunyonyi"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Gorila_de_monta%C3%B1a_%28Gorilla_beringei_beringei%29%2C_parque_nacional_de_la_Selva_Impenetrable_de_Bwindi%2C_Uganda%2C_2024-02-02%2C_DD_80.jpg/1280px-Gorila_de_monta%C3%B1a_%28Gorilla_beringei_beringei%29%2C_parque_nacional_de_la_Selva_Impenetrable_de_Bwindi%2C_Uganda%2C_2024-02-02%2C_DD_80.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/013_Alpha_male_chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/1280px-013_Alpha_male_chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Malachite_kingfisher_%28Corythornis_cristatus%29_-_Lake_Bunyonyi_16.jpg/1280px-Malachite_kingfisher_%28Corythornis_cristatus%29_-_Lake_Bunyonyi_16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 1980,
    priceNote: "per person (Includes official UWA $800 Gorilla Permit)",
    rating: 4.99,
    reviewsCount: 164,
    badge: "Bucket List",
    overview: "Step into primeval mist-veiled rainforests for the most intimate wildlife encounter on planet Earth. This 5-day journey takes you deep into Bwindi Impenetrable Forest to sit with an endangered mountain gorilla family in their natural habitat, paired with tracking wild chimpanzees in the canopy of Kibale Forest.",
    highlights: [
      "Guaranteed official Uganda Wildlife Authority (UWA) Mountain Gorilla Trekking Permit",
      "Spend one unforgettable hour face-to-face with a wild Silverback gorilla family",
      "Chimpanzee habituation walk in the primate capital of Kibale Forest",
      "Relaxing dugout canoeing on emerald Lake Bunyonyi after mountain treks"
    ],
    bestTime: "June to August & December to February (Driest forest terrain for trekking)",
    difficulty: "Moderate to Challenging (Hiking through primeval mountain forest)",
    itinerary: [
      {
        day: 1,
        title: "Entebbe / Kampala to Kibale Forest National Park",
        location: "Kibale National Park",
        description: "Depart Entebbe early morning, driving through the lush tea estates and rolling countryside of western Uganda. Arrive at Kibale Forest in the afternoon, check into your forest eco-lodge, and take a guided nature walk through the Bigodi Wetland Sanctuary to view rare red colobus and blue monkeys.",
        meals: "Lunch, Dinner",
        accommodation: "Primate Lodge Kibale / Turaco Treetops",
        activities: ["Scenic drive through tea plantations", "Bigodi Wetland Sanctuary Walk"]
      },
      {
        day: 2,
        title: "Chimpanzee Tracking in Kibale & Drive to Bwindi",
        location: "Kibale Forest to Bwindi",
        description: "Morning briefing at Kanyanchu river camp before plunging into the rainforest to track wild chimpanzees. Listen to their resonant hooting through the canopy and watch them forage, groom, and swing through the branches. In the afternoon, embark on a picturesque drive south toward Bwindi Impenetrable Forest.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Buhoma Lodge / Mahogany Springs Luxury Camp",
        activities: ["Chimpanzee Tracking", "Scenic drive past Rwenzori foothills"]
      },
      {
        day: 3,
        title: "The Ultimate Mountain Gorilla Trek in Bwindi",
        location: "Bwindi Impenetrable National Park",
        description: "Today is the pinnacle experience. Following a morning briefing from UWA rangers, enter the misty, ancient jungle led by experienced trackers and machete-bearers. When you locate the habituated gorilla family, spend a magical, quiet hour watching baby gorillas tumble in the vines and observing the majestic silverback patriarch. Return to lodge for a celebratory evening.",
        meals: "Breakfast, Forest Picnic Lunch, Dinner",
        accommodation: "Buhoma Lodge / Mahogany Springs Luxury Camp",
        activities: ["Mountain Gorilla Trekking Experience", "Gorilla Conservation Certificate", "Campfire Storytelling"]
      },
      {
        day: 4,
        title: "Bwindi to Lake Bunyonyi Island Retreat",
        location: "Lake Bunyonyi",
        description: "Enjoy a relaxed breakfast before a gentle drive to Lake Bunyonyi, surrounded by 29 emerald green islands and terraced hillsides. Spend the afternoon canoeing in traditional wooden dugouts, swimming in bilharzia-free waters, or visiting historical Punishment Island.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "BirdNest Resort Lake Bunyonyi",
        activities: ["Dugout Canoe Island Tour", "Lake swimming & relaxation"]
      },
      {
        day: 5,
        title: "Lake Bunyonyi across the Equator to Entebbe",
        location: "Entebbe / Airport",
        description: "Depart Lake Bunyonyi for the return journey to Entebbe. Stop at the Uganda Equator monument for the famous water Coriolis experiment and souvenir craft shopping. Arrive in Entebbe in the late afternoon for your flight home.",
        meals: "Breakfast, Lunch en route",
        accommodation: "Drop-off at Entebbe Airport",
        activities: ["Equator Crossing Photo Stop", "Airport Transfer"]
      }
    ],
    inclusions: [
      "Official Uganda Wildlife Authority (UWA) Gorilla Trekking Permit ($800 value)",
      "Official Kibale Forest Chimpanzee Tracking Permit ($250 value)",
      "4 Nights luxury forest lodge and lake resort accommodation",
      "Private 4x4 Safari Land Cruiser with professional driver-guide",
      "All park entry fees, forest ranger guides, and full board meals",
      "Lake Bunyonyi canoe excursion and equator crossing stop"
    ],
    exclusions: [
      "International airfare and Uganda tourist visa",
      "Porters during gorilla trekking ($20 recommended per trek)",
      "Staff gratuities and personal expenses"
    ]
  },

  // 12. UGANDA: Murchison Falls & Ziwa White Rhinos
  {
    id: "murchison-falls-ziwa-rhinos",
    slug: "murchison-falls-ziwa-rhinos",
    title: "Murchison Falls & Ziwa White Rhino Safari",
    subtitle: "Thunderous Nile Waterfalls, Big Game & On-Foot Rhino Tracking",
    category: "big-five",
    country: "Uganda",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    destinations: ["Entebbe", "Ziwa Rhino Sanctuary", "Murchison Falls National Park", "River Nile"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/River_Nile%2C_Murchison_Falls_National_Park%2C_Uganda_35.jpg/1280px-River_Nile%2C_Murchison_Falls_National_Park%2C_Uganda_35.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ziwa_rhino_sanctuary.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/River_Nile%2C_Murchison_Falls_National_Park%2C_Uganda_35.jpg/1280px-River_Nile%2C_Murchison_Falls_National_Park%2C_Uganda_35.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 680,
    priceNote: "per person based on double occupancy",
    rating: 4.93,
    reviewsCount: 118,
    badge: "Nile Adventure",
    overview: "Experience the sheer power of the world's most dramatic waterfall. Combine on-foot tracking of wild white rhinos at Ziwa Rhino Sanctuary with spectacular boat cruises on the Victoria Nile to the base of Murchison Falls and game drives across the palm-studded northern savannah.",
    highlights: [
      "Track endangered white rhinos on foot accompanied by armed UWA rangers at Ziwa",
      "Boat cruise up the River Nile to the thunderous base of Murchison Falls",
      "Hike to the Top of the Falls where the Nile squeezes through a 7-meter rock cleft",
      "Game drives spotting huge herds of Rothschild giraffes, lions, and elephants"
    ],
    bestTime: "December to February & June to September (Dry season game viewing)",
    difficulty: "Easy / Moderate",
    itinerary: [
      {
        day: 1,
        title: "Kampala to Ziwa Rhino Tracking & Murchison Falls",
        location: "Ziwa Sanctuary & Murchison Falls",
        description: "Depart Kampala at 06:30 AM heading north. Stop at Ziwa Rhino Sanctuary for a 2-hour on-foot tracking trek with endangered white rhinos. Enjoy lunch, then continue into Murchison Falls National Park, visiting the Top of the Falls before checking into your riverfront lodge.",
        meals: "Lunch, Dinner",
        accommodation: "Pakuba Safari Lodge / Paraa Safari Lodge",
        activities: ["On-foot White Rhino Tracking", "Top of the Falls Viewpoint"]
      },
      {
        day: 2,
        title: "Northern Savannah Game Drive & Nile River Boat Cruise",
        location: "Murchison Falls National Park",
        description: "Morning game drive on the northern delta circuit tracking lions, leopards, Rothschild giraffes, and Jackson's hartebeests. In the afternoon, embark on the famous 3-hour Victoria Nile boat cruise to the bottom of the roaring falls.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Pakuba Safari Lodge / Paraa Safari Lodge",
        activities: ["Morning Game Drive", "Nile River Boat Cruise", "Hippo & Crocodile Watching"]
      },
      {
        day: 3,
        title: "Morning Safari Drive & Return to Kampala / Entebbe",
        location: "Murchison Falls to Kampala",
        description: "Early morning game drive for a final look at active predators, cross the Nile, and drive back to Kampala/Entebbe, arriving early evening.",
        meals: "Breakfast, Lunch",
        accommodation: "Drop-off in Kampala / Entebbe",
        activities: ["Morning Game Drive", "Return Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Safari Land Cruiser with pop-up roof",
      "2 Nights lodge accommodation inside Murchison Falls",
      "Ziwa Rhino Sanctuary on-foot tracking permit",
      "Victoria Nile boat cruise ticket and park entry fees",
      "Full board meals, certified driver-guide, bottled water"
    ],
    exclusions: [
      "International flights and Uganda visa",
      "Gratuities for guide and boat captains"
    ]
  },

  // 13. UGANDA: Queen Elizabeth & Tree-Climbing Lions
  {
    id: "queen-elizabeth-ishasha-lions",
    slug: "queen-elizabeth-ishasha-lions",
    title: "Queen Elizabeth Wildlife & Ishasha Tree-Climbing Lions",
    subtitle: "Kazinga Channel Hippo Cruise & Fig Tree Predator Safaris",
    category: "big-five",
    country: "Uganda",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    destinations: ["Entebbe", "Queen Elizabeth National Park", "Kazinga Channel", "Ishasha Sector"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Hippos_at_Kazinga_Channel_in_Queen_Elizabeth_National_Park.jpg/1280px-Hippos_at_Kazinga_Channel_in_Queen_Elizabeth_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/A_group_of_Zebra_standing_in_a_lush_Ugandan_savanna_in_Lake_Mburo_National_Park_25.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Hippos_at_Kazinga_Channel_in_Queen_Elizabeth_National_Park.jpg/1280px-Hippos_at_Kazinga_Channel_in_Queen_Elizabeth_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 850,
    priceNote: "per person based on double occupancy",
    rating: 4.91,
    reviewsCount: 104,
    badge: "Wildlife Cruise",
    overview: "Set against the dramatic backdrop of the jagged Rwenzori Mountains, Queen Elizabeth National Park is Uganda's most biodiverse savannah reserve. Cruise the Kazinga Channel holding the highest concentration of hippos in the world, and explore the southern Ishasha sector where lions lounge lazily in the branches of giant fig trees.",
    highlights: [
      "Track the world-famous tree-climbing lions in the giant sycamore figs of Ishasha",
      "2-hour luxury boat cruise on the natural 32km Kazinga Channel",
      "View hundreds of hippos, giant Nile monitors, and herds of bathing elephants",
      "Explore the Katwe explosion crater lakes and volcanic salt pans"
    ],
    bestTime: "January to February & June to August (Dry roads for lion spotting)",
    difficulty: "Easy",
    itinerary: [
      {
        day: 1,
        title: "Entebbe to Queen Elizabeth National Park",
        location: "Queen Elizabeth National Park",
        description: "Depart Entebbe, passing the equator monument for photos. Drive through lush agricultural hills into Queen Elizabeth National Park, taking in your first evening game drive.",
        meals: "Lunch, Dinner",
        accommodation: "Mweya Safari Lodge / Enganzi Game Lodge",
        activities: ["Equator Crossing Photo", "Evening Savannah Drive"]
      },
      {
        day: 2,
        title: "Kasenyi Plains Game Drive & Kazinga Channel Boat Cruise",
        location: "Kasenyi & Kazinga Channel",
        description: "Sunrise predator drive across the Kasenyi mating grounds tracking lion prides, leopards, and Uganda kobs. In the afternoon, enjoy the renowned Kazinga Channel boat safari.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mweya Safari Lodge / Enganzi Game Lodge",
        activities: ["Sunrise Game Drive", "Kazinga Channel Boat Safari"]
      },
      {
        day: 3,
        title: "Southern Ishasha Tree-Climbing Lion Safari",
        location: "Ishasha Sector",
        description: "Drive south to the wild Ishasha sector. Spend the day exploring the giant fig trees where lions climb to escape midday heat and biting flies.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ishasha Wilderness Camp / Enjojo Lodge",
        activities: ["Tree-climbing Lion Tracking", "Topi & Buffalo Game Drives"]
      },
      {
        day: 4,
        title: "Morning Safari & Transfer to Entebbe",
        location: "Queen Elizabeth to Entebbe",
        description: "Early morning bush drive before departing through Mbarara town with lunch en route, arriving in Entebbe by late afternoon.",
        meals: "Breakfast, Lunch",
        accommodation: "Drop-off at Entebbe Airport",
        activities: ["Morning Game Drive", "Return Transfer"]
      }
    ],
    inclusions: [
      "Custom 4x4 Safari Land Cruiser with pop-up roof",
      "3 Nights luxury lodge accommodation",
      "Kazinga Channel boat cruise tickets and park entry fees",
      "Full board meals, driver-guide, bottled water"
    ],
    exclusions: [
      "International flights and visas",
      "Gratuities and personal bar drinks"
    ]
  },

  // 14. CROSS-BORDER: 12-Day Mega Grand East Africa
  {
    id: "east-africa-mega-grand-safari",
    slug: "east-africa-mega-grand-safari",
    title: "12-Day East Africa Mega Grand Expedition",
    subtitle: "Kenya Masai Mara, Serengeti, Ngorongoro & Uganda Mountain Gorillas",
    category: "luxury",
    country: "Cross-Border",
    duration: "12 Days / 11 Nights",
    durationDays: 12,
    destinations: ["Nairobi", "Masai Mara", "Serengeti", "Ngorongoro Crater", "Entebbe", "Bwindi Impenetrable", "Lake Bunyonyi"],
    mainImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Gorila_de_monta%C3%B1a_%28Gorilla_beringei_beringei%29%2C_parque_nacional_de_la_Selva_Impenetrable_de_Bwindi%2C_Uganda%2C_2024-02-02%2C_DD_80.jpg/1280px-Gorila_de_monta%C3%B1a_%28Gorilla_beringei_beringei%29%2C_parque_nacional_de_la_Selva_Impenetrable_de_Bwindi%2C_Uganda%2C_2024-02-02%2C_DD_80.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    gallery: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    ],
    price: 4250,
    priceNote: "per person (Includes $800 Gorilla Permit, cross-border flights & 5-star lodges)",
    rating: 5.0,
    reviewsCount: 52,
    badge: "The Ultimate Odyssey",
    overview: "The most prestigious and complete wildlife safari expedition on the African continent. Spanning three extraordinary countries, this 12-day masterpiece links the world-famous Great Migration plains of Kenya's Masai Mara and Tanzania's Serengeti, descends into the volcanic wonder of Ngorongoro Crater, and culminates with a life-changing encounter with wild mountain gorillas in Uganda's ancient Bwindi rainforest.",
    highlights: [
      "The definitive Big Five & Great Ape journey across Kenya, Tanzania, and Uganda",
      "Guaranteed official Mountain Gorilla Trekking Permit in Bwindi Impenetrable Forest",
      "Full day game drives in both Masai Mara and Serengeti National Parks",
      "6-hour descent into Ngorongoro Crater caldera floor",
      "Includes international flight transfer between Tanzania and Uganda"
    ],
    bestTime: "Year-Round (Best July to October for Mara crossings & gorilla trekking)",
    difficulty: "Moderate",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Masai Mara National Reserve",
        location: "Masai Mara, Kenya",
        description: "Arrive in Nairobi, meet your safari director, and drive across the Great Rift Valley into the Masai Mara for an afternoon predator drive.",
        meals: "Lunch, Dinner",
        accommodation: "Zebra Plains Mara Camp",
        activities: ["Rift Valley Views", "Mara Afternoon Game Drive"]
      },
      {
        day: 2,
        title: "Full Day Big Cats & Migration Tracking in Mara",
        location: "Masai Mara, Kenya",
        description: "Full day game drive along the Mara River with picnic lunch in the wild savannah.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Zebra Plains Mara Camp",
        activities: ["Full Day Game Drive", "Bush Picnic"]
      },
      {
        day: 3,
        title: "Masai Mara to Serengeti National Park",
        location: "Serengeti, Tanzania",
        description: "Cross into Tanzania via the Isebania border, entering the sweeping northern Serengeti plains.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge",
        activities: ["Border crossing assistance", "Serengeti Game Drive"]
      },
      {
        day: 4,
        title: "Full Day in the Heart of the Serengeti",
        location: "Central Serengeti",
        description: "Track lions on granite kopjes, cheetahs hunting gazelles, and massive wildebeest herds.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Kubu Kubu Tented Lodge",
        activities: ["Serengeti Safari Drives"]
      },
      {
        day: 5,
        title: "Serengeti to Ngorongoro Crater Rim",
        location: "Ngorongoro Conservation Area",
        description: "Morning game drive and drive to Ngorongoro Crater rim with scenic stop at Olduvai Gorge.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Ngorongoro Serena Safari Lodge",
        activities: ["Olduvai Gorge Tour", "Crater Rim Sunset"]
      },
      {
        day: 6,
        title: "Ngorongoro Crater Floor Safari & Drive to Arusha",
        location: "Ngorongoro to Arusha",
        description: "Early descent into the 600m caldera for black rhinos and giant tuskers. Afternoon drive to Arusha.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Gran Melia Arusha",
        activities: ["Crater Floor Safari", "Evening Relaxation"]
      },
      {
        day: 7,
        title: "Flight from Kilimanjaro to Entebbe, Uganda",
        location: "Arusha to Entebbe",
        description: "Transfer to Kilimanjaro Airport (JRO) for your flight across Lake Victoria to Entebbe, Uganda. Relax by the lake shores.",
        meals: "Breakfast, Dinner",
        accommodation: "Lake Victoria Serena Golf Resort",
        activities: ["Flight to Uganda", "Entebbe Lakefront Evening"]
      },
      {
        day: 8,
        title: "Entebbe to Kibale Chimpanzee Forest",
        location: "Kibale National Park",
        description: "Scenic drive through tea estates to Kibale Forest with afternoon Bigodi Wetland monkey sanctuary walk.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Primate Lodge Kibale",
        activities: ["Bigodi Wetland Walk", "Forest check-in"]
      },
      {
        day: 9,
        title: "Chimpanzee Tracking & Journey to Bwindi Forest",
        location: "Kibale to Bwindi",
        description: "Morning chimpanzee habituation tracking in Kibale canopy. Afternoon drive south to Bwindi Impenetrable Forest.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mahogany Springs Luxury Lodge",
        activities: ["Chimpanzee Tracking", "Bwindi Mountain Drive"]
      },
      {
        day: 10,
        title: "The Ultimate Mountain Gorilla Trek in Bwindi",
        location: "Bwindi Impenetrable National Park",
        description: "The crown jewel: trek into the mist-covered rainforest with UWA rangers to spend one intimate hour with a wild mountain gorilla family.",
        meals: "Breakfast, Forest Picnic Lunch, Dinner",
        accommodation: "Mahogany Springs Luxury Lodge",
        activities: ["Mountain Gorilla Trekking", "Gorilla Conservation Ceremony"]
      },
      {
        day: 11,
        title: "Bwindi to Lake Bunyonyi Island Relaxation",
        location: "Lake Bunyonyi",
        description: "Gentle morning drive to Lake Bunyonyi. Afternoon wooden dugout canoeing, island exploration, and celebratory dinner.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "BirdNest Resort Lake Bunyonyi",
        activities: ["Canoe Island Hopping", "Lake swimming"]
      },
      {
        day: 12,
        title: "Lake Bunyonyi to Entebbe & International Flight",
        location: "Lake Bunyonyi to Entebbe",
        description: "Drive back to Entebbe across the Uganda equator. Farewell lunch and transfer to airport for your homeward flight.",
        meals: "Breakfast, Lunch",
        accommodation: "Drop-off at Entebbe Airport",
        activities: ["Equator Coriolis Experiment", "Airport Transfer"]
      }
    ],
    inclusions: [
      "Official $800 UWA Mountain Gorilla Trekking Permit",
      "$250 Kibale Forest Chimpanzee Tracking Permit",
      "All park fees for Masai Mara, Serengeti, and Ngorongoro Crater",
      "Flight ticket between Tanzania and Uganda",
      "Custom 4x4 Land Cruisers with professional guides in Kenya, Tanzania & Uganda",
      "11 Nights luxury lodges and 5-star camps, all meals, bottled water, medical rescue cover"
    ],
    exclusions: [
      "International long-haul flights from your home country",
      "East Africa Tourist Visa (Kenya/Uganda) and Tanzania visa",
      "Gratuities and personal bar expenses"
    ]
  }
];

export function getSafariBySlug(slug: string): SafariPackage | undefined {
  return SAFARI_PACKAGES.find((pkg) => pkg.slug === slug);
}
