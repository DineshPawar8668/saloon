import { Check } from "lucide-react";
import { IMAGES } from "../data.js";

const POINTS = [
  ["Face-shape first", "Every cut is planned around your structure."],
  ["Low-damage colour", "Balayage and highlights with minimal or no bleach."],
  ["Genuine advice", "You’ll hear what suits you, not what costs more."],
  ["By appointment", "Your stylist is ready when you arrive."],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__media">
          <div className="arch about__arch">
            <img src={IMAGES.stylist} alt="Akshay consulting a client before a haircut" loading="lazy" />
          </div>
          <div className="about__inset">
            <img src={IMAGES.akshayStyling} alt="Akshay styling long hair in the salon" loading="lazy" />
          </div>
          <div className="about__badge moss">
            <span className="display about__years">14+</span>
            <span>years behind the chair</span>
          </div>
        </div>

        <div className="about__text">
          <h2 className="display h2">The cut starts with a conversation.</h2>
          <p className="lede">
            Akshay looks at your face shape, your hair’s texture and how much time you actually spend on it, then tells you what will work, even when that isn’t what you walked in asking for.
          </p>
          <p className="lede">
            Some clients have trusted him with their hair for close to a decade. That kind of loyalty comes from honest advice, careful hands and a salon that’s spotless every time.
          </p>
          <div className="points">
            {POINTS.map(([t, d]) => (
              <div key={t}>
                <p className="points__title"><Check size={16} /> {t}</p>
                <p className="points__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
