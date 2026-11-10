import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/folley-site";

export const Route = createFileRoute("/businesses_/technology-telecoms")({
  head: () => ({ meta: [
    { title: "Technology & Telecoms | Folley Group" },
    { name: "description", content: "Mobile, internet, computer, network maintenance and IT support from Folley Group." },
    { property: "og:title", content: "Technology & Telecoms | Folley Group" },
    { property: "og:description", content: "Technology, telecoms and practical IT support for people and businesses." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <BusinessPage slug="technology-telecoms" />,
});