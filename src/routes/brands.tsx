import { createFileRoute } from "@tanstack/react-router";
import { BrandsPage } from "@/components/folley/BrandsPage";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      {
        title: "Our Brands | Folley Group",
      },
      {
        name: "description",
        content:
          "Explore Folley Collection for clothing and Folley Tech for phones and electronic accessories, the online brands of Folley Group.",
      },

      {
        name: "robots",
        content: "index, follow",
      },

      {
        property: "og:title",
        content: "Our Brands | Folley Group",
      },
      {
        property: "og:description",
        content:
          "Discover Folley Collection and Folley Tech, Folley Group's online businesses in clothing, phones and electronic accessories.",
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
        content: "Our Brands | Folley Group",
      },
      {
        name: "twitter:description",
        content:
          "Discover Folley Collection and Folley Tech, the online brands of Folley Group.",
      },
    ],
  }),

  component: BrandsPage,
});