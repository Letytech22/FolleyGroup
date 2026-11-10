import { createContext, useContext, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Headphones,
  Instagram,
  Laptop,
  MapPin,
  Menu,
  Network,
  PackageCheck,
  Plane,
  Smartphone,
  Truck,
  UsersRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/folley-group-hero.jpg";
import mobilityImage from "@/assets/folley-mobility.jpg";
import propertyImage from "@/assets/folley-property.jpg";
import technologyImage from "@/assets/folley-technology.jpg";
import fashionImage from "@/assets/folley-fashion.jpg";
import logisticsImage from "@/assets/folley-logistics.jpg";

type Language = "en" | "fr";
const LanguageContext = createContext<{ language: Language; toggle: () => void } | null>(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("Folley Group pages must be rendered inside FolleySiteShell.");
  return value;
}

const copy = {
  en: {
    home: "Home",
    about: "About",
    businesses: "Our Businesses",
    brands: "Our Brands",
    partnerships: "Partnerships",
    contact: "Contact",
    contactUs: "Contact Us",
    menu: "Open navigation",
    heroEyebrow: "A diversified business group · Goma, DRC",
    heroTitle: "Connecting people, business & opportunities.",
    heroText:
      "Mobility, property, technology and trade—brought together by one trusted regional group.",
    explore: "Explore our businesses",
    discover: "Discover Folley Group",
    scroll: "Scroll to explore",
    introLabel: "One group. Many ways forward.",
    introTitle: "Business solutions, built around connection.",
    introText:
      "Folley Group brings together practical services and growing ventures across the Great Lakes region. Each division opens a clear path to the people, expertise and opportunities you need.",
    businessesKicker: "What we do",
    businessesTitle: "Our businesses",
    businessesText: "One group, connected capabilities. Find the team that fits your next step.",
    viewDivision: "Explore division",
    brandsKicker: "Independent ventures, connected by a shared vision",
    brandsTitle: "Our brands",
    brandsText: "Distinct businesses, brought together within the Folley Group family.",
    visit: "Visit website",
    follow: "Instagram",
    marketsLabel: "Rooted in the region",
    marketsTitle: "Growing across the region.",
    marketsText:
      "Headquartered in Goma, Folley Group is building connections across neighboring markets through business, services and partnerships.",
    headquarters: "Headquarters",
    globalLabel: "Our vision",
    globalTitle: "Building connections beyond borders.",
    globalText:
      "We are working toward a future where people and businesses can move, collaborate and grow with confidence across borders.",
    partnerLabel: "For businesses, contractors & organizations",
    partnerTitle: "Let's build opportunities together.",
    partnerText:
      "Bring us a challenge, a capability or a new opportunity. We welcome practical conversations that help businesses move forward.",
    partnerCta: "Become a partner",
    aboutLink: "Our story",
    trustTitle: "A connected group for a connected region.",
    trust1: "Multiple services under one group",
    trust2: "Regional business network",
    trust3: "Customer-focused approach",
    trust4: "Diverse business capabilities",
    trust5: "Strategic partnerships",
    trust6: "Growing international vision",
    founderLabel: "Leadership",
    founderName: "Rwanika Jean Claude",
    founderRole: "Founder, Folley Group",
    founderText:
      "With a background in Business Information Technology, Jean Claude brings experience spanning IT, computer maintenance, business and project management, data analysis and fashion.",
    founderQuote: "Unity is strength; with God, all things are possible.",
    contactTitle: "Start a conversation.",
    contactText: "Tell us what you are looking for. The right Folley Group team will be ready to help.",
    footerText: "Connecting people, business and opportunities across the Great Lakes region.",
    quickLinks: "Explore",
    reachUs: "Reach us",
    markets: "Our markets",
    copyright: "All rights reserved.",
    formName: "Full name",
    formEmail: "Email address",
    formPhone: "Phone number",
    formService: "Service interested in",
    formMessage: "Your message",
    formPlaceholder: "How can we help?",
    formSend: "Send enquiry",
    formNote: "Your email app will open with your message ready to send.",
    choose: "Choose a service",
    whatsapp: "Chat with Folley Group on WhatsApp",
    divisionContact: "Enquire about this division",
    divisionBack: "All businesses",
    services: "Services",
    related: "Explore other businesses",
    social: "Connect with Folley Group",
    socialText: "Follow our ventures and stay connected.",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    businesses: "Nos activités",
    brands: "Nos marques",
    partnerships: "Partenariats",
    contact: "Contact",
    contactUs: "Nous contacter",
    menu: "Ouvrir la navigation",
    heroEyebrow: "Un groupe diversifié · Goma, RDC",
    heroTitle: "Relier les personnes, les affaires et les opportunités.",
    heroText:
      "Mobilité, immobilier, technologie et commerce réunis au sein d’un groupe régional de confiance.",
    explore: "Découvrir nos activités",
    discover: "Découvrir Folley Group",
    scroll: "Défiler pour découvrir",
    introLabel: "Un groupe. Plusieurs voies d’avenir.",
    introTitle: "Des solutions d’affaires fondées sur les connexions.",
    introText:
      "Folley Group rassemble des services pratiques et des activités en développement dans la région des Grands Lacs. Chaque division vous met en relation avec les personnes, l’expertise et les opportunités dont vous avez besoin.",
    businessesKicker: "Nos domaines",
    businessesTitle: "Nos activités",
    businessesText: "Un groupe, des compétences complémentaires. Trouvez l’équipe qui vous convient.",
    viewDivision: "Découvrir la division",
    brandsKicker: "Des marques indépendantes réunies par une vision commune",
    brandsTitle: "Nos marques",
    brandsText: "Des entreprises distinctes réunies au sein de la famille Folley Group.",
    visit: "Visiter le site",
    follow: "Instagram",
    marketsLabel: "Ancrés dans la région",
    marketsTitle: "En pleine expansion dans la région.",
    marketsText:
      "Basé à Goma, Folley Group tisse des liens dans les marchés voisins par ses activités, ses services et ses partenariats.",
    headquarters: "Siège social",
    globalLabel: "Notre vision",
    globalTitle: "Créer des liens au-delà des frontières.",
    globalText:
      "Nous œuvrons pour que les personnes et les entreprises puissent se déplacer, collaborer et grandir en confiance au-delà des frontières.",
    partnerLabel: "Pour les entreprises, entrepreneurs et organisations",
    partnerTitle: "Construisons des opportunités ensemble.",
    partnerText:
      "Partagez un défi, un savoir-faire ou une nouvelle opportunité. Nous accueillons les échanges concrets qui font avancer les entreprises.",
    partnerCta: "Devenir partenaire",
    aboutLink: "Notre histoire",
    trustTitle: "Un groupe connecté pour une région connectée.",
    trust1: "Plusieurs services sous un même groupe",
    trust2: "Réseau d’affaires régional",
    trust3: "Approche centrée sur le client",
    trust4: "Des compétences diversifiées",
    trust5: "Partenariats stratégiques",
    trust6: "Une vision internationale en développement",
    founderLabel: "Direction",
    founderName: "Rwanika Jean Claude",
    founderRole: "Fondateur, Folley Group",
    founderText:
      "Diplômé en Business Information Technology, Jean Claude possède une expérience en informatique, maintenance, gestion d’entreprise et de projet, analyse de données et mode.",
    founderQuote: "L’unité fait la force ; avec Dieu tout est possible.",
    contactTitle: "Entamons la conversation.",
    contactText: "Décrivez votre besoin. L’équipe Folley Group concernée sera prête à vous aider.",
    footerText: "Relier les personnes, les affaires et les opportunités dans la région des Grands Lacs.",
    quickLinks: "Explorer",
    reachUs: "Nous joindre",
    markets: "Nos marchés",
    copyright: "Tous droits réservés.",
    formName: "Nom complet",
    formEmail: "Adresse e-mail",
    formPhone: "Numéro de téléphone",
    formService: "Service souhaité",
    formMessage: "Votre message",
    formPlaceholder: "Comment pouvons-nous vous aider ?",
    formSend: "Envoyer la demande",
    formNote: "Votre messagerie s’ouvrira avec le message prêt à être envoyé.",
    choose: "Choisir un service",
    whatsapp: "Contacter Folley Group sur WhatsApp",
    divisionContact: "Contacter cette division",
    divisionBack: "Toutes nos activités",
    services: "Services",
    related: "Découvrir nos autres activités",
    social: "Suivez Folley Group",
    socialText: "Suivez nos marques et restez en contact.",
  },
} as const;

type CopyKey = keyof typeof copy.en;
const text = (language: Language, key: CopyKey) => copy[language][key];

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
    title: "Mobility & Travel",
    titleFr: "Mobilité & voyages",
    short: "Move people and goods, connect destinations, make every journey easier.",
    shortFr: "Transport de personnes et de biens, destinations et facilitation de vos déplacements.",
    intro: "From vehicle rental and passenger transport to airport facilitation and travel tickets, we help make regional journeys and deliveries easier to arrange.",
    introFr: "De la location de véhicules au transport de passagers, en passant par les formalités à l’aéroport et les billets, nous facilitons vos déplacements et livraisons dans la région.",
    services: ["Vehicle rental", "Transportation of goods and people", "Mail transportation", "Airport facilitation", "Travel ticket assistance", "Tourism-related services"],
    servicesFr: ["Location de véhicules", "Transport de biens et de personnes", "Transport de courrier", "Facilitation aéroportuaire", "Assistance pour les billets de voyage", "Services liés au tourisme"],
    image: mobilityImage,
    imageAlt: "Travelers meeting a driver beside a passenger van",
    Icon: Plane,
  },
  {
    slug: "property-hospitality",
    title: "Property & Hospitality",
    titleFr: "Immobilier & hôtellerie",
    short: "Find a place to stay, live or welcome guests across the region.",
    shortFr: "Trouvez un logement, un hébergement ou des services hôteliers dans la région.",
    intro: "We connect people with housing searches, accommodation assistance and hotel services—making it easier to find the right place for a visit or a new chapter.",
    introFr: "Nous vous accompagnons dans votre recherche de logement, d’hébergement et de services hôteliers afin de trouver le lieu adapté à votre séjour ou à votre installation.",
    services: ["Real estate", "Housing search", "Accommodation assistance", "Hotel services"],
    servicesFr: ["Immobilier", "Recherche de logement", "Assistance à l’hébergement", "Services hôteliers"],
    image: propertyImage,
    imageAlt: "Contemporary lakeside property and hospitality setting",
    Icon: Building2,
  },
  {
    slug: "technology-telecoms",
    title: "Technology & Telecoms",
    titleFr: "Technologie & télécoms",
    short: "Everyday mobile, internet and IT support for people and businesses.",
    shortFr: "Des services mobiles, internet et informatiques pour les particuliers et les entreprises.",
    intro: "From mobile and internet services to network maintenance and IT support, our team helps people and organizations stay connected and productive.",
    introFr: "Des services mobiles et internet à la maintenance réseau et au support informatique, notre équipe aide les particuliers et les organisations à rester connectés et productifs.",
    services: ["Mobile services", "Internet services", "Network services", "Computer services", "Maintenance", "IT support"],
    servicesFr: ["Services mobiles", "Services internet", "Services réseau", "Services informatiques", "Maintenance", "Assistance informatique"],
    image: technologyImage,
    imageAlt: "Technology specialist helping a customer in a mobile shop",
    Icon: Laptop,
  },
  {
    slug: "trade-commerce",
    title: "Trade & Commerce",
    titleFr: "Commerce & échanges",
    short: "Bring businesses and commercial opportunities within reach.",
    shortFr: "Rapprochez les entreprises et les opportunités commerciales.",
    intro: "We support general trade, business connections and the sale or transfer of businesses within the region—opening doors to practical commercial opportunities.",
    introFr: "Nous soutenons le commerce général, les relations d’affaires ainsi que la vente ou le transfert d’activités dans la région, au service d’opportunités commerciales concrètes.",
    services: ["General trade", "Commercial opportunities", "Business sale and transfer within the region", "Business connections"],
    servicesFr: ["Commerce général", "Opportunités commerciales", "Vente et transfert d’activités dans la région", "Relations d’affaires"],
    image: logisticsImage,
    imageAlt: "Business partners discussing a regional trade opportunity",
    Icon: BriefcaseBusiness,
  },
  {
    slug: "logistics-partnerships",
    title: "Logistics & Partnerships",
    titleFr: "Logistique & partenariats",
    short: "Coordinate logistics, subcontracting and collaboration that moves work forward.",
    shortFr: "Coordonnez la logistique, la sous-traitance et les collaborations qui font avancer les projets.",
    intro: "We welcome collaboration with companies and contractors, connecting logistics and subcontracting needs with regional business capabilities.",
    introFr: "Nous accueillons les collaborations avec les entreprises et les entrepreneurs, en reliant les besoins logistiques et de sous-traitance aux compétences régionales.",
    services: ["Logistics", "Subcontracting", "Company partnerships", "Contractor partnerships", "Business collaboration"],
    servicesFr: ["Logistique", "Sous-traitance", "Partenariats avec les entreprises", "Partenariats avec les entrepreneurs", "Collaboration commerciale"],
    image: logisticsImage,
    imageAlt: "Regional business team coordinating a logistics partnership",
    Icon: Truck,
  },
];

