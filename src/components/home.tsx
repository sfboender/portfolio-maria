import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { publishedCases } from "@/data/cases";
import { heroColumns } from "@/data/hero";
import { caseText, education, experience, LINKEDIN, t, type Lang } from "@/lib/i18n";
import { Placeholder, Reveal, Shell } from "./site";

function Screen({ src }: { src: string }) {
  return (
    <div className="hero-screen">
      <img src={src} alt="" loading="eager" decoding="async" />
    </div>
  );
}

// Two columns of Maria's phone screens moving in opposite directions (desktop),
// one horizontal row on small screens. Each list is doubled for a seamless loop.
function ScreenColumns() {
  const [a, b] = heroColumns;
  const all = [...a!, ...b!];
  return (
    <div aria-hidden="true">
      <div className="hero-cols hidden md:flex">
        <div className="hero-track hero-up">
          {[...a!, ...a!].map((src, n) => (
            <Screen key={n} src={src} />
          ))}
        </div>
        <div className="hero-track hero-down -mt-36">
          {[...b!, ...b!].map((src, n) => (
            <Screen key={n} src={src} />
          ))}
        </div>
      </div>
      <div className="hero-row md:hidden">
        <div className="hero-row-track">
          {[...all, ...all].map((src, n) => (
            <Screen key={n} src={src} />
          ))}
        </div>
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
        <ScreenColumns />
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
                  <Link
                    to={lang === "en" ? "/en/work/$slug" : "/nl/werk/$slug"}
                    params={{ slug: c.slug }}
                    className={`block overflow-hidden rounded-[28px] border border-border ${n % 2 ? "md:order-2" : ""}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={c.cover}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </Link>
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

      <Contact lang={lang} />
    </Shell>
  );
}
