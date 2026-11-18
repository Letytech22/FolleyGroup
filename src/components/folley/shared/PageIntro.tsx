import { Eyebrow } from "@/components/folley/shared/Eyebrow";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-muted/35">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}