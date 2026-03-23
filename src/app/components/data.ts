import imgExcavatorDig from "@/assets/images/excavation-pool-overhead.webp";
import imgBulldozerClear from "@/assets/images/land-clearing-bradenton.webp";
import imgDemolition from "@/assets/images/demolition-mobile-home-hero.webp";
import imgCrewTeam from "@/assets/images/trenching-palmetto-crew.webp";
import imgSkidSteer from "@/assets/images/excavation-skidsteer-aerial.webp";
import imgGradedLot from "@/assets/images/grading-bradenton-lot.webp";
import imgSurveyor from "@/assets/images/drainage-pipe-cover.webp";
import imgDumpTruck from "@/assets/images/equipment-commercial-grading.webp";
import imgHeavyEquip from "@/assets/images/equipment-deere-fleet.webp";
import imgLandClear from "@/assets/images/land-clearing-stump-removal.webp";
import imgSiteGrading from "@/assets/images/grading-service-hero.webp";
import imgOffice from "@/assets/images/site-development-utility-box.webp";
import imgFlorida from "@/assets/images/grading-bradenton-residential.webp";
import imgHandshake from "@/assets/images/grading-sarasota-custom-home.webp";
import imgSafetyVest from "@/assets/images/site-development-aerial.webp";
import imgBackhoe from "@/assets/images/trenching-crew-deep-trench.webp";
import imgCrane from "@/assets/images/demolition-waterfront-cover.webp";
import imgExcavatorArm from "@/assets/images/excavation-yanmar-residential.webp";
import imgExcavatorBucket from "@/assets/images/excavation-pool-backfill.webp";

import heroVideo from "@/assets/videos/hero-background.mp4";
import heroPoster from "@/assets/videos/hero-background-poster.webp";
import clearingVideo from "@/assets/videos/land-clearing.mp4";
import clearingPoster from "@/assets/videos/land-clearing-poster.webp";
import demoVideo from "@/assets/videos/demolition-longboat-key.mp4";
import demoPoster from "@/assets/videos/demolition-longboat-key-poster.webp";
import gradingVideo from "@/assets/videos/grading-drone.mp4";
import gradingPoster from "@/assets/videos/grading-drone-poster.webp";
import drainageVideo from "@/assets/videos/drainage-retention-pond.mp4";
import drainagePoster from "@/assets/videos/drainage-retention-pond-poster.webp";

export const IMG = {
  excavatorDig: imgExcavatorDig,
  bulldozerClear: imgBulldozerClear,
  demolition: imgDemolition,
  crewTeam: imgCrewTeam,
  skidSteer: imgSkidSteer,
  gradedLot: imgGradedLot,
  surveyor: imgSurveyor,
  dumpTruck: imgDumpTruck,
  heavyEquip: imgHeavyEquip,
  landClear: imgLandClear,
  siteGrading: imgSiteGrading,
  office: imgOffice,
  florida: imgFlorida,
  handshake: imgHandshake,
  safetyVest: imgSafetyVest,
  backhoe: imgBackhoe,
  crane: imgCrane,
  excavatorArm: imgExcavatorArm,
  excavatorBucket: imgExcavatorBucket,
};

export const reviews = [
  { name: "Mike Rodriguez", role: "General Contractor", text: "Lethermon has been our go-to excavation crew for two years. They show up on time, grade accurately, and pass inspections first time. Exactly what a builder needs.", stars: 5, project: "Foundation Prep" },
  { name: "Sarah Thompson", role: "Homeowner", text: "We bought raw land and had no idea where to start. Kameron walked us through everything, cleared the lot, and had us build-ready in days. Incredible service.", stars: 5, project: "Land Clearing" },
  { name: "David Lewis", role: "Developer", text: "Professional from start to finish. Their equipment is modern, their crew is skilled, and they coordinate perfectly with our project timelines.", stars: 5, project: "Site Development" },
  { name: "Tony Martinez", role: "Pool Builder", text: "I subcontract all my excavation to Lethermon. They dig to spec, keep the site clean, and make my job easier every single time. Highly recommend.", stars: 5, project: "Pool Excavation" },
  { name: "Karen Walsh", role: "Property Owner", text: "Had serious drainage issues after a storm. Kameron came out the same day, diagnosed the problem, and his crew had it fixed within the week. Life saver.", stars: 5, project: "Drainage Fix" },
  { name: "James Cooper", role: "Custom Home Builder", text: "I've worked with a lot of excavation companies. Lethermon is the only one I fully trust with my projects. Their grading is precise and their communication is exceptional.", stars: 5, project: "Custom Home" },
  { name: "Robert Chen", role: "Commercial GC", text: "We needed a fast turnaround on a commercial pad. Lethermon mobilized in 48 hours and had us ready ahead of schedule. That never happens in this industry.", stars: 5, project: "Commercial Pad" },
  { name: "Linda Foster", role: "Realtor", text: "I recommend Lethermon to all my clients who buy vacant land. They make the process simple and stress-free. Great people to work with.", stars: 4, project: "Lot Prep" },
];

