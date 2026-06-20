export default function FormatSection() {
  return (
    <section className="format-section">
      <div className="wrap">
        <div className="r" style={{marginBottom: '1.75rem'}}>
          <h2 className="sec-h2">
            Training that fits your schedule
          </h2>
          <p style={{fontSize: '0.875rem', color: '#666', marginTop: '0.4rem'}}>
            Whether you're a full-time student, working professional, or repair shop owner — we have a format that works for you.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="fmt-grid">
          <div className="fmt-card r">
            <div className="fmt-ico i1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6M10 3v6l-5 9a1 1 0 0 0 .9 1.5h12.2a1 1 0 0 0 .9-1.5L14 9V3" />
              </svg>
            </div>
            <h3>
              Hands-On Lab
            </h3>
            <p>
              Work on real devices in our fully equipped repair labs. Every lesson is practical — no theory-only classes here.
            </p>
          </div>
          <div className="fmt-card r d1">
            <div className="fmt-ico i2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3>
              Full-Time Classroom
            </h3>
            <p>
              Intensive daytime programmes at our Accra, Kumasi, and Takoradi campuses. Fastest route to certification.
            </p>
          </div>
          <div className="fmt-card r d2">
            <div className="fmt-ico i3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262E3D" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>
              Evening & Weekend
            </h3>
            <p>
              Structured evening and Saturday classes designed for working professionals who can't pause their income.
            </p>
          </div>
          <div className="fmt-card r d3">
            <div className="fmt-ico i4">
              <img src="/Brand_assets/icon_technicians.png" alt="Corporate Training" />
            </div>
            <h3>
              Corporate Training
            </h3>
            <p>
              Custom on-site repair training for your business, repair shop, or electronics retail team. Group rates available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
