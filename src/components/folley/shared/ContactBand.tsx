import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  useLanguage,
  text,
  type CopyKey,
} from "@/components/folley/Language";

import { Eyebrow } from "@/components/folley/shared/Eyebrow";

export function ContactBand() {
  const { language } = useLanguage();

  const c = (key: CopyKey) =>
    text(language, key);

  return (
    <section className="border-t border-border bg-muted/50 py-14 sm:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <Eyebrow>{c("contact")}</Eyebrow>

          <h2 className="mt-4 text-2xl font-semibold">
            {c("contactTitle")}
          </h2>
        </div>

        <Button
          asChild
          className="h-11 w-fit rounded-sm px-5"
        >
          <Link to="/contact">
            {c("contactUs")}
            <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}