const brands = [
  { name: "Folley Collection", category: "Fashion · Online retail", categoryFr: "Mode · Vente en ligne", url: "https://folleycollection.netlify.app/", instagram: "https://www.instagram.com/folleycollection_", image: fashionImage, alt: "Fashion editorial in Goma for Folley Collection" },
  { name: "Folley Tech", category: "Technology · Online retail", categoryFr: "Technologie · Vente en ligne", url: "https://folleytech.netlify.app/", instagram: "https://www.instagram.com/folleytech", image: technologyImage, alt: "Technology retail and customer service for Folley Tech" },
  { name: "Folley J.C.", category: "Founder · Folley Group", categoryFr: "Fondateur · Folley Group", url: "https://www.instagram.com/FolleyJC", instagram: "https://www.instagram.com/FolleyJC", image: heroImage, alt: "Goma, home of Folley Group" },
];

const navItems = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/businesses", key: "businesses" as const },
  { to: "/brands", key: "brands" as const },
  { to: "/partnerships", key: "partnerships" as const },
];

export function FolleySiteShell({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ language, toggle: () => setLanguage((value) => value === "en" ? "fr" : "en") }}>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </LanguageContext.Provider>
  );
}

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" aria-label="Folley Group home" className={`group inline-flex items-center gap-3 ${inverse ? "text-background" : "text-foreground"}`}>
      <span className="flex size-10 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">FG</span>
      <span className="flex flex-col leading-tight"><span className="text-sm font-semibold tracking-[0.08em]">FOLLEY</span><span className="text-[10px] font-medium tracking-[0.24em] text-muted-foreground">GROUP</span></span>
    </Link>
  );
}

