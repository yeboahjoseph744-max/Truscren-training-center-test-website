"use client";

import { useState } from "react";

export default function SubjectsSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="subj-section">
      <div className="wrap">
        <div className="r" style={{marginBottom: '1.5rem'}}>
          <h2 className="sec-h2">
            What skill do you want to master?
          </h2>
          <p style={{fontSize: '0.875rem', color: '#666', marginTop: '0.4rem'}}>
            Browse every repair discipline we teach — from beginner fundamentals to advanced board-level work
          </p>
        </div>
        <div className="subj-pills r">
          <span className={`pill${active === 0 ? " active" : ""}`} onClick={() => setActive(0)}>
            All Skills
          </span>
          <span className={`pill${active === 1 ? " active" : ""}`} onClick={() => setActive(1)}>
            Screens
          </span>
          <span className={`pill${active === 2 ? " active" : ""}`} onClick={() => setActive(2)}>
            Soldering
          </span>
          <span className={`pill${active === 3 ? " active" : ""}`} onClick={() => setActive(3)}>
            Batteries
          </span>
          <span className={`pill${active === 4 ? " active" : ""}`} onClick={() => setActive(4)}>
            Water Damage
          </span>
          <span className={`pill${active === 5 ? " active" : ""}`} onClick={() => setActive(5)}>
            Laptops
          </span>
          <span className={`pill${active === 6 ? " active" : ""}`} onClick={() => setActive(6)}>
            Data Recovery
          </span>
          <span className={`pill${active === 7 ? " active" : ""}`} onClick={() => setActive(7)}>
            Diagnostics
          </span>
          <span className={`pill${active === 8 ? " active" : ""}`} onClick={() => setActive(8)}>
            Software
          </span>
          <span className={`pill${active === 9 ? " active" : ""}`} onClick={() => setActive(9)}>
            EV Tech
          </span>
        </div>
        <div className="subj-grid">
          <div className="subj-card r">
            <div className="subj-ico">
              <img src="/Brand_assets/icon_screen_display.png" alt="Screen Replacement" />
            </div>
            <h3>
              Screen Replacement
            </h3>
            <div className="subj-cnt">
              All major brands covered
            </div>
          </div>
          <div className="subj-card r d1">
            <div className="subj-ico">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3>
              Micro-Soldering
            </h3>
            <div className="subj-cnt">
              BGA, IC & component-level
            </div>
          </div>
          <div className="subj-card r d2">
            <div className="subj-ico">
              <img src="/Brand_assets/icon_battery.png" alt="Battery Repair" />
            </div>
            <h3>
              Battery & Charging Repair
            </h3>
            <div className="subj-cnt">
              Phone, laptop & EV cells
            </div>
          </div>
          <div className="subj-card r d3">
            <div className="subj-ico">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <h3>
              Water Damage Recovery
            </h3>
            <div className="subj-cnt">
              Ultrasonic & chemical cleaning
            </div>
          </div>
          <div className="subj-card r">
            <div className="subj-ico">
              <img src="/Brand_assets/icon_screen_repair.png" alt="Board-Level Diagnostics" />
            </div>
            <h3>
              Board-Level Diagnostics
            </h3>
            <div className="subj-cnt">
              Schematic reading & testing
            </div>
          </div>
          <div className="subj-card r d1">
            <div className="subj-ico">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="7" width="10" height="10" rx="1" />
                <path d="M7 9H5M7 12H5M7 15H5M17 9h2M17 12h2M17 15h2M9 7V5M12 7V5M15 7V5M9 19v-2M12 19v-2M15 19v-2" />
              </svg>
            </div>
            <h3>
              Data Recovery
            </h3>
            <div className="subj-cnt">
              NAND, chip-off & software
            </div>
          </div>
          <div className="subj-card r d2">
            <div className="subj-ico">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.6" strokeLinecap="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </div>
            <h3>
              Tool Mastery
            </h3>
            <div className="subj-cnt">
              Multimeters, hot air, JTAG
            </div>
          </div>
          <div className="subj-card r d3">
            <div className="subj-ico">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>
              Software & Flashing
            </h3>
            <div className="subj-cnt">
              Unlock, flash & OS restore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
