export default function LearningPath() {
  return (
    <section className="lp-section">
      <div className="lp-in">
        <div className="lp-txt r">
          <div className="sec-label">
            Featured Learning Path
          </div>
          <h2 className="sec-h2" style={{color: 'var(--dark)', marginBottom: '0.75rem'}}>
            From beginner to certified repair technician — step by step
          </h2>
          <p>
            Our structured learning paths bundle multiple courses, live lab sessions, and assessments into a clear, progressive curriculum — so you go from zero hands-on experience to a fully certified, job-ready technician in months, not years.
          </p>
          <a href="#" className="btn-teal">
            Explore All Learning Paths →
          </a>
        </div>
        <div className="lp-card r d1">
          <div className="lp-thumb" style={{padding: '0', position: 'relative', overflow: 'hidden'}}>
            <img src="/Brand_assets/workbench-tools.jpg" alt="Repair workbench" style={{width: '100%', height: '190px', objectFit: 'cover', display: 'block'}} />
            <div style={{position: 'absolute', inset: '0', background: 'rgba(38,46,61,0.62)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.5rem'}}>
              <div>
                <div className="lp-thumb-title">
                  Complete Device Repair
                  <br />
                  Technician Path
                </div>
                <div className="lp-thumb-sub">
                  TRUSCREN TECH HUB · 4 courses · ~5 months
                </div>
              </div>
            </div>
          </div>
          <div className="lp-body">
            <span className="lp-badge">
              Learning Path
            </span>
            <div className="lp-name">
              Become a Certified Device Repair Technician
            </div>
            <div className="lp-partner">
              TRUSCREN TECH HUB — Professional Certification
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
