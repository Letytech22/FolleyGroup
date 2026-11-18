import {
    useLanguage,
    text,
    type CopyKey,
  } from "@/components/folley/Language";
  
  import { Eyebrow } from "@/components/folley/shared/Eyebrow";
  import { ScrollReveal } from "@/components/folley/shared/ScrollReveal";
  
  export function MarketsSection() {
    const { language } = useLanguage();
  
    const c = (key: CopyKey) =>
      text(language, key);
  
    const markets = [
      "Democratic Republic of Congo",
      "Rwanda",
      "Uganda",
      "Burundi",
    ];
  
    const marketsFr = [
      "République démocratique du Congo",
      "Rwanda",
      "Ouganda",
      "Burundi",
    ];
  
    return (
        <section className="border-y border-border bg-muted/35 py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-[1fr_1fr] md:items-center lg:px-12">
      
            <ScrollReveal direction="left">
              <div>
                <Eyebrow>
                  {c("marketsLabel")}
                </Eyebrow>
      
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {c("marketsTitle")}
                </h2>
      
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                  {c("marketsText")}
                </p>
      
                <p className="mt-7 text-sm font-semibold">
                  {c("headquarters")}
                </p>
      
                <p className="mt-1 text-sm text-muted-foreground">
                  Quartier Le Volcan, Goma, North Kivu, DRC
                </p>
              </div>
            </ScrollReveal>
      
            <ScrollReveal direction="right" delay={150}>
              <div className="grid grid-cols-2 border-l border-t border-border">
                {(language === "fr" ? marketsFr : markets).map(
                  (market, index) => (
                    <ScrollReveal
                      key={market}
                      direction="up"
                      delay={index * 120}
                    >
                      <div className="flex min-h-24 items-center gap-3 border-b border-r border-border px-4 sm:min-h-28 sm:px-7">
                        <span className="text-xs font-semibold text-primary">
                          0{index + 1}
                        </span>
      
                        <span className="text-sm font-medium">
                          {market}
                        </span>
                      </div>
                    </ScrollReveal>
                  )
                )}
              </div>
            </ScrollReveal>
      
          </div>
        </section>
      );
  }