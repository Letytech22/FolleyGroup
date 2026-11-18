import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Truck,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useLanguage } from "@/components/folley/Language";

import { PageIntro } from "@/components/folley/shared/PageIntro";
import { Eyebrow } from "@/components/folley/shared/Eyebrow";
import { MarketsSection } from "@/components/folley/shared/MarketsSection";
import { ContactBand } from "@/components/folley/shared/ContactBand";
import { ScrollReveal } from "@/components/folley/shared/ScrollReveal";

export function PartnershipsPage() {
  const { language } = useLanguage();

  const opportunities =
    language === "fr"
      ? [
          {
            title: "Logistique",
            text: "Des services de logistique adaptés aux besoins des entreprises et des organisations.",
            Icon: Truck,
          },
          {
            title: "Sous-traitance",
            text: "Des opportunités de collaboration dans le cadre de missions et de projets de sous-traitance.",
            Icon: BriefcaseBusiness,
          },
          {
            title: "Partenariats avec des entreprises",
            text: "Folley Group travaille avec des entreprises dans le cadre de collaborations et de partenariats.",
            Icon: Building2,
          },
          {
            title: "Partenariats avec des entrepreneurs",
            text: "Folley Group travaille également avec des entrepreneurs selon les besoins et les projets.",
            Icon: UsersRound,
          },
        ]
      : [
          {
            title: "Logistics",
            text: "Logistics services for the needs of businesses and organisations.",
            Icon: Truck,
          },
          {
            title: "Subcontracting",
            text: "Opportunities to collaborate on subcontracting assignments and projects.",
            Icon: BriefcaseBusiness,
          },
          {
            title: "Partnerships with companies",
            text: "Folley Group works with companies through business collaborations and partnerships.",
            Icon: Building2,
          },
          {
            title: "Partnerships with contractors",
            text: "Folley Group also works with contractors based on project and service needs.",
            Icon: UsersRound,
          },
        ];

  return (
    <>
      <PageIntro
        eyebrow="Folley Group"
        title={
          language === "fr"
            ? "Partenariats"
            : "Partnerships"
        }
        description={
          language === "fr"
            ? "Folley Group propose des services de logistique et de sous-traitance et travaille en partenariat avec des entreprises et des entrepreneurs."
            : "Folley Group provides logistics and subcontracting services and works in partnership with companies and contractors."
        }
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-12">

          <ScrollReveal direction="left">
            <div>
              <Eyebrow>
                {language === "fr"
                  ? "Travaillons ensemble"
                  : "Working together"}
              </Eyebrow>

              <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                {language === "fr"
                 ? "Partenariats en logistique et sous-traitance."
: "Partnerships in logistics and subcontracting."}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {language === "fr"
  ? "Folley Group propose des services de logistique et de sous-traitance et travaille en partenariat avec des entreprises et des entrepreneurs."
  : "Folley Group provides logistics and subcontracting services and works in partnership with companies and contractors."}
</p>
              <Button
                asChild
                className="mt-7 h-11 rounded-sm px-5"
              >
                <Link to="/contact">
                  {language === "fr"
                    ? "Discuter d’un partenariat"
                    : "Discuss a partnership"}

                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          <ScrollReveal direction="up">
            <div className="max-w-2xl">
              <Eyebrow>
                {language === "fr"
                  ? "Domaines de collaboration"
                  : "Areas of collaboration"}
              </Eyebrow>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                {language === "fr"
                  ? "Comment nous pouvons collaborer."
                  : "Ways we can work together."}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {opportunities.map((item, index) => {
              const Icon = item.Icon;

              return (
                <ScrollReveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <article className="min-h-full bg-background p-6 sm:p-8">
                    <div className="flex size-11 items-center justify-center border border-border">
                      <Icon className="size-5 text-primary" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      <section className="bg-foreground py-20 text-background sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[1fr_0.8fr] md:items-center lg:px-12">

          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Handshake className="size-5" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  {language === "fr"
                    ? "Proposer une collaboration"
                    : "Start a conversation"}
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                {language === "fr"
                  ? "Vous souhaitez travailler avec Folley Group ?"
                  : "Interested in working with Folley Group?"}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <p className="text-sm leading-7 text-background/70">
                {language === "fr"
                  ? "Contactez-nous pour nous présenter votre besoin, votre projet ou votre proposition de partenariat."
                  : "Contact us to share your needs, project or partnership proposal."}
              </p>

              <Button
                asChild
                className="mt-6 h-11 rounded-sm px-5"
              >
                <Link to="/contact">
                  {language === "fr"
                    ? "Nous contacter"
                    : "Contact us"}

                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <MarketsSection />
      <ContactBand />
    </>
  );
}