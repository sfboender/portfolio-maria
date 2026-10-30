import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Block } from "@/data/case-content/types";
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
            {ct.keyFigures.map((k) => (
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
          <div className="case-body mt-12">
            {ct.body.map((b, n) => (
              <CaseBlock key={n} b={b} lang={lang} />
            ))}
          </div>
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

function CaseBlock({ b, lang }: { b: Block; lang: Lang }) {
  switch (b.t) {
    case "h2":
      return <h2 className="mt-16 text-2xl font-semibold tracking-tight first:mt-0 md:text-3xl">{b.text}</h2>;
    case "h3":
      return <h3 className="mt-10 text-xl font-semibold tracking-tight">{b.text}</h3>;
    case "p":
      return <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{b.text}</p>;
    case "list":
      return (
        <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 text-lg leading-relaxed text-muted-foreground">
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="mt-5 flex list-decimal flex-col gap-3 pl-5 text-lg leading-relaxed text-muted-foreground">
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "points":
      return (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {b.items.map((i) => (
            <div key={i.title} className="card p-6">
              <p className="font-semibold tracking-tight">{i.title}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <p className="card mt-8 p-6 text-xl font-medium leading-snug tracking-tight md:p-8">{b.text}</p>
      );
    case "image":
      return (
        <Reveal className="mt-8">
          {b.src ? (
            <img src={b.src} alt={b.alt} loading="lazy" className="w-full rounded-[20px] border border-border" />
          ) : (
            <Placeholder label={`[Image: ${b.alt}]`} className="aspect-[16/10] rounded-[20px]" />
          )}
        </Reveal>
      );
    case "link": {
      const internal = b.href.startsWith("/");
      const href = internal ? `/${lang}${b.href}` : b.href;
      return (
        <a
          href={href}
          {...(internal ? {} : { target: "_blank", rel: "noreferrer" })}
          className="link-arrow mt-5 inline-flex"
        >
          {b.text} {internal ? <ArrowRight size={16} /> : <ArrowUpRight size={16} />}
        </a>
      );
    }
  }
}
