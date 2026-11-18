import { Instagram } from "lucide-react";
import { LOOKS, SALON } from "../data.js";

export default function Looks() {
  return (
    <section id="looks" className="section">
      <div className="container">
        <h2 className="display h2">Recent looks</h2>
        <p className="lede lede--tight">A few of the transformations that leave the chair every week.</p>

        <div className="looks">
          {LOOKS.map((l) => (
            <figure key={l.title} className={`look ${l.tall ? "look--tall" : ""}`}>
              <img src={l.img} alt={`${l.title}, ${l.note.toLowerCase()}, at Akshaay salon`} loading="lazy" />
              <figcaption>
                <span className="display look__title">{l.title}</span>
                <span className="look__note">{l.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="center">
          <a href={SALON.instagram} className="btn btn--dark"><Instagram size={17} /> See more on Instagram</a>
        </div>
      </div>
    </section>
  );
}
