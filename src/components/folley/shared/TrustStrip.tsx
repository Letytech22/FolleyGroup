import {
    ArrowUpRight,
    BriefcaseBusiness,
    Check,
    Globe2,
    Network,
    PackageCheck,
    UsersRound,
  } from "lucide-react";
  
  import {
    useLanguage,
    text,
    type CopyKey,
  } from "@/components/folley/Language";

  import { ScrollReveal } from "@/components/folley/shared/ScrollReveal";
  
  export function TrustStrip() {
    const { language } = useLanguage();
  
    const c = (key: CopyKey) =>
      text(language, key);
  
    const values = [
      c("trust1"),
      c("trust2"),
      c("trust3"),
      c("trust4"),
      c("trust5"),
      c("trust6"),
    ];
  
    const icons = [
      Network,
      Globe2,
      UsersRound,
      PackageCheck,
      BriefcaseBusiness,
      ArrowUpRight,
    ];
  
    return (
      <section className="bg-primary py-14 text-primary-foreground sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
    
          <ScrollReveal direction="up">
            <h2 className="max-w-xl text-2xl font-semibold leading-snug sm:text-3xl">
              {c("trustTitle")}
            </h2>
          </ScrollReveal>
    
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = icons[index] ?? Check;
    
              return (
                <ScrollReveal
                  key={value}
                  direction="up"
                  delay={index * 100}
                >
                  <div className="flex items-center gap-3 border-t border-primary-foreground/25 pt-4 text-sm">
                    <Icon className="size-5 shrink-0 text-primary-foreground/75" />
    
                    {value}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
    
        </div>
      </section>
    );
  }