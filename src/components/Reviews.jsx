import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS, SALON } from "../data.js";
import Stars from "./Stars.jsx";

export default function Reviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const r = REVIEWS[i];
  const go = (d) => setI((p) => (p + d + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="sec-head">
          <h2 className="display h2">In their words</h2>
          <div className="score">
            <span className="display score__num">{SALON.rating}</span>
            <div>
              <Stars size={16} />
              <p className="score__count">from {SALON.reviewCount} reviews on Google</p>
            </div>
          </div>
        </div>

        <div className="reviews" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="reviews__main">
            <span className="display quote-mark" aria-hidden="true">“</span>
            <blockquote key={i} className="display reviews__quote fade" aria-live="polite">{r.text}</blockquote>
            <div className="reviews__foot">
              <div>
                <p className="reviews__name">{r.name}</p>
                <p className="reviews__meta">{r.tag ? `${r.tag}, ` : "Google review, "}{r.when}</p>
              </div>
              <div className="reviews__ctrl">
                <span className="dots" aria-hidden="true">
                  {REVIEWS.map((_, k) => <span key={k} className={`dot ${k === i ? "dot--on" : ""}`} />)}
                </span>
                <button className="round" aria-label="Previous review" onClick={() => go(-1)}><ChevronLeft size={18} /></button>
                <button className="round" aria-label="Next review" onClick={() => go(1)}><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>

          <div className="reviews__list">
            {REVIEWS.map((x, k) => (
              <button key={x.name} className={`who ${k === i ? "who--on" : ""}`} onClick={() => setI(k)}>
                <span className="who__name">{x.name}</span>
                <span className="who__snip">{x.text.slice(0, 46)}…</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
