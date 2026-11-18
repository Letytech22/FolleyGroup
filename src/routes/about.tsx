import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/folley/AboutPage";
export const Route = createFileRoute("/about")({
    head: () => ({
      meta: [
        {
          title: "About Folley Group | Goma, DR Congo",
        },
        {
          name: "description",
          content:
            "Learn about Folley Group, its vision, service areas and founder Rwanika Jean Claude, based in Goma, North Kivu, DR Congo.",
        },
    
        {
          property: "og:title",
          content: "About Folley Group | Goma, DR Congo",
        },
        {
          property: "og:description",
          content:
            "Discover Folley Group's vision, activities and leadership.",
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
  component: AboutPage,
});