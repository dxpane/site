import type { MenuScreen } from "@/content";

type Props = {
  screens: MenuScreen[];
  /** "cycle" crossfades through all screens; a number pins one; "connected" shows the pairing screen. */
  show: "cycle" | number | "connected";
  connected: string;
  className?: string;
};

/** A TV frame playing dxpane screens — the same look as the real templates (menu-board, connected). */
export function Tv({ screens, show, connected, className = "" }: Props) {
  return (
    <div className={`tv ${className}`} aria-hidden="true">
      <div className="tv__glass">
        {screens.map((s, i) => (
          <div
            key={s.title}
            className={`tv__screen tv__screen--${i + 1}${show === "cycle" ? " is-cycling" : ""}${show === i ? " is-on" : ""}`}
          >
            <div className="tv__kicker">{s.kicker}</div>
            <div className="tv__title">{s.title}</div>
            <ul className="tv__items">
              {s.items.map(([name, price]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={`tv__screen tv__screen--connected${show === "connected" ? " is-on" : ""}`}>
          <div className="tv__check">✓</div>
          <div className="tv__connected">{connected}</div>
        </div>
      </div>
    </div>
  );
}
