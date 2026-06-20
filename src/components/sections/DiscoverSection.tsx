export default function DiscoverSection() {
  return (
    <section className="discover-section">
      <div className="discover-in">
        <div className="disc-visual r" style={{display: 'block', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 16px 56px rgba(0,0,0,0.18)', position: 'relative', minHeight: '400px'}}>
          <img src="/Brand_assets/training-lab.jpg" alt="TRUSCREN TECH HUB training lab — instructor teaching student" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: '0'}} />
          <div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to bottom,rgba(0,0,0,0.08) 35%,rgba(0,0,0,0.78))'}} />
          <div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
            <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '6px', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.15)'}}>
              <div className="dt-n">
                3,500+
              </div>
              <div className="dt-l">
                Technicians Certified
              </div>
            </div>
            <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '6px', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.15)'}}>
              <div className="dt-n">
                {"<"}0.5%
              </div>
              <div className="dt-l">
                Defect Rate
              </div>
            </div>
            <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '6px', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.15)'}}>
              <div className="dt-n">
                3
              </div>
              <div className="dt-l">
                Training Campuses
              </div>
            </div>
            <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '6px', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.15)'}}>
              <div className="dt-n">
                12-Month
              </div>
              <div className="dt-l">
                Quality Guarantee
              </div>
            </div>
          </div>
        </div>
        <div className="disc-copy r d1">
          <div className="sec-label">
            Why TRUSCREN TECH HUB?
          </div>
          <h2 className="sec-h2">
            More than a course — a career-changing repair education
          </h2>
          <p style={{marginTop: '0.875rem'}}>
            TRUSCREN TECH HUB exists because Africa's device repair industry needs properly trained, certified professionals. We deliver that — with real tools, real devices, and instructors who repair for a living.
          </p>
          <ul className="disc-list" style={{marginTop: '1rem'}}>
            <li>
              Industry-standard tools and equipment provided in every lab session
            </li>
            <li>
              Learn from active repair professionals, not just classroom instructors
            </li>
            <li>
              Small cohort sizes ensure you get hands-on time, not just observation
            </li>
            <li>
              Career placement support and repair business start-up guidance for all graduates
            </li>
          </ul>
          <a href="#enrol" className="btn-dark">
            Enrol Today →
          </a>
        </div>
      </div>
    </section>
  );
}
