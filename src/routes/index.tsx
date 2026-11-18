import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/folley-site";

    export const Route = createFileRoute("/")({
      head: () => ({
        meta: [
          {
            title: "Folley Group | Business, Mobility & Technology Solutions",
          },
          {
            name: "description",
            content:
              "Folley Group provides transport and tourism, real estate and hospitality, telecoms and IT, general trade, logistics and subcontracting services.",
          },
    
          {
            property: "og:title",
            content:
              "Folley Group | Business, Mobility & Technology Solutions",
          },
          {
            property: "og:description",
            content:
              "Explore Folley Group services and online businesses across DR Congo, Rwanda, Uganda and Burundi.",
          },
          {
            property: "og:type",
            content: "website",
          },
    
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:title",
            content:
              "Folley Group | Business, Mobility & Technology Solutions",
          },
          {
            name: "twitter:description",
            content:
              "Explore Folley Group services across mobility, property, technology, trade and logistics.",
          },
        ],
      }),
    
      component: HomePage,
    });

