"use client";

import { useState } from "react";

const ENDPOINT = process.env.NEXT_PUBLIC_ENROL_ENDPOINT || "";
const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function EnrolSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [netErr, setNetErr] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [errs, setErrs] = useState({ name: false, phone: false, email: false, course: false });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNetErr(false);
    const next = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
      email: !validEmail(form.email.trim()),
      course: !form.course,
    };
    setErrs(next);
    if (next.name || next.phone || next.email || next.course) return;

    setSubmitting(true);
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          course: form.course,
          message: form.message.trim(),
        }).toString(),
      });
      setSent(true);
    } catch {
      setNetErr(true);
      setSubmitting(false);
    }
  }

  function reset() {
    setForm({ name: "", phone: "", email: "", course: "", message: "" });
    setErrs({ name: false, phone: false, email: false, course: false });
    setSent(false);
    setSubmitting(false);
    setNetErr(false);
  }

  return (
    <section id="enrol" className="enrol-section">
      <div className="enrol-in">
        <div className="enrol-copy r">
          <div className="sec-label">Enrol Now</div>
          <h2>
            Start Your Repair Career<br />
            <em style={{ color: "var(--brand)", fontStyle: "normal" }}>at TRUSCREN TECH HUB</em>
          </h2>
          <p>Secure your place in Ghana&apos;s most respected device repair training programme. Cohort sizes are strictly limited — every student gets maximum hands-on lab time with their instructor.</p>
          <ul className="enrol-perks">
            <li>Fully equipped repair labs — real devices, real tools</li>
            <li>Small cohort sizes for maximum hands-on time</li>
            <li>TRUSCREN-certified instructors who repair for a living</li>
            <li>Career placement support for every graduate</li>
            <li>Campuses in Accra, Kumasi &amp; Takoradi — or online theory</li>
          </ul>
        </div>

        <div className="enrol-card r d1">
          <div className="enrol-card-title">Reserve Your Spot — 2026 Cohort</div>
          <div className="enrol-card-sub">Fill in your details and our team will contact you within 24 hours.</div>

          {sent ? (
            <div className="enrol-success" style={{ display: "flex" }}>
              <div className="enrol-success-ico">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#005843" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3>Application Received!</h3>
              <p>Thank you for enrolling! The TRUSCREN team will contact you soon.</p>
              <button className="btn-enrol-again" onClick={reset}>Submit Another Application</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="ef-row-2">
                <div className="ef-field">
                  <label className="ef-label" htmlFor="ef-name">Full Name <span>*</span></label>
                  <input className="ef-input" type="text" id="ef-name" placeholder="e.g. Kwame Asante" autoComplete="name"
                    value={form.name} onChange={(e) => set("name", e.target.value)} />
                  <span className={`ef-err${errs.name ? " show" : ""}`}>Full name is required.</span>
                </div>
                <div className="ef-field">
                  <label className="ef-label" htmlFor="ef-phone">Phone Number <span>*</span></label>
                  <input className="ef-input" type="text" id="ef-phone" placeholder="e.g. 0244 000 000" autoComplete="tel"
                    value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  <span className={`ef-err${errs.phone ? " show" : ""}`}>Phone number is required.</span>
                </div>
              </div>

              <div className="ef-field">
                <label className="ef-label" htmlFor="ef-email">Email Address <span>*</span></label>
                <input className="ef-input" type="email" id="ef-email" placeholder="you@example.com" autoComplete="email"
                  value={form.email} onChange={(e) => set("email", e.target.value)} />
                <span className={`ef-err${errs.email ? " show" : ""}`}>Please enter a valid email address.</span>
              </div>

              <div className="ef-field">
                <label className="ef-label" htmlFor="ef-course">Course <span>*</span></label>
                <select className="ef-select" id="ef-course" value={form.course} onChange={(e) => set("course", e.target.value)}>
                  <option value="">Select a course...</option>
                  <optgroup label="Phone Screen Repair">
                    <option value="Phone Screen Repair — Beginner">Phone Screen Repair — Beginner</option>
                    <option value="Phone Screen Repair — Advanced">Phone Screen Repair — Advanced</option>
                  </optgroup>
                  <optgroup label="Laptop Repair">
                    <option value="Laptop Repair — Beginner">Laptop Repair — Beginner</option>
                    <option value="Laptop Repair — Advanced">Laptop Repair — Advanced</option>
                  </optgroup>
                  <optgroup label="Circuit Board Soldering">
                    <option value="Circuit Board Soldering — Beginner">Circuit Board Soldering — Beginner</option>
                    <option value="Circuit Board Soldering — Advanced">Circuit Board Soldering — Advanced</option>
                  </optgroup>
                  <optgroup label="EV Battery Diagnostics">
                    <option value="EV Battery Diagnostics — Beginner">EV Battery Diagnostics — Beginner</option>
                    <option value="EV Battery Diagnostics — Advanced">EV Battery Diagnostics — Advanced</option>
                  </optgroup>
                </select>
                <span className={`ef-err${errs.course ? " show" : ""}`}>Please select a course.</span>
              </div>

              <div className="ef-field" style={{ marginBottom: "1.1rem" }}>
                <label className="ef-label" htmlFor="ef-message">Message <span style={{ color: "#aaa", fontWeight: 400 }}>(optional)</span></label>
                <textarea className="ef-textarea" id="ef-message" placeholder="Any questions or special requirements? Tell us about your experience level..." rows={3}
                  value={form.message} onChange={(e) => set("message", e.target.value)} />
              </div>

              <div className={`ef-net-err${netErr ? " show" : ""}`}>Something went wrong. Please check your connection and try again.</div>

              <button type="submit" className="btn-enrol-submit" disabled={submitting}>
                {submitting ? "Sending..." : "Reserve My Spot in the 2026 Cohort →"}
              </button>
              <div className="enrol-terms">By submitting you agree to our <a href="#" style={{ color: "var(--brand)" }}>Terms</a> &amp; <a href="#" style={{ color: "var(--brand)" }}>Privacy Policy</a></div>
            </form>
          )}
        </div>

        <div className="enrol-wa-wrap r d2">
          <a className="btn-wa" href="https://wa.me/233541224699?text=Hi%20TRUSCREN%2C%20I%27d%20like%20to%20enrol%20in%20the%20Repair%20School." target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.63 4.608 1.813 6.587L2.667 29.333l6.947-1.773A13.28 13.28 0 0 0 16.003 29.333C23.36 29.333 29.333 23.36 29.333 16c0-7.36-5.973-13.333-13.33-13.333zm0 2.667c5.893 0 10.667 4.773 10.667 10.666 0 5.894-4.774 10.667-10.667 10.667a10.62 10.62 0 0 1-5.493-1.533l-.387-.24-4.013 1.027 1.054-3.894-.267-.4A10.616 10.616 0 0 1 5.333 16c0-5.893 4.774-10.666 10.67-10.666zm-2.99 5.333c-.267 0-.694.1-.934.374-.24.267-.933.907-.933 2.213 0 1.307.96 2.574 1.093 2.747.134.16 1.88 2.947 4.614 4.013 2.24.88 2.733.707 3.226.667.494-.04 1.6-.654 1.827-1.28.226-.627.226-1.16.16-1.28-.067-.107-.24-.16-.507-.28-.267-.12-1.6-.787-1.84-.88-.24-.093-.413-.14-.587.14-.173.267-.667.88-.813 1.053-.147.16-.294.18-.547.06-.267-.12-1.107-.413-2.107-1.307-.774-.693-1.294-1.546-1.44-1.813-.16-.267-.014-.413.107-.547.12-.12.267-.306.4-.466.133-.16.173-.267.267-.44.093-.174.04-.334-.027-.48-.067-.134-.573-1.44-.8-1.96-.214-.494-.44-.427-.6-.427l-.56-.013z" /></svg>
            Prefer to chat? Message us on WhatsApp
          </a>
          <div className="enrol-wa-sub">Replies within business hours · Mon–Sat, 8am–6pm</div>
        </div>
      </div>
    </section>
  );
}
