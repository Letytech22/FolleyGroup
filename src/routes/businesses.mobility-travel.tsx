import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses/mobility-travel")({
  head: () => ({ meta: [
    { title: "Mobility & Travel | Folley Group" },
    { name: "description", content: "Vehicle rental, passenger and goods transport, airport facilitation and travel assistance from Folley Group." },
    { property: "og:title", content: "Mobility & Travel | Folley Group" },
    { property: "og:description", content: "Regional transport, vehicle rental, travel and airport facilitation services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <BusinessPage slug="mobility-travel" />,
});