export const serviceAreas = [
  { city: "Sarasota", projects: 47, desc: "Downtown Sarasota, Gulf Gate, Bee Ridge, Siesta Key" },
  { city: "Bradenton", projects: 62, desc: "Downtown Bradenton, Palma Sola, Cortez, Bayshore Gardens" },
  { city: "Venice", projects: 28, desc: "Venice Island, South Venice, Nokomis, Osprey" },
  { city: "Lakewood Ranch", projects: 35, desc: "Main Street, Waterside, Country Club, The Lake Club" },
  { city: "Parrish", projects: 19, desc: "North River Ranch, Gamble Creek, Harrison Ranch" },
  { city: "Palmetto", projects: 14, desc: "Downtown Palmetto, Terra Ceia, Ellenton" },
  { city: "St. Petersburg", projects: 8, desc: "South St. Pete, Pinellas Point, Gulfport" },
  { city: "North Port", projects: 11, desc: "North Port Estates, Warm Mineral Springs" },
];

export const projectTypes = [
  "Custom Homes", "Spec Homes", "Commercial Pads", "Pool Excavation",
  "Subdivision Development", "Drainage Systems", "Demolition",
  "Church Sites", "Storage Facilities", "Retail Development",
];

export const serviceAreasDetailed: Record<string, {
  city: string; slug: string; county: string; zip: string[];
  projects: number; desc: string;
  neighborhoods: string[];
  mapQuery: string;
  intro: string[];
  servicesHighlight: string[];
}> = {
  sarasota: {
    city: "Sarasota", slug: "sarasota", county: "Sarasota County", zip: ["34231", "34232", "34233", "34234", "34236", "34237", "34238", "34239", "34240"],
    projects: 47, desc: "Downtown Sarasota, Gulf Gate, Bee Ridge, Siesta Key",
    neighborhoods: ["Downtown Sarasota", "Gulf Gate", "Bee Ridge", "Siesta Key", "Palmer Ranch", "Fruitville", "North Sarasota", "Southgate", "Indian Beach/Sapphire Shores"],
    mapQuery: "Sarasota,FL",
    intro: [
      "Lethermon Grade Excavations is Sarasota's trusted excavation and site preparation contractor. With 47+ completed projects in the Sarasota area, we have deep knowledge of local soil conditions, permitting requirements, and building codes unique to Sarasota County.",
      "From custom homes in Palmer Ranch to commercial development along Fruitville Road, our crew handles land clearing, excavation, grading, drainage, and demolition for builders, developers, and property owners throughout Sarasota.",
    ],
    servicesHighlight: ["Custom home foundation grading in Palmer Ranch", "Commercial pad excavation on US-41 corridor", "Drainage solutions for Gulf Gate properties", "Land clearing for Bee Ridge developments"],
  },
  bradenton: {
    city: "Bradenton", slug: "bradenton", county: "Manatee County", zip: ["34201", "34202", "34203", "34205", "34207", "34208", "34209", "34210", "34211", "34212"],
    projects: 62, desc: "Downtown Bradenton, Palma Sola, Cortez, Bayshore Gardens",
    neighborhoods: ["Downtown Bradenton", "Palma Sola", "Cortez", "Bayshore Gardens", "West Bradenton", "East Bradenton", "Braden River", "Whitfield Estates", "Trailer Estates"],
    mapQuery: "Bradenton,FL",
    intro: [
      "As our home base, Bradenton is where Lethermon Grade Excavations has built its reputation with 62+ completed projects. We know Manatee County permitting inside and out, and our proximity means faster response times and lower mobilization costs for Bradenton projects.",
      "Our Bradenton work includes everything from residential lot preparation in Braden River to large-scale commercial excavation along Cortez Road and SR-64. Builders across Manatee County trust us for precision grading and on-time site preparation.",
    ],
    servicesHighlight: ["Residential lot clearing in Braden River", "Foundation excavation for Whitfield Estates homes", "Commercial grading along SR-64 corridor", "Stormwater drainage for Bayshore Gardens"],
  },
  venice: {
    city: "Venice", slug: "venice", county: "Sarasota County", zip: ["34285", "34286", "34292", "34293"],
    projects: 28, desc: "Venice Island, South Venice, Nokomis, Osprey",
    neighborhoods: ["Venice Island", "South Venice", "Nokomis", "Osprey", "Venetian Golf & River Club", "Plantation", "Venice East", "Bird Bay"],
    mapQuery: "Venice,FL",
    intro: [
      "Venice and the surrounding communities of Nokomis and Osprey present unique excavation challenges with high water tables and coastal soil conditions. With 28+ completed projects in the area, we understand the specific requirements for Venice construction.",
      "Our Venice crews specialize in proper drainage grading essential for properties near the coastline and the Intracoastal Waterway, where water management is critical for foundation protection and code compliance.",
    ],
    servicesHighlight: ["Coastal property drainage solutions", "Custom home grading in Venetian Golf Club", "Land clearing in South Venice", "Pool excavation on Venice Island"],
  },
  "lakewood-ranch": {
    city: "Lakewood Ranch", slug: "lakewood-ranch", county: "Manatee/Sarasota County", zip: ["34202", "34211", "34212", "34240"],
    projects: 35, desc: "Main Street, Waterside, Country Club, The Lake Club",
    neighborhoods: ["Main Street District", "Waterside", "Country Club East", "The Lake Club", "Lorraine Lakes", "Del Webb", "Cresswind", "Esplanade"],
    mapQuery: "Lakewood+Ranch,FL",
    intro: [
      "Lakewood Ranch is one of the fastest-growing master-planned communities in the nation, and Lethermon Grade Excavations has been part of that growth with 35+ completed projects. We work with builders and developers building the next phase of this thriving community.",
      "From spec homes in Del Webb to custom estates at The Lake Club, our precision grading and site preparation services meet the high standards expected in Lakewood Ranch's premier neighborhoods.",
    ],
    servicesHighlight: ["Spec home pad preparation for builder partners", "Custom home excavation at The Lake Club", "Subdivision infrastructure grading", "Community drainage system installation"],
  },
  parrish: {
    city: "Parrish", slug: "parrish", county: "Manatee County", zip: ["34219"],
    projects: 19, desc: "North River Ranch, Gamble Creek, Harrison Ranch",
    neighborhoods: ["North River Ranch", "Gamble Creek", "Harrison Ranch", "Parrish Plantation", "Twin Rivers", "River Wilderness"],
    mapQuery: "Parrish,FL",
    intro: [
      "Parrish is experiencing rapid residential growth with developments like North River Ranch and Harrison Ranch transforming the area. With 19+ projects completed here, we're the excavation partner builders trust in this growing community.",
      "The Parrish area's mix of agricultural land and new development requires experienced land clearing and site preparation. Our crews understand the unique soil conditions and environmental considerations in eastern Manatee County.",
    ],
    servicesHighlight: ["New construction lot clearing in North River Ranch", "Foundation grading for Harrison Ranch homes", "Agricultural land conversion", "Drainage for low-lying properties"],
  },
  palmetto: {
    city: "Palmetto", slug: "palmetto", county: "Manatee County", zip: ["34220", "34221"],
    projects: 14, desc: "Downtown Palmetto, Terra Ceia, Ellenton",
    neighborhoods: ["Downtown Palmetto", "Terra Ceia", "Ellenton", "Rubonia", "Snead Island", "Piney Point"],
    mapQuery: "Palmetto,FL",
    intro: [
      "Palmetto and surrounding communities like Ellenton and Terra Ceia offer a mix of residential renovation, new construction, and commercial development. With 14+ completed projects, we provide dependable excavation services across the area.",
      "Our work in Palmetto includes lot preparation for residential builders, drainage correction for established neighborhoods, and commercial site development along US-41 and US-301 corridors.",
    ],
    servicesHighlight: ["Commercial excavation along US-41", "Residential lot preparation in Ellenton", "Drainage correction for older neighborhoods", "Demolition and site cleanup"],
  },
  "st-petersburg": {
    city: "St. Petersburg", slug: "st-petersburg", county: "Pinellas County", zip: ["33701", "33702", "33703", "33707", "33710", "33711", "33712"],
    projects: 8, desc: "South St. Pete, Pinellas Point, Gulfport",
    neighborhoods: ["South St. Petersburg", "Pinellas Point", "Gulfport", "Pasadena", "Jungle Terrace", "Tyrone"],
    mapQuery: "St+Petersburg,FL",
    intro: [
      "While our primary service area is Sarasota-Bradenton, we serve select projects in St. Petersburg and southern Pinellas County. Our 8 completed projects in the area demonstrate our commitment to extending our quality service across Tampa Bay.",
      "St. Petersburg projects often involve tight urban lots, demolition of existing structures, and managing challenging access. Our versatile equipment fleet and experienced operators handle these constraints efficiently.",
    ],
    servicesHighlight: ["Tight-lot excavation in urban areas", "Demolition and site clearing", "Foundation grading for infill construction", "Drainage solutions for older neighborhoods"],
  },
  "north-port": {
    city: "North Port", slug: "north-port", county: "Sarasota County", zip: ["34286", "34287", "34288", "34289"],
    projects: 11, desc: "North Port Estates, Warm Mineral Springs",
    neighborhoods: ["North Port Estates", "Warm Mineral Springs", "South Gulf Cove", "Rotonda West", "Port Charlotte (nearby)"],
    mapQuery: "North+Port,FL",
    intro: [
      "North Port is one of the largest cities by area in Florida, with extensive undeveloped land being converted to residential neighborhoods. With 11+ projects completed here, we support the area's continued growth with reliable excavation services.",
      "The North Port area's unique geology — including areas with higher rock content — requires experienced operators and proper equipment. We assess soil and rock conditions during every estimate to ensure accurate pricing and timelines.",
    ],
    servicesHighlight: ["Large lot clearing for estate homes", "Rock excavation capabilities", "Subdivision pad preparation", "Drainage for flood-prone areas"],
  },
};

