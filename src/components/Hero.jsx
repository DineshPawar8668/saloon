import { Phone, Clock, MapPin, Heart, Accessibility } from "lucide-react";
import { IMAGES, SALON } from "../data.js";
import Stars from "./Stars.jsx";

export default function Hero() {
  return (
    <section id="home" className="hero moss">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="deva hero__deva rise d1">{SALON.devanagari}</p>
          <h1 className="display hero__word rise d2">{SALON.name}</h1>
          <p className="display hero__sub rise d3">Unisex salon &amp; academy, Nashik</p>
          <p className="hero__lede rise d3">
            Haircuts designed around your face, colour that doesn’t cost you your hair, and an honest opinion before the first snip.
          </p>
          <div className="hero__cta rise d4">
            <a href="#book" className="btn btn--rose">Book your appointment</a>
            <a href={`tel:${SALON.tel}`} className="btn btn--ghost"><Phone size={17} /> {SALON.phone}</a>
          </div>
        </div>

        <div className="hero__media rise d3">
          <div className="arch hero__arch">
            <img src={IMAGES.hero} alt="Client smiling after a balayage colour at Akshaay salon" />
          </div>
          <div className="rating-card">
            <span className="display rating-card__num">{SALON.rating}</span>
            <div>
              <Stars />
              <p className="rating-card__count">{SALON.reviewCount} Google reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rule" />
        <ul className="hero__facts">
          <li><Clock size={15} /> Open today till 10 PM</li>
          <li><MapPin size={15} /> Ravishankar Marg, Wadala Gaon</li>
          <li><Heart size={15} /> LGBTQ+ friendly</li>
          <li><Accessibility size={15} /> Wheelchair accessible</li>
        </ul>
      </div>
    </section>
  );
}
