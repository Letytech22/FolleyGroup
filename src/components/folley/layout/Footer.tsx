import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import {
  useLanguage,
  text,
  type CopyKey,
} from "@/components/folley/Language";

import {
  divisions,
  divisionHref,
  navItems,
} from "@/components/folley/data";

import { Wordmark } from "@/components/folley/layout/Wordmark";

export function Footer() {
  const { language } = useLanguage();

  const c = (key: CopyKey) =>
    text(language, key);

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-12 lg:py-20">

        {/* Brand */}
        <div>
          <Wordmark inverse />

          <p className="mt-6 max-w-xs text-sm leading-7 text-background/65">
            {c("footerText")}
          </p>

          <a
            href="https://www.instagram.com/folley_j_c?"
            target="_blank"
            rel="noreferrer"
            aria-label="Folley Group on Instagram"
            className="mt-5 inline-flex items-center gap-2 text-sm text-background/80 hover:text-background"
          >
            <Instagram className="size-4" />
            Folley Group
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">
            {c("quickLinks")}
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-background/75 hover:text-background"
              >
                {c(item.key)}
              </Link>
            ))}

            <Link
              to="/contact"
              className="text-sm text-background/75 hover:text-background"
            >
              {c("contact")}
            </Link>
          </div>
        </div>

        {/* Businesses */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">
            {c("businesses")}
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            {divisions.map((division) => (
              <Link
                key={division.slug}
                to={divisionHref(division.slug)}
                className="text-sm text-background/75 hover:text-background"
              >
                {language === "fr"
                  ? division.titleFr
                  : division.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">
            {c("reachUs")}
          </h2>

          <div className="mt-5 flex flex-col gap-3 text-sm text-background/75">
            <a
              href="mailto:rwanikajean@gmail.com"
              className="hover:text-background"
            >
              rwanikajean@gmail.com
            </a>

            <a
              href="tel:+256789402828"
              className="hover:text-background"
            >
              +256 789 402828
            </a>

            <span>{c("headquarters")}</span>

            <span>
              Quartier Le Volcan, Goma
              <br />
              Nord-Kivu, RD Congo
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-background/15 px-5 py-5 text-xs text-background/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
      <span>
  © {new Date().getFullYear()} Folley Group. {c("copyright")}
</span>

        <span>
          DR Congo · Rwanda · Uganda · Burundi
        </span>
      </div>
    </footer>
  );
}