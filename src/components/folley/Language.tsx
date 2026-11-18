import {
    createContext,
    useContext,
    useState,
    type ReactNode,
  } from "react";
  
  export type Language = "en" | "fr";
  
  type LanguageContextValue = {
    language: Language;
    toggle: () => void;
  };
  
  const LanguageContext =
    createContext<LanguageContextValue | null>(null);
  
  export const copy = {
    en: {
      home: "Home",
      about: "About",
      businesses: "Our Businesses",
      brands: "Our Brands",
      partnerships: "Partnerships",
      contact: "Contact",
      contactUs: "Contact Us",
      menu: "Open navigation",
  
      heroEyebrow: "FOLLEY GROUP · GOMA, NORTH KIVU, DR CONGO",
      heroTitle:
        "Connecting Your Needs Across Business, Mobility & Technology.",
      heroText:
        "Folley Group provides services across transport and tourism, real estate and hospitality, telecoms and IT, general trade, logistics and subcontracting.",
  
      explore: "Explore our businesses",
      discover: "Discover Folley Group",
      scroll: "Scroll to explore",
  
      introLabel: "Our Vision.",
      introTitle:
        "Making mobility, housing, trade and logistics easier.",
      introText:
        "Folley Group aims to facilitate travel, housing, commercial exchanges and logistics, while also providing clothing and technology solutions.",
  
      businessesKicker: "What we do",
      businessesTitle: "Our Services",
      businessesText:
        "Explore Folley Group services across transport and tourism, real estate and hospitality, telecoms and IT, general trade, logistics and subcontracting.",
      viewDivision: "Explore division",
  
      brandsKicker: "Explore our online businesses",
      brandsTitle: "Our Online Shops",
      brandsText:
        "Discover Folley Collection for clothing and Folley Tech for phones and electronic accessories.",
  
      visit: "Visit website",
      follow: "Instagram",
  
      marketsLabel: "Where we work",
      marketsTitle: "Our regional presence.",
      marketsText:
        "Folley Group operates in Uganda, Burundi, Rwanda and the Democratic Republic of Congo.",
  
      headquarters: "Headquarters",
  
      partnerLabel:
        "Logistics · Subcontracting · Partnerships",
      partnerTitle:
        "Working with companies and contractors.",
      partnerText:
        "Folley Group provides logistics and subcontracting services and works in partnership with companies and contractors.",
      partnerCta: "Discuss a Partnership",
  
      aboutLink: "Our story",
  
      trustTitle: "Folley Group at a glance.",
      trust1: "5 service areas",
      trust2: "2 online shops",
      trust3: "Operating in 4 countries",
      trust4: "Headquartered in Goma, North Kivu",
      trust5: "Folley Collection · Clothing",
      trust6:
        "Folley Tech · Phones & electronic accessories",
  
      founderLabel: "Leadership",
      founderName: "Rwanika Jean Claude",
      founderRole: "Founder, Folley Group",
      founderText:
        "Holder of a diploma in Business Information Technology, with experience in IT, computer maintenance, business management, project management, data analysis and the fashion industry.",
  
      contactTitle: "Start a conversation.",
      contactText:
        "Tell us what you are looking for. The right Folley Group team will be ready to help.",
  
        footerText:
        "Providing business and service solutions across DR Congo, Rwanda, Uganda and Burundi.",
  
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
      choose: "Choose a service",
  
      whatsapp:
        "Chat with Folley Group on WhatsApp",
  
      divisionContact:
        "Enquire about this division",
      divisionBack: "All businesses",
      services: "Services",
      related: "Explore other businesses",
  
      social: "Connect with Folley Group",
      socialText: "Follow our activities and brands.",
  
      comingSoonLabel: "In development",
      comingSoonTitle:
        "This section is coming soon.",
      comingSoonText:
        "We are currently preparing this section of the Folley Group website. More information will be available soon.",
      backHome: "Back to home",
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
  
      heroEyebrow:
        "FOLLEY GROUP · GOMA, NORD-KIVU, RD CONGO",
      heroTitle:
        "Répondre à vos besoins dans les domaines des affaires, de la mobilité et de la technologie.",
      heroText:
        "Folley Group propose des services dans les domaines du transport et du tourisme, de l’immobilier et de l’hôtellerie, des télécoms et de l’informatique, du commerce général, de la logistique et de la sous-traitance.",
  
      explore: "Découvrir nos entreprises",
      discover: "Découvrir Folley Group",
      scroll: "Défiler pour découvrir",
  
      introLabel: "Notre vision.",
      introTitle:
        "Faciliter la mobilité, le logement, le commerce et la logistique.",
      introText:
        "Folley Group vise à faciliter les déplacements, le logement, les échanges commerciaux et la logistique, tout en proposant des solutions dans les domaines de l’habillement et de la technologie.",
  
      businessesKicker: "Ce que nous faisons",
      businessesTitle: "Nos services",
      businessesText:
        "Découvrez les services de Folley Group dans les domaines du transport et du tourisme, de l’immobilier et de l’hôtellerie, des télécoms et de l’informatique, du commerce général, de la logistique et de la sous-traitance.",
  
      viewDivision: "Découvrir la division",
  
      brandsKicker:
        "Découvrez nos activités en ligne",
      brandsTitle: "Nos boutiques en ligne",
      brandsText:
        "Découvrez Folley Collection pour l’habillement et Folley Tech pour les téléphones et accessoires électroniques.",
  
      visit: "Visiter le site",
      follow: "Instagram",
  
      marketsLabel: "Où nous travaillons",
      marketsTitle: "Notre présence régionale.",
      marketsText:
        "Folley Group opère en Ouganda, au Burundi, au Rwanda et en République démocratique du Congo.",
  
      headquarters: "Siège",
  
      partnerLabel:
        "Logistique · Sous-traitance · Partenariats",
      partnerTitle:
        "Travailler avec les entreprises et les entrepreneurs.",
      partnerText:
        "Folley Group propose des services de logistique et de sous-traitance et travaille en partenariat avec des entreprises et des entrepreneurs.",
      partnerCta: "Discuter d’un partenariat",
  
      aboutLink: "Notre histoire",
  
      trustTitle:
        "Folley Group en un coup d’œil.",
      trust1: "5 domaines de services",
      trust2: "2 boutiques en ligne",
      trust3: "Présent dans 4 pays",
      trust4: "Siège à Goma, Nord-Kivu",
      trust5:
        "Folley Collection · Habillement",
      trust6:
        "Folley Tech · Téléphones et accessoires électroniques",
  
      founderLabel: "Direction",
      founderName: "Rwanika Jean Claude",
      founderRole: "Fondateur, Folley Group",
      founderText:
        "Titulaire d’un diplôme en Business Information Technology, avec une expérience en IT, maintenance informatique, gestion d’entreprise, gestion de projet, analyse de données et dans le domaine de la mode.",
  
      contactTitle:
        "Entamons une conversation.",
      contactText:
        "Dites-nous ce que vous recherchez. L’équipe Folley Group concernée sera prête à vous accompagner.",
  
        footerText:
        "Des solutions commerciales et de services en RD Congo, au Rwanda, en Ouganda et au Burundi.",
  
      quickLinks: "Explorer",
      reachUs: "Nous contacter",
      markets: "Nos marchés",
      copyright: "Tous droits réservés.",
  
      formName: "Nom complet",
      formEmail: "Adresse e-mail",
      formPhone: "Numéro de téléphone",
      formService: "Service souhaité",
      formMessage: "Votre message",
      formPlaceholder:
        "Comment pouvons-nous vous aider ?",
      formSend: "Envoyer la demande",
      
  
      choose: "Choisir un service",
  
      whatsapp:
        "Discuter avec Folley Group sur WhatsApp",
  
      divisionContact:
        "Demander des informations sur cette division",
      divisionBack: "Toutes les entreprises",
  
      services: "Services",
      related:
        "Découvrir d’autres entreprises",
  
      social:
        "Restez connecté avec Folley Group",
        socialText: "Suivez nos activités et nos marques.",
  
      comingSoonLabel: "En développement",
      comingSoonTitle:
        "Cette section sera bientôt disponible.",
      comingSoonText:
        "Nous préparons actuellement cette section du site Folley Group. De plus amples informations seront bientôt disponibles.",
  
      backHome: "Retour à l’accueil",
    },
  } as const;
  
  export type CopyKey = keyof typeof copy.en;
  
  export function text(
    language: Language,
    key: CopyKey
  ) {
    return copy[language][key];
  }
  
  export function useLanguage() {
    const value = useContext(LanguageContext);
  
    if (!value) {
      throw new Error(
        "Folley Group pages must be rendered inside FolleyLanguageProvider."
      );
    }
  
    return value;
  }
  
  export function FolleyLanguageProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    const [language, setLanguage] =
      useState<Language>("en");
  
    function toggle() {
      setLanguage((current) =>
        current === "en" ? "fr" : "en"
      );
    }
  
    return (
      <LanguageContext.Provider
        value={{ language, toggle }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }