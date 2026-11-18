import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useLanguage } from "@/components/folley/Language";
import { brands } from "@/components/folley/data";

import { PageIntro } from "@/components/folley/shared/PageIntro";
import { Eyebrow } from "@/components/folley/shared/Eyebrow";
import { ContactBand } from "@/components/folley/shared/ContactBand";
import { ScrollReveal } from "@/components/folley/shared/ScrollReveal";

export function BrandsPage() {
    const { language } = useLanguage();
  
    const brandDetails = [
      {
        ...brands[0],
        description:
          language === "fr"
            ? "Découvrez Folley Collection, l’activité de Folley Group dédiée à l’habillement."
            : "Discover Folley Collection, Folley Group's clothing business.",
      },
      {
        ...brands[1],
        description:
          language === "fr"
            ? "Découvrez Folley Tech, l’activité de Folley Group dédiée aux téléphones et accessoires électroniques."
            : "Discover Folley Tech, Folley Group's business for phones and electronic accessories.",
      },
    ];
  
    return (
      <>
        <PageIntro
          eyebrow="Folley Group"
          title={
            language === "fr"
              ? "Nos marques"
              : "Our Brands"
          }
          description={
            language === "fr"
              ? "Découvrez Folley Collection et Folley Tech, les activités en ligne de Folley Group dans l’habillement, les téléphones et les accessoires électroniques."
              : "Explore Folley Collection and Folley Tech, Folley Group's online businesses in clothing, phones and electronic accessories."
          }
        />
  
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] space-y-20 px-5 sm:px-8 lg:px-12">
  
            {brandDetails.map((brand, index) => (
              <article
                key={brand.name}
                className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
              >
                {/* Brand image */}
                <ScrollReveal
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={
                      index % 2 === 1
                        ? "md:order-2"
                        : ""
                    }
                  >
                    <div className="group relative overflow-hidden bg-muted">
                      <img
                        src={brand.image}
                        alt={brand.alt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="aspect-[1.2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
  
                      <span className="absolute bottom-0 left-0 bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground">
                        {language === "fr"
                          ? brand.categoryFr
                          : brand.category}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
  
                {/* Brand information */}
                <ScrollReveal
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={150}
                >
                  <div
                    className={
                      index % 2 === 1
                        ? "md:order-1"
                        : ""
                    }
                  >
                    <Eyebrow>
                      {language === "fr"
                        ? "Une marque Folley Group"
                        : "A Folley Group brand"}
                    </Eyebrow>
  
                    <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                      {brand.name}
                    </h2>
  
                    <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                      {brand.description}
                    </p>
  
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="h-11 rounded-sm px-5"
                      >
                        <a
                          href={brand.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {language === "fr"
                            ? "Visiter le site"
                            : "Visit website"}
  
                          <ArrowUpRight />
                        </a>
                      </Button>
  
                      <Button
                        asChild
                        variant="outline"
                        className="h-11 rounded-sm px-5"
                      >
                        <a
                          href={brand.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Instagram className="size-4" />
  
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </article>
            ))}
  
          </div>
        </section>
  
        <section className="bg-muted/40 py-16 sm:py-20">
          <ScrollReveal direction="up">
            <div className="mx-auto flex max-w-[1400px] flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
  
              <div>
                <Eyebrow>
                  {language === "fr"
                    ? "Folley Group"
                    : "Folley Group"}
                </Eyebrow>
  
                <h2 className="mt-4 max-w-xl text-2xl font-semibold sm:text-3xl">
                  {language === "fr"
                    ? "Découvrez également nos autres activités."
                    : "Explore our other business areas."}
                </h2>
  
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                  {language === "fr"
                    ? "Découvrez les services de Folley Group dans le transport, l’immobilier, la technologie, le commerce et la logistique."
                    : "Explore Folley Group services across transport, real estate, technology, trade and logistics."}
                </p>
              </div>
  
              <Button
                asChild
                className="h-11 w-fit rounded-sm px-6"
              >
                <Link to="/businesses">
                  {language === "fr"
                    ? "Voir nos activités"
                    : "View our businesses"}
  
                  <ArrowRight />
                </Link>
              </Button>
  
            </div>
          </ScrollReveal>
        </section>
  
        <ContactBand />
      </>
    );
  }