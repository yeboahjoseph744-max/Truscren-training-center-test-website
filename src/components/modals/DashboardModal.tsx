"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/app-context";

export default function DashboardModal() {
  const { dashOpen, closeDash, user, profile, signOut } = useApp();
  const [fill, setFill] = useState(0);

  const pct = Math.min(100, Math.max(0, profile?.progress || 0));

  useEffect(() => {
    if (dashOpen) {
      setFill(0);
      const t = setTimeout(() => setFill(pct), 80);
      return () => clearTimeout(t);
    }
  }, [dashOpen, pct]);

  if (!profile || !user) return null;

  const since = profile.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
    : "—";

  return (
    <div
      id="dash-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Student Dashboard"
      className={dashOpen ? "open" : ""}
      onClick={(e) => { if (e.target === e.currentTarget) closeDash(); }}
    >
      <div id="dash-modal">
        <button className="dash-close" aria-label="Close dashboard" onClick={closeDash}>
          <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="dash-header">
          <div className="dash-avatar">{(profile.full_name || "S")[0].toUpperCase()}</div>
          <div className="dash-header-info">
            <h2>{profile.full_name || "—"}</h2>
            <p>{user.email || "—"}</p>
          </div>
        </div>

        <div className="dash-sec-label">Enrolled Course</div>
        <div className="dash-course-card">
          <div className="dash-course-name">{profile.course || "—"}</div>
          <div className="dash-level-pill">{profile.level || "—"}</div>
        </div>

        <div className="dash-sec-label">Progress</div>
        <div className="dash-progress-meta">
          <span>Course completion</span>
          <span>{pct}%</span>
        </div>
        <div className="dash-progress-track">
          <div className="dash-progress-fill" style={{ width: `${fill}%` }} />
        </div>

        <div className="dash-sec-label">Contact Info</div>
        <div className="dash-info-grid">
          <div className="dash-info-item">
            <label>Phone</label>
            <span>{profile.phone || "—"}</span>
          </div>
          <div className="dash-info-item">
            <label>Enrolled</label>
            <span>{since}</span>
          </div>
        </div>

        <button className="btn-dash-logout" onClick={() => signOut()}>Log Out</button>
      </div>
    </div>
  );
}
