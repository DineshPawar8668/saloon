import { useState } from "react";
import { SERVICES } from "../data.js";

export default function Services({ onBook }) {
  const [tab, setTab] = useState(0);

  return (
    <section id="services" className="section section--tint">
      <div className="container container--narrow">
        <div className="sec-head">
          <h2 className="display h2">The menu</h2>
          <div className="tabs" role="tablist" aria-label="Service categories">
            {SERVICES.map((g, i) => (
              <button
                key={g.group}
                role="tab"
                aria-selected={tab === i}
                className={`tab ${tab === i ? "tab--on" : ""}`}
                onClick={() => setTab(i)}
              >
                {g.group}
              </button>
            ))}
          </div>
        </div>

        <div className="menu" role="tabpanel">
          {SERVICES[tab].items.map((s) => (
            <div key={s.name} className="menu__row">
              <div>
                <h3 className="display menu__name">{s.name}</h3>
                <p className="menu__desc">{s.desc}</p>
              </div>
              <button className="menu__book" onClick={() => onBook(s.name)}>Book</button>
            </div>
          ))}
        </div>
        <p className="note">Pricing depends on hair length and condition. You’ll get an exact quote at consultation.</p>
      </div>
    </section>
  );
}
