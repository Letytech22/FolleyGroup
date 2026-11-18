import { Headphones } from "lucide-react";

import {
  useLanguage,
  text,
} from "@/components/folley/Language";

export function WhatsAppButton() {
  const { language } = useLanguage();

  const message =
    language === "fr"
      ? "Bonjour Folley Group, j’ai visité votre site et je souhaite en savoir plus sur vos services."
      : "Hello Folley Group, I visited your website and would like to enquire about your services.";

  return (
    <a
      className="whatsapp-float"
        href={`https://wa.me/256789402828?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label={text(language, "whatsapp")}
    >
      <Headphones className="size-5" />

      <span className="hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}