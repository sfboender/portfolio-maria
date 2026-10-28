import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nextCase, type Case } from "@/data/cases";
import { caseText, t, type Lang } from "@/lib/i18n";
import { Placeholder, Reveal, Shell } from "./site";

export function CasePage({ c, lang }: { c: Case; lang: Lang }) {
  const s = t[lang];
  const ct = caseText(c, lang);
  const next = nextCase(c.slug);
  const route = lang === "en" ? "/en/work/$slug" : "/nl/werk/$slug";
  return (
    <Shell lang={lang}>
      <article key={c.slug}>
        <header className="container-site pt-16 pb-12 md:pt-24">
          <Link to={lang === "en" ? "/en" : "/nl"} hash="work" className="link-arrow text-sm">
            <ArrowLeft size={16} /> {s.backHome}
          </Link>
          <p className="eyebrow mt-10">{ct.label}</p>
          <h1 className="h-display mt-5 max-w-4xl">{ct.title}</h1>
          <dl className="mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted-foreground">{s.category}</dt>
              <dd className="mt-1 font-medium">{c.category}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">{s.role}</dt>
              <dd className="mt-1 font-medium">{c.role}</dd>
            </div>
          </dl>
        </header>
        <Reveal className="container-site">
          <Placeholder label={`[Cover image: ${c.titleEn}]`} className="aspect-[16/9] rounded-[28px]" />
        </Reveal>
        <Reveal className="container-site mt-10">
          <div className="card grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.keyFigures.map((k) => (
              <p key={k} className="text-lg font-medium tracking-tight">
                {k}
              </p>
            ))}
          </div>
        </Reveal>
        <section className="container-site section max-w-3xl">
          <Reveal>
            <p className="text-xl leading-relaxed text-muted-foreground">{ct.summary}</p>
          </Reveal>
          <Reveal className="mt-12 flex flex-col gap-8">
            <Placeholder label="[Long case text]" className="h-48 rounded-[20px]" />
            <Placeholder label="[Case image]" className="aspect-[16/10] rounded-[20px]" />
            <Placeholder label="[Long case text]" className="h-48 rounded-[20px]" />
          </Reveal>
        </section>
        <Reveal className="container-site pb-24">
          <Link to={route} params={{ slug: next.slug }} className="card group block p-8 md:p-12">
            <p className="eyebrow">{s.nextCase}</p>
            <p className="h-section mt-4 flex items-center gap-4">
              {caseText(next, lang).title}
              <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
        </Reveal>
      </article>
    </Shell>
  );
}
