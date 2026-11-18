import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MapPin } from "lucide-react";

import heroImage from "@/assets/folley-group-hero.jpg";

import {useLanguage} from "@/components/folley/Language";

import { Eyebrow } from "@/components/folley/shared/Eyebrow";
import { PageIntro } from "@/components/folley/shared/PageIntro";
import { ContactBand } from "@/components/folley/shared/ContactBand";
import { TrustStrip } from "@/components/folley/shared/TrustStrip";
import { MarketsSection } from "@/components/folley/shared/MarketsSection";

import {divisions, divisionHref } from "@/components/folley/data"

import { ScrollReveal } from "@/components/folley/shared/ScrollReveal";


export function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageIntro
        eyebrow="Folley Group"
        title={
          language === "fr"
            ? "À propos de Folley Group"
            : "About Folley Group"
        }
        description={
          language === "fr"
            ? "Folley Group propose des services dans les domaines du transport et du tourisme, de l’immobilier et de l’hôtellerie, des télécoms et de l’informatique, du commerce général, de la logistique et de la sous-traitance."
            : "Folley Group provides services in transport and tourism, real estate and hospitality, telecoms and IT, general trade, logistics and subcontracting."
        }
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center lg:px-12">
        <ScrollReveal direction="left">

          <div className="relative">
            <img
              src={heroImage}
              alt="Goma, North Kivu, headquarters of Folley Group"
              width={1600}
              height={960}
              loading="lazy"
              className="aspect-[1.2] w-full object-cover"
            />

            <span className="absolute bottom-0 left-0 bg-primary px-5 py-4 text-xs font-medium text-primary-foreground">
              <MapPin className="mr-2 inline size-4" />
              Goma, North Kivu · DRC
            </span>
          </div>
          </ScrollReveal>
         
          <ScrollReveal direction="right" delay={150}>
          <div>
            <Eyebrow>
              {language === "fr" ? "Notre vision" : "Our Vision"}
            </Eyebrow>

            <h2 className="mt-5 text-3xl font-semibold leading-tight">
              {language === "fr"
                ? "Faciliter la mobilité, le logement, le commerce et la logistique."
                : "Making mobility, housing, trade and logistics easier."}
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {language === "fr"
                ? "Folley Group vise à faciliter les déplacements, le logement, les échanges commerciaux et la logistique, tout en proposant des solutions dans les domaines de l’habillement et de la technologie."
                : "Folley Group aims to facilitate travel, housing, commercial exchanges and logistics, while also providing clothing and technology solutions."}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              {divisions.map((division) => (
                <Link
                  key={division.slug}
                  to={divisionHref(division.slug)}
                  className="flex items-center gap-2 border-b border-border py-3 transition-colors hover:text-primary"
                >
                  <division.Icon className="size-4 shrink-0 text-primary" />

                  {language === "fr"
                    ? division.titleFr
                    : division.title}
                </Link>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <TrustStrip />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[0.65fr_1.35fr] lg:px-12">
        <ScrollReveal direction="left">
          <div>
            <Eyebrow>
              {language === "fr" ? "Direction" : "Leadership"}
            </Eyebrow>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {language === "fr"
                ? "Fondateur, Folley Group"
                : "Founder, Folley Group"}
            </p>
          </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>

          <div>
            <h2 className="text-3xl font-semibold">
              Rwanika Jean Claude
            </h2>

            
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
  {language === "fr"
    ? "Titulaire d’un diplôme en Business Information Technology, avec une expérience en IT, maintenance informatique, gestion d’entreprise, gestion de projet, analyse de données et dans le domaine de la mode."
    : "Holder of a diploma in Business Information Technology, with experience in IT, computer maintenance, business management, project management, data analysis and the fashion industry."}
</p>

           

            <div className="mt-7 flex flex-wrap gap-5">
              <a
                href="https://www.instagram.com/folley_j_c?"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
              >
                <Instagram className="size-4 text-primary" />
                Instagram
              </a>

          
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <MarketsSection />
      <ContactBand />
    </>
  );
}