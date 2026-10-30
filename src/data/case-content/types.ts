// Building blocks for a case page. Kept close to Notion's own block types,
// so the Notion sync can later map each Notion block onto one of these.
export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "list"; items: string[] }
  | { t: "steps"; items: string[] }
  | { t: "points"; items: { title: string; text: string }[] }
  | { t: "callout"; text: string }
  | { t: "image"; src?: string; alt: string }
  | { t: "link"; text: string; href: string };

export interface CaseBody {
  en: Block[];
  nl: Block[];
}
