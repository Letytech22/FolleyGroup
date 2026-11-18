import { Link } from "@tanstack/react-router";
import logo from "@/assets/folley logo.jpeg";

export function Wordmark({
  inverse = false,
}: {
  inverse?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="Folley Group home"
      className={`group inline-flex items-center gap-3 ${
        inverse ? "text-background" : "text-foreground"
      }`}
    >
      <img
        src={logo}
        alt="Folley Group"
        className="h-10 w-auto object-contain"
      />

      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-[0.08em]">
          FOLLEY
        </span>

        <span className="text-[10px] font-medium tracking-[0.24em] text-muted-foreground">
          GROUP
        </span>
      </span>
    </Link>
  );
}