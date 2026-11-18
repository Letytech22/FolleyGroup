import { createFileRoute } from "@tanstack/react-router";

import { PartnershipsPage } from "@/components/folley/PartnershipsPage";



export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      {
        title: "Partnerships | Folley Group",
      },
      {
        name: "description",
        content:
          "Explore logistics, subcontracting and partnership opportunities with Folley Group for companies and contractors.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "Partnerships | Folley Group",
      },
      {
        property: "og:description",
        content:
          "Work with Folley Group through logistics, subcontracting and business partnerships.",
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
  component: PartnershipsPage,
});