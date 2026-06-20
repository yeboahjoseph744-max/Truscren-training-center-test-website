export default function RequirementsSection() {
  return (
    <section id="requirements" className="req-section">
      <div className="req-hd r">
        <div className="sec-label">
          Admissions
        </div>
        <h2>
          What You Need to Join the
          <br />
          TRUSCREN Repair School
        </h2>
        <p>
          Everything is straightforward — no formal qualifications required. Here's what to prepare before you enrol.
        </p>
      </div>
      <div className="req-grid">
        Card 1 — To Enrol
        <div className="req-card r">
          <div className="req-card-ico req-ico-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
              <path d="M7 15h.01M11 15h2" />
            </svg>
          </div>
          <h3>
            To Enrol
            <br />
            <span style={{fontWeight: '500', color: '#888', fontSize: '0.78rem'}}>
              Bring these on registration day
            </span>
          </h3>
          <ul className="req-list">
            <li>
              A valid ID — Ghana Card, passport, or voter's ID
            </li>
            <li>
              One passport-size photo
            </li>
            <li>
              Proof of payment / enrolment confirmation
            </li>
            <li>
              A notebook and pen
            </li>
          </ul>
        </div>
        Card 2 — Who Can Join
        <div className="req-card r d1">
          <div className="req-card-ico req-ico-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#005843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>
            Who Can Join
            <br />
            <span style={{fontWeight: '500', color: '#888', fontSize: '0.78rem'}}>
              Open to almost everyone
            </span>
          </h3>
          <ul className="req-list">
            <li>
              Anyone 16 years and above
            </li>
            <li>
              No prior experience needed for Beginner courses
            </li>
            <li>
              Basic reading and writing in English
            </li>
          </ul>
        </div>
        Card 3 — What to Bring to Class
        <div className="req-card r d2">
          <div className="req-card-ico req-ico-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262E3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <h3>
            What to Bring to Class
            <br />
            <span style={{fontWeight: '500', color: '#888', fontSize: '0.78rem'}}>
              Each session
            </span>
          </h3>
          <ul className="req-list">
            <li>
              Your enrolment confirmation
            </li>
            <li>
              A willingness to learn and practise hands-on
            </li>
            <li>
              Tools and equipment are provided at the workshop
            </li>
          </ul>
        </div>
        Card 4 — Good to Have
        <div className="req-card r d3">
          <div className="req-card-ico req-ico-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3>
            Good to Have
            <br />
            <span style={{fontWeight: '500', color: '#888', fontSize: '0.78rem'}}>
              Optional extras
            </span>
          </h3>
          <div className="req-optional-label">
            Optional
          </div>
          <ul className="req-list">
            <li>
              A smartphone for taking notes and following along
            </li>
            <li>
              Your own basic repair tools (if you have them)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
