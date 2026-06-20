export default function CorporateSection() {
  return (
    <section id="corporate" className="gplan-section">
      <div className="gplan-in">
        <div className="gplan-copy r">
          <h2>
            Upskill your entire
            <br />
            repair team with
            <br />
            TRUSCREN Corporate
          </h2>
          <p>
            Whether you run a phone shop, electronics retail chain, or corporate IT department — TRUSCREN TECH HUB delivers customised, on-site repair training that turns your staff into certified professionals. Group enrolment discounts available.
          </p>
          <a href="#" className="btn-outline-w">
            Explore Corporate Training →
          </a>
        </div>
        <div className="gplan-feats">
          <div className="gfeat r">
            <div className="gfeat-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <line x1="2" y1="20" x2="22" y2="20" />
              </svg>
            </div>
            <h4>
              Track Competency
            </h4>
            <p>
              Monitor your team's skill progression and certification status from a dedicated employer dashboard.
            </p>
          </div>
          <div className="gfeat r d1">
            <div className="gfeat-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h4>
              Custom Curriculum
            </h4>
            <p>
              We tailor the training content to the specific devices and repair types your business handles daily.
            </p>
          </div>
          <div className="gfeat r d2">
            <div className="gfeat-ico">
              <img src="/Brand_assets/icon_training_cert.png" alt="Verified Certificates" />
            </div>
            <h4>
              Verified Certificates
            </h4>
            <p>
              Every graduate receives a TRUSCREN TECH HUB certificate recognised by leading electronics employers.
            </p>
          </div>
          <div className="gfeat r d3">
            <div className="gfeat-ico">
              <img src="/Brand_assets/icon_technicians.png" alt="Dedicated Trainer" />
            </div>
            <h4>
              Dedicated Trainer
            </h4>
            <p>
              A dedicated TRUSCREN instructor runs on-site at your location for the full duration of the programme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
