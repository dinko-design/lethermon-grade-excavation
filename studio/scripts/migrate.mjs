/**
 * Migration script: pushes all hardcoded content into Sanity.
 *
 * Usage:
 *   1. Create a Sanity API token with Editor permissions at sanity.io/manage
 *   2. Set env vars: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN
 *   3. Run: node scripts/migrate.mjs
 *
 * This script is idempotent — running it again will overwrite existing documents.
 * Images must be uploaded manually through Sanity Studio after migration.
 */

import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_TOKEN;

if (!projectId || !token) {
  console.error("Missing SANITY_PROJECT_ID or SANITY_TOKEN env vars.");
  console.error("Usage: SANITY_PROJECT_ID=xxx SANITY_DATASET=production SANITY_TOKEN=xxx node scripts/migrate.mjs");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2026-03-01", useCdn: false });

function toPortableText(paragraphs) {
  return paragraphs.map((text, i) => {
    if (text.startsWith("## ")) {
      return {
        _type: "block",
        _key: `h${i}`,
        style: "h2",
        children: [{ _type: "span", _key: `s${i}`, text: text.slice(3) }],
        markDefs: [],
      };
    }
    if (text.startsWith("- ")) {
      const items = text.split("\n").filter((l) => l.startsWith("- "));
      return items.map((item, j) => ({
        _type: "block",
        _key: `li${i}_${j}`,
        style: "normal",
        listItem: "bullet",
        level: 1,
        children: [{ _type: "span", _key: `s${i}_${j}`, text: item.slice(2) }],
        markDefs: [],
      }));
    }
    return {
      _type: "block",
      _key: `p${i}`,
      style: "normal",
      children: [{ _type: "span", _key: `s${i}`, text }],
      markDefs: [],
    };
  }).flat();
}

// ─── Company Settings ───────────────────────────────────────────────
const companySettings = {
  _id: "companySettings",
  _type: "companySettings",
  name: "Lethermon Grade Excavations",
  tagline: "Southwest Florida's Trusted Excavation Contractor",
  description: "Full-service excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching for builders, developers, and property owners in Sarasota-Bradenton and Southwest Florida.",
  ownerName: "Kameron Lethermon",
  phone: "(941) 290-7208",
  phoneTel: "9412907208",
  email: "info@lethermongradeexcavations.com",
  website: "https://www.lethermongradeexcavations.com",
  address: { _type: "object", street: "Bradenton", city: "Bradenton", state: "FL", zip: "34201", country: "US" },
  geo: { _type: "geopoint", lat: 27.4989, lng: -82.5748 },
  hours: "Mon-Fri 7AM-5PM, Sat by appointment",
  aggregateRating: { ratingValue: "5.0", reviewCount: "47", bestRating: "5" },
  priceRange: "$$",
  projectTypes: [
    "Custom Homes", "Spec Homes", "Commercial Pads", "Pool Excavation",
    "Subdivision Development", "Drainage Systems", "Demolition",
    "Church Sites", "Storage Facilities", "Retail Development",
  ],
};

// ─── Categories ─────────────────────────────────────────────────────
const categories = [
  { _id: "category-guides", _type: "category", title: "Guides", slug: { _type: "slug", current: "guides" } },
  { _id: "category-tips", _type: "category", title: "Tips", slug: { _type: "slug", current: "tips" } },
  { _id: "category-cost-guides", _type: "category", title: "Cost Guides", slug: { _type: "slug", current: "cost-guides" } },
  { _id: "category-industry", _type: "category", title: "Industry", slug: { _type: "slug", current: "industry" } },
];

const categoryMap = { Guides: "category-guides", Tips: "category-tips", "Cost Guides": "category-cost-guides", Industry: "category-industry" };

// ─── Reviews ────────────────────────────────────────────────────────
const reviewsData = [
  { name: "Mike Rodriguez", role: "General Contractor", text: "Lethermon has been our go-to excavation crew for two years. They show up on time, grade accurately, and pass inspections first time. Exactly what a builder needs.", stars: 5, project: "Foundation Prep", serviceRefs: ["service-excavation", "service-site-grading"] },
  { name: "Sarah Thompson", role: "Homeowner", text: "We bought raw land and had no idea where to start. Kameron walked us through everything, cleared the lot, and had us build-ready in days. Incredible service.", stars: 5, project: "Land Clearing", serviceRefs: ["service-land-clearing"] },
  { name: "David Lewis", role: "Developer", text: "Professional from start to finish. Their equipment is modern, their crew is skilled, and they coordinate perfectly with our project timelines.", stars: 5, project: "Site Development", serviceRefs: ["service-site-grading", "service-excavation"] },
  { name: "Tony Martinez", role: "Pool Builder", text: "I subcontract all my excavation to Lethermon. They dig to spec, keep the site clean, and make my job easier every single time. Highly recommend.", stars: 5, project: "Pool Excavation", serviceRefs: ["service-excavation", "service-trenching"] },
  { name: "Karen Walsh", role: "Property Owner", text: "Had serious drainage issues after a storm. Kameron came out the same day, diagnosed the problem, and his crew had it fixed within the week. Life saver.", stars: 5, project: "Drainage Fix", serviceRefs: ["service-drainage"] },
  { name: "James Cooper", role: "Custom Home Builder", text: "I've worked with a lot of excavation companies. Lethermon is the only one I fully trust with my projects. Their grading is precise and their communication is exceptional.", stars: 5, project: "Custom Home", serviceRefs: ["service-site-grading", "service-excavation", "service-land-clearing"] },
  { name: "Robert Chen", role: "Commercial GC", text: "We needed a fast turnaround on a commercial pad. Lethermon mobilized in 48 hours and had us ready ahead of schedule. That never happens in this industry.", stars: 5, project: "Commercial Pad", serviceRefs: ["service-excavation", "service-site-grading"] },
  { name: "Linda Foster", role: "Realtor", text: "I recommend Lethermon to all my clients who buy vacant land. They make the process simple and stress-free. Great people to work with.", stars: 4, project: "Lot Prep", serviceRefs: ["service-land-clearing"] },
];

const reviews = reviewsData.map((r, i) => ({
  _id: `review-${i}`,
  _type: "review",
  name: r.name,
  role: r.role,
  text: r.text,
  stars: r.stars,
  project: r.project,
  services: r.serviceRefs.map((ref) => ({ _type: "reference", _ref: ref, _key: ref })),
  featured: i < 6,
}));

// ─── Service Areas ──────────────────────────────────────────────────
const serviceAreasData = [
  { slug: "sarasota", city: "Sarasota", county: "Sarasota County", zips: ["34231","34232","34233","34234","34236","34237","34238","34239","34240"], projects: 47, desc: "Downtown Sarasota, Gulf Gate, Bee Ridge, Siesta Key", neighborhoods: ["Downtown Sarasota","Gulf Gate","Bee Ridge","Siesta Key","Palmer Ranch","Fruitville","North Sarasota","Southgate","Indian Beach/Sapphire Shores"], mapQuery: "Sarasota,FL", intro: ["Lethermon Grade Excavations is Sarasota's trusted excavation and site preparation contractor. With 47+ completed projects in the Sarasota area, we have deep knowledge of local soil conditions, permitting requirements, and building codes unique to Sarasota County.","From custom homes in Palmer Ranch to commercial development along Fruitville Road, our crew handles land clearing, excavation, grading, drainage, and demolition for builders, developers, and property owners throughout Sarasota."], servicesHighlight: ["Custom home foundation grading in Palmer Ranch","Commercial pad excavation on US-41 corridor","Drainage solutions for Gulf Gate properties","Land clearing for Bee Ridge developments"] },
  { slug: "bradenton", city: "Bradenton", county: "Manatee County", zips: ["34201","34202","34203","34205","34207","34208","34209","34210","34211","34212"], projects: 62, desc: "Downtown Bradenton, Palma Sola, Cortez, Bayshore Gardens", neighborhoods: ["Downtown Bradenton","Palma Sola","Cortez","Bayshore Gardens","West Bradenton","East Bradenton","Braden River","Whitfield Estates","Trailer Estates"], mapQuery: "Bradenton,FL", intro: ["As our home base, Bradenton is where Lethermon Grade Excavations has built its reputation with 62+ completed projects. We know Manatee County permitting inside and out, and our proximity means faster response times and lower mobilization costs for Bradenton projects.","Our Bradenton work includes everything from residential lot preparation in Braden River to large-scale commercial excavation along Cortez Road and SR-64. Builders across Manatee County trust us for precision grading and on-time site preparation."], servicesHighlight: ["Residential lot clearing in Braden River","Foundation excavation for Whitfield Estates homes","Commercial grading along SR-64 corridor","Stormwater drainage for Bayshore Gardens"] },
  { slug: "venice", city: "Venice", county: "Sarasota County", zips: ["34285","34286","34292","34293"], projects: 28, desc: "Venice Island, South Venice, Nokomis, Osprey", neighborhoods: ["Venice Island","South Venice","Nokomis","Osprey","Venetian Golf & River Club","Plantation","Venice East","Bird Bay"], mapQuery: "Venice,FL", intro: ["Venice and the surrounding communities of Nokomis and Osprey present unique excavation challenges with high water tables and coastal soil conditions. With 28+ completed projects in the area, we understand the specific requirements for Venice construction.","Our Venice crews specialize in proper drainage grading essential for properties near the coastline and the Intracoastal Waterway, where water management is critical for foundation protection and code compliance."], servicesHighlight: ["Coastal property drainage solutions","Custom home grading in Venetian Golf Club","Land clearing in South Venice","Pool excavation on Venice Island"] },
  { slug: "lakewood-ranch", city: "Lakewood Ranch", county: "Manatee/Sarasota County", zips: ["34202","34211","34212","34240"], projects: 35, desc: "Main Street, Waterside, Country Club, The Lake Club", neighborhoods: ["Main Street District","Waterside","Country Club East","The Lake Club","Lorraine Lakes","Del Webb","Cresswind","Esplanade"], mapQuery: "Lakewood+Ranch,FL", intro: ["Lakewood Ranch is one of the fastest-growing master-planned communities in the nation, and Lethermon Grade Excavations has been part of that growth with 35+ completed projects. We work with builders and developers building the next phase of this thriving community.","From spec homes in Del Webb to custom estates at The Lake Club, our precision grading and site preparation services meet the high standards expected in Lakewood Ranch's premier neighborhoods."], servicesHighlight: ["Spec home pad preparation for builder partners","Custom home excavation at The Lake Club","Subdivision infrastructure grading","Community drainage system installation"] },
  { slug: "parrish", city: "Parrish", county: "Manatee County", zips: ["34219"], projects: 19, desc: "North River Ranch, Gamble Creek, Harrison Ranch", neighborhoods: ["North River Ranch","Gamble Creek","Harrison Ranch","Parrish Plantation","Twin Rivers","River Wilderness"], mapQuery: "Parrish,FL", intro: ["Parrish is experiencing rapid residential growth with developments like North River Ranch and Harrison Ranch transforming the area. With 19+ projects completed here, we're the excavation partner builders trust in this growing community.","The Parrish area's mix of agricultural land and new development requires experienced land clearing and site preparation. Our crews understand the unique soil conditions and environmental considerations in eastern Manatee County."], servicesHighlight: ["New construction lot clearing in North River Ranch","Foundation grading for Harrison Ranch homes","Agricultural land conversion","Drainage for low-lying properties"] },
  { slug: "palmetto", city: "Palmetto", county: "Manatee County", zips: ["34220","34221"], projects: 14, desc: "Downtown Palmetto, Terra Ceia, Ellenton", neighborhoods: ["Downtown Palmetto","Terra Ceia","Ellenton","Rubonia","Snead Island","Piney Point"], mapQuery: "Palmetto,FL", intro: ["Palmetto and surrounding communities like Ellenton and Terra Ceia offer a mix of residential renovation, new construction, and commercial development. With 14+ completed projects, we provide dependable excavation services across the area.","Our work in Palmetto includes lot preparation for residential builders, drainage correction for established neighborhoods, and commercial site development along US-41 and US-301 corridors."], servicesHighlight: ["Commercial excavation along US-41","Residential lot preparation in Ellenton","Drainage correction for older neighborhoods","Demolition and site cleanup"] },
  { slug: "st-petersburg", city: "St. Petersburg", county: "Pinellas County", zips: ["33701","33702","33703","33707","33710","33711","33712"], projects: 8, desc: "South St. Pete, Pinellas Point, Gulfport", neighborhoods: ["South St. Petersburg","Pinellas Point","Gulfport","Pasadena","Jungle Terrace","Tyrone"], mapQuery: "St+Petersburg,FL", intro: ["While our primary service area is Sarasota-Bradenton, we serve select projects in St. Petersburg and southern Pinellas County. Our 8 completed projects in the area demonstrate our commitment to extending our quality service across Tampa Bay.","St. Petersburg projects often involve tight urban lots, demolition of existing structures, and managing challenging access. Our versatile equipment fleet and experienced operators handle these constraints efficiently."], servicesHighlight: ["Tight-lot excavation in urban areas","Demolition and site clearing","Foundation grading for infill construction","Drainage solutions for older neighborhoods"] },
  { slug: "north-port", city: "North Port", county: "Sarasota County", zips: ["34286","34287","34288","34289"], projects: 11, desc: "North Port Estates, Warm Mineral Springs", neighborhoods: ["North Port Estates","Warm Mineral Springs","South Gulf Cove","Rotonda West","Port Charlotte (nearby)"], mapQuery: "North+Port,FL", intro: ["North Port is one of the largest cities by area in Florida, with extensive undeveloped land being converted to residential neighborhoods. With 11+ projects completed here, we support the area's continued growth with reliable excavation services.","The North Port area's unique geology — including areas with higher rock content — requires experienced operators and proper equipment. We assess soil and rock conditions during every estimate to ensure accurate pricing and timelines."], servicesHighlight: ["Large lot clearing for estate homes","Rock excavation capabilities","Subdivision pad preparation","Drainage for flood-prone areas"] },
];

const serviceAreas = serviceAreasData.map((a) => ({
  _id: `area-${a.slug}`,
  _type: "serviceArea",
  city: a.city,
  slug: { _type: "slug", current: a.slug },
  county: a.county,
  zips: a.zips,
  projects: a.projects,
  description: a.desc,
  neighborhoods: a.neighborhoods,
  mapQuery: a.mapQuery,
  intro: a.intro,
  servicesHighlight: a.servicesHighlight,
}));

// ─── Services ───────────────────────────────────────────────────────
const servicesData = [
  {
    slug: "land-clearing", icon: "Trees", title: "Land Clearing", order: 1,
    tagline: "Complete lot clearing, tree removal, and vegetation management to transform raw land into build-ready sites across Sarasota-Bradenton.",
    seo: { title: "Land Clearing & Lot Clearing Services | Bradenton & Sarasota FL", description: "Professional land clearing, tree removal, stump grinding, and lot preparation in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208." },
    description: ["Land clearing is the first step in any construction project. Before grading, excavation, or foundation work can begin, the land must be cleared of trees, brush, stumps, and debris. It sounds simple, but Florida vegetation is aggressive — dense palmetto, invasive species, and root systems that go deep into our sandy soil.", "Our crews use a combination of bulldozers, skid steers, and brush mowers to clear lots efficiently while protecting surrounding properties. We handle everything from small residential lots to multi-acre commercial sites.", "We coordinate tree preservation where required, manage debris hauling, and leave your lot clean and ready for the next phase. Our land clearing service includes stump grinding and root removal to prevent regrowth — a step many contractors skip."],
    features: ["Complete vegetation removal", "Tree removal & disposal", "Stump grinding & root removal", "Brush mowing & clearing", "Debris hauling", "Invasive species removal", "Tree preservation coordination", "Lot prep for builders", "Erosion control setup", "Final site cleanup"],
    process: [{ title: "Site Walk", desc: "Walk the property to assess vegetation, access, and any trees requiring preservation." }, { title: "Permit & Plan", desc: "Coordinate tree removal permits and plan the clearing sequence." }, { title: "Clear & Grub", desc: "Remove all vegetation, stumps, and roots using appropriate equipment." }, { title: "Clean Handoff", desc: "Haul debris, grade access areas, and leave a builder-ready lot." }],
    guarantee: { title: "Clean Lot Guarantee", description: "We guarantee a completely clean, debris-free lot when we leave. If you find any remaining roots, stumps, or debris we missed, we'll return to remove them at no charge." },
    faq: [{ question: "How long does land clearing take?", answer: "Most residential lots (quarter to half acre) take 1-2 days. Larger or heavily wooded lots may take 3-5 days. We'll provide a timeline during the estimate." }, { question: "Do I need permits to clear my lot?", answer: "In most Sarasota and Manatee County areas, yes. Tree removal typically requires permits, especially for protected species. We handle the permitting process for you." }, { question: "What happens to the debris?", answer: "All vegetation and debris is loaded and hauled to approved disposal sites. Usable fill material can be kept on-site if you prefer." }, { question: "Can you save specific trees?", answer: "Absolutely. We regularly work with builders who want to preserve certain trees for landscaping. We'll flag and protect any trees you want to keep." }],
    serviceAreaIntro: "We provide professional land clearing services throughout Sarasota, Manatee, and surrounding Florida counties. Whether you're clearing a quarter-acre residential lot or a multi-acre commercial site, our crews deliver fast, clean results.",
    seoContent: [{ heading: "Land Clearing for Florida Construction", paragraphs: ["Florida's subtropical environment means land clearing here is different from other parts of the country. Dense palmetto, aggressive vine species, and deep root systems require the right equipment and experienced operators. Our crews clear lots in Sarasota and Manatee counties daily — we know what we're dealing with.", "Proper land clearing sets the stage for everything that follows. Incomplete clearing leads to foundation problems, drainage issues, and costly delays. When we clear a lot, we clear it completely — vegetation, stumps, roots, and debris — so your builder can start on clean ground."], bullets: ["Dense palmetto and brush clearing", "Protected tree species identification", "County-specific permit coordination", "Complete stump and root removal", "Erosion control during clearing", "Builder-ready lot handoff"], linkText: "Learn about our excavation services", linkTo: "/services/excavation" }, { heading: "Residential vs. Commercial Land Clearing", paragraphs: ["Residential lot clearing in Southwest Florida typically involves quarter-acre to one-acre lots with varying levels of vegetation. Our crew sizes and equipment selection match the lot — we don't bring a 50-ton excavator to clear a small residential lot, and we don't try to clear a 5-acre commercial site with a skid steer.", "Commercial land clearing involves larger equipment, more complex logistics, and often environmental considerations. We coordinate with surveyors, environmental consultants, and local authorities to ensure compliance while maintaining efficient clearing schedules."], bullets: ["Residential lots from 0.25 to 2+ acres", "Commercial sites up to 20+ acres", "Right-sized equipment for every job", "Minimal disruption to neighbors", "Environmental compliance coordination", "Volume pricing for builders"] }],
  },
  {
    slug: "excavation", icon: "Shovel", title: "Excavation", order: 2,
    tagline: "Professional foundation digging, structural excavation, and site preparation for residential and commercial projects in Sarasota-Bradenton.",
    seo: { title: "Excavation Services & Foundation Digging | Bradenton & Sarasota FL", description: "Expert excavation for foundations, pools, and site preparation in Bradenton, Sarasota, and Southwest Florida. 200+ projects completed. Free estimates — (941) 290-7208." },
    description: ["Excavation is the backbone of every construction project. Before foundations are poured, footings set, or utilities installed, the earth must be precisely moved and shaped. That's our specialty.", "Our experienced operators run modern excavators and equipment to dig foundations, create building pads, install underground infrastructure, and perform cut-and-fill earthwork to exact specifications.", "We work directly with builders and general contractors to coordinate excavation timing with project schedules. Our team understands the critical path of construction and works to keep your project on timeline and inspection-ready."],
    features: ["Foundation excavation", "Footing & footer trenches", "Cut-and-fill earthwork", "Building pad creation", "Pool excavation", "Soil removal & hauling", "Rock excavation", "Basement & crawlspace digging", "Retention pond excavation", "Builder schedule coordination"],
    process: [{ title: "Plan Review", desc: "Review site plans, surveys, and engineering specs with your builder or GC." }, { title: "Site Prep", desc: "Mark dig areas, locate utilities, and mobilize equipment to the jobsite." }, { title: "Precision Digging", desc: "Excavate to exact depths and dimensions specified in your plans." }, { title: "Inspection Ready", desc: "Final grade and cleanup so foundation crews can proceed immediately." }],
    guarantee: { title: "Foundation-Ready Guarantee", description: "If your foundation inspection fails due to grading or excavation issues we caused, we correct it immediately at no additional cost. Period." },
    faq: [{ question: "What types of excavation do you handle?", answer: "We handle residential foundations, commercial pads, pool excavation, retention ponds, utility trenches, and custom earthwork projects of all sizes." }, { question: "Do you coordinate with builders?", answer: "Yes. We work directly with builders, GCs, and inspectors to keep excavation on schedule with the overall project timeline. Communication is a core part of our service." }, { question: "How deep can you excavate?", answer: "Our equipment can handle excavation depths required for residential and commercial foundations, including deep footings, basements, and retention ponds. We'll assess depth requirements during the estimate." }, { question: "What happens if you hit rock?", answer: "Rock is common in parts of Florida. We have equipment capable of handling rock removal and we'll discuss potential rock conditions during the initial site evaluation." }],
    serviceAreaIntro: "Our excavation services are available across Southwest Florida. From residential foundations to commercial pads, we bring the right equipment and expertise to every project in your area.",
    seoContent: [{ heading: "Understanding Excavation for Florida Construction", paragraphs: ["Excavation in Southwest Florida requires specialized knowledge of our unique soil conditions. Florida's sandy soil, high water tables, and limestone layers create challenges that inexperienced contractors often underestimate — leading to foundation problems, cost overruns, and inspection failures.", "Our operators understand the geological conditions across Sarasota and Manatee counties. From the sandy soils near the coast to the clay layers inland, we adjust our approach to deliver stable, inspection-ready excavation every time. This local knowledge is what separates professional excavation from simply digging a hole.", "We work with residential builders, commercial general contractors, pool companies, and property developers who need excavation done right the first time. Our reputation for precision and reliability is why builders keep calling us back project after project."], bullets: ["High water table management techniques", "Sandy soil stabilization methods", "Limestone and rock removal capability", "Dewatering solutions for wet excavations", "Soil testing coordination with engineers", "Florida building code compliance at every depth"], linkText: "Learn about our site grading services", linkTo: "/services/site-grading" }, { heading: "Residential vs. Commercial Excavation in Sarasota-Bradenton", paragraphs: ["Residential and commercial excavation projects have different requirements, timelines, and coordination needs. Residential foundation excavation typically involves single-family home pads, pool excavation, and utility trenches — all done within tight neighborhood spaces with minimal disruption to surrounding properties.", "Commercial excavation involves larger equipment, deeper cuts, more complex grading plans, and coordination with multiple trades and inspectors. Whether it's a retail pad along US-41, a storage facility in Lakewood Ranch, or a church site in Parrish, our commercial excavation team handles the scale and complexity these projects demand."], bullets: ["Residential foundation pads to exact specs", "Pool excavation for all major pool builders", "Commercial pad prep for retail and office", "Retention pond excavation to engineering plans", "Multi-phase development site work", "Builder-friendly scheduling and communication"], linkText: "View our completed projects", linkTo: "/projects" }],
  },
  {
    slug: "site-grading", icon: "Ruler", title: "Site Grading", order: 3,
    tagline: "Precision laser-guided grading for foundation pads, drainage slopes, and level building surfaces. Florida soil demands expert grading.",
    seo: { title: "Site Grading & Laser Grading Services | Bradenton & Sarasota FL", description: "Laser-guided precision site grading for foundations, driveways, and commercial pads in Bradenton, Sarasota, and Southwest Florida. Build-Ready Guarantee. Free estimates — (941) 290-7208." },
    description: ["Site grading is where precision matters most. Even small errors in elevation create problems — pooling water, uneven foundations, failed inspections. Our laser-guided grading systems achieve accuracy within fractions of an inch, ensuring every pad, slope, and drainage path meets exact specifications.", "We provide rough grading for initial site shaping and fine grading for final pad preparation. Our operators read plans, understand elevations, and deliver the grades your foundation requires — without the guesswork.", "Whether it's a single-family home pad or a multi-acre commercial site, precision grading is what separates a project that passes inspection from one that doesn't."],
    features: ["Laser-guided precision grading", "Foundation pad preparation", "Rough & fine grading", "Drainage slope creation", "Driveway & parking grading", "Elevation verification", "Cut-and-fill balancing", "Compaction testing coordination", "Final grade certification", "Re-grading and corrections"],
    process: [{ title: "Elevation Review", desc: "Review engineering plans and confirm target elevations with surveyor stakes." }, { title: "Rough Grade", desc: "Move earth to establish approximate elevations and overall site shape." }, { title: "Fine Grade", desc: "Use laser-guided systems to achieve exact pad and drainage elevations." }, { title: "Verify & Certify", desc: "Confirm grades meet specs, compact as needed, and prepare for inspection." }],
    guarantee: { title: "Build-Ready Guarantee", description: "Every grading project passes inspection. If our grading work doesn't pass your foundation inspection, we return to correct it at zero cost." },
    faq: [{ question: "What is laser grading?", answer: "Laser grading uses a rotating laser level and machine-mounted receiver to achieve elevation accuracy within fractions of an inch. It ensures consistent, precise grades across the entire site." }, { question: "How is grading different from excavation?", answer: "Excavation involves digging and removing earth. Grading is shaping the earth to precise elevations. We often do both on the same project — excavate first, then grade to final specs." }, { question: "Why is grading so important in Florida?", answer: "Florida's flat terrain means water doesn't naturally drain away from structures. Proper grading creates the slopes needed to direct water away from foundations and prevent pooling." }, { question: "Do you handle re-grading?", answer: "Yes. We handle re-grading for sites with settling, drainage problems, or grade changes. We assess the existing conditions and bring everything to the correct elevation." }],
    serviceAreaIntro: "Our laser-guided site grading services are available across Southwest Florida. Precision grading is critical in Florida's flat terrain — click a city below to learn more about grading projects in your area.",
    seoContent: [{ heading: "Why Laser-Guided Grading Matters in Florida", paragraphs: ["In most of the country, natural terrain provides some drainage. In Florida, the land is flat. This means every inch of grade has to be intentionally created — and even small errors lead to water problems, foundation issues, and failed inspections.", "Our laser-guided grading systems remove human error from the equation. The rotating laser establishes a reference plane, and machine-mounted receivers guide the blade to exact elevations. The result is consistent, verifiable grades across the entire site.", "This technology, combined with operators who have graded hundreds of Florida pads, delivers the precision that builders need and inspectors require."], bullets: ["Sub-inch elevation accuracy", "Consistent grades across entire site", "Reduced re-work and corrections", "Faster inspections and approvals", "Proper drainage slope verification", "Engineering spec compliance"], linkText: "Learn about our drainage solutions", linkTo: "/services/drainage" }, { heading: "Grading for Residential and Commercial Projects", paragraphs: ["Residential grading typically involves single-lot pad preparation — establishing the correct elevation for a slab or stem-wall foundation, plus drainage slopes that move water away from the structure. Accuracy here prevents expensive foundation repairs down the road.", "Commercial grading operates at a larger scale with tighter tolerances. Parking lots need proper grades for drainage. Building pads need precise elevations for steel erection. Retention areas need exact capacity. Our commercial grading team handles the complexity and scale these projects demand."], bullets: ["Single-family home pad grading", "Multi-lot subdivision grading", "Commercial building pad preparation", "Parking lot and driveway grading", "Retention area shaping", "Road and infrastructure grading"] }],
  },
  {
    slug: "drainage", icon: "Droplets", title: "Drainage Solutions", order: 4,
    tagline: "Complete drainage system design and installation. French drains, water redirection, and stormwater management for Florida properties.",
    seo: { title: "Drainage Solutions & Water Management | Bradenton & Sarasota FL", description: "French drains, stormwater management, retention ponds, and erosion control in Bradenton, Sarasota, and Southwest Florida. Permanent fix guarantee. Call (941) 290-7208." },
    description: ["Water is the #1 enemy of Florida construction and property. Standing water erodes foundations, destroys landscaping, breeds mosquitoes, and creates liability. Effective drainage doesn't happen by accident — it requires proper grading, the right drain systems, and knowledge of where to send the water.", "We design and install complete drainage solutions — from simple yard regrading to complex French drain networks and retention systems. Every solution is designed for Florida's 50+ inches of annual rainfall and our unique flat terrain.", "Our drainage work includes initial assessment, system design, installation, and verification testing. We solve the problem permanently, not just move it."],
    features: ["French drain systems", "Surface drain installation", "Yard & property regrading", "Retention pond grading", "Catch basin installation", "Downspout management", "Swale construction", "Erosion control", "Stormwater compliance", "Culvert installation"],
    process: [{ title: "Assessment", desc: "Evaluate the drainage problem, identify causes, and determine where water should be directed." }, { title: "Design", desc: "Design a drainage solution that handles current water volume with capacity for heavy storms." }, { title: "Install", desc: "Excavate trenches, install drainage pipe, grade to proper slopes, and backfill." }, { title: "Verify", desc: "Test the system with water to confirm proper flow and capacity before final cleanup." }],
    guarantee: { title: "Permanent Fix Guarantee", description: "We don't patch drainage problems — we solve them. If the drainage system we install fails to manage water as designed within the first year, we correct it free of charge." },
    faq: [{ question: "How do I know if I have a drainage problem?", answer: "Signs include standing water after rain, soggy yard areas, water stains on foundation, erosion patterns, or musty smell. If water stays on your property more than 24 hours after rain, you likely need professional drainage." }, { question: "What is a French drain?", answer: "A French drain is a gravel-filled trench with a perforated pipe that collects and redirects groundwater. It's one of the most effective solutions for subsurface water problems in Florida." }, { question: "How much does a drainage system cost?", answer: "Costs vary widely based on the problem. Simple regrading might be $1,000-$2,000, while a full French drain system typically runs $3,000-$8,000. We provide detailed estimates after assessment." }, { question: "Will it work during heavy Florida storms?", answer: "We design every system to handle Florida's heaviest rainfall. Our solutions account for the 50+ inches of rain we receive annually, plus capacity for tropical storms." }],
    serviceAreaIntro: "Drainage problems are common across Southwest Florida due to our flat terrain and heavy rainfall. We provide professional drainage solutions in every community we serve.",
    seoContent: [{ heading: "Understanding Florida Drainage Challenges", paragraphs: ["Florida's flat terrain, sandy soil, and heavy rainfall create a perfect storm for drainage problems. Unlike hilly regions where gravity naturally moves water, Florida properties need engineered drainage solutions to protect structures and maintain usable outdoor spaces.", "The most common problems we see are standing water after rain, foundation erosion, soggy lawn areas, and neighbor runoff issues. These aren't just inconveniences — they're threats to your property's structural integrity and value.", "Our approach is to solve the root cause, not just treat symptoms. We assess the entire water flow pattern around your property and design solutions that handle water from the point of entry to the point of discharge."], bullets: ["50+ inches annual rainfall management", "Flat terrain drainage engineering", "Sandy soil percolation assessment", "High water table mitigation", "Foundation protection systems", "Florida code-compliant solutions"], linkText: "Learn about our site grading services", linkTo: "/services/site-grading" }, { heading: "Drainage Solutions for Builders and Property Owners", paragraphs: ["For builders, proper drainage is part of the foundation inspection. Our drainage grading ensures water flows away from structures at the slopes required by code. We coordinate with foundation contractors and inspectors to get it right the first time.", "For property owners dealing with existing drainage problems, we offer assessment, design, and installation services. Whether it's a French drain for a soggy yard, regrading to redirect water flow, or a catch basin system for driveway flooding, we solve water problems permanently."], bullets: ["New construction drainage design", "Existing property drainage correction", "French drain installation", "Surface and subsurface systems", "Code-compliant grade slopes", "Emergency drainage response"] }],
  },
  {
    slug: "demolition", icon: "Building2", title: "Demolition", order: 5,
    tagline: "Safe, efficient structure demolition with complete debris removal and site cleanup. We prepare your site for what comes next.",
    seo: { title: "Demolition Services & Structure Removal | Bradenton & Sarasota FL", description: "Safe residential and commercial demolition, debris removal, and complete site cleanup in Bradenton, Sarasota, and Southwest Florida. Free estimates — (941) 290-7208." },
    description: ["Whether you're removing an old structure to build new, clearing storm damage, or preparing a site for development, our demolition service handles the entire process — from initial assessment through final site cleanup.", "We perform selective demolition for renovation projects and complete demolition for site redevelopment. Our operators are trained in safe demolition practices, and we manage all debris hauling and disposal.", "Every demolition project includes complete site cleanup. When we're done, you have a clean, ready-to-build lot — not a debris field."],
    features: ["Residential structure demolition", "Commercial building demolition", "Interior selective demolition", "Mobile home removal", "Concrete removal", "Foundation removal", "Debris hauling & disposal", "Asbestos coordination", "Site cleanup & grading", "Permit coordination"],
    process: [{ title: "Assessment", desc: "Evaluate the structure, identify hazards, and plan the demolition sequence." }, { title: "Permits & Prep", desc: "Obtain demolition permits, disconnect utilities, and set up safety zones." }, { title: "Demolition", desc: "Execute demolition using appropriate equipment and methods for the structure." }, { title: "Cleanup", desc: "Remove all debris, grade the site, and leave a clean, build-ready lot." }],
    guarantee: { title: "Clean Site Guarantee", description: "After demolition, you'll have a clean lot — not a debris field. We remove all materials, grade the site, and leave it ready for your next project." },
    faq: [{ question: "What structures can you demolish?", answer: "We handle residential homes, mobile homes, garages, sheds, commercial buildings, concrete structures, and interior selective demolition. We assess each structure individually." }, { question: "Do you handle permits?", answer: "Yes. Demolition permits are required in all local municipalities. We coordinate the permitting process as part of our service." }, { question: "What about asbestos?", answer: "If asbestos is suspected, we coordinate with licensed asbestos abatement contractors before demolition begins. This is a critical safety step we never skip." }, { question: "How long does demolition take?", answer: "A typical residential demolition takes 2-3 days including cleanup. Larger or more complex structures may take longer. We provide a timeline during the estimate." }],
    serviceAreaIntro: "Our demolition services are available throughout Sarasota, Manatee, and surrounding counties. Every project includes complete debris removal and site cleanup.",
    seoContent: [{ heading: "Professional Demolition in Southwest Florida", paragraphs: ["Demolition is more than just knocking down a building. It requires planning, safety protocols, environmental considerations, and proper disposal. In Florida, demolition also involves managing potential hazards like asbestos in older structures and working within strict local permit requirements.", "Our demolition team approaches every project with a detailed plan — assessing the structure, identifying potential hazards, coordinating utility disconnects, and planning the sequence of work to maximize safety and efficiency. This methodical approach is why we complete demolition projects safely and on time.", "After the structure is down, our work isn't done. Complete debris removal, site grading, and cleanup are included in every demolition project. When we leave, you have a clean lot ready for whatever comes next."], bullets: ["Full safety assessment before work begins", "Licensed and insured demolition crew", "Utility disconnect coordination", "Environmental compliance", "Complete debris hauling and disposal", "Post-demolition site grading"], linkText: "Learn about our land clearing services", linkTo: "/services/land-clearing" }, { heading: "Types of Demolition Projects We Handle", paragraphs: ["Our demolition services cover the full range of residential and commercial needs in the Sarasota-Bradenton area. Residential demolition includes removing older homes for new construction, clearing storm-damaged structures, and mobile home removal. These projects require care to protect neighboring properties and maintain clean work zones.", "Commercial demolition involves larger structures, more complex logistics, and often environmental considerations. We work with developers, property owners, and general contractors to coordinate demolition within larger project schedules. Our equipment fleet handles structures from small garages to large commercial buildings."], bullets: ["Single-family home demolition", "Mobile home and manufactured home removal", "Commercial building teardown", "Interior gut-out for renovation", "Concrete and foundation removal", "Pool demolition and fill"] }],
  },
  {
    slug: "trenching", icon: "Cable", title: "Utility Trenching", order: 6,
    tagline: "Code-compliant utility trenching for plumbing, electrical, septic, and drainage. Dug to spec, inspection-ready every time.",
    seo: { title: "Utility Trenching & Pipe Installation | Bradenton & Sarasota FL", description: "Code-compliant utility trenching for water, sewer, electric, and gas lines in Bradenton, Sarasota, and Southwest Florida. Free estimates — (941) 290-7208." },
    description: ["Underground utilities — water, sewer, electric, gas, and communications — all require trenches dug to specific depths, widths, and slopes. Our utility trenching service ensures every trench meets code requirements and is ready for pipe or conduit installation.", "We work with plumbers, electricians, and utility companies to coordinate trenching with their installation schedules. Proper coordination means utilities go in efficiently without waiting on excavation.", "Our trenching equipment ranges from compact trenchers for tight spaces to excavators for larger utility runs. We match the right equipment to your project's access and depth requirements."],
    features: ["Water line trenching", "Sewer & septic trenching", "Electric conduit trenching", "Gas line trenching", "Drainage pipe trenching", "Communication line trenching", "Trench backfill & compaction", "Bore pit excavation", "Utility locate coordination", "Code-depth compliance"],
    process: [{ title: "Utility Locate", desc: "Coordinate with 811 and local utilities to mark all existing underground services." }, { title: "Trench Plan", desc: "Review plans for depth, width, slope, and bedding requirements for each utility." }, { title: "Dig to Spec", desc: "Trench to exact code depths and widths, maintaining proper slope for gravity-fed lines." }, { title: "Ready for Install", desc: "Leave clean, properly graded trenches ready for plumber or electrician." }],
    guarantee: { title: "Code-Depth Guarantee", description: "Every trench meets or exceeds code-required depths and widths. If an inspector measures a deficiency in our trench work, we correct it at no cost." },
    faq: [{ question: "What depths do you trench?", answer: "Depths depend on the utility type and local code. Water lines typically require 18-24 inches, sewer lines 12-36 inches depending on slope, and electric typically 24 inches. We trench to whatever depth your plans and code require." }, { question: "Do you coordinate with trades?", answer: "Yes. We schedule trenching to align with your plumber's and electrician's installation timing. This coordination prevents trenches from sitting open longer than necessary." }, { question: "Can you trench in tight spaces?", answer: "Yes. We have compact trenchers and mini excavators for tight residential lots, narrow side yards, and areas with limited access." }, { question: "Do you handle backfill?", answer: "Yes. After utilities are installed and inspected, we backfill and compact to proper density. Proper backfill prevents settling and future surface problems." }],
    serviceAreaIntro: "We provide code-compliant utility trenching services across Southwest Florida. Our crews coordinate with local trades and inspectors to keep your project on schedule.",
    seoContent: [{ heading: "Utility Trenching for Florida Construction", paragraphs: ["Every new construction project in Florida requires underground utilities — water, sewer, electric, and often gas. Each utility has specific code requirements for trench depth, width, bedding material, and backfill compaction. Getting these wrong means failed inspections and costly re-work.", "Our trenching crews work daily with plumbers, electricians, and utility companies across Sarasota and Manatee counties. We know the local code requirements for every utility type, and we dig every trench to meet or exceed those requirements.", "Coordination is key in utility trenching. Trenches need to be open when the plumber or electrician is ready to install, and backfilled promptly after inspection. Our scheduling system ensures your trades aren't waiting on us — and we're not waiting on them."], bullets: ["Code-compliant depths for all utilities", "Proper trench slope for gravity-fed lines", "Bedding material coordination", "Compact backfill to prevent settling", "Trade scheduling coordination", "811 utility locate management"], linkText: "Learn about our drainage solutions", linkTo: "/services/drainage" }, { heading: "Residential and Commercial Trenching", paragraphs: ["Residential trenching typically involves water supply, sewer lateral, and electric service runs from the street to the house. In Florida, these runs often cross driveways, landscaping, and existing utilities — requiring careful planning and precise execution.", "Commercial trenching involves larger pipe sizes, deeper trenches, and more complex routing. We handle fire line trenching, grease trap connections, stormwater pipe runs, and multi-utility trench corridors. Our equipment handles both the precision needed for residential and the scale required for commercial."], bullets: ["Residential water and sewer laterals", "Electric and gas service runs", "Septic system trenching", "Commercial fire line trenching", "Stormwater pipe installation", "Multi-utility corridor trenching"] }],
  },
];

const services = servicesData.map((s) => ({
  _id: `service-${s.slug}`,
  _type: "service",
  title: s.title,
  slug: { _type: "slug", current: s.slug },
  icon: s.icon,
  tagline: s.tagline,
  description: toPortableText(s.description),
  features: s.features,
  process: s.process.map((p, i) => ({ _key: `step${i}`, _type: "processStep", title: p.title, description: p.desc })),
  guarantee: s.guarantee,
  faq: s.faq.map((f, i) => ({ _key: `faq${i}`, _type: "faqItem", ...f })),
  seoContent: s.seoContent?.map((sc, i) => ({ _key: `seo${i}`, _type: "seoContentBlock", ...sc })),
  serviceAreaIntro: s.serviceAreaIntro,
  seo: s.seo,
  order: s.order,
  relatedServices: [],
}));

const serviceRelations = {
  "service-land-clearing": ["service-excavation", "service-site-grading", "service-demolition"],
  "service-excavation": ["service-site-grading", "service-trenching", "service-land-clearing"],
  "service-site-grading": ["service-excavation", "service-drainage", "service-land-clearing"],
  "service-drainage": ["service-site-grading", "service-trenching", "service-excavation"],
  "service-demolition": ["service-land-clearing", "service-excavation", "service-site-grading"],
  "service-trenching": ["service-excavation", "service-drainage", "service-site-grading"],
};

for (const svc of services) {
  const rels = serviceRelations[svc._id];
  if (rels) {
    svc.relatedServices = rels.map((ref) => ({ _type: "reference", _ref: ref, _key: ref }));
  }
}

// ─── Blog Posts ──────────────────────────────────────────────────────
const blogPostsData = [
  { slug: "how-to-prepare-your-lot-for-construction", title: "How to Prepare Your Lot for Construction in Florida", excerpt: "A step-by-step guide to getting your land build-ready, from clearing to final grading, with tips specific to Florida conditions.", date: "2026-02-18", category: "Guides", readTime: "7 min read", content: ["Building a new home or commercial structure in Florida starts long before the first nail is driven. Proper lot preparation is the foundation — literally — of a successful construction project. Here's what you need to know.", "## Step 1: Survey and Plan Review", "Before any equipment touches your property, you need a current survey and an understanding of local requirements. Sarasota and Manatee counties have specific setback, drainage, and tree preservation requirements that affect how your lot is prepared.", "## Step 2: Permitting", "Tree removal, land clearing, and grading often require permits. In Sarasota County, trees over a certain diameter require individual permits. An experienced excavation contractor will coordinate these permits for you.", "## Step 3: Land Clearing", "This involves removing trees, brush, stumps, and debris. In Florida, you'll often encounter dense palmetto, sand pine, and root systems that extend deep into sandy soil. Professional equipment makes this efficient and thorough.", "## Step 4: Rough Grading", "Once cleared, the lot needs rough grading to establish basic elevations and drainage patterns. This is where the overall shape of your building pad begins to take form.", "## Step 5: Utility Trenching", "Before fine grading, underground utilities — water, sewer, electric, and sometimes gas — need trenches dug to code-specified depths. Proper coordination with utility companies is essential.", "## Step 6: Fine Grading & Compaction", "The final step is precision grading using laser-guided systems to achieve exact elevations for your foundation. Proper compaction ensures the soil can support your structure without settling.", "## The Bottom Line", "Proper lot preparation saves time and money throughout the entire construction process. Problems at this stage compound exponentially as the project progresses. Trust an experienced local excavation contractor who understands Florida conditions."] },
  { slug: "florida-drainage-problems-solutions", title: "5 Common Florida Drainage Problems and How to Fix Them", excerpt: "Florida's flat terrain and heavy rainfall create unique drainage challenges. Learn the top 5 problems and professional solutions.", date: "2026-02-04", category: "Tips", readTime: "5 min read", content: ["Florida receives over 50 inches of rain annually, and our flat terrain means water doesn't naturally flow away from structures. Here are the five most common drainage problems we encounter and how to fix them.", "## 1. Standing Water After Rain", "If your yard holds water for more than 24 hours after rain, your grading is insufficient. The solution is re-grading the yard to create proper slope away from structures, often combined with a French drain system.", "## 2. Foundation Erosion", "Water pooling against your foundation erodes soil and can cause structural damage. A combination of proper grading, downspout extensions, and a perimeter French drain redirects water away from the foundation.", "## 3. Soggy Lawn Areas", "Persistent soggy spots indicate poor subsurface drainage. French drains or dry wells installed beneath the surface collect and redirect groundwater to appropriate discharge points.", "## 4. Driveway Flooding", "Low driveways that flood during storms need channel drains or catch basins installed across the driveway entrance to intercept water before it pools.", "## 5. Neighbor's Water Runoff", "When a neighbor's property drains onto yours, a swale or berm along the property line redirects the water. This is a common issue in subdivisions with closely spaced homes.", "## Professional Assessment", "Every drainage problem has a solution. A professional assessment identifies the root cause and designs a system that solves the problem permanently rather than just moving it."] },
  { slug: "choosing-excavation-contractor-florida", title: "How to Choose an Excavation Contractor in Florida", excerpt: "What to look for, what questions to ask, and red flags to avoid when hiring an excavation company for your project.", date: "2026-01-22", category: "Guides", readTime: "6 min read", content: ["Hiring the right excavation contractor sets the tone for your entire construction project. Here's what builders and property owners should look for.", "## Insurance and Licensing", "Always verify that your excavation contractor carries general liability insurance and workers' compensation. Ask for certificates of insurance — a reputable company will provide these without hesitation.", "## Local Experience", "Florida soil conditions vary dramatically by region. A contractor with local experience understands soil types, water tables, rock layers, and county-specific permitting requirements.", "## Equipment and Capability", "Look for a company with modern, well-maintained equipment. The right equipment for the job matters — using oversized or undersized machines costs time and money.", "## References from Builders", "The best reference for an excavation contractor is a builder who uses them repeatedly. Builders depend on reliable excavation to keep their projects on schedule.", "## Transparent Estimates", "A professional estimate should include detailed scope of work, materials, haul-off costs, and timeline. Vague estimates lead to surprise costs mid-project.", "## Communication", "Your excavation contractor should communicate clearly and proactively about schedule, progress, and any issues encountered. Poor communication is the #1 complaint in construction."] },
  { slug: "land-clearing-cost-florida", title: "How Much Does Land Clearing Cost in Florida? (2026 Guide)", excerpt: "Detailed breakdown of land clearing costs in Florida, including factors that affect pricing and how to budget for your project.", date: "2026-01-08", category: "Cost Guides", readTime: "8 min read", content: ["Land clearing is one of the first expenses in any new construction project, and understanding costs helps you budget accurately.", "## Average Cost Ranges", "In Southwest Florida, residential land clearing typically costs between $1,500 and $5,000 for a standard quarter-acre lot. Heavily wooded or larger lots can range from $3,000 to $15,000+.", "## Factors That Affect Cost", "Lot size, vegetation density, tree size and species, stump removal requirements, debris hauling distance, access conditions, and permit requirements all influence the final cost.", "## Cost Breakdown", "- Tree removal: $200-$2,000+ per tree depending on size\n- Brush clearing: $500-$2,000 per quarter acre\n- Stump grinding: $100-$400 per stump\n- Root grubbing: $500-$1,500 per quarter acre\n- Debris hauling: $300-$800 per load\n- Permits: $50-$500 depending on municipality", "## How to Save Money", "Get multiple estimates, clear brush yourself if possible, time your project during slower seasons (summer), and combine services — clearing plus grading from the same contractor saves mobilization costs."] },
  { slug: "site-grading-importance-florida-construction", title: "Why Site Grading Is the Most Critical Step in Florida Construction", excerpt: "Improper grading causes foundation failures, drainage problems, and failed inspections. Here's why grading matters more in Florida.", date: "2025-12-15", category: "Industry", readTime: "5 min read", content: ["Ask any experienced Florida builder what causes the most problems in construction, and grading will be near the top of the list. Here's why.", "## Florida's Unique Challenges", "Our flat terrain, sandy soil, high water tables, and heavy rainfall create conditions where even small grading errors cause significant problems. A quarter-inch of elevation difference can redirect hundreds of gallons of water.", "## Foundation Failures", "Improper grading leads to uneven settling, foundation cracks, and structural damage. In Florida's sandy soil, proper compaction and elevation are essential for foundation integrity.", "## Drainage Disasters", "Without correct drainage slopes, rainwater pools around structures, erodes soil, and creates the perfect environment for mold and structural damage. Florida code requires specific drainage grades for good reason.", "## Inspection Failures", "Failed foundation inspections are expensive in time and money. Re-grading after other work has begun disrupts the entire project schedule.", "## The Laser Grading Advantage", "Modern laser-guided grading systems achieve precision within fractions of an inch. This technology, combined with experienced operators, ensures every pad meets exact specifications the first time."] },
  { slug: "pool-excavation-what-to-expect", title: "Pool Excavation in Florida: What to Expect", excerpt: "Planning a pool? Here's everything you need to know about the excavation phase, from dig day to backfill.", date: "2025-11-28", category: "Guides", readTime: "6 min read", content: ["Pool excavation is one of the most exciting phases of pool construction — watching your pool take shape in the ground. Here's what the process looks like.", "## Before Excavation", "Before digging begins, your pool builder should have engineering plans approved, permits in hand, and utility locates completed. The pool layout is staked in the ground for the excavator operator.", "## The Dig", "A skilled excavator operator shapes the pool hole according to the design — including shelves, deep ends, and any custom features. Most residential pool digs take 1-2 days.", "## Soil and Rock", "Excess soil must be hauled away or spread on the property. In some Florida areas, rock layers require specialized equipment. Soil conditions are assessed during the estimate to account for these possibilities.", "## After Excavation", "Once the hole is shaped, the pool builder begins steel, plumbing, and shell installation. The excavation contractor may return for backfill and deck grading after the pool shell is complete.", "## Cost Considerations", "Pool excavation typically costs $1,500-$5,000 depending on size, depth, access, soil conditions, and hauling requirements. Rock excavation adds to the cost."] },
];

const blogPosts = blogPostsData.map((p) => ({
  _id: `blog-${p.slug}`,
  _type: "blogPost",
  title: p.title,
  slug: { _type: "slug", current: p.slug },
  excerpt: p.excerpt,
  date: p.date,
  category: { _type: "reference", _ref: categoryMap[p.category] },
  readTime: p.readTime,
  content: toPortableText(p.content),
}));

// ─── Press Releases ─────────────────────────────────────────────────
const pressReleasesData = [
  { slug: "lethermon-reaches-200-projects", title: "Lethermon Grade Excavations Completes 200th Project Milestone", date: "2026-01-15", excerpt: "Bradenton-based excavation company celebrates 200 completed projects across Sarasota, Manatee, and Charlotte counties.", content: "BRADENTON, FL — Lethermon Grade Excavations, a full-service excavation and site preparation contractor serving Southwest Florida, announced the completion of its 200th project since founding. The milestone project, a commercial site preparation in Lakewood Ranch, represents the company's continued growth in the Sarasota-Bradenton market. 'Reaching 200 projects is a testament to the trust builders and developers place in our team,' said owner Kameron Lethermon. 'Every project receives the same attention to detail whether it's our first or our 200th.'" },
  { slug: "lethermon-expands-equipment-fleet", title: "Lethermon Grade Excavations Expands Equipment Fleet", date: "2025-10-22", excerpt: "Company adds new excavator and grading equipment to support growing demand in Southwest Florida construction market.", content: "BRADENTON, FL — Lethermon Grade Excavations has expanded its equipment fleet with the addition of a new excavator and laser-guided grading system. The expansion supports increasing demand for excavation and site preparation services across the Sarasota-Bradenton region. 'Investing in modern equipment means better results and faster turnaround for our clients,' said Kameron Lethermon. 'The new laser grading system achieves even greater precision for foundation pads and drainage slopes.'" },
  { slug: "lethermon-partners-local-builders", title: "Lethermon Grade Excavations Establishes Builder Partnership Program", date: "2025-08-10", excerpt: "New program offers preferred scheduling and pricing for builders committed to ongoing excavation partnerships.", content: "BRADENTON, FL — Lethermon Grade Excavations has launched a Builder Partnership Program designed to streamline the excavation process for builders with ongoing project needs. The program offers preferred scheduling, volume pricing, and dedicated crew availability for participating builders. 'Builders need a reliable excavation partner they can count on project after project,' said Kameron Lethermon. 'Our Builder Partnership Program formalizes that relationship with guaranteed availability and consistent pricing.'" },
];

const pressReleases = pressReleasesData.map((pr) => ({
  _id: `press-${pr.slug}`,
  _type: "pressRelease",
  title: pr.title,
  slug: { _type: "slug", current: pr.slug },
  date: pr.date,
  excerpt: pr.excerpt,
  content: toPortableText([pr.content]),
}));

// ─── Job Listings ───────────────────────────────────────────────────
const jobListings = [
  { _id: "job-equipment-operator", _type: "jobListing", title: "Equipment Operator", type: "Full-Time", location: "Bradenton, FL", description: "Experienced excavator, bulldozer, and skid steer operator for residential and commercial site preparation projects.", isActive: true },
  { _id: "job-cdl-driver", _type: "jobListing", title: "CDL Truck Driver", type: "Full-Time", location: "Bradenton, FL", description: "CDL-A driver for dump truck and equipment hauling. Local routes, home every night.", isActive: true },
  { _id: "job-site-laborer", _type: "jobListing", title: "Site Laborer", type: "Full-Time", location: "Bradenton, FL", description: "General site labor including grade checking, pipe installation, site cleanup, and equipment maintenance.", isActive: true },
  { _id: "job-estimator", _type: "jobListing", title: "Estimator / Project Coordinator", type: "Full-Time", location: "Bradenton, FL", description: "Experienced construction estimator to prepare excavation bids and coordinate project scheduling.", isActive: true },
];

// ─── Run Migration ──────────────────────────────────────────────────
async function migrate() {
  const transaction = client.transaction();

  console.log("Creating company settings...");
  transaction.createOrReplace(companySettings);

  console.log(`Creating ${categories.length} categories...`);
  for (const cat of categories) transaction.createOrReplace(cat);

  console.log(`Creating ${reviews.length} reviews...`);
  for (const rev of reviews) transaction.createOrReplace(rev);

  console.log(`Creating ${serviceAreas.length} service areas...`);
  for (const area of serviceAreas) transaction.createOrReplace(area);

  console.log(`Creating ${services.length} services...`);
  for (const svc of services) transaction.createOrReplace(svc);

  console.log(`Creating ${blogPosts.length} blog posts...`);
  for (const post of blogPosts) transaction.createOrReplace(post);

  console.log(`Creating ${pressReleases.length} press releases...`);
  for (const pr of pressReleases) transaction.createOrReplace(pr);

  console.log(`Creating ${jobListings.length} job listings...`);
  for (const job of jobListings) transaction.createOrReplace(job);

  console.log("\nCommitting transaction...");
  const result = await transaction.commit();
  console.log(`Migration complete! ${result.results.length} documents created/updated.`);
  console.log("\nNOTE: Images must be uploaded manually through Sanity Studio.");
  console.log("Each service, blog post, and service area has image fields ready for upload.");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
