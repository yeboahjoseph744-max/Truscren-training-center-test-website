"use client";

import { useEffect } from "react";
import { useApp } from "@/lib/app-context";
import { COURSES } from "@/lib/courses";

export default function CourseModal() {
  const { courseIndex, closeCourse } = useApp();
  const open = courseIndex !== null;
  const d = open ? COURSES[courseIndex!] : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && open) closeCourse(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeCourse]);

  function goEnrol() {
    closeCourse();
    const t = document.getElementById("enrol");
    if (t) setTimeout(() => t.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  return (
    <div
      id="course-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Course Details"
      className={open ? "open" : ""}
      onClick={(e) => { if (e.target === e.currentTarget) closeCourse(); }}
    >
      <div id="course-modal">
        <div className="cdm-thumb-bar" style={{ background: d?.color }} />
        <div className="cdm-header">
          <button className="cdm-close" aria-label="Close" onClick={closeCourse}>
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <span className="cdm-badge">{d?.badge}</span>
          <div className="cdm-title">{d?.title}</div>
          <div className="cdm-meta">{d?.meta.map((m) => <span key={m}>{m}</span>)}</div>
        </div>
        <div className="cdm-divider" />
        <div className="cdm-body">
          <h4>What You&apos;ll Learn</h4>
          <ul className="cdm-list">{d?.lessons.map((l) => <li key={l}>{l}</li>)}</ul>
          <a href="#enrol" className="btn-cdm-enrol" onClick={(e) => { e.preventDefault(); goEnrol(); }}>Enrol Now →</a>
        </div>
      </div>
    </div>
  );
}