function Header() {
  const { language, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const c = (key: CopyKey) => text(language, key);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Wordmark />
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => <Link key={item.to} to={item.to} className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground">{c(item.key)}</Link>)}
          <button type="button" onClick={toggle} className="flex items-center gap-1.5 border-l border-border pl-5 text-[11px] font-semibold tracking-wide text-foreground" aria-label="Switch language">
            <span className={language === "en" ? "text-primary" : "text-muted-foreground"}>EN</span><span className="text-muted-foreground">/</span><span className={language === "fr" ? "text-primary" : "text-muted-foreground"}>FR</span><ChevronDown className="size-3 text-muted-foreground" />
          </button>
          <Button asChild className="h-10 rounded-sm px-5 text-xs"><Link to="/contact">{c("contactUs")}<ArrowRight /></Link></Button>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="sm" onClick={toggle} aria-label="Switch language" className="px-2 text-xs font-semibold">{language.toUpperCase()} <ChevronDown className="size-3" /></Button>
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : c("menu")} className="rounded-sm">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-4 lg:hidden">
        {navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.to} to={item.to} className="block border-b border-border py-3 text-sm font-medium">{c(item.key)}</Link>)}
        <Link onClick={() => setOpen(false)} to="/contact" className="mt-4 block"><Button className="w-full rounded-sm">{c("contactUs")}<ArrowRight /></Button></Link>
      </nav>}
    </header>
  );
}

