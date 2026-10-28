import { createFileRoute, notFound } from "@tanstack/react-router";
import { CasePage } from "@/components/case-page";
import { getCase } from "@/data/cases";

export const Route = createFileRoute("/nl/werk/$slug")({
  loader: ({ params }) => {
    const c = getCase(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.titleNl} — Maria Molenaar` : "Case — Maria Molenaar";
    const desc = loaderData?.summaryNl ?? "Case van Maria Molenaar.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: () => <CasePage c={Route.useLoaderData()} lang="nl" />,
});
