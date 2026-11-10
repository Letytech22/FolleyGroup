import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/folley-site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Folley Group | Our Story & Leadership" },
    { name: "description", content: "Learn about Folley Group's connected business divisions, regional presence and founder Rwanika Jean Claude." },
    { property: "og:title", content: "About Folley Group | Our Story & Leadership" },
    { property: "og:description", content: "A diversified business group building connections across the Great Lakes region." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});