function Footer() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-12 lg:py-20">
        <div><Wordmark inverse /><p className="mt-6 max-w-xs text-sm leading-7 text-background/65">{c("footerText")}</p><a href="https://www.instagram.com/FolleyJC" target="_blank" rel="noreferrer" aria-label="Folley Group on Instagram" className="mt-5 inline-flex items-center gap-2 text-sm text-background/80 hover:text-background"><Instagram className="size-4" />Folley Group</a></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">{c("quickLinks")}</h2><div className="mt-5 flex flex-col gap-3">{navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="text-sm text-background/75 hover:text-background">{c(item.key)}</Link>)}<Link to="/contact" className="text-sm text-background/75 hover:text-background">{c("contact")}</Link></div></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">{c("businesses")}</h2><div className="mt-5 flex flex-col gap-3">{divisions.slice(0, 4).map((division) => <Link key={division.slug} to={`/businesses/${division.slug}`} className="text-sm text-background/75 hover:text-background">{language === "fr" ? division.titleFr : division.title}</Link>)}<Link to="/businesses/logistics-partnerships" className="text-sm text-background/75 hover:text-background">{language === "fr" ? divisions[4]?.titleFr : divisions[4]?.title}</Link></div></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">{c("reachUs")}</h2><div className="mt-5 flex flex-col gap-3 text-sm text-background/75"><a href="mailto:rwanikajean@gmail.com" className="hover:text-background">rwanikajean@gmail.com</a><a href="tel:+243973350035" className="hover:text-background">+243 973 350 035</a><span>{c("headquarters")}</span><span>Quartier Le Volcan, Goma<br />Nord-Kivu, RD Congo</span></div></div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-background/15 px-5 py-5 text-xs text-background/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><span>© 2026 Folley Group. {c("copyright")}</span><span>DR Congo · Rwanda · Uganda · Burundi</span></div>
    </footer>
  );
}

function WhatsAppButton() {
  const { language } = useLanguage();
  const message = language === "fr" ? "Bonjour Folley Group, j’ai visité votre site et je souhaite en savoir plus sur vos services." : "Hello Folley Group, I visited your website and would like to enquire about your services.";
  return <a className="whatsapp-float" href={`https://wa.me/243973350035?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" aria-label={text(language, "whatsapp")}><Headphones className="size-5" /><span className="hidden sm:inline">WhatsApp</span></a>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-background/70" : "text-primary"}`}><span className="h-px w-7 bg-current" />{children}</p>;
}

