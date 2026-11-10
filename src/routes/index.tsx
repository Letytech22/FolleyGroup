import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/folley-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Folley Group | Connecting People, Business & Opportunities" },
      { name: "description", content: "A diversified business group connecting mobility, property, technology, trade and regional partnerships from Goma, DRC." },
      { property: "og:title", content: "Folley Group | Connecting People, Business & Opportunities" },
      { property: "og:description", content: "Mobility, property, technology and trade—brought together by one trusted regional group." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
