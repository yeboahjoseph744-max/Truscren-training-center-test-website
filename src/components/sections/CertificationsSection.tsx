export default function CertificationsSection() {
  return (
    <section id="certifications" className="cert-section">
      <div className="wrap">
        <div className="r" style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem'}}>
          <div className="sec-label">
            Certification
          </div>
          <h2 className="sec-h2">
            Get Certified
          </h2>
          <p className="cert-lead">
            Students who complete their course receive an official
            <strong>
              TRUSCREN TECH HUB Certificate
            </strong>
            — recognising their hands-on skills and helping them start a career or business in device repair.
          </p>
        </div>
        <div className="cert-cards">
          <div className="cert-card r">
            <div className="cert-card-ico ci1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h3>
              Official TRUSCREN TECH HUB Certificate
            </h3>
            <p>
              Every graduate earns a signed, printed certificate from TRUSCREN TECH HUB — proof of your hands-on training and practical competency, issued directly by the school on successful completion.
            </p>
          </div>
          <div className="cert-card r d1">
            <div className="cert-card-ico ci2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>
              Recognised by Industry Employers
            </h3>
            <p>
              TRUSCREN TECH HUB is part of the trusted TRUSCREN brand — serving 38 countries with a defect rate under 0.5%. Our certificate carries real weight with electronics shops, repair businesses, and corporate IT departments across Africa.
            </p>
          </div>
          <div className="cert-card r d2">
            <div className="cert-card-ico ci3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262E3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <h3>
              Launch Your Career or Business
            </h3>
            <p>
              With your certificate in hand, you're ready to apply for jobs at top repair shops, start your own repair business, or upskill into advanced disciplines. 92% of our graduates are working or running a business within 3 months.
            </p>
          </div>
        </div>
        <div className="r" style={{textAlign: 'center', marginTop: '2.5rem'}}>
          <a href="#enrol" className="btn-teal">
            Enrol and Start Earning Your Certificate →
          </a>
        </div>
      </div>
    </section>
  );
}
