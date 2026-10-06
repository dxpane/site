import type { Dict } from "@/content";
import { AppStoreBadge } from "./AppStoreBadge";
import { Tv } from "./Tv";

export function Hero({ d }: { d: Dict }) {
  return (
    <section className="hero">
      <div className="hero__copy">
        <h1 className="hero__title">{d.hero.title}</h1>
        <p className="hero__lead">{d.hero.lead}</p>
        <AppStoreBadge label={d.hero.badge} />
      </div>
      <div className="hero__visual">
        <Tv screens={d.screens} show="cycle" connected={d.connected} className="hero__tv" />
        <div className="hero__beam" aria-hidden="true" />
        <div className="phone hero__phone" aria-hidden="true">
          <div className="phone__swatch" />
          <div className="phone__label">{d.hero.phoneBlock}</div>
          <div className="phone__button">{d.hero.play}</div>
        </div>
      </div>
    </section>
  );
}
