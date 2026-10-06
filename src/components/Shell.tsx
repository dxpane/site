import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { dict, href, type Locale } from "@/content";
import { SITE_URL } from "@/content/site";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import "../styles/globals.css";

export const viewport: Viewport = { themeColor: "#fbfbfd", colorScheme: "light" };

/** Shared metadata for a page; `page` picks the localized title for legal pages. */
export function pageMetadata(locale: Locale, page: "" | "privacy" | "terms" | "support" = ""): Metadata {
  const d = dict(locale);
  const title = page ? `${d[page].title} — dxpane` : d.meta.title;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: d.meta.description,
    alternates: {
      canonical: href(locale, page),
      languages: { en: href("en", page), tr: href("tr", page), "x-default": href("en", page) },
    },
    openGraph: {
      title,
      description: d.meta.description,
      url: href(locale, page),
      siteName: "dxpane",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: { card: "summary", title, description: d.meta.description },
  };
}

/** Root <html> for one locale (each locale is its own root layout so `lang` is correct in the static HTML). */
export function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale}>
      <body>
        <a className="skip" href="#main">
          {locale === "en" ? "Skip to content" : "İçeriğe geç"}
        </a>
        <Nav locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
