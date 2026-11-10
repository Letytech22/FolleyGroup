import { createFileRoute } from "@tanstack/react-router";
import { PartnershipsPage } from "@/components/folley-site";

export const Route = createFileRoute("/partnerships")({
  head: () => ({ meta: [
    { title: "Partnerships | Folley Group" },
    { name: "description", content: "Explore strategic partnerships, contractor collaboration, subcontracting and commercial opportunities with Folley Group." },
    { property: "og:title", content: "Partnerships | Folley Group" },
    { property: "og:description", content: "Let's build practical business opportunities together across the region." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PartnershipsPage,
});