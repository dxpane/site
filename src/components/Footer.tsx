import Link from "next/link";
import { dict, href, type Locale } from "@/content";
import { CONTACT_EMAIL } from "@/content/site";

export function Footer({ locale }: { locale: Locale }) {
  const d = dict(locale);
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© 2026 dxpane. {d.footer.rights}</span>
        <nav className="footer__links" aria-label="Legal">
          <Link href={href(locale, "privacy")}>{d.footer.privacy}</Link>
          <Link href={href(locale, "terms")}>{d.footer.terms}</Link>
          <Link href={href(locale, "support")}>{d.footer.support}</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