export interface VideoItem {
  slug: string;
  title: string;
  description: string;
  videoSrc: string;
  poster: string;
  serviceSlugs: string[];
  areaSlugs: string[];
  blogSlugs?: string[];
  date?: string;
}

export const videos: VideoItem[] = [
  {
    slug: "land-clearing-timelapse",
    title: "Land Clearing Timelapse",
    description: "Watch our crew clear a residential lot — brush, stumps, and debris removed with professional equipment. Land clearing is the first step to a build-ready site in Southwest Florida.",
    videoSrc: clearingVideo,
    poster: clearingPoster,
    serviceSlugs: ["land-clearing", "excavation"],
    areaSlugs: [],
    blogSlugs: ["land-clearing-cost-florida"],
    date: "2025-11-01",
  },
  {
    slug: "grading-drone-footage",
    title: "Drone Grading Footage",
    description: "Aerial view of laser-guided site grading in action. See how we achieve precision elevations and drainage slopes for foundation pads and commercial sites.",
    videoSrc: gradingVideo,
    poster: gradingPoster,
    serviceSlugs: ["site-grading"],
    areaSlugs: [],
    blogSlugs: ["site-grading-importance-florida-construction"],
    date: "2025-10-15",
  },
  {
    slug: "demolition-longboat-key",
    title: "Demolition Project — Longboat Key",
    description: "Waterfront demolition and site cleanup. Our crew removes structures safely and leaves the site ready for the next phase of development.",
    videoSrc: demoVideo,
    poster: demoPoster,
    serviceSlugs: ["demolition", "land-clearing"],
    areaSlugs: ["sarasota"],
    blogSlugs: [],
    date: "2025-09-20",
  },
  {
    slug: "equipment-on-site",
    title: "Equipment on Site",
    description: "Our heavy equipment fleet in action — excavators, dozers, and compactors working on excavation and site preparation projects across Bradenton and Sarasota.",
    videoSrc: heroVideo,
    poster: heroPoster,
    serviceSlugs: ["excavation", "site-grading", "trenching"],
    areaSlugs: ["bradenton"],
    blogSlugs: ["choosing-excavation-contractor-florida"],
    date: "2025-08-10",
  },
  {
    slug: "drainage-retention-pond",
    title: "Drainage & Retention Pond Installation",
    description: "Installing drainage systems and retention areas. Proper water management is critical for Florida properties — see how we handle stormwater and erosion control.",
    videoSrc: drainageVideo,
    poster: drainagePoster,
    serviceSlugs: ["drainage", "trenching"],
    areaSlugs: ["palmetto"],
    blogSlugs: ["florida-drainage-problems-solutions"],
    date: "2025-07-05",
  },
];

