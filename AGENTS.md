<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Case content lives only in src/data/cases.ts (long case text in src/data/case-content/, attached from cases.ts) and UI copy in src/lib/i18n.ts; why: cases will be swapped for Notion data and the site must stay a static front end with no backend.
