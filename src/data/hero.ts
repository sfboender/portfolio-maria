// Phone screens from Maria's own mobile designs, shown in the moving hero columns.
// Left column scrolls up, right column scrolls down.
const s = (name: string) => `/images/hero/${name}.webp`;

export const heroColumns: string[][] = [
  [
    s("onboarding-getting-started"),
    s("wallet-credentials"),
    s("receive-verification-code"),
    s("onboarding-review-data"),
  ],
  [
    s("wallet-welcome"),
    s("onboarding-almost-done"),
    s("receive-trust-check"),
    s("wallet-credential-detail"),
    s("receive-add-credential"),
  ],
];
