import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/en" });
  },
  head: () => ({
    meta: [
      { title: "Maria Molenaar · UX/UI Designer" },
      { name: "description", content: "Portfolio of Maria Molenaar, UX/UI designer in Amsterdam." },
      { property: "og:title", content: "Maria Molenaar · UX/UI Designer" },
      { property: "og:description", content: "Portfolio of Maria Molenaar, UX/UI designer in Amsterdam." },
    ],
  }),
});