export function HomePage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <>
    <section className="relative flex min-h-[600px] items-end overflow-hidden bg-foreground sm:min-h-[700px] lg:min-h-[min(760px,calc(100svh-76px))]">
      <img src={heroImage} alt="Goma, Democratic Republic of Congo, home to Folley Group" width={1600} height={960} fetchPriority="high" className="absolute inset-0 size-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/55 to-foreground/10" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="max-w-[760px] animate-in fade-in slide-in-from-bottom-4 duration-700"><Eyebrow light>{c("heroEyebrow")}</Eyebrow><h1 className="mt-7 max-w-[700px] text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-background sm:text-6xl lg:text-[76px]">{c("heroTitle")}</h1><p className="mt-6 max-w-[540px] text-base leading-7 text-background/80 sm:text-lg sm:leading-8">{c("heroText")}</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 rounded-sm px-6"><Link to="/businesses">{c("explore")}<ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="h-12 rounded-sm border-background/50 bg-background/5 px-6 text-background hover:bg-background hover:text-foreground"><Link to="/contact">{c("contactUs")}<ArrowUpRight /></Link></Button></div></div>
        <div className="mt-16 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-background/65"><ArrowDownRight className="size-4" />{c("scroll")}</div>
      </div>
      <div className="absolute bottom-0 right-0 hidden bg-primary px-8 py-5 text-xs font-medium text-primary-foreground md:block"><MapPin className="mr-2 inline size-4" />Goma, North Kivu · DRC</div>
    </section>
    <section className="bg-background py-20 sm:py-28"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:px-12"><div><Eyebrow>{c("introLabel")}</Eyebrow><h2 className="mt-6 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">{c("introTitle")}</h2></div><div className="max-w-2xl pt-1"><p className="text-base leading-8 text-muted-foreground">{c("introText")}</p><Link to="/about" className="mt-7 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm font-semibold text-foreground">{c("discover")}<ArrowRight className="size-4 text-primary" /></Link></div></div></section>
    <BusinessesPreview />
    <TrustStrip />
    <BrandsPreview />
    <MarketsSection />
    <VisionSection />
    <PartnershipCallout />
    <ContactBand />
  </>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"><div><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground">{description}</p></div>;
}

export function DivisionCard({ division }: { division: Division }) {
  const { language } = useLanguage();
  const title = language === "fr" ? division.titleFr : division.title;
  const description = language === "fr" ? division.shortFr : division.short;
  return <article className="group border-t border-border pt-5">
    <Link to={`/businesses/${division.slug}`} className="block"><div className="relative aspect-[1.42] overflow-hidden bg-muted"><img src={division.image} alt={division.imageAlt} width={1200} height={800} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><span className="absolute left-4 top-4 flex size-10 items-center justify-center bg-background text-primary"><division.Icon className="size-5" /></span></div><div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p></div><span className="mt-1 flex size-9 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-4" /></span></div></Link>
  </article>;
}

function BusinessesPreview() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="bg-muted/50 py-20 sm:py-28"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow={c("businessesKicker")} title={c("businessesTitle")} description={c("businessesText")} /><div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{divisions.map((division) => <DivisionCard key={division.slug} division={division} />)}</div><div className="mt-10 text-right"><Link to="/businesses" className="inline-flex items-center gap-2 text-sm font-semibold">{c("businesses")}<ArrowRight className="size-4 text-primary" /></Link></div></div></section>;
}

function TrustStrip() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const values = [c("trust1"), c("trust2"), c("trust3"), c("trust4"), c("trust5"), c("trust6")];
  const icons = [Network, Globe2, UsersRound, PackageCheck, BriefcaseBusiness, ArrowUpRight];
  return <section className="bg-primary py-14 text-primary-foreground sm:py-16"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><h2 className="max-w-xl text-2xl font-semibold leading-snug sm:text-3xl">{c("trustTitle")}</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{values.map((value, index) => { const Icon = icons[index] ?? Check; return <div key={value} className="flex items-center gap-3 border-t border-primary-foreground/25 pt-4 text-sm"><Icon className="size-5 shrink-0 text-primary-foreground/75" />{value}</div>; })}</div></div></section>;
}

function BrandsPreview() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow={c("brandsKicker")} title={c("brandsTitle")} description={c("brandsText")} /><div className="grid gap-6 md:grid-cols-3">{brands.map((brand) => <article key={brand.name} className="group border border-border"><Link to="/brands" className="block overflow-hidden"><img src={brand.image} alt={brand.alt} width={1200} height={800} loading="lazy" className="aspect-[1.35] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /></Link><div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{language === "fr" ? brand.categoryFr : brand.category}</p><h3 className="mt-2 text-xl font-semibold">{brand.name}</h3><div className="mt-5 flex flex-wrap gap-4"><a href={brand.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold">{c("visit")}<ArrowUpRight className="size-3.5" /></a><a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Instagram className="size-3.5" />{c("follow")}</a></div></div></article>)}</div></div></section>;
}

