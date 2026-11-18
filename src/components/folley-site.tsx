import { type FormEvent, useState, useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Globe2,
  Headphones,
  Instagram,
  MapPin,
 
  Smartphone,
  Truck,
  UsersRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/folley-group-hero.jpg";


import {
  useLanguage,
  text,
  type CopyKey,
} from "@/components/folley/Language";

import {
  divisions,
  divisionHref,
  brands,
  type Division,
} from "@/components/folley/data";

import { Eyebrow } from "@/components/folley/shared/Eyebrow";
import { PageIntro } from "@/components/folley/shared/PageIntro";
import { ContactBand } from "@/components/folley/shared/ContactBand";
import { TrustStrip } from "@/components/folley/shared/TrustStrip";
import { MarketsSection } from "@/components/folley/shared/MarketsSection";
import { DivisionCard } from "@/components/folley/shared/DivisionCard";
import { SectionHeading } from "@/components/folley/shared/SectionHeading";

import { ScrollReveal } from "@/components/folley/shared/ScrollReveal";



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
    <section className="bg-background py-20 sm:py-28">
  <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:px-12">

    {/* Vision heading from left */}
    <ScrollReveal direction="left">
      <div>
        <Eyebrow>{c("introLabel")}</Eyebrow>

        <h2 className="mt-6 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
          {c("introTitle")}
        </h2>
      </div>
    </ScrollReveal>

    {/* Vision description from right */}
    <ScrollReveal direction="right" delay={150}>
      <div className="max-w-2xl pt-1">
        <p className="text-base leading-8 text-muted-foreground">
          {c("introText")}
        </p>

        <Link
          to="/about"
          className="mt-7 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm font-semibold text-foreground"
        >
          {c("discover")}
          <ArrowRight className="size-4 text-primary" />
        </Link>
      </div>
    </ScrollReveal>

  </div>
</section>
    <BusinessesPreview />
    <TrustStrip />
    <BrandsPreview />
    <MarketsSection />
    <PartnershipCallout />
    <ContactBand />
  </>;
}


function BusinessesPreview() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);

  return (
    <section className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <ScrollReveal direction="left">
            <div>
              <Eyebrow>{c("businessesKicker")}</Eyebrow>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                {c("businessesTitle")}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:justify-self-end">
              {c("businessesText")}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, index) => (
            <ScrollReveal
              key={division.slug}
              direction="up"
              delay={index * 120}
            >
              <DivisionCard division={division} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className="mt-10 text-right">
            <Link
              to="/businesses"
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              {c("businesses")}
              <ArrowRight className="size-4 text-primary" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}



function BrandsPreview() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow={c("brandsKicker")} title={c("brandsTitle")} description={c("brandsText")} /><div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">{brands.map((brand) => <article key={brand.name} className="group border border-border"><Link to="/brands" className="block overflow-hidden"><img src={brand.image} alt={brand.alt} width={1200} height={800} loading="lazy" className="aspect-[1.35] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /></Link><div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{language === "fr" ? brand.categoryFr : brand.category}</p><h3 className="mt-2 text-xl font-semibold">{brand.name}</h3><div className="mt-5 flex flex-wrap gap-4"><a href={brand.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold">{c("visit")}<ArrowUpRight className="size-3.5" /></a><a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Instagram className="size-3.5" />{c("follow")}</a></div></div></article>)}</div></div></section>;
}



