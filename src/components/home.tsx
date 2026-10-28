import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { publishedCases } from "@/data/cases";
import { caseText, education, experience, LINKEDIN, t, type Lang } from "@/lib/i18n";
import { Placeholder, Reveal, Shell } from "./site";

const CYCLE_MS = 3500;

function Phone({ lang }: { lang: Lang }) {
  const list = publishedCases();
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setI((v) => (v + 1) % list.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [i, tick, list.length]);
  const go = (n: number) => {
    setI(n);
    setTick((x) => x + 1);
  };
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="phone">
        {list.map((c, n) => (
          <div key={c.slug} className={`phone-screen ${n === i ? "is-active" : ""}`} aria-hidden={n !== i}>
            <Placeholder label={`[Phone screen: ${c.titleEn}]`} className="h-full rounded-[28px]" />
          </div>
        ))}
      </div>
      <div className="flex w-[260px] gap-2">
        {list.map((c, n) => (
          <button
            key={`${c.slug}-${n === i ? tick + "-" + i : "x"}`}
            onClick={() => go(n)}
            aria-label={caseText(c, lang).title}
            className="story-bar"
          >
            <span className={n < i ? "story-fill done" : n === i ? "story-fill run" : "story-fill"} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const s = t[lang];
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="section">
      <Reveal className="container-site grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="h-display">{s.contactHeading}</h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">{s.contactText}</p>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-ghost mt-8">
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
        {sent ? (
          <div className="card flex items-center justify-center p-10 text-xl font-medium" role="status">
            {s.thanks}
          </div>
        ) : (
          <form onSubmit={submit} className="card flex flex-col gap-4 p-8">
            <label className="field">
              <span>{s.name}</span>
              <input required name="name" />
            </label>
            <label className="field">
              <span>{s.email}</span>
              <input required type="email" name="email" />
            </label>
            <label className="field">
              <span>{s.message}</span>
              <textarea required name="message" rows={5} />
            </label>
            <button type="submit" className="btn-primary mt-2 self-start">
              {s.send}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const s = t[lang];
  const list = publishedCases();
  return (
    <Shell lang={lang}>
      <section className="container-site grid items-center gap-16 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <Reveal>
          <p className="eyebrow">{s.heroLabel}</p>
          <h1 className="h-hero mt-6">{s.heroHeading}</h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">{s.heroText}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              {s.seeWork} <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              {s.contactMe}
            </a>
          </div>
        </Reveal>
        <Phone lang={lang} />
      </section>

      <section id="work" className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">{s.selectedWork}</p>
          </Reveal>
          <div className="mt-12 flex flex-col gap-24">
            {list.map((c, n) => {
              const ct = caseText(c, lang);
              return (
                <Reveal key={c.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <Placeholder
                    label={`[Cover image: ${c.titleEn}]`}
                    className={`aspect-[4/3] rounded-[28px] ${n % 2 ? "md:order-2" : ""}`}
                  />
                  <div>
                    <p className="eyebrow">{ct.label}</p>
                    <h3 className="h-section mt-4">{ct.title}</h3>
                    <p className="mt-5 text-lg text-muted-foreground">{ct.summary}</p>
                    <Link
                      to={lang === "en" ? "/en/work/$slug" : "/nl/werk/$slug"}
                      params={{ slug: c.slug }}
                      className="link-arrow mt-8"
                    >
                      {s.readCase} <ArrowRight size={16} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="card mt-24 grid gap-6 p-8 md:grid-cols-[1fr_2fr] md:p-12">
            <div>
              <p className="eyebrow">{s.dsStatus}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{s.dsTitle}</h3>
            </div>
            <p className="text-lg text-muted-foreground">{s.dsText}</p>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container-site grid gap-12 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="h-section">{s.experience}</h2>
          </Reveal>
          <div>
            <ol className="timeline">
              {experience.map((e) => (
                <Reveal key={e.role + e.from}>
                  <li className="timeline-item">
                    <p className="text-sm text-muted-foreground">
                      {e.from} – {e.to ?? s.now}
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-tight">{e.role}</p>
                    <p className="text-muted-foreground">{e.org}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="eyebrow mt-14 mb-6">{s.education}</p>
              <ol className="timeline">
                {education.map((e) => (
                  <li key={e.role} className="timeline-item">
                    <p className="text-sm text-muted-foreground">
                      {e.from} – {e.to}
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-tight">{e.role}</p>
                    <p className="text-muted-foreground">{e.org}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <Reveal className="container-site grid items-center gap-12 md:grid-cols-2">
          <Placeholder label="[Portrait photo]" className="aspect-[4/5] max-w-md rounded-[28px]" />
          <div>
            <h2 className="h-section">{s.about}</h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{s.aboutText}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-primary">
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a href="/cv/maria-molenaar-cv.pdf" className="btn-ghost">
                {s.downloadCv} <Download size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">{s.quotes}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((n) => (
              <Reveal key={n} className="card p-8">
                <p className="text-xl font-medium">[Quote]</p>
                <p className="mt-8 text-sm text-muted-foreground">[Name, role]</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact lang={lang} />
    </Shell>
  );
}