function MarketsSection() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const markets = ["Democratic Republic of Congo", "Rwanda", "Uganda", "Burundi"];
  const marketsFr = ["République démocratique du Congo", "Rwanda", "Ouganda", "Burundi"];
  return <section className="border-y border-border bg-muted/35 py-16 sm:py-20"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[1fr_1fr] md:items-center lg:px-12"><div><Eyebrow>{c("marketsLabel")}</Eyebrow><h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{c("marketsTitle")}</h2><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{c("marketsText")}</p><p className="mt-7 text-sm font-semibold">{c("headquarters")}</p><p className="mt-1 text-sm text-muted-foreground">Quartier Le Volcan, Goma, North Kivu, DRC</p></div><div className="grid grid-cols-2 border-l border-t border-border">{(language === "fr" ? marketsFr : markets).map((market, index) => <div key={market} className="flex min-h-24 items-center gap-3 border-b border-r border-border px-4 sm:min-h-28 sm:px-7"><span className="text-xs font-semibold text-primary">0{index + 1}</span><span className="text-sm font-medium">{market}</span></div>)}</div></div></section>;
}

function VisionSection() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="relative overflow-hidden bg-foreground text-background"><img src={heroImage} alt="Lake Kivu and the Great Lakes region" width={1600} height={960} loading="lazy" className="absolute inset-0 size-full object-cover opacity-25" /><div className="absolute inset-0 bg-foreground/55" /><div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="max-w-2xl"><Eyebrow light>{c("globalLabel")}</Eyebrow><h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{c("globalTitle")}</h2><p className="mt-5 max-w-xl text-base leading-8 text-background/75">{c("globalText")}</p></div></div></section>;
}

function PartnershipCallout() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="py-20 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[1fr_0.9fr] md:items-center lg:px-12"><div><Eyebrow>{c("partnerLabel")}</Eyebrow><h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">{c("partnerTitle")}</h2><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{c("partnerText")}</p><Button asChild className="mt-7 h-11 rounded-sm px-5"><Link to="/partnerships">{c("partnerCta")}<ArrowRight /></Link></Button></div><div className="grid grid-cols-2 gap-px border border-border bg-border">{[BriefcaseBusiness, Truck, UsersRound, Globe2].map((Icon, index) => <div key={index} className="flex min-h-32 flex-col justify-between bg-background p-5 sm:p-7"><Icon className="size-5 text-primary" /><span className="text-xs font-medium">{(language === "fr" ? ["Partenariats stratégiques", "Sous-traitance", "Collaboration entrepreneuriale", "Opportunités commerciales"] : ["Strategic partnerships", "Subcontracting", "Contractor collaboration", "Commercial opportunities"])[index]}</span></div>)}</div></div></section>;
}

function ContactBand() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="border-t border-border bg-muted/50 py-14 sm:py-16"><div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><Eyebrow>{c("contact")}</Eyebrow><h2 className="mt-4 text-2xl font-semibold">{c("contactTitle")}</h2></div><Button asChild className="h-11 w-fit rounded-sm px-5"><Link to="/contact">{c("contactUs")}<ArrowUpRight /></Link></Button></div></section>;
}

export function BusinessesPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <><PageIntro eyebrow={c("businessesKicker")} title={c("businessesTitle")} description={c("businessesText")} /><BusinessesPreview /><ContactBand /></>;
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-muted/35"><div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p></div></section>;
}

export function BusinessPage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const division = divisions.find((item) => item.slug === slug);
  if (!division) return <PageIntro eyebrow="Folley Group" title="Business division" description="Explore the services and opportunities across Folley Group." />;
  const title = language === "fr" ? division.titleFr : division.title;
  const intro = language === "fr" ? division.introFr : division.intro;
  const services = language === "fr" ? division.servicesFr : division.services;
  const related = divisions.filter((item) => item.slug !== slug).slice(0, 3);
  return <>
    <section className="grid min-h-[410px] md:grid-cols-2"><div className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-12 lg:px-16"><Eyebrow>{c("businesses")}</Eyebrow><h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{title}</h1><p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">{intro}</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild className="h-11 rounded-sm px-5"><Link to="/contact">{c("divisionContact")}<ArrowRight /></Link></Button><Button asChild variant="outline" className="h-11 rounded-sm px-5"><Link to="/businesses">{c("divisionBack")}</Link></Button></div></div><div className="relative min-h-72 bg-muted md:min-h-[410px]"><img src={division.image} alt={division.imageAlt} width={1200} height={800} fetchPriority="high" className="absolute inset-0 size-full object-cover" /><span className="absolute bottom-0 left-0 flex items-center gap-3 bg-background px-5 py-4 text-sm font-semibold"><division.Icon className="size-5 text-primary" />{title}</span></div></section>
    <section className="bg-muted/40 py-16 sm:py-20"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>{c("services")}</Eyebrow><h2 className="mt-5 text-3xl font-semibold">{language === "fr" ? "Comment nous pouvons vous aider" : "How we can help"}</h2></div><ul className="grid gap-0 sm:grid-cols-2">{services.map((service) => <li key={service} className="flex items-center gap-3 border-t border-border py-4 text-sm"><Check className="size-4 shrink-0 text-primary" />{service}</li>)}</ul></div></div></section>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><h2 className="mb-8 text-2xl font-semibold">{c("related")}</h2><div className="grid gap-7 sm:grid-cols-3">{related.map((item) => <DivisionCard key={item.slug} division={item} />)}</div></div></section>
    <ContactBand />
  </>;
}

