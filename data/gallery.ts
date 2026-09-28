export type GalleryCategory =
  | "CNC & Laser Cutting"
  | "Stockyard & Plates"
  | "Dispatch & Logistics"
  | "Testing & Quality UT"
  | "Finished Components";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  badge: string;
  spec: string;
  description: string;
};

export const galleryCategories: GalleryCategory[] = [
  "CNC & Laser Cutting",
  "Stockyard & Plates",
  "Dispatch & Logistics",
  "Testing & Quality UT",
  "Finished Components",
];

export const galleryItems: GalleryItem[] = [
  // 1. CNC & Laser Cutting
  {
    id: "g-flame-1",
    title: "Multi-Torch Heavy CNC Flame Cutting",
    category: "CNC & Laser Cutting",
    image: "/images/heavy-plate-cutting.jpg",
    badge: "Up to 300 mm Plates",
    spec: "Oxy-Fuel Multi-Torch CNC",
    description: "Deep penetration precision oxy-fuel cutting for heavy machine beds, press frames, and industrial counterweights.",
  },
  {
    id: "g-flame-2",
    title: "CNC Profile Cutting in Progress",
    category: "CNC & Laser Cutting",
    image: "/images/cnc-profile-cutting.jpg",
    badge: "Bed: 3000 × 12000 mm",
    spec: "Auto CAD/CAM Nesting",
    description: "Automated multi-head profile cutting executing CAD/CAM nesting plans with minimum scrap and square edges.",
  },
  {
    id: "g-laser-1",
    title: "12 kW High-Speed Fiber Laser Precision Head",
    category: "CNC & Laser Cutting",
    image: "/images/laser-cutting.jpg",
    badge: "±0.1 mm Tolerance",
    spec: "Nitrogen & Oxygen Assist",
    description: "Ultra-fast sheet and plate cutting delivering mirror-finish burr-free edges with zero heat-affected distortion.",
  },
  {
    id: "g-drill-1",
    title: "Heavy Radial Drilling & Flange Machining",
    category: "CNC & Laser Cutting",
    image: "/images/cnc-drilling.jpg",
    badge: "PCD Bolt Hole Drilling",
    spec: "Flanges & Tube Sheets",
    description: "Heavy-duty radial drilling setup for PCD bolt hole patterns, countersinking, and machining on circular steel profiles.",
  },
  {
    id: "g-shed-1",
    title: "Covered Heavy Processing Facility",
    category: "CNC & Laser Cutting",
    image: "/images/facility.jpg",
    badge: "26,000 Sq. Ft. Shed",
    spec: "Vadodara Plant",
    description: "State-of-the-art enclosed processing bay housing 8 CNC cutting stations with dedicated crane access.",
  },

  // 2. Stockyard & Plates
  {
    id: "g-yard-1",
    title: "75,000 Sq. Ft. Certified Steel Plate Storage",
    category: "Stockyard & Plates",
    image: "/images/steel-yard.jpg",
    badge: "2,500+ MT In-Stock",
    spec: "Open Air Heavy Yard",
    description: "Extensive steel yard holding heavy plates from 3 mm to 300 mm thickness from SAIL, Jindal, AM/NS, and Posco.",
  },
  {
    id: "g-stock-1",
    title: "Thickness & Heat Marked Ready Stock",
    category: "Stockyard & Plates",
    image: "/images/steel-stock.jpg",
    badge: "100% Traceability",
    spec: "Heat & Plate Marked",
    description: "Every single plate is labeled with heat number, plate number, thickness, and dimensions for full audit compliance.",
  },
  {
    id: "g-factory-1",
    title: "Main Stockholding Bay & Plate Stacks",
    category: "Stockyard & Plates",
    image: "/images/factory.jpg",
    badge: "Multi-Grade Inventory",
    spec: "Prime Steel Only",
    description: "Grade-segregated storage bays for IS 2062 E250/E350, Sailhard, Hardox 400, and SA516 Gr 70 boiler quality.",
  },

  // 3. Dispatch & Logistics
  {
    id: "g-crane-1",
    title: "20-Ton Overhead EOT Crane Material Handling",
    category: "Dispatch & Logistics",
    image: "/images/crane-handling.jpg",
    badge: "5× 20-Ton Cranes",
    spec: "Electromagnetic & Sling",
    description: "Heavy overhead EOT crane bays enabling scratch-free, safe, and immediate movement of heavy steel plates.",
  },
  {
    id: "g-hydra-1",
    title: "Hydra Mobile Crane Yard Handling",
    category: "Dispatch & Logistics",
    image: "/images/hydra.jpg",
    badge: "Fast Yard Loading",
    spec: "Mobile Handling",
    description: "Specialized mobile Hydra cranes maneuvering profiles and heavy cut components into flatbed trucks.",
  },
  {
    id: "g-dispatch-1",
    title: "Daily Heavy Flatbed Trailer Dispatch",
    category: "Dispatch & Logistics",
    image: "/images/dispatch.jpg",
    badge: "Pan-India Logistics",
    spec: "Secured Transport",
    description: "Dedicated transport staging area for daily dispatches to industrial corridors in Gujarat, Maharashtra, and across India.",
  },
  {
    id: "g-trans-1",
    title: "Secured Long-Distance Trailer Loading",
    category: "Dispatch & Logistics",
    image: "/images/transport.jpg",
    badge: "Project Dispatch",
    spec: "Heavy Haul Fleet",
    description: "Heavy cargo strapping and dunnage protection ensuring all profiles arrive in pristine engineering condition.",
  },

  // 4. Testing & Quality UT
  {
    id: "g-ut-1",
    title: "Level II In-House Ultrasonic (UT) Testing",
    category: "Testing & Quality UT",
    image: "/images/ut-testing.jpg",
    badge: "100% Flaw Detection",
    spec: "ASTM / ASME Standards",
    description: "Certified Level II non-destructive testing checking internal soundness, laminations, and inclusions for pressure vessels.",
  },
  {
    id: "g-thick-1",
    title: "High-Precision Ultrasonic Thickness Gauging",
    category: "Testing & Quality UT",
    image: "/images/thickness-measurement.jpg",
    badge: "Digital Precision Meter",
    spec: "Tolerance Verification",
    description: "Digital multi-point thickness verification verifying plate tolerance before cutting and dispatch.",
  },
  {
    id: "g-insp-1",
    title: "Pre-Dispatch Dimensional Inspection & MTC",
    category: "Testing & Quality UT",
    image: "/images/inspection.jpg",
    badge: "ISO 9001:2015 Assured",
    spec: "Original Mill Test Certs",
    description: "Comprehensive dimensional, squareness, and edge finish inspection verified against client CAD engineering drawings.",
  },

  // 5. Finished Components
  {
    id: "g-comp-1",
    title: "Profile-Cut Machine Base Frames & Gear Blanks",
    category: "Finished Components",
    image: "/images/components.jpg",
    badge: "Engineering Spares",
    spec: "Deburred & Clean",
    description: "Precision cut machine bases, heavy mounting plates, and gear blanks delivered deburred and ready for machining.",
  },
  {
    id: "g-rings-1",
    title: "Heavy Circular Profiles, Rings & Flanges",
    category: "Finished Components",
    image: "/images/cnc-profile-cutting.jpg",
    badge: "PCD Bolt Circles",
    spec: "Pressure Flanges",
    description: "Circular rings and heavy pressure vessel blind flanges profile-cut to exact diameter specifications.",
  },
  {
    id: "g-base-1",
    title: "Heavy Base Plates & Structural Components",
    category: "Finished Components",
    image: "/images/heavy-plate-cutting.jpg",
    badge: "300 mm Capacity",
    spec: "Structural Plates",
    description: "High-strength foundation plates, crane counterweights, and column bases for infrastructure projects.",
  },
];

export const documents = [
  { name: "Company Profile Brochure", icon: "FileText", status: "available" as const },
  { name: "Product & Services Catalog", icon: "BookOpen", status: "available" as const },
  { name: "ISO 9001:2015 Certificate", icon: "ShieldCheck", status: "available" as const, ref: "Cert No. 25RN03AQ" },
  { name: "MSME / UDYAM Registration", icon: "BadgeCheck", status: "available" as const, ref: "UDYAM-GJ-24-0019040" },
  { name: "GST Registration Certificate", icon: "Receipt", status: "available" as const, ref: "GSTIN 24AJGPP9863R1Z5" },
  { name: "Material Test Certificate (Sample MTC)", icon: "FolderCheck", status: "available" as const, ref: "EN 10204 3.1" },
];
