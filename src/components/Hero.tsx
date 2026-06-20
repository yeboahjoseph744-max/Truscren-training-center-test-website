"use client";

import { useState } from "react";
import FloatingPaths from "@/components/FloatingPaths";
import { SEARCH_INDEX } from "@/lib/courses";

export default function Hero() {
  const [query, setQuery] = useState("");

  function findCourse() {
    const q = query.trim().toLowerCase();
    const section = document.getElementById("courses");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (!q) return;
    const match = SEARCH_INDEX.find((c) =>
      c.keywords.some((k) => q.includes(k) || k.includes(q))
    );
    if (match) {
      const cards = document.querySelectorAll<HTMLElement>(".c-card");
      const card = cards[match.index];
      if (card) {
        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("search-hit");
          setTimeout(() => card.classList.remove("search-hit"), 2200);
        }, 400);
      }
    }
  }

  return (
    <section className="hero">
      <FloatingPaths />
      <div className="hero-in">
        <div className="hero-copy">
          <div className="hero-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>{" "}
            Now Enrolling — 2026 Cohorts Open
          </div>
          <h1 className="r on">
            Let Repair Be Easier.<br />
            <em>We Train You.</em>
          </h1>
          <p className="hero-sub r on d1">
            TRUSCREN TECH HUB is Africa&apos;s leading hands-on training school for phone screen replacement, battery repair, circuit board micro-soldering, and device diagnostics. Get certified. Get hired. Start your repair business.
          </p>

          <div className="hero-form r on d2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") findCourse(); }}
              placeholder="Choose your track (e.g. Screen Repair, Soldering, EV Battery)"
            />
            <button onClick={findCourse}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <circle cx="6.5" cy="6.5" r="5" stroke="white" strokeWidth="1.5" />
                <path d="M10.5 10.5L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Find Course
            </button>
          </div>

          <div className="partner-row r on d3">
            <span className="partner-lbl">Campuses in:</span>
            <span className="partner-chip">Accra</span>
            <span className="partner-chip">Kumasi</span>
            <span className="partner-chip">Takoradi</span>
            <span className="partner-chip">Weekend Classes</span>
            <span className="partner-chip">Evening Classes</span>
            <span className="partner-chip">Online Theory</span>
          </div>
        </div>

        <div className="hero-logo-col r on d2">
          <div className="hero-logo-scene">
            <img src="/Brand_assets/extracted/truscren_badge.png" alt="TRUSCREN TECH HUB" className="hero-logo-img" />
            <div className="hero-logo-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
