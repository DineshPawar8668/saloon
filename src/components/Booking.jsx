import { useEffect, useState } from "react";
import { Phone, MessageCircle, Check, Scissors } from "lucide-react";
import { SERVICES, SLOTS, SALON } from "../data.js";

const EMPTY = { name: "", phone: "", service: "", date: "", slot: "", note: "" };

export default function Booking({ preset }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (preset) { setForm((f) => ({ ...f, service: preset })); setDone(false); }
  }, [preset]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const today = new Date().toISOString().split("T")[0];

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) err.phone = "Enter a 10-digit mobile number.";
    if (!form.service) err.service = "Choose a service.";
    if (!form.date) err.date = "Pick a date.";
    if (!form.slot) err.slot = "Pick a time.";
    setErrors(err);
    // TODO (dynamic phase): POST the form to your API here
    if (!Object.keys(err).length) setDone(true);
  };

  const waText = encodeURIComponent(
    `Hi Akshaay, I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.slot}${form.note ? `\nNote: ${form.note}` : ""}`
  );

  return (
    <section id="book" className="section moss">
      <div className="container booking">
        <div className="booking__intro">
          <h2 className="display h2">Book your chair</h2>
          <p className="lede lede--light">
            Akshaay works by appointment so no one waits. Choose a service and time, and we’ll confirm on call or WhatsApp.
          </p>
          <div className="contact-links">
            <a href={`tel:${SALON.tel}`}><span className="ring"><Phone size={18} /></span><span><small>Prefer to call?</small>{SALON.phone}</span></a>
            <a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noreferrer"><span className="ring"><MessageCircle size={18} /></span><span><small>Or message</small>WhatsApp us</span></a>
          </div>
        </div>

        <div className="card">
          {done ? (
            <div className="done">
              <div className="done__icon"><Check size={28} /></div>
              <h3 className="display done__title">Request sent, {form.name.split(" ")[0]}</h3>
              <p className="done__text">
                {form.service} on {new Date(form.date).toLocaleDateString("en-IN", { day: "numeric", month: "long" })} at {form.slot}. We’ll call {form.phone} to confirm.
              </p>
              <div className="done__actions">
                <a href={`https://wa.me/${SALON.whatsapp}?text=${waText}`} target="_blank" rel="noreferrer" className="btn btn--dark"><MessageCircle size={17} /> Confirm on WhatsApp</a>
                <button className="btn btn--outline" onClick={() => { setDone(false); setForm(EMPTY); }}>Book another</button>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className="form__row">
                <Field id="name" label="Your name" error={errors.name}>
                  <input id="name" className="field" value={form.name} onChange={set("name")} placeholder="Full name" autoComplete="name" />
                </Field>
                <Field id="phone" label="Mobile number" error={errors.phone}>
                  <input id="phone" className="field" inputMode="tel" value={form.phone} onChange={set("phone")} placeholder="98XXXXXXXX" autoComplete="tel" />
                </Field>
              </div>
              <div className="form__row">
                <Field id="service" label="Service" error={errors.service}>
                  <select id="service" className="field" value={form.service} onChange={set("service")}>
                    <option value="">Choose a service</option>
                    {SERVICES.map((g) => (
                      <optgroup key={g.group} label={g.group}>
                        {g.items.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                      </optgroup>
                    ))}
                    <option value="Consultation">Not sure, consultation</option>
                  </select>
                </Field>
                <Field id="date" label="Date" error={errors.date}>
                  <input id="date" type="date" min={today} className="field" value={form.date} onChange={set("date")} />
                </Field>
              </div>
              <fieldset className="slots-wrap">
                <legend className="lbl">Preferred time</legend>
                <div className="slots">
                  {SLOTS.map((s) => (
                    <button type="button" key={s} className={`slot ${form.slot === s ? "slot--on" : ""}`} aria-pressed={form.slot === s} onClick={() => setForm({ ...form, slot: s })}>{s}</button>
                  ))}
                </div>
                {errors.slot && <p className="err">{errors.slot}</p>}
              </fieldset>
              <Field id="note" label="Anything we should know? (optional)">
                <textarea id="note" rows={3} className="field" value={form.note} onChange={set("note")} placeholder="Reference look, hair length, past colour" />
              </Field>
              <button type="submit" className="btn btn--rose btn--block"><Scissors size={17} /> Request appointment</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label className="lbl" htmlFor={id}>{label}</label>
      {children}
      {error && <p className="err">{error}</p>}
    </div>
  );
}
