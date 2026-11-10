import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses_/trade-commerce")({
  head: () => ({ meta: [
    { title: "Trade & Commerce | Folley Group" },
    { name: "description", content: "General trade, regional business sales and transfers, commercial opportunities and connections." },
    { property: "og:title", content: "Trade & Commerce | Folley Group" },
    { property: "og:description", content: "Connect with regional trade, business and commercial opportunities." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <BusinessPage slug="trade-commerce" />,
});