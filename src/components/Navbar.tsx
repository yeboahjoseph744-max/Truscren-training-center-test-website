"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/app-context";
import { SEARCH_INDEX } from "@/lib/courses";

export default function Navbar() {
  const { user, profile, openSignin, openDash, openCourse, signOut } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [navMsg, setNavMsg] = useState("");
  const [mobMsg, setMobMsg] = useState("");
  const [navQuery, setNavQuery] = useState("");
  const [mobQuery, setMobQuery] = useState("");

  const loggedIn = !!(user && profile);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function doSearch(query: string, setMsg: (m: string) => void) {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const match = SEARCH_INDEX.find((c) =>
      c.keywords.some((k) => q.includes(k) || k.includes(q))
    );
    const section = document.getElementById("courses");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
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
      setMsg("");
    } else {
      setMsg("No course found — try 'screen', 'laptop', 'soldering', or 'EV'.");
      setTimeout(() => setMsg(""), 3500);
    }
  }

  function smoothTo(e: React.MouseEvent, id: string) {
    const t = document.getElementById(id);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobOpen(false);
    }
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-in">
          <a href="#" className="logo">
            <img src="/Brand_assets/extracted/truscren_badge.png" alt="TRUSCREN" className="logo-badge" />
            <span className="logo-wordmark">
              TRUS<span style={{ color: "#005843" }}>CREN</span>
            </span>
          </a>

          <div className="nav-srch">
            <svg className="srch-ico" width="13" height="13" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={navQuery}
              onChange={(e) => { setNavQuery(e.target.value); setNavMsg(""); }}
              onKeyDown={(e) => { if (e.key === "Enter") { doSearch(navQuery, setNavMsg); e.currentTarget.blur(); } }}
              placeholder="Search courses, skills, repairs..."
            />
            <div className={`srch-msg${navMsg ? " show" : ""}`}>{navMsg}</div>
          </div>

          <ul className="nav-links">
            <li><a href="#courses" onClick={(e) => smoothTo(e, "courses")}>Courses</a></li>
            <li><a href="#certifications" onClick={(e) => smoothTo(e, "certifications")}>Certifications</a></li>
            <li><a href="#requirements" onClick={(e) => smoothTo(e, "requirements")}>Requirements</a></li>
            <li><a href="#locations" onClick={(e) => smoothTo(e, "locations")}>Locations</a></li>
            <li><a href="#corporate" onClick={(e) => smoothTo(e, "corporate")}>Corporate</a></li>
            <li><a href="#about" onClick={(e) => smoothTo(e, "about")}>About</a></li>
          </ul>

          <div className="nav-gap" />

          {!loggedIn ? (
            <div className="nav-auth">
              <a href="#" className="btn-si" onClick={(e) => { e.preventDefault(); openSignin(); }}>Sign In</a>
              <a href="#enrol" className="btn-reg" onClick={(e) => smoothTo(e, "enrol")}>Enrol Now</a>
            </div>
          ) : (
            <div className="nav-auth">
              <span className="nav-student-name">{profile!.full_name.split(" ")[0]}</span>
              <button className="btn-dashboard" onClick={openDash}>Dashboard</button>
              <button className="btn-logout-nav" onClick={() => signOut()}>Log Out</button>
            </div>
          )}

          <button className="hamburger" aria-label="Menu" onClick={() => setMobOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div id="mob-menu" className={mobOpen ? "open" : ""}>
        <div className="mob-srch" style={{ flexWrap: "wrap" }}>
          <input
            type="text"
            value={mobQuery}
            onChange={(e) => { setMobQuery(e.target.value); setMobMsg(""); }}
            onKeyDown={(e) => { if (e.key === "Enter") doSearch(mobQuery, setMobMsg); }}
            placeholder="Search courses, skills, repairs..."
          />
          <button onClick={() => doSearch(mobQuery, setMobMsg)}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="white" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div className={`srch-msg mob-srch-msg${mobMsg ? " show" : ""}`} style={{ position: "static", marginTop: "0.4rem", borderRadius: "4px" }}>{mobMsg}</div>
        </div>
        <ul className="mob-links">
          <li><a href="#courses" onClick={(e) => smoothTo(e, "courses")}>Courses</a></li>
          <li><a href="#certifications" onClick={(e) => smoothTo(e, "certifications")}>Certifications</a></li>
          <li><a href="#requirements" onClick={(e) => smoothTo(e, "requirements")}>Requirements</a></li>
          <li><a href="#locations" onClick={(e) => smoothTo(e, "locations")}>Locations</a></li>
          <li><a href="#corporate" onClick={(e) => smoothTo(e, "corporate")}>Corporate Training</a></li>
          <li><a href="#about" onClick={(e) => smoothTo(e, "about")}>About TRUSCREN</a></li>
        </ul>
        {!loggedIn ? (
          <div className="mob-auth">
            <a href="#" className="btn-si" onClick={(e) => { e.preventDefault(); setMobOpen(false); openSignin(); }}>Sign In</a>
            <a href="#enrol" className="btn-reg" onClick={(e) => smoothTo(e, "enrol")}>Enrol in the 2026 Cohort</a>
          </div>
        ) : (
          <div className="mob-auth">
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", padding: "0.2rem 0", fontWeight: 500 }}>
              Signed in as {profile!.full_name}
            </p>
            <button
              onClick={() => { setMobOpen(false); openDash(); }}
              style={{ display: "block", textAlign: "center", padding: "0.7rem", borderRadius: "3px", fontSize: "0.875rem", fontWeight: 600, fontFamily: "'Inter',sans-serif", cursor: "pointer", background: "var(--brand)", color: "#fff", border: "none", width: "100%" }}
            >My Dashboard</button>
            <button
              onClick={() => signOut()}
              style={{ display: "block", textAlign: "center", padding: "0.7rem", borderRadius: "3px", fontSize: "0.875rem", fontWeight: 600, fontFamily: "'Inter',sans-serif", cursor: "pointer", background: "none", color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.25)", width: "100%" }}
            >Log Out</button>
          </div>
        )}
      </div>
    </>
  );
}
