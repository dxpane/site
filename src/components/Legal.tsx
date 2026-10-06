import type { LegalDoc } from "@/content/types";
import { CONTACT_EMAIL } from "@/content/site";

/** Privacy, Terms and Support share one calm, readable layout. */
export function Legal({ doc, contactLabel }: { doc: LegalDoc; contactLabel?: string }) {
  return (
    <article className="legal">
      <h1 className="legal__title">{doc.title}</h1>
      <p className="legal__updated">{doc.updated}</p>
      <p className="legal__intro">{doc.intro}</p>
      {contactLabel && (
        <p>
          <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
            {contactLabel}
          </a>
        </p>
      )}
      {doc.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
