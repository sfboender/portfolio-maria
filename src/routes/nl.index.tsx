import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/nl/")({
  head: () => ({
    meta: [
      { title: t.nl.metaTitle },
      { name: "description", content: t.nl.metaDesc },
      { property: "og:title", content: t.nl.metaTitle },
      { property: "og:description", content: t.nl.metaDesc },
    ],
  }),
  component: () => <Home lang="nl" />,
});
