export type Locale = "en" | "tr";

export type MenuScreen = { kicker: string; title: string; items: [string, string][] };

export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };

export type Dict = {
  meta: { title: string; description: string };
  nav: { how: string; faq: string; support: string; switchTo: string };
  hero: { title: string; lead: string; badge: string; phoneBlock: string; play: string };
  screens: [MenuScreen, MenuScreen, MenuScreen];
  connected: string;
  story: {
    label: string;
    title: string;
    steps: { label: string; title: string; text: string }[];
    plan: { time: string; name: string }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  footer: { privacy: string; terms: string; support: string; rights: string };
  privacy: LegalDoc;
  terms: LegalDoc;
  support: LegalDoc & { contactLabel: string };
};
