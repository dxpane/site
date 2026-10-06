"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content";
import { Tv } from "./Tv";

/**
 * Sticky scroll story: the TV and phone stay pinned while the three steps scroll past.
 * The step nearest the middle of the viewport drives what the devices show.
 */
export function Story({ d }: { d: Dict }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }
      },
      // desktop: the step crossing the middle of the screen; mobile: the step just below the pinned stage
      { rootMargin: matchMedia("(max-width: 860px)").matches ? "-55% 0px -40% 0px" : "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const tvShow = active === 0 ? "connected" : active === 1 ? 0 : "cycle";

  return (
    <section className="story" id="how" aria-labelledby="how-title">
      <header className="story__head">
        <p className="eyebrow">{d.story.label}</p>
        <h2 id="how-title" className="section-title">{d.story.title}</h2>
      </header>
      <div className="story__body">
        <div className="story__steps">
          {d.story.steps.map((s, i) => (
            <div
              key={s.label}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-step={i}
              className={`story__step${active === i ? " is-active" : ""}`}
            >
              <p className="eyebrow">{s.label}</p>
              <h3 className="story__title">{s.title}</h3>
              <p className="story__text">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="story__stage">
          <div className="story__sticky">
            <Tv screens={d.screens} show={tvShow} connected={d.connected} className="story__tv" />
            <div className={`phone story__phone is-step-${active}`} aria-hidden="true">
              <div className="phone__scan">
                <span className="phone__radar" />
              </div>
              <ol className="phone__plan">
                {d.story.plan.map((p, i) => (
                  <li key={p.time} className={`phone__block phone__block--${i + 1}`}>
                    <b>{p.time}</b> {p.name}
                  </li>
                ))}
              </ol>
              <div className="phone__done">✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