{/*
function VisionSection() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="relative overflow-hidden bg-foreground text-background"><img src={heroImage} alt="Lake Kivu and the Great Lakes region" width={1600} height={960} loading="lazy" className="absolute inset-0 size-full object-cover opacity-25" /><div className="absolute inset-0 bg-foreground/55" /><div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="max-w-2xl"><Eyebrow light>{c("globalLabel")}</Eyebrow><h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{c("globalTitle")}</h2><p className="mt-5 max-w-xl text-base leading-8 text-background/75">{c("globalText")}</p></div></div></section>;
}

*/}
function PartnershipCallout() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);

  const items =
    language === "fr"
      ? [
          "Logistique",
          "Sous-traitance",
          "Partenariats avec des entreprises",
          "Partenariats avec des entrepreneurs",
        ]
      : [
          "Logistics",
          "Subcontracting",
          "Partnerships with Companies",
          "Partnerships with Contractors",
        ];

  const icons = [
    Truck,
    BriefcaseBusiness,
    UsersRound,
    Globe2,
  ];

  return (
    <section className="bg-foreground py-20 text-background sm:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-[1fr_0.9fr] md:items-center lg:px-12">

        {/* Partnership content */}
        <ScrollReveal direction="left">
          <div>
            <Eyebrow light>
              {c("partnerLabel")}
            </Eyebrow>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-background sm:text-4xl">
              {c("partnerTitle")}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-background/70">
              {c("partnerText")}
            </p>

            <Button
              asChild
              className="mt-7 h-11 rounded-sm bg-primary px-5 text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/partnerships">
                {c("partnerCta")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Partnership areas */}
        <ScrollReveal
          direction="right"
          delay={150}
        >
          <div className="grid grid-cols-2 gap-px border border-background/20 bg-background/20">
            {items.map((item, index) => {
              const Icon =
                icons[index] ?? BriefcaseBusiness;

              return (
                <div
                  key={item}
                  className="flex min-h-36 flex-col justify-between bg-foreground p-5 sm:p-7"
                >
                  <Icon className="size-5 text-primary" />

                  <span className="max-w-[180px] text-xs font-medium leading-5 text-background/90">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
{/*
function ContactBand() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  return <section className="border-t border-border bg-muted/50 py-14 sm:py-16"><div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><Eyebrow>{c("contact")}</Eyebrow><h2 className="mt-4 text-2xl font-semibold">{c("contactTitle")}</h2></div><Button asChild className="h-11 w-fit rounded-sm px-5"><Link to="/contact">{c("contactUs")}<ArrowUpRight /></Link></Button></div></section>;
}

*/}




// ADD THIS NEW COMPONENT HERE

function ComingSoonPage({
  section,
  sectionFr,
}: {
  section: string;
  sectionFr: string;
}) {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);

  const sectionName = language === "fr" ? sectionFr : section;

  return (
    <section className="flex min-h-[70vh] items-center bg-background">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">

        <div className="max-w-2xl">

          <Eyebrow>
            {c("comingSoonLabel")}
          </Eyebrow>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {sectionName}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
            {c("comingSoonTitle")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            {c("comingSoonText")}
          </p>

          <Button asChild className="mt-8 h-11 rounded-sm px-5">
            <Link to="/">
              {c("backHome")}
              <ArrowRight />
            </Link>
          </Button>

        </div>
      </div>
    </section>
  );
}


// BUSINESSES PAGE NOW COMES AFTER IT
{/*
export function BusinessesPage() {
  return (
    <ComingSoonPage
      section="Our Businesses"
      sectionFr="Nos activités"
    />
  );
}

*/}

export function BusinessesPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);

  return (
    <>
     <PageIntro
  eyebrow="Folley Group"
  title={
    language === "fr"
      ? "Nos activités"
      : "Our Businesses"
  }
  description={c("businessesText")}
/>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">


        <div className="space-y-8">
           {divisions.map((division, index) => {
              const title =
                language === "fr"
                  ? division.titleFr
                  : division.title;

              const intro =
                language === "fr"
                  ? division.introFr
                  : division.intro;

              const services =
                language === "fr"
                  ? division.servicesFr
                  : division.services;

              const Icon = division.Icon;

              return (
                <article
  key={division.slug}
  className={`grid gap-8 px-6 py-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:px-8 ${
    index % 2 === 1 ? "bg-muted/35" : "bg-background"
  }`}
>
  {/* Business information */}
  <ScrollReveal
    direction="left"
    delay={index * 100}
  >
    <div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>

        <Icon className="size-5 text-primary" />
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
        {intro}
      </p>

      <Link
        to={divisionHref(division.slug)}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        {language === "fr"
          ? "En savoir plus"
          : "Learn more"}

        <ArrowRight className="size-4" />
      </Link>
    </div>
  </ScrollReveal>

  {/* Services */}
  <ScrollReveal
    direction="right"
    delay={150 + index * 100}
  >
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        Services
      </p>

      <ul className="grid gap-0 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service}
            className="flex items-start gap-3 border-t border-border py-4 text-sm"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />

            {service}
          </li>
        ))}
      </ul>
    </div>
  </ScrollReveal>
</article>
              );
            })}
          </div>

        </div>
      </section>

      <section className="bg-foreground py-16 text-background sm:py-20">
      <ScrollReveal direction="left">

  <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-12">
    <div>
      <Eyebrow light>
        {language === "fr"
          ? "Boutiques en ligne"
          : "Online shops"}
      </Eyebrow>

      <h2 className="mt-5 text-3xl font-semibold">
        {language === "fr"
          ? "Découvrez nos activités en ligne."
          : "Explore our online businesses."}
      </h2>
    </div>

    <div>
      <p className="max-w-xl text-sm leading-7 text-background/70">
        {language === "fr"
          ? "Folley Group développe également ses activités en ligne à travers Folley Collection et Folley Tech."
          : "Folley Group also operates online through Folley Collection and Folley Tech."}
      </p>

      <Link
        to="/brands"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        {language === "fr"
          ? "Découvrir nos marques"
          : "Explore our brands"}

        <ArrowRight className="size-4" />
      </Link>
    </div>
  </div>
  </ScrollReveal>
</section>

<section className="py-16 sm:py-20">
<ScrollReveal direction="up">

  <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
    <div>
      <Eyebrow>
        {language === "fr"
          ? "Besoin d’un service ?"
          : "Need one of our services?"}
      </Eyebrow>

      <h2 className="mt-4 max-w-xl text-2xl font-semibold sm:text-3xl">
        {language === "fr"
          ? "Parlez-nous de votre besoin."
          : "Tell us what you need."}
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
        {language === "fr"
          ? "Sélectionnez le service qui vous intéresse et envoyez votre demande à notre équipe."
          : "Select the service you are interested in and send your enquiry to our team."}
      </p>
    </div>

    <Button
      asChild
      className="h-11 w-fit rounded-sm px-6"
    >
      <Link to="/contact">
        {language === "fr"
          ? "Envoyer une demande"
          : "Send an enquiry"}

        <ArrowRight />
      </Link>
    </Button>
  </div>
  </ScrollReveal>
</section>

    </>
  );
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




function SocialLinks() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const socials = [
    { name: "Folley Group · Folley J.C.", url: "https://www.instagram.com/folley_j_c?", handle: "@FolleyJC" },
    { name: "Folley Collection", url: "https://www.instagram.com/folleycollection_/", handle: "@folleycollection_" },
    { name: "Folley Tech", url: "https://www.instagram.com/folleytech", handle: "@folleytech" },
  ];
  return <section className="bg-muted/35 py-16 sm:py-20"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><Eyebrow>{c("social")}</Eyebrow><div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-3xl font-semibold">{c("social")}</h2><p className="text-sm text-muted-foreground">{c("socialText")}</p></div><div className="mt-8 grid border-l border-t border-border sm:grid-cols-3">{socials.map((social) => <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-r border-border p-5 transition-colors hover:bg-background"><span><span className="block text-sm font-semibold">{social.name}</span><span className="mt-1 block text-xs text-muted-foreground">{social.handle}</span></span><Instagram className="size-5 text-primary" /></a>)}</div></div></section>;
}

