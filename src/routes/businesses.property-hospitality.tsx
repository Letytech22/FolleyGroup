import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses/property-hospitality")({
  head: () => ({ meta: [
    { title: "Property & Hospitality | Folley Group" },
    { name: "description", content: "Real estate, housing search, accommodation assistance and hotel services through Folley Group." },
    { property: "og:title", content: "Property & Hospitality | Folley Group" },
    { property: "og:description", content: "Find housing, accommodation assistance and hospitality services in the region." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <BusinessPage slug="property-hospitality" />,
});