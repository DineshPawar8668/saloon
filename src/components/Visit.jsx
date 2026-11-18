import { MapPin, MessageCircle } from "lucide-react";
import { IMAGES, SALON } from "../data.js";

export default function Visit() {
  return (
    <section id="visit" className="section">
      <div className="container visit">
        <div className="visit__photo">
          <img src={IMAGES.reception} alt="Reception desk with the Akshaay’s Salon sign on a green wall" loading="lazy" />
        </div>
        <div className="visit__info">
          <div>
            <h3 className="display h3">Find us</h3>
            <address className="muted">{SALON.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</address>
            <a href={SALON.mapsUrl} target="_blank" rel="noreferrer" className="link"><MapPin size={16} /> Get directions</a>
          </div>
          <div>
            <h3 className="display h3">Hours</h3>
            <p className="muted">Open daily, closes at 10 PM.<br />Visits by appointment.</p>
          </div>
          <div>
            <h3 className="display h3">Call</h3>
            <a href={`tel:${SALON.tel}`} className="muted">{SALON.phone}</a><br />
            <a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noreferrer" className="link"><MessageCircle size={16} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
