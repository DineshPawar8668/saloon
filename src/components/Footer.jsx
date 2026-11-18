import { SALON } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer moss">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="display footer__word">{SALON.name}</p>
            <p className="deva brass footer__deva">{SALON.devanagari}</p>
          </div>
          <a href="#book" className="btn btn--rose">Book appointment</a>
        </div>
        <div className="rule" />
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {SALON.full}, Nashik</span>
          <span>Unisex salon and hairdressing academy</span>
        </div>
      </div>
    </footer>
  );
}
