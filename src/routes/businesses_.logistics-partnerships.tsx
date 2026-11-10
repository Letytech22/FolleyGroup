import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses/logistics-partnerships")({
  head: () => ({ meta: [
    { title: "Logistics & Partnerships | Folley Group" },
    { name: "description", content: "Logistics, subcontracting, contractor partnerships and regional business collaboration with Folley Group." },
    { property: "og:title", content: "Logistics & Partnerships | Folley Group" },
    { property: "og:description", content: "Explore logistics, subcontracting and collaboration opportunities with Folley Group." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <BusinessPage slug="logistics-partnerships" />,
});