{/*
export function PartnershipsPage() {
  const { language } = useLanguage();
  const c = (key: CopyKey) => text(language, key);
  const opportunities = language === "fr" ? ["Partenariats stratégiques", "Collaboration avec des entrepreneurs", "Opportunités de sous-traitance", "Partenariats d’affaires", "Opportunités commerciales"] : ["Strategic partnerships", "Contractor collaboration", "Subcontracting opportunities", "Business partnerships", "Commercial opportunities"];
  return <><PageIntro eyebrow={c("partnerLabel")} title={c("partnerTitle")} description={c("partnerText")} /><section className="py-16 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center lg:px-12"><div className="relative"><img src={logisticsImage} alt="Regional business partners collaborating on logistics" width={1200} height={800} loading="lazy" className="aspect-[1.2] w-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-5 py-4 text-xs font-semibold text-primary-foreground">Folley Group · Partnerships</span></div><div><Eyebrow>{c("partnerships")}</Eyebrow><h2 className="mt-5 text-3xl font-semibold">{language === "fr" ? "Des partenariats concrets, tournés vers l’avenir." : "Practical partnerships with room to grow."}</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{c("partnerText")}</p><ul className="mt-7">{opportunities.map((item) => <li key={item} className="flex items-center gap-3 border-t border-border py-4 text-sm"><Check className="size-4 text-primary" />{item}</li>)}</ul><Button asChild className="mt-6 h-11 rounded-sm px-5"><Link to="/contact">{c("partnerCta")}<ArrowRight /></Link></Button></div></div></section><MarketsSection /><ContactBand /></>;
}

*/}


