import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SALON } from "../data.js";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 901px)");
    const onMq = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
    <header className={`hdr ${solid || open ? "hdr--solid" : ""}`}>
      <div className="container hdr__bar">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="display brand__name">{SALON.name}</span>
          <span className="deva brand__deva">{SALON.devanagari}</span>
        </a>

        <nav className="hdr__nav" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hdr__link">{n.label}</a>
          ))}
          <a href="#book" className="btn btn--rose btn--sm">Book appointment</a>
        </nav>

        <button
          className="hdr__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

      {/* Drawer lives outside <header>: header's backdrop-filter would otherwise
          become the containing block for this fixed element and collapse it. */}
      <div id="mobile-drawer" className={`drawer ${open ? "drawer--open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} className="drawer__link display" onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href="#book" className="btn btn--rose btn--block" onClick={() => setOpen(false)}>Book appointment</a>
        <a href={`tel:${SALON.tel}`} className="drawer__phone">Call {SALON.phone}</a>
      </div>
    </>
  );
}
