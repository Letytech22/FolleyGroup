import { createFileRoute } from "@tanstack/react-router";
import { BusinessesPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      {
        title: "Our Businesses | Folley Group",
      },
      {
        name: "description",
        content:
          "Explore Folley Group services in transport and tourism, real estate and hospitality, telecoms and IT, general trade, logistics and subcontracting.",
      },
  
      {
        property: "og:title",
        content: "Our Businesses | Folley Group",
      },
      {
        property: "og:description",
        content:
          "Explore Folley Group's business and service areas.",
      },
      {
        property: "og:type",
        content: "website",
      },
  
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: BusinessesPage,
});