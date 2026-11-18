import {
    BriefcaseBusiness,
    Building2,
    Laptop,
    Plane,
    Truck,
  } from "lucide-react";
  
  import type { LucideIcon } from "lucide-react";
  
  import mobilityImage from "@/assets/folley-mobility.jpg";
  import propertyImage from "@/assets/folley-property.jpg";
  import technologyImage from "@/assets/folley-technology.jpg";
  import fashionImage from "@/assets/folley-fashion.jpg";
  import logisticsImage from "@/assets/folley-logistics.jpg";
  
  export type Division = {
    slug: string;
    title: string;
    titleFr: string;
    short: string;
    shortFr: string;
    intro: string;
    introFr: string;
    services: string[];
    servicesFr: string[];
    image: string;
    imageAlt: string;
    Icon: LucideIcon;
  };
  
  export const divisions: Division[] = [
    {
      slug: "mobility-travel",
  
      title: "Transport & Tourism",
      titleFr: "Transport & Tourisme",
  
      short:
        "Vehicle rental, transportation of goods, people and mail, airport facilitation and travel tickets.",
  
      shortFr:
        "Location de véhicules, transport de biens, de personnes et de courrier, facilitation aéroportuaire et billets de voyage.",
  
      intro:
        "Folley Group provides transport and tourism services including vehicle rental, transportation of goods, people and mail, airport facilitation and travel ticket assistance.",
  
      introFr:
        "Folley Group propose des services de transport et de tourisme comprenant la location de véhicules, le transport de biens, de personnes et de courrier, la facilitation aéroportuaire et l’assistance pour les billets de voyage.",
  
      services: [
        "Vehicle rental",
        "Transportation of goods",
        "Passenger transportation",
        "Mail transportation",
        "Airport facilitation",
        "Travel ticket assistance",
      ],
  
      servicesFr: [
        "Location de véhicules",
        "Transport de biens",
        "Transport de personnes",
        "Transport de courrier",
        "Facilitation aéroportuaire",
        "Assistance pour les billets de voyage",
      ],
  
      image: mobilityImage,
  
      imageAlt:
        "Transport and tourism services provided by Folley Group",
  
      Icon: Plane,
    },
  
    {
      slug: "property-hospitality",
  
      title: "Real Estate & Hospitality",
      titleFr: "Immobilier & Hôtellerie",
  
      short:
        "Housing search and hotel services for individuals and businesses.",
  
      shortFr:
        "Recherche de logement et services hôteliers pour les particuliers et les entreprises.",
  
      intro:
        "Folley Group provides real estate and hospitality services, including housing search and hotel services.",
  
      introFr:
        "Folley Group propose des services immobiliers et hôteliers, notamment la recherche de logement et les services hôteliers.",
  
      services: [
        "Real estate services",
        "Housing search",
        "Hotel services",
      ],
  
      servicesFr: [
        "Services immobiliers",
        "Recherche de logement",
        "Services hôteliers",
      ],
  
      image: propertyImage,
  
      imageAlt:
        "Real estate and hospitality services provided by Folley Group",
  
      Icon: Building2,
    },
  
    {
      slug: "technology-telecoms",
  
      title: "Telecoms & IT",
      titleFr: "Télécoms & Informatique",
  
      short:
        "Mobile and internet services, computer services, maintenance and network solutions.",
  
      shortFr:
        "Services mobiles et internet, services informatiques, maintenance et solutions réseau.",
  
      intro:
        "Folley Group provides telecommunications and IT services including mobile and internet services, computer services, maintenance and network services.",
  
      introFr:
        "Folley Group propose des services de télécommunications et d’informatique, notamment des services mobiles et internet, des services informatiques, la maintenance et les services réseau.",
  
      services: [
        "Mobile services",
        "Internet services",
        "Computer services",
        "Maintenance",
        "Network services",
      ],
  
      servicesFr: [
        "Services mobiles",
        "Services internet",
        "Services informatiques",
        "Maintenance",
        "Services réseau",
      ],
  
      image: technologyImage,
  
      imageAlt:
        "Telecommunications and IT services provided by Folley Group",
  
      Icon: Laptop,
    },
  
    {
      slug: "trade-commerce",
  
      title: "General Trade",
      titleFr: "Commerce Général",
  
      short:
        "Sale and transfer of businesses within the region.",
  
      shortFr:
        "Vente et transfert d’entreprises dans la région.",
  
      intro:
        "Folley Group provides general trade services, including the sale and transfer of businesses within the region.",
  
      introFr:
        "Folley Group propose des services de commerce général, notamment la vente et le transfert d’entreprises dans la région.",
  
      services: [
        "General trade",
        "Sale of businesses",
        "Transfer of businesses within the region",
      ],
  
      servicesFr: [
        "Commerce général",
        "Vente d’entreprises",
        "Transfert d’entreprises dans la région",
      ],
  
      image: logisticsImage,
  
      imageAlt:
        "General trade services provided by Folley Group",
  
      Icon: BriefcaseBusiness,
    },
  
    {
      slug: "logistics-partnerships",
  
      title: "Logistics & Subcontracting",
      titleFr: "Logistique & Sous-traitance",
  
      short:
        "Logistics, subcontracting and partnerships with companies and contractors.",
  
      shortFr:
        "Logistique, sous-traitance et partenariats avec des entreprises et des entrepreneurs.",
  
      intro:
        "Folley Group provides logistics and subcontracting services and works in partnership with companies and contractors.",
  
      introFr:
        "Folley Group propose des services de logistique et de sous-traitance et travaille en partenariat avec des entreprises et des entrepreneurs.",
  
      services: [
        "Logistics",
        "Subcontracting",
        "Partnerships with companies",
        "Partnerships with contractors",
      ],
  
      servicesFr: [
        "Logistique",
        "Sous-traitance",
        "Partenariats avec des entreprises",
        "Partenariats avec des entrepreneurs",
      ],
  
      image: logisticsImage,
  
      imageAlt:
        "Logistics and subcontracting services provided by Folley Group",
  
      Icon: Truck,
    },
  ];
  
  export function divisionHref(
    slug: Division["slug"]
  ):
    | "/businesses"
    | "/businesses/mobility-travel"
    | "/businesses/property-hospitality"
    | "/businesses/technology-telecoms"
    | "/businesses/trade-commerce"
    | "/businesses/logistics-partnerships" {
    switch (slug) {
      case "mobility-travel":
        return "/businesses/mobility-travel";
  
      case "property-hospitality":
        return "/businesses/property-hospitality";
  
      case "technology-telecoms":
        return "/businesses/technology-telecoms";
  
      case "trade-commerce":
        return "/businesses/trade-commerce";
  
      case "logistics-partnerships":
        return "/businesses/logistics-partnerships";
  
      default:
        return "/businesses";
    }
  }
  
  export const brands = [
    {
      name: "Folley Collection",
      category: "Clothing · Online Shop",
      categoryFr: "Habillement · Boutique en ligne",
      url: "https://folleycollection.netlify.app/",
      instagram:
        "https://www.instagram.com/folleycollection_",
      image: fashionImage,
      alt: "Folley Collection clothing and fashion",
    },
  
    {
      name: "Folley Tech",
      category:
        "Phones & Electronic Accessories · Online Shop",
      categoryFr:
        "Téléphones & Accessoires électroniques · Boutique en ligne",
      url: "https://folleytech.netlify.app/",
      instagram:
        "https://www.instagram.com/folleytech",
      image: technologyImage,
      alt: "Folley Tech phones and electronic accessories",
    },
  ];
  
  export const navItems = [
    {
      to: "/",
      key: "home" as const,
    },
    {
      to: "/about",
      key: "about" as const,
    },
    {
      to: "/businesses",
      key: "businesses" as const,
    },
    {
      to: "/brands",
      key: "brands" as const,
    },
    {
      to: "/partnerships",
      key: "partnerships" as const,
    },
  ];