export function AboutPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <>
    <PageIntro eyebrow="Folley Group" title={language === "fr" ? "Un groupe diversifié, une vision commune." : "A diversified group, united by a shared vision."} description={c("introText")} />
    <section className="py-16 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center lg:px-12"><div className="relative"><img src={heroImage} alt="Goma and Lake Kivu, home to Folley Group" width={1600} height={960} loading="lazy" className="aspect-[1.2] w-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-5 py-4 text-xs font-medium text-primary-foreground"><MapPin className="mr-2 inline size-4" />Goma, North Kivu · DRC</span></div><div><Eyebrow>{c("introLabel")}</Eyebrow><h2 className="mt-5 text-3xl font-semibold leading-tight">{c("introTitle")}</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{c("introText")}</p><div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">{divisions.map((division) => <Link key={division.slug} to={`/businesses/${division.slug}`} className="flex items-center gap-2 border-b border-border py-3 hover:text-primary"><division.Icon className="size-4 shrink-0 text-primary" />{language === "fr" ? division.titleFr : division.title}</Link>)}</div></div></div></section>
    <TrustStrip />
    <section className="py-16 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[0.65fr_1.35fr] lg:px-12"><div><Eyebrow>{c("founderLabel")}</Eyebrow><p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{c("founderRole")}</p></div><div><h2 className="text-3xl font-semibold">{c("founderName")}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{c("founderText")}</p><blockquote className="mt-7 border-l-2 border-primary pl-5 text-sm italic text-foreground">“{c("founderQuote")}”</blockquote><div className="mt-7 flex flex-wrap gap-5"><a href="https://www.instagram.com/FolleyJC" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium"><Instagram className="size-4 text-primary" />Instagram</a><a href="https://x.com/folleyjc" target="_blank" rel="noreferrer" className="text-sm font-medium">X / Twitter <ArrowUpRight className="ml-1 inline size-3" /></a></div></div></div></section>
    <MarketsSection /><ContactBand />
  </>;
}

export function BrandsPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <><PageIntro eyebrow={c("brandsKicker")} title={c("brandsTitle")} description={c("brandsText")} /><BrandsPreview /><SocialLinks /><ContactBand /></>;
}

function SocialLinks() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const socials = [
    { name: "Folley Group · Folley J.C.", url: "https://www.instagram.com/FolleyJC", handle: "@FolleyJC" },
    { name: "Folley Collection", url: "https://www.instagram.com/folleycollection_", handle: "@folleycollection_" },
    { name: "Folley Tech", url: "https://www.instagram.com/folleytech", handle: "@folleytech" },
  ];
  return <section className="bg-muted/35 py-16 sm:py-20"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><Eyebrow>{c("social")}</Eyebrow><div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-3xl font-semibold">{c("social")}</h2><p className="text-sm text-muted-foreground">{c("socialText")}</p></div><div className="mt-8 grid border-l border-t border-border sm:grid-cols-3">{socials.map((social) => <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-r border-border p-5 transition-colors hover:bg-background"><span><span className="block text-sm font-semibold">{social.name}</span><span className="mt-1 block text-xs text-muted-foreground">{social.handle}</span></span><Instagram className="size-5 text-primary" /></a>)}</div></div></section>;
}

