import type { Dict } from "@/content";

export function Faq({ d }: { d: Dict }) {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">{d.faq.title}</h2>
      <div className="faq__list">
        {d.faq.items.map((it) => (
          <details key={it.q} className="faq__item">
            <summary>{it.q}</summary>
            <p>{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
