import { en } from "./en";
import { tr } from "./tr";
import type { Dict, Locale } from "./types";

export type { Dict, LegalDoc, Locale, MenuScreen } from "./types";

const dicts: Record<Locale, Dict> = { en, tr };

export const dict = (locale: Locale): Dict => dicts[locale];

export type Page = "" | "privacy" | "terms" | "support";

/** Site-relative path for a page in a locale: EN lives at the root, TR under /tr. Trailing slash matches the export. */
export const href = (locale: Locale, page: Page = ""): string => {
  const base = locale === "en" ? "/" : "/tr/";
  return page ? `${base}${page}/` : base;
};
