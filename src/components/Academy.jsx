import { GraduationCap } from "lucide-react";
import { ACADEMY, IMAGES } from "../data.js";

export default function Academy() {
  return (
    <section id="academy" className="section moss">
      <div className="container academy">
        <div className="academy__text">
          <GraduationCap className="brass" size={36} strokeWidth={1.3} />
          <h2 className="display h2">Learn the craft from the chair, not a slideshow.</h2>
          <p className="lede lede--light">
            The academy trains new stylists on real clients in a working salon, with small batches and hands-on correction at every step.
          </p>
          <div className="academy__photos">
            <img src={IMAGES.foils} alt="Foil highlights being applied" loading="lazy" />
            <img src={IMAGES.interior} alt="Inside the Akshaay salon" loading="lazy" />
          </div>
        </div>

        <div className="academy__side">
          <ol className="modules">
            {ACADEMY.map((m, i) => (
              <li key={m.title}>
                <span className="display brass modules__num">{i + 1}</span>
                <div>
                  <p className="modules__title">{m.title}</p>
                  <p className="modules__desc">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href="#book" className="btn btn--rose">Ask about the next batch</a>
        </div>
      </div>
    </section>
  );
}
