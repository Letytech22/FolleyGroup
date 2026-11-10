import { createFileRoute } from "@tanstack/react-router";
import { BusinessesPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses")({
  head: () => ({ meta: [
    { title: "Our Businesses | Folley Group" },
    { name: "description", content: "Explore mobility and travel, property and hospitality, technology, trade, logistics and partnerships at Folley Group." },
    { property: "og:title", content: "Our Businesses | Folley Group" },
    { property: "og:description", content: "Explore Folley Group's connected business divisions and services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BusinessesPage,
});