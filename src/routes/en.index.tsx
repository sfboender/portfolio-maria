import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: t.en.metaTitle },
      { name: "description", content: t.en.metaDesc },
      { property: "og:title", content: t.en.metaTitle },
      { property: "og:description", content: t.en.metaDesc },
    ],
  }),
  component: () => <Home lang="en" />,
});