export const blogPosts = [
  {
    slug: "how-to-prepare-your-lot-for-construction",
    title: "How to Prepare Your Lot for Construction in Florida",
    excerpt: "A step-by-step guide to getting your land build-ready, from clearing to final grading, with tips specific to Florida conditions.",
    date: "2026-02-18",
    category: "Guides",
    img: IMG.landClear,
    readTime: "7 min read",
    content: [
      "Building a new home or commercial structure in Florida starts long before the first nail is driven. Proper lot preparation is the foundation — literally — of a successful construction project. Here's what you need to know.",
      "## Step 1: Survey and Plan Review",
      "Before any equipment touches your property, you need a current survey and an understanding of local requirements. Sarasota and Manatee counties have specific setback, drainage, and tree preservation requirements that affect how your lot is prepared.",
      "## Step 2: Permitting",
      "Tree removal, land clearing, and grading often require permits. In Sarasota County, trees over a certain diameter require individual permits. An experienced excavation contractor will coordinate these permits for you.",
      "## Step 3: Land Clearing",
      "This involves removing trees, brush, stumps, and debris. In Florida, you'll often encounter dense palmetto, sand pine, and root systems that extend deep into sandy soil. Professional equipment makes this efficient and thorough.",
      "## Step 4: Rough Grading",
      "Once cleared, the lot needs rough grading to establish basic elevations and drainage patterns. This is where the overall shape of your building pad begins to take form.",
      "## Step 5: Utility Trenching",
      "Before fine grading, underground utilities — water, sewer, electric, and sometimes gas — need trenches dug to code-specified depths. Proper coordination with utility companies is essential.",
      "## Step 6: Fine Grading & Compaction",
      "The final step is precision grading using laser-guided systems to achieve exact elevations for your foundation. Proper compaction ensures the soil can support your structure without settling.",
      "## The Bottom Line",
      "Proper lot preparation saves time and money throughout the entire construction process. Problems at this stage compound exponentially as the project progresses. Trust an experienced local excavation contractor who understands Florida conditions.",
    ],
  },
  {
    slug: "florida-drainage-problems-solutions",
    title: "5 Common Florida Drainage Problems and How to Fix Them",
    excerpt: "Florida's flat terrain and heavy rainfall create unique drainage challenges. Learn the top 5 problems and professional solutions.",
    date: "2026-02-04",
    category: "Tips",
    img: IMG.surveyor,
    readTime: "5 min read",
    content: [
      "Florida receives over 50 inches of rain annually, and our flat terrain means water doesn't naturally flow away from structures. Here are the five most common drainage problems we encounter and how to fix them.",
      "## 1. Standing Water After Rain",
      "If your yard holds water for more than 24 hours after rain, your grading is insufficient. The solution is re-grading the yard to create proper slope away from structures, often combined with a French drain system.",
      "## 2. Foundation Erosion",
      "Water pooling against your foundation erodes soil and can cause structural damage. A combination of proper grading, downspout extensions, and a perimeter French drain redirects water away from the foundation.",
      "## 3. Soggy Lawn Areas",
      "Persistent soggy spots indicate poor subsurface drainage. French drains or dry wells installed beneath the surface collect and redirect groundwater to appropriate discharge points.",
      "## 4. Driveway Flooding",
      "Low driveways that flood during storms need channel drains or catch basins installed across the driveway entrance to intercept water before it pools.",
      "## 5. Neighbor's Water Runoff",
      "When a neighbor's property drains onto yours, a swale or berm along the property line redirects the water. This is a common issue in subdivisions with closely spaced homes.",
      "## Professional Assessment",
      "Every drainage problem has a solution. A professional assessment identifies the root cause and designs a system that solves the problem permanently rather than just moving it.",
    ],
  },
  {
    slug: "choosing-excavation-contractor-florida",
    title: "How to Choose an Excavation Contractor in Florida",
    excerpt: "What to look for, what questions to ask, and red flags to avoid when hiring an excavation company for your project.",
    date: "2026-01-22",
    category: "Guides",
    img: IMG.heavyEquip,
    readTime: "6 min read",
    content: [
      "Hiring the right excavation contractor sets the tone for your entire construction project. Here's what builders and property owners should look for.",
      "## Insurance and Licensing",
      "Always verify that your excavation contractor carries general liability insurance and workers' compensation. Ask for certificates of insurance — a reputable company will provide these without hesitation.",
      "## Local Experience",
      "Florida soil conditions vary dramatically by region. A contractor with local experience understands soil types, water tables, rock layers, and county-specific permitting requirements.",
      "## Equipment and Capability",
      "Look for a company with modern, well-maintained equipment. The right equipment for the job matters — using oversized or undersized machines costs time and money.",
      "## References from Builders",
      "The best reference for an excavation contractor is a builder who uses them repeatedly. Builders depend on reliable excavation to keep their projects on schedule.",
      "## Transparent Estimates",
      "A professional estimate should include detailed scope of work, materials, haul-off costs, and timeline. Vague estimates lead to surprise costs mid-project.",
      "## Communication",
      "Your excavation contractor should communicate clearly and proactively about schedule, progress, and any issues encountered. Poor communication is the #1 complaint in construction.",
    ],
  },
  {
    slug: "land-clearing-cost-florida",
    title: "How Much Does Land Clearing Cost in Florida? (2026 Guide)",
    excerpt: "Detailed breakdown of land clearing costs in Florida, including factors that affect pricing and how to budget for your project.",
    date: "2026-01-08",
    category: "Cost Guides",
    img: IMG.bulldozerClear,
    readTime: "8 min read",
    content: [
      "Land clearing is one of the first expenses in any new construction project, and understanding costs helps you budget accurately.",
      "## Average Cost Ranges",
      "In Southwest Florida, residential land clearing typically costs between $1,500 and $5,000 for a standard quarter-acre lot. Heavily wooded or larger lots can range from $3,000 to $15,000+.",
      "## Factors That Affect Cost",
      "Lot size, vegetation density, tree size and species, stump removal requirements, debris hauling distance, access conditions, and permit requirements all influence the final cost.",
      "## Cost Breakdown",
      "- Tree removal: $200-$2,000+ per tree depending on size\n- Brush clearing: $500-$2,000 per quarter acre\n- Stump grinding: $100-$400 per stump\n- Root grubbing: $500-$1,500 per quarter acre\n- Debris hauling: $300-$800 per load\n- Permits: $50-$500 depending on municipality",
      "## How to Save Money",
      "Get multiple estimates, clear brush yourself if possible, time your project during slower seasons (summer), and combine services — clearing plus grading from the same contractor saves mobilization costs.",
    ],
  },
  {
    slug: "site-grading-importance-florida-construction",
    title: "Why Site Grading Is the Most Critical Step in Florida Construction",
    excerpt: "Improper grading causes foundation failures, drainage problems, and failed inspections. Here's why grading matters more in Florida.",
    date: "2025-12-15",
    category: "Industry",
    img: IMG.gradedLot,
    readTime: "5 min read",
    content: [
      "Ask any experienced Florida builder what causes the most problems in construction, and grading will be near the top of the list. Here's why.",
      "## Florida's Unique Challenges",
      "Our flat terrain, sandy soil, high water tables, and heavy rainfall create conditions where even small grading errors cause significant problems. A quarter-inch of elevation difference can redirect hundreds of gallons of water.",
      "## Foundation Failures",
      "Improper grading leads to uneven settling, foundation cracks, and structural damage. In Florida's sandy soil, proper compaction and elevation are essential for foundation integrity.",
      "## Drainage Disasters",
      "Without correct drainage slopes, rainwater pools around structures, erodes soil, and creates the perfect environment for mold and structural damage. Florida code requires specific drainage grades for good reason.",
      "## Inspection Failures",
      "Failed foundation inspections are expensive in time and money. Re-grading after other work has begun disrupts the entire project schedule.",
      "## The Laser Grading Advantage",
      "Modern laser-guided grading systems achieve precision within fractions of an inch. This technology, combined with experienced operators, ensures every pad meets exact specifications the first time.",
    ],
  },
  {
    slug: "pool-excavation-what-to-expect",
    title: "Pool Excavation in Florida: What to Expect",
    excerpt: "Planning a pool? Here's everything you need to know about the excavation phase, from dig day to backfill.",
    date: "2025-11-28",
    category: "Guides",
    img: IMG.excavatorDig,
    readTime: "6 min read",
    content: [
      "Pool excavation is one of the most exciting phases of pool construction — watching your pool take shape in the ground. Here's what the process looks like.",
      "## Before Excavation",
      "Before digging begins, your pool builder should have engineering plans approved, permits in hand, and utility locates completed. The pool layout is staked in the ground for the excavator operator.",
      "## The Dig",
      "A skilled excavator operator shapes the pool hole according to the design — including shelves, deep ends, and any custom features. Most residential pool digs take 1-2 days.",
      "## Soil and Rock",
      "Excess soil must be hauled away or spread on the property. In some Florida areas, rock layers require specialized equipment. Soil conditions are assessed during the estimate to account for these possibilities.",
      "## After Excavation",
      "Once the hole is shaped, the pool builder begins steel, plumbing, and shell installation. The excavation contractor may return for backfill and deck grading after the pool shell is complete.",
      "## Cost Considerations",
      "Pool excavation typically costs $1,500-$5,000 depending on size, depth, access, soil conditions, and hauling requirements. Rock excavation adds to the cost.",
    ],
  },
];

