import { Eyebrow } from "@/components/folley/shared/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {title}
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}