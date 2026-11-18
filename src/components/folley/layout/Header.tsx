import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  useLanguage,
  text,
  type CopyKey,
} from "@/components/folley/Language";

import { navItems } from "@/components/folley/data";

import { Wordmark } from "@/components/folley/layout/Wordmark";

export function Header() {
  const { language, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const c = (key: CopyKey) => text(language, key);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Wordmark />

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={
                item.to === "/"
                  ? { exact: true }
                  : { exact: false }
              }
              className="relative py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary",
              }}
            >
              {c(item.key)}
            </Link>
          ))}

          {/* Language Switch */}
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 border-l border-border pl-5 text-[11px] font-semibold tracking-wide text-foreground"
            aria-label="Switch language"
          >
            <span
              className={
                language === "en"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            >
              EN
            </span>

            <span className="text-muted-foreground">
              /
            </span>

            <span
              className={
                language === "fr"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            >
              FR
            </span>

            <ChevronDown className="size-3 text-muted-foreground" />
          </button>

          {/* Contact Button */}
          <Button
            asChild
            className="h-10 rounded-sm px-5 text-xs"
          >
            <Link
              to="/contact"
              activeProps={{
                className:
                  "ring-2 ring-primary ring-offset-2 ring-offset-background",
              }}
            >
              {c("contactUs")}
              <ArrowRight />
            </Link>
          </Button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggle}
            aria-label="Switch language"
            className="px-2 text-xs font-semibold"
          >
            {language.toUpperCase()}
            <ChevronDown className="size-3" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={
              open ? "Close navigation" : c("menu")
            }
            className="rounded-sm"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={
                item.to === "/"
                  ? { exact: true }
                  : { exact: false }
              }
              className="block border-b border-border py-3 text-sm font-medium text-muted-foreground"
              activeProps={{
                className:
                  "font-semibold text-primary",
              }}
            >
              {c(item.key)}
            </Link>
          ))}

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="mt-4 block"
          >
            <Button className="w-full rounded-sm">
              {c("contactUs")}
              <ArrowRight />
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}