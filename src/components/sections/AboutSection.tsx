export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-in">
        <div className="about-copy r">
          <div className="sec-label">
            About Us
          </div>
          <h2 className="sec-h2">
            About TRUSCREN TECH HUB
          </h2>
          <p>
            TRUSCREN TECH HUB is a professional device repair training school in Accra, Ghana, and part of the trusted TRUSCREN brand — a world-leading supplier of premium phone screens serving 38 countries with a defect rate under 0.5%.
          </p>
          <p>
            We teach practical, job-ready skills in phone screen repair, laptop repair, circuit board soldering, and EV battery diagnostics. Our mission is to make device repair easier and to train the next generation of skilled technicians across Africa.
          </p>
          <p className="about-tagline">
            True Colors. True TRUSCREN.
          </p>
          <a href="#enrol" className="btn-teal">
            Join the 2026 Cohort →
          </a>
        </div>
        <div className="about-stat-grid r d1">
          <div className="about-stat">
            <span className="about-stat-n">
              38
            </span>
            <span className="about-stat-l">
              Countries served by the TRUSCREN brand
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-n">
              {"<"}0.5%
            </span>
            <span className="about-stat-l">
              Defect rate — world-class quality standard
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-n">
              3,500+
            </span>
            <span className="about-stat-l">
              Technicians trained across Ghana
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-n">
              92%
            </span>
            <span className="about-stat-l">
              Graduates working or in business within 3 months
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
