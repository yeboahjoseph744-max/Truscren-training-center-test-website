"use client";

import { useApp } from "@/lib/app-context";

export default function CoursesSection() {
  const { openCourse } = useApp();
  return (
    <section id="courses" className="courses-strip">
      <div className="strip-hd r">
        <div>
          <div className="strip-hd-title">
            Our Repair Training Programmes
          </div>
          <div className="strip-hd-sub">
            Hands-on, industry-standard courses that get you job-ready
          </div>
        </div>
        <a href="#" className="strip-more">
          View all programmes →
        </a>
      </div>
      <div className="courses-grid">
        <div className="c-card r" onClick={() => openCourse(0)}>
          <div className="c-thumb c-thumb-1">
            <div>
              <div className="c-thumb-name">
                Phone Screen & Display Repair
              </div>
              <div className="c-thumb-partner">
                TRUSCREN TECH HUB
              </div>
            </div>
          </div>
          <div className="c-body">
            <span className="c-badge">
              Bestseller · Certificate
            </span>
            <div className="c-name">
              Phone Screen & Display Repair — Complete Course
            </div>
            <div className="c-partner">
              TRUSCREN TECH HUB
            </div>
            <div className="c-meta">
              <span>
                Hands-on
              </span>
              <span>
                ·
              </span>
              <span>
                4 weeks
              </span>
              <span>
                ·
              </span>
              <span>
                ★ 4.9
              </span>
            </div>
          </div>
        </div>
        <div className="c-card r d1" onClick={() => openCourse(1)}>
          <div className="c-thumb c-thumb-2">
            <div>
              <div className="c-thumb-name">
                Laptop Repair & Servicing
              </div>
              <div className="c-thumb-partner">
                TRUSCREN TECH HUB
              </div>
            </div>
          </div>
          <div className="c-body">
            <span className="c-badge">
              Most Popular
            </span>
            <div className="c-name">
              Laptop Repair & Servicing — Beginner to Advanced
            </div>
            <div className="c-partner">
              TRUSCREN TECH HUB
            </div>
            <div className="c-meta">
              <span>
                Classroom
              </span>
              <span>
                ·
              </span>
              <span>
                6 weeks
              </span>
              <span>
                ·
              </span>
              <span>
                ★ 4.8
              </span>
            </div>
          </div>
        </div>
        <div className="c-card r d2" onClick={() => openCourse(2)}>
          <div className="c-thumb c-thumb-3">
            <div>
              <div className="c-thumb-name">
                Circuit Board Micro-Soldering
              </div>
              <div className="c-thumb-partner">
                TRUSCREN TECH HUB
              </div>
            </div>
          </div>
          <div className="c-body">
            <span className="c-badge">
              Advanced · Certificate
            </span>
            <div className="c-name">
              Circuit Board Soldering & Board-Level Repair
            </div>
            <div className="c-partner">
              TRUSCREN TECH HUB
            </div>
            <div className="c-meta">
              <span>
                Lab-based
              </span>
              <span>
                ·
              </span>
              <span>
                8 weeks
              </span>
              <span>
                ·
              </span>
              <span>
                ★ 4.9
              </span>
            </div>
          </div>
        </div>
        <div className="c-card r d3" onClick={() => openCourse(3)}>
          <div className="c-thumb c-thumb-4">
            <div>
              <div className="c-thumb-name">
                EV Battery Diagnostics
              </div>
              <div className="c-thumb-partner">
                TRUSCREN TECH HUB
              </div>
            </div>
          </div>
          <div className="c-body">
            <span className="c-badge">
              New · Specialist
            </span>
            <div className="c-name">
              EV Battery Diagnostics & Repair Technology
            </div>
            <div className="c-partner">
              TRUSCREN TECH HUB
            </div>
            <div className="c-meta">
              <span>
                Workshop
              </span>
              <span>
                ·
              </span>
              <span>
                5 weeks
              </span>
              <span>
                ·
              </span>
              <span>
                ★ 4.8
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
