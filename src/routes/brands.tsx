import { createFileRoute } from "@tanstack/react-router";
import { BrandsPage } from "@/components/folley-site";

export const Route = createFileRoute("/brands")({
  head: () => ({ meta: [
    { title: "Our Brands | Folley Group" },
    { name: "description", content: "Meet Folley Collection, Folley Tech and Folley J.C.—ventures within the Folley Group family." },
    { property: "og:title", content: "Our Brands | Folley Group" },
    { property: "og:description", content: "Distinct ventures connected within the Folley Group family." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BrandsPage,
});