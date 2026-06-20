"use client";

import { useState } from "react";

export default function BrowseSection() {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));
  return (
    <section className="browse-section">
      <div className="wrap">
        <div className="r">
          <h2 className="sec-h2">
            Browse by Repair Category
          </h2>
          <p style={{fontSize: '0.875rem', color: '#666', marginTop: '0.4rem'}}>
            Explore every discipline we cover across all our campuses
          </p>
        </div>
        <div className="browse-cats">
          <div className="bcat r">
            <div className={`bcat-hd${open === 0 ? " open" : ""}`} onClick={() => toggle(0)}>
              <div className="bcat-title">
                <img src="/Brand_assets/icon_screen_display.png" alt="" style={{width: '20px', height: '20px', objectFit: 'contain', verticalAlign: 'middle', marginRight: '0.4rem'}} />
                Screen & Display Repair
                <span className="bcat-cnt">
                  All major devices
                </span>
              </div>
              <svg className="bchev" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={`bcat-links${open === 0 ? " open" : ""}`}>
              <a href="#">
                iPhone Screen Replacement
              </a>
              <a href="#">
                Samsung AMOLED Repair
              </a>
              <a href="#">
                LCD vs OLED Identification
              </a>
              <a href="#">
                Digitiser Calibration
              </a>
              <a href="#">
                Backlight Repair
              </a>
              <a href="#">
                Touch IC Diagnosis
              </a>
              <a href="#">
                Laptop Screen Swap
              </a>
              <a href="#">
                Tablet Display Repair
              </a>
            </div>
          </div>
          <div className="bcat r">
            <div className={`bcat-hd${open === 1 ? " open" : ""}`} onClick={() => toggle(1)}>
              <div className="bcat-title">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '0.4rem', flexShrink: '0'}}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Board-Level & Micro-Soldering
                <span className="bcat-cnt">
                  Advanced track
                </span>
              </div>
              <svg className="bchev" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={`bcat-links${open === 1 ? " open" : ""}`}>
              <a href="#">
                Hot Air Rework Station
              </a>
              <a href="#">
                BGA Reballing
              </a>
              <a href="#">
                IC Chip Replacement
              </a>
              <a href="#">
                Schematic Reading
              </a>
              <a href="#">
                Power IC Repair
              </a>
              <a href="#">
                Charging Port Solder
              </a>
              <a href="#">
                NAND Flash Swap
              </a>
              <a href="#">
                CPU & GPU Reflow
              </a>
            </div>
          </div>
          <div className="bcat r">
            <div className={`bcat-hd${open === 2 ? " open" : ""}`} onClick={() => toggle(2)}>
              <div className="bcat-title">
                <img src="/Brand_assets/icon_battery.png" alt="" style={{width: '20px', height: '20px', objectFit: 'contain', verticalAlign: 'middle', marginRight: '0.4rem'}} />
                Battery & Charging Systems
                <span className="bcat-cnt">
                  Phones, laptops & EV
                </span>
              </div>
              <svg className="bchev" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={`bcat-links${open === 2 ? " open" : ""}`}>
              <a href="#">
                Battery Health Testing
              </a>
              <a href="#">
                Swollen Battery Removal
              </a>
              <a href="#">
                Charging Port Diagnosis
              </a>
              <a href="#">
                Wireless Charging Repair
              </a>
              <a href="#">
                Fast Charge IC Fault
              </a>
              <a href="#">
                Laptop Battery Calibration
              </a>
              <a href="#">
                EV Battery Cell Testing
              </a>
              <a href="#">
                BMS Fault Diagnosis
              </a>
            </div>
          </div>
          <div className="bcat r">
            <div className={`bcat-hd${open === 3 ? " open" : ""}`} onClick={() => toggle(3)}>
              <div className="bcat-title">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '0.4rem', flexShrink: '0'}}>
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                Water Damage Recovery
                <span className="bcat-cnt">
                  Liquid damage specialist
                </span>
              </div>
              <svg className="bchev" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={`bcat-links${open === 3 ? " open" : ""}`}>
              <a href="#">
                Ultrasonic Cleaning
              </a>
              <a href="#">
                Corrosion Removal
              </a>
              <a href="#">
                Chemical Wash Process
              </a>
              <a href="#">
                Board Inspection Under Microscope
              </a>
              <a href="#">
                Component Identification
              </a>
              <a href="#">
                Drying & Testing Protocol
              </a>
              <a href="#">
                Preventive Conformal Coating
              </a>
            </div>
          </div>
          <div className="bcat r">
            <div className={`bcat-hd${open === 4 ? " open" : ""}`} onClick={() => toggle(4)}>
              <div className="bcat-title">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '0.4rem', flexShrink: '0'}}>
                  <rect x="7" y="7" width="10" height="10" rx="1" />
                  <path d="M7 9H5M7 12H5M7 15H5M17 9h2M17 12h2M17 15h2M9 7V5M12 7V5M15 7V5M9 19v-2M12 19v-2M15 19v-2" />
                </svg>
                Data Recovery & Software
                <span className="bcat-cnt">
                  Software specialist track
                </span>
              </div>
              <svg className="bchev" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={`bcat-links${open === 4 ? " open" : ""}`}>
              <a href="#">
                Android Data Recovery
              </a>
              <a href="#">
                iPhone Data Extraction
              </a>
              <a href="#">
                Chip-Off Recovery
              </a>
              <a href="#">
                JTAG & ISP Methods
              </a>
              <a href="#">
                OS Flashing & Restore
              </a>
              <a href="#">
                SIM Unlock
              </a>
              <a href="#">
                MDM Removal
              </a>
              <a href="#">
                Forensic Imaging
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
