"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dict, href, type Locale } from "@/content";

/** EN lives at /, TR at /tr/ — the switch keeps you on the same page. */
const counterpart = (locale: Locale, path: string) =>
  locale === "en" ? `/tr${path === "/" ? "/" : path}` : path.replace(/^\/tr/, "") || "/";

export function Nav({ locale }: { locale: Locale }) {
  const d = dict(locale);
  const path = usePathname() ?? href(locale);
  const other: Locale = locale === "en" ? "tr" : "en";

  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Main">
        <Link href={href(locale)} className="nav__logo" aria-label="dxpane home">
          dxpane
        </Link>
        <div className="nav__links">
          <Link href={`${href(locale)}#how`}>{d.nav.how}</Link>
          <Link href={`${href(locale)}#faq`}>{d.nav.faq}</Link>
          <Link href={href(locale, "support")}>{d.nav.support}</Link>
          <Link href={counterpart(locale, path)} hrefLang={other} lang={other} className="nav__lang">
            {d.nav.switchTo}
          </Link>
        </div>
      </nav>
    </header>
  );
}
