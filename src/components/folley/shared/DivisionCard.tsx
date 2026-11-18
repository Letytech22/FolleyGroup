import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/folley/Language";

import {
  divisionHref,
  type Division,
} from "@/components/folley/data";

export function DivisionCard({
  division,
}: {
  division: Division;
}) {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? division.titleFr
      : division.title;

  const description =
    language === "fr"
      ? division.shortFr
      : division.short;

  return (
    <article className="group border-t border-border pt-5">
      <Link
        to={divisionHref(division.slug)}
        className="block"
      >
        <div className="relative aspect-[1.42] overflow-hidden bg-muted">
          <img
            src={division.image}
            alt={division.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          />

          <span className="absolute left-4 top-4 flex size-10 items-center justify-center bg-background text-primary">
            <division.Icon className="size-5" />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">
              {title}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>

          <span className="mt-1 flex size-9 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}