export function PartnershipsPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const opportunities = language === "fr" ? ["Partenariats stratégiques", "Collaboration avec des entrepreneurs", "Opportunités de sous-traitance", "Partenariats d’affaires", "Opportunités commerciales"] : ["Strategic partnerships", "Contractor collaboration", "Subcontracting opportunities", "Business partnerships", "Commercial opportunities"];
  return <><PageIntro eyebrow={c("partnerLabel")} title={c("partnerTitle")} description={c("partnerText")} /><section className="py-16 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center lg:px-12"><div className="relative"><img src={logisticsImage} alt="Regional business partners collaborating on logistics" width={1200} height={800} loading="lazy" className="aspect-[1.2] w-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-5 py-4 text-xs font-semibold text-primary-foreground">Folley Group · Partnerships</span></div><div><Eyebrow>{c("partnerships")}</Eyebrow><h2 className="mt-5 text-3xl font-semibold">{language === "fr" ? "Des partenariats concrets, tournés vers l’avenir." : "Practical partnerships with room to grow."}</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{c("partnerText")}</p><ul className="mt-7">{opportunities.map((item) => <li key={item} className="flex items-center gap-3 border-t border-border py-4 text-sm"><Check className="size-4 text-primary" />{item}</li>)}</ul><Button asChild className="mt-6 h-11 rounded-sm px-5"><Link to="/contact">{c("partnerCta")}<ArrowRight /></Link></Button></div></div></section><MarketsSection /><ContactBand /></>;
}

export function ContactPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const services = language === "fr"
    ? ["Mobilité & voyages", "Immobilier & hôtellerie", "Technologie & télécoms", "Commerce & échanges", "Logistique & partenariats", "Partenariat d’affaires", "Folley Collection", "Folley Tech", "Demande générale"]
    : ["Mobility & Travel", "Property & Hospitality", "Technology & Telecoms", "Trade & Commerce", "Logistics & Partnerships", "Business Partnership", "Folley Collection", "Folley Tech", "General Enquiry"];
  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `${String(form.get("service"))} enquiry — ${String(form.get("name"))}`;
    const body = [
      `Name: ${String(form.get("name"))}`,
      `Email: ${String(form.get("email"))}`,
      `Phone: ${String(form.get("phone") || "Not provided")}`,
      `Service: ${String(form.get("service"))}`,
      "",
      String(form.get("message")),
    ].join("\n");
    window.location.href = `mailto:rwanikajean@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <><PageIntro eyebrow={c("contact")} title={c("contactTitle")} description={c("contactText")} /><section className="py-16 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12"><div><Eyebrow>{c("reachUs")}</Eyebrow><h2 className="mt-5 text-2xl font-semibold">{language === "fr" ? "Parlons de votre projet." : "Let's talk about your next step."}</h2><div className="mt-8 divide-y divide-border border-y border-border">{[
    { Icon: Smartphone, label: language === "fr" ? "Téléphone / WhatsApp" : "Phone / WhatsApp", value: "+243 973 350 035", href: "tel:+243973350035" },
    { Icon: Globe2, label: "Email", value: "rwanikajean@gmail.com", href: "mailto:rwanikajean@gmail.com" },
    { Icon: MapPin, label: c("headquarters"), value: "Quartier Le Volcan, Goma, North Kivu, DRC", href: "https://maps.google.com/?q=Quartier+Le+Volcan+Goma" },
  ].map(({ Icon, label, value, href }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex gap-4 py-5"><Icon className="mt-1 size-5 shrink-0 text-primary" /><span><span className="block text-xs text-muted-foreground">{label}</span><span className="mt-1 block text-sm font-medium">{value}</span></span></a>)}</div><a href="https://wa.me/243973350035" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"><Headphones className="size-4" />{c("whatsapp")}<ArrowUpRight className="size-3.5" /></a><p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c("markets")}</p><p className="mt-2 text-sm leading-6">DR Congo · Rwanda · Uganda · Burundi</p></div>
    <form onSubmit={sendMessage} className="border border-border p-5 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs font-medium">{c("formName")}<Input name="name" autoComplete="name" required className="h-11 rounded-sm bg-background" /></label><label className="grid gap-2 text-xs font-medium">{c("formEmail")}<Input name="email" type="email" autoComplete="email" required className="h-11 rounded-sm bg-background" /></label><label className="grid gap-2 text-xs font-medium">{c("formPhone")}<Input name="phone" type="tel" autoComplete="tel" className="h-11 rounded-sm bg-background" /></label><label className="grid gap-2 text-xs font-medium">{c("formService")}<select name="service" required defaultValue="" className="h-11 w-full rounded-sm border border-input bg-background px-3 text-sm"><option value="" disabled>{c("choose")}</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label><label className="grid gap-2 text-xs font-medium sm:col-span-2">{c("formMessage")}<Textarea name="message" required rows={5} placeholder={c("formPlaceholder")} className="resize-y rounded-sm bg-background" /></label></div><Button type="submit" className="mt-5 h-11 rounded-sm px-6">{c("formSend")}<ArrowRight /></Button><p className="mt-3 text-xs leading-5 text-muted-foreground">{c("formNote")}</p></form></div></section><SocialLinks /></>;
}