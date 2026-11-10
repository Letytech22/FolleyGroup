import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/folley-site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Folley Group | Goma, DRC" },
    { name: "description", content: "Contact Folley Group in Goma about mobility, property, technology, trade, logistics and business partnerships." },
    { property: "og:title", content: "Contact Folley Group | Goma, DRC" },
    { property: "og:description", content: "Start a conversation with Folley Group's team in Goma, North Kivu." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});