export const pressReleases = [
  {
    slug: "lethermon-reaches-200-projects",
    title: "Lethermon Grade Excavations Completes 200th Project Milestone",
    date: "2026-01-15",
    excerpt: "Bradenton-based excavation company celebrates 200 completed projects across Sarasota, Manatee, and Charlotte counties.",
    content: "BRADENTON, FL — Lethermon Grade Excavations, a full-service excavation and site preparation contractor serving Southwest Florida, announced the completion of its 200th project since founding. The milestone project, a commercial site preparation in Lakewood Ranch, represents the company's continued growth in the Sarasota-Bradenton market. 'Reaching 200 projects is a testament to the trust builders and developers place in our team,' said owner Kameron Lethermon. 'Every project receives the same attention to detail whether it's our first or our 200th.'",
  },
  {
    slug: "lethermon-expands-equipment-fleet",
    title: "Lethermon Grade Excavations Expands Equipment Fleet",
    date: "2025-10-22",
    excerpt: "Company adds new excavator and grading equipment to support growing demand in Southwest Florida construction market.",
    content: "BRADENTON, FL — Lethermon Grade Excavations has expanded its equipment fleet with the addition of a new excavator and laser-guided grading system. The expansion supports increasing demand for excavation and site preparation services across the Sarasota-Bradenton region. 'Investing in modern equipment means better results and faster turnaround for our clients,' said Kameron Lethermon. 'The new laser grading system achieves even greater precision for foundation pads and drainage slopes.'",
  },
  {
    slug: "lethermon-partners-local-builders",
    title: "Lethermon Grade Excavations Establishes Builder Partnership Program",
    date: "2025-08-10",
    excerpt: "New program offers preferred scheduling and pricing for builders committed to ongoing excavation partnerships.",
    content: "BRADENTON, FL — Lethermon Grade Excavations has launched a Builder Partnership Program designed to streamline the excavation process for builders with ongoing project needs. The program offers preferred scheduling, volume pricing, and dedicated crew availability for participating builders. 'Builders need a reliable excavation partner they can count on project after project,' said Kameron Lethermon. 'Our Builder Partnership Program formalizes that relationship with guaranteed availability and consistent pricing.'",
  },
];

export const openPositions = [
  { title: "Equipment Operator", type: "Full-Time", location: "Bradenton, FL", desc: "Experienced excavator, bulldozer, and skid steer operator for residential and commercial site preparation projects." },
  { title: "CDL Truck Driver", type: "Full-Time", location: "Bradenton, FL", desc: "CDL-A driver for dump truck and equipment hauling. Local routes, home every night." },
  { title: "Site Laborer", type: "Full-Time", location: "Bradenton, FL", desc: "General site labor including grade checking, pipe installation, site cleanup, and equipment maintenance." },
  { title: "Estimator / Project Coordinator", type: "Full-Time", location: "Bradenton, FL", desc: "Experienced construction estimator to prepare excavation bids and coordinate project scheduling." },
];