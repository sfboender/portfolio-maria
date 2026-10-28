import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function ThemeButton({ label }: { label: string }) {
  const [dark, setDark] = useState<boolean | null>(null);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };
  return (
    <button onClick={toggle} aria-label={label} className="icon-btn">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const s = t[lang];
  const { pathname } = useLocation();
  const other: Lang = lang === "en" ? "nl" : "en";
  const switchHref = pathname
    .replace(/^\/(en|nl)/, `/${other}`)
    .replace(lang === "en" ? "/work/" : "/werk/", other === "en" ? "/work/" : "/werk/");
  const home = `/${lang}`;
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a href={home} className="text-base font-semibold tracking-tight">
          Maria Molenaar
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {(["work", "experience", "about", "contact"] as const).map((k) => (
            <a key={k} href={`${home}#${k}`} className="transition-colors hover:text-foreground">
              {s.nav[k]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-border p-0.5 text-xs font-medium">
            {(["en", "nl"] as const).map((l) => (
              <a
                key={l}
                href={l === lang ? pathname : switchHref}
                aria-current={l === lang}
                className={`rounded-full px-3 py-1.5 uppercase ${l === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l}
              </a>
            ))}
          </div>
          <ThemeButton label={s.themeToggle} />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-site text-sm text-muted-foreground">© 2026 Maria Molenaar · Amsterdam</div>
    </footer>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`placeholder ${className}`}>
      <span>{label}</span>
    </div>
  );
}

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <div lang={lang} className="min-h-screen">
      <Header lang={lang} />
      <main className="page-enter">{children}</main>
      <Footer />
    </div>
  );
}

export { Link };