export function ContactPage() {
  const { language } = useLanguage();

  const [formStatus, setFormStatus] = useState<
  "idle" | "sending" | "success" | "error"
>("idle");

useEffect(() => {
  if (formStatus !== "success") return;

  const timer = window.setTimeout(() => {
    setFormStatus("idle");
  }, 20000);

  return () => {
    window.clearTimeout(timer);
  };
}, [formStatus]);

  const c = (key: CopyKey) => text(language, key);

  const services = [
    ...divisions.map((division) =>
      language === "fr"
        ? division.titleFr
        : division.title
    ),
    "Folley Collection",
    "Folley Tech",
    language === "fr"
      ? "Demande de partenariat"
      : "Partnership enquiry",
    language === "fr"
      ? "Demande générale"
      : "General enquiry",
  ];

  async function sendMessage(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
  
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
  
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
    };
  
    setFormStatus("sending");
  
    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send message."
        );
      }
  
      formElement.reset();
      setFormStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus("error");
    }
  }
  const whatsappMessage =
    language === "fr"
      ? "Bonjour Folley Group, je souhaite obtenir plus d’informations sur vos services."
      : "Hello Folley Group, I would like more information about your services.";

  return (
    <>
      <PageIntro
        eyebrow={c("contact")}
        title={c("contactTitle")}
        description={c("contactText")}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12">

          {/* Contact information */}
          <div>
            <Eyebrow>{c("reachUs")}</Eyebrow>

            <h2 className="mt-5 text-2xl font-semibold">
              {language === "fr"
                ? "Comment pouvons-nous vous aider ?"
                : "How can we help?"}
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              {language === "fr"
                ? "Contactez Folley Group pour nos services, nos boutiques en ligne, nos partenariats ou toute demande générale."
                : "Contact Folley Group about our services, online shops, partnerships or general enquiries."}
            </p>

            <div className="mt-8 divide-y divide-border border-y border-border">
              <a
                href="tel:+256789402828"
                className="flex gap-4 py-5"
              >
                <Smartphone className="mt-1 size-5 shrink-0 text-primary" />

                <span>
                  <span className="block text-xs text-muted-foreground">
                    {language === "fr"
                      ? "Téléphone"
                      : "Phone"}
                  </span>

                  <span className="mt-1 block text-sm font-medium">
                     +256 789 402828
                  </span>
                </span>
              </a>

              <a
                href="mailto:rwanikajean@gmail.com"
                className="flex gap-4 py-5"
              >
                <Globe2 className="mt-1 size-5 shrink-0 text-primary" />

                <span>
                  <span className="block text-xs text-muted-foreground">
                    Email
                  </span>

                  <span className="mt-1 block text-sm font-medium">
                    rwanikajean@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=Quartier+Le+Volcan+Goma"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 py-5"
              >
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />

                <span>
                  <span className="block text-xs text-muted-foreground">
                    {c("headquarters")}
                  </span>

                  <span className="mt-1 block text-sm font-medium">
                    Quartier Le Volcan, Goma
                    <br />
                    {language === "fr"
                      ? "Nord-Kivu, RD Congo"
                      : "North Kivu, DR Congo"}
                  </span>
                </span>
              </a>
            </div>

            <a
              href={`https://wa.me/256789402828?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Headphones className="size-4" />

              {language === "fr"
                ? "Nous contacter sur WhatsApp"
                : "Contact us on WhatsApp"}

              <ArrowUpRight className="size-3.5" />
            </a>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {c("markets")}
              </p>

              <p className="mt-2 text-sm leading-6">
                DR Congo · Rwanda · Uganda · Burundi
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            onSubmit={sendMessage}
            className="border border-border p-5 sm:p-8"
          >
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {language === "fr"
                  ? "Envoyer une demande"
                  : "Send an enquiry"}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                {language === "fr"
                  ? "Parlez-nous de votre besoin."
                  : "Tell us what you need."}
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                {language === "fr"
                  ? "Sélectionnez le service qui vous intéresse et envoyez-nous votre message."
                  : "Select the service you are interested in and send us your message."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-medium">
                {c("formName")}

                <Input
                  name="name"
                  autoComplete="name"
                  required
                  className="h-11 rounded-sm bg-background"
                />
              </label>

              <label className="grid gap-2 text-xs font-medium">
                {c("formEmail")}

                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-11 rounded-sm bg-background"
                />
              </label>

              <label className="grid gap-2 text-xs font-medium">
                {c("formPhone")}

                <Input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="h-11 rounded-sm bg-background"
                />
              </label>

              <label className="grid gap-2 text-xs font-medium">
                {c("formService")}

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-sm border border-input bg-background px-3 text-sm"
                >
                  <option value="" disabled>
                    {c("choose")}
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-xs font-medium sm:col-span-2">
                {c("formMessage")}

                <Textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={c("formPlaceholder")}
                  className="resize-y rounded-sm bg-background"
                />
              </label>
            </div>

            <Button
  type="submit"
  disabled={formStatus === "sending"}
  className="mt-6 h-11 rounded-sm px-6"
>
  {formStatus === "sending"
    ? language === "fr"
      ? "Envoi..."
      : "Sending..."
    : c("formSend")}

  {formStatus !== "sending" && <ArrowRight />}
</Button>

{formStatus === "success" && (
  <div
    role="status"
    className="mt-4 border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary"
  >
    {language === "fr"
      ? "Merci. Votre message a été envoyé avec succès. Notre équipe vous répondra dès que possible."
      : "Thank you. Your message has been sent successfully. Our team will get back to you as soon as possible."}
  </div>
)}

{formStatus === "error" && (
  <div
    role="alert"
    className="mt-4 border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive"
  >
    {language === "fr"
      ? "Une erreur s’est produite lors de l’envoi de votre message. Veuillez réessayer."
      : "We couldn't send your message. Please try again."}
  </div>
)}

            
          </form>
        </div>
      </section>

      <SocialLinks />
    </>
  );
}