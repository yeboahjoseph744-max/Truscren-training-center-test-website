"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";
import { sb } from "@/lib/supabase";

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function friendlyErr(msg?: string) {
  if (!msg) return "Something went wrong. Please try again.";
  const m = msg.toLowerCase();
  if (m.includes("invalid login") || m.includes("invalid credentials") || m.includes("email not confirmed"))
    return "Incorrect email or password, or your email is not yet confirmed.";
  if (m.includes("already registered") || m.includes("user already exists"))
    return "This email is already registered. Try signing in instead.";
  if (m.includes("rate limit") || m.includes("email rate"))
    return "Too many attempts. Please wait a moment and try again.";
  return msg;
}

const EyeIcon = ({ open }: { open: boolean }) =>
  open ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

export default function AuthModal() {
  const { signinOpen, closeSignin } = useApp();
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  // sign in
  const [si, setSi] = useState({ email: "", pw: "" });
  const [siErr, setSiErr] = useState({ email: "", pw: "" });
  const [siAuthErr, setSiAuthErr] = useState("");
  const [siBusy, setSiBusy] = useState(false);
  const [siShowPw, setSiShowPw] = useState(false);

  // sign up
  const [su, setSu] = useState({ name: "", phone: "", email: "", pw: "", course: "" });
  const [suErr, setSuErr] = useState({ name: "", phone: "", email: "", pw: "", course: "" });
  const [suAuthErr, setSuAuthErr] = useState("");
  const [suBusy, setSuBusy] = useState(false);
  const [suShowPw, setSuShowPw] = useState(false);
  const [suOk, setSuOk] = useState(false);

  function switchTab(t: "signin" | "signup") {
    setTab(t); setSiAuthErr(""); setSuAuthErr("");
  }

  async function onSignIn(e: React.FormEvent) {
    e.preventDefault();
    setSiAuthErr("");
    const next = {
      email: validEmail(si.email.trim()) ? "" : "Please enter a valid email address.",
      pw: si.pw.length >= 6 ? "" : "Password must be at least 6 characters.",
    };
    setSiErr(next);
    if (next.email || next.pw) return;
    setSiBusy(true);
    const { error } = await sb.auth.signInWithPassword({ email: si.email.trim(), password: si.pw });
    setSiBusy(false);
    if (error) setSiAuthErr(friendlyErr(error.message));
    else closeSignin();
  }

  async function onSignUp(e: React.FormEvent) {
    e.preventDefault();
    setSuAuthErr("");
    const next = {
      name: su.name.trim() ? "" : "Full name is required.",
      phone: su.phone.trim() ? "" : "Phone number is required.",
      email: validEmail(su.email.trim()) ? "" : "Please enter a valid email.",
      pw: su.pw.length >= 6 ? "" : "Password must be at least 6 characters.",
      course: su.course ? "" : "Please select a course.",
    };
    setSuErr(next);
    if (Object.values(next).some(Boolean)) return;
    const [course, level] = su.course.split("|");
    setSuBusy(true);
    const { data, error } = await sb.auth.signUp({ email: su.email.trim(), password: su.pw });
    if (error) {
      setSuAuthErr(friendlyErr(error.message));
      setSuBusy(false);
      return;
    }
    if (data.user) {
      await sb.from("profiles").insert({
        id: data.user.id, full_name: su.name.trim(), phone: su.phone.trim(), course, level, progress: 0,
      });
    }
    setSuBusy(false);
    setSuOk(true);
  }

  return (
    <div
      id="signin-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="TRUSCREN TECH HUB Account"
      className={signinOpen ? "open" : ""}
      onClick={(e) => { if (e.target === e.currentTarget) closeSignin(); }}
    >
      <div id="signin-modal">
        {/* Left brand panel */}
        <div className="si-left">
          <div className="si-ripples">
            <span style={{ width: "70px", height: "70px", animationDelay: "0s" }} />
            <span style={{ width: "150px", height: "150px", animationDelay: "0.2s" }} />
            <span style={{ width: "230px", height: "230px", animationDelay: "0.4s" }} />
            <span style={{ width: "310px", height: "310px", animationDelay: "0.6s" }} />
            <span style={{ width: "390px", height: "390px", animationDelay: "0.8s", borderStyle: "dashed" }} />
          </div>
          <div className="si-left-cnt">
            <img src="/Brand_assets/extracted/truscren_badge.png" alt="TRUSCREN" className="si-badge-img" />
            <div className="si-brand-name">TRUSCREN</div>
            <div className="si-brand-tagline">Professional Device Repair Training — Accra · Kumasi · Takoradi</div>
            <div className="si-stats">
              <span className="si-stat">&lt;0.5% Defect Rate</span>
              <span className="si-stat">3,500+ Graduates</span>
            </div>
          </div>
        </div>

        {/* Right tab panel */}
        <div className="si-right">
          <button className="si-close" aria-label="Close" onClick={closeSignin}>
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <div className="si-right-scroll">
            <div className="si-tabs">
              <button className={`si-tab${tab === "signin" ? " active" : ""}`} onClick={() => switchTab("signin")}>Sign In</button>
              <button className={`si-tab${tab === "signup" ? " active" : ""}`} onClick={() => switchTab("signup")}>Sign Up</button>
            </div>

            {/* SIGN IN */}
            <div className={`si-panel${tab === "signin" ? " active" : ""}`}>
              <h2 className="si-h2">Welcome back.</h2>
              <p className="si-sub" style={{ marginBottom: "1.125rem" }}>Sign in to your TRUSCREN TECH HUB account</p>
              <div className={`si-auth-err${siAuthErr ? " show" : ""}`}>{siAuthErr}</div>
              <form onSubmit={onSignIn} noValidate>
                <div className="si-field">
                  <label className="si-label" htmlFor="si-email">Email Address <span>*</span></label>
                  <div className="si-input-wrap" style={{ position: "relative" }}>
                    <input className="si-input" type="email" id="si-email" placeholder="Enter your email address" autoComplete="email"
                      value={si.email} onChange={(e) => setSi({ ...si, email: e.target.value })} />
                  </div>
                  <span className={`si-err${siErr.email ? " show" : ""}`}>{siErr.email || "Please enter a valid email address."}</span>
                </div>
                <div className="si-field" style={{ marginBottom: "1rem" }}>
                  <label className="si-label" htmlFor="si-pw">Password <span>*</span></label>
                  <div className="si-input-wrap" style={{ position: "relative" }}>
                    <input className="si-input" type={siShowPw ? "text" : "password"} id="si-pw" placeholder="Enter your password" autoComplete="current-password"
                      value={si.pw} onChange={(e) => setSi({ ...si, pw: e.target.value })} />
                    <button type="button" className="si-eye" aria-label="Toggle password visibility" onClick={() => setSiShowPw((v) => !v)}>
                      <EyeIcon open={!siShowPw} />
                    </button>
                  </div>
                  <span className={`si-err${siErr.pw ? " show" : ""}`}>{siErr.pw || "Password must be at least 6 characters."}</span>
                </div>
                <button type="submit" className="si-submit" disabled={siBusy}>{siBusy ? "Signing in..." : "Sign In →"}</button>
                <div className="si-footer" style={{ marginTop: "0.875rem" }}>
                  No account? <a href="#" onClick={(e) => { e.preventDefault(); switchTab("signup"); }}>Create one free →</a>
                </div>
              </form>
            </div>

            {/* SIGN UP */}
            <div className={`si-panel${tab === "signup" ? " active" : ""}`}>
              <h2 className="si-h2">Create account.</h2>
              <p className="si-sub" style={{ marginBottom: "1.125rem" }}>Join TRUSCREN TECH HUB — free to sign up</p>
              {suOk ? (
                <div className="si-signup-success show">
                  <div className="si-signup-success-ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005843" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3>Check your email!</h3>
                  <p>We&apos;ve sent a confirmation link. Click it to activate your account, then sign in.</p>
                  <div className="si-footer" style={{ marginTop: "0.5rem" }}><a href="#" onClick={(e) => { e.preventDefault(); setSuOk(false); switchTab("signin"); }}>Go to Sign In →</a></div>
                </div>
              ) : (
                <>
                  <div className={`si-auth-err${suAuthErr ? " show" : ""}`}>{suAuthErr}</div>
                  <form onSubmit={onSignUp} noValidate>
                    <div className="si-field">
                      <label className="si-label" htmlFor="su-name">Full Name <span>*</span></label>
                      <div className="si-input-wrap">
                        <input className="si-input" type="text" id="su-name" placeholder="e.g. Kwame Asante" autoComplete="name"
                          value={su.name} onChange={(e) => setSu({ ...su, name: e.target.value })} />
                      </div>
                      <span className={`si-err${suErr.name ? " show" : ""}`}>{suErr.name || "Full name is required."}</span>
                    </div>
                    <div className="si-field">
                      <label className="si-label" htmlFor="su-phone">Phone Number <span>*</span></label>
                      <div className="si-input-wrap">
                        <input className="si-input" type="text" id="su-phone" placeholder="e.g. 0244 000 000" autoComplete="tel"
                          value={su.phone} onChange={(e) => setSu({ ...su, phone: e.target.value })} />
                      </div>
                      <span className={`si-err${suErr.phone ? " show" : ""}`}>{suErr.phone || "Phone number is required."}</span>
                    </div>
                    <div className="si-field">
                      <label className="si-label" htmlFor="su-email">Email Address <span>*</span></label>
                      <div className="si-input-wrap">
                        <input className="si-input" type="email" id="su-email" placeholder="you@example.com" autoComplete="email"
                          value={su.email} onChange={(e) => setSu({ ...su, email: e.target.value })} />
                      </div>
                      <span className={`si-err${suErr.email ? " show" : ""}`}>{suErr.email || "Please enter a valid email."}</span>
                    </div>
                    <div className="si-field">
                      <label className="si-label" htmlFor="su-pw">Password <span>*</span></label>
                      <div className="si-input-wrap" style={{ position: "relative" }}>
                        <input className="si-input" type={suShowPw ? "text" : "password"} id="su-pw" placeholder="At least 6 characters" autoComplete="new-password"
                          value={su.pw} onChange={(e) => setSu({ ...su, pw: e.target.value })} />
                        <button type="button" className="si-eye" aria-label="Toggle password visibility" onClick={() => setSuShowPw((v) => !v)}>
                          <EyeIcon open={!suShowPw} />
                        </button>
                      </div>
                      <span className={`si-err${suErr.pw ? " show" : ""}`}>{suErr.pw || "Password must be at least 6 characters."}</span>
                    </div>
                    <div className="si-field" style={{ marginBottom: "1rem" }}>
                      <label className="si-label" htmlFor="su-course">Course <span>*</span></label>
                      <div className="si-input-wrap">
                        <select className="si-input si-input-select" id="su-course"
                          value={su.course} onChange={(e) => setSu({ ...su, course: e.target.value })}>
                          <option value="">Select a course...</option>
                          <optgroup label="Phone Screen Repair">
                            <option value="Phone Screen Repair|Beginner">Phone Screen Repair — Beginner</option>
                            <option value="Phone Screen Repair|Advanced">Phone Screen Repair — Advanced</option>
                          </optgroup>
                          <optgroup label="Laptop Repair">
                            <option value="Laptop Repair|Beginner">Laptop Repair — Beginner</option>
                            <option value="Laptop Repair|Advanced">Laptop Repair — Advanced</option>
                          </optgroup>
                          <optgroup label="Circuit Board Soldering">
                            <option value="Circuit Board Soldering|Beginner">Circuit Board Soldering — Beginner</option>
                            <option value="Circuit Board Soldering|Advanced">Circuit Board Soldering — Advanced</option>
                          </optgroup>
                          <optgroup label="EV Battery Diagnostics">
                            <option value="EV Battery Diagnostics|Beginner">EV Battery Diagnostics — Beginner</option>
                            <option value="EV Battery Diagnostics|Advanced">EV Battery Diagnostics — Advanced</option>
                          </optgroup>
                        </select>
                      </div>
                      <span className={`si-err${suErr.course ? " show" : ""}`}>{suErr.course || "Please select a course."}</span>
                    </div>
                    <button type="submit" className="si-submit" disabled={suBusy}>{suBusy ? "Creating account..." : "Create Account →"}</button>
                    <div className="si-footer" style={{ marginTop: "0.875rem" }}>
                      Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchTab("signin"); }}>Sign in →</a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
