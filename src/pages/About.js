import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Animal World</h1>
        <p>Connecting loving homes with animals in need since 2020</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              At Animal World, we believe every animal deserves a loving home. Our mission is to
              rescue, rehabilitate, and rehome abandoned and stray animals across India. We work
              tirelessly to match pets with families who will cherish them for life.
            </p>
            <p>
              Through our adoption program, we've successfully placed over 5,000 animals in
              forever homes. Each adoption not only saves one life but makes room for us to
              rescue another animal in need.
            </p>
          </div>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
              alt="Our Mission"
            />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
              alt="What We Do"
            />
          </div>
          <div className="section-content">
            <h2>What We Do</h2>
            <ul className="about-list">
              <li>🏥 Provide medical care and vaccinations for all rescued animals</li>
              <li>🏠 Maintain safe and comfortable shelter facilities</li>
              <li>❤️ Match pets with compatible families through our adoption program</li>
              <li>📚 Educate the community about responsible pet ownership</li>
              <li>🐾 Conduct spay/neuter programs to control the stray population</li>
              <li>🤝 Partner with local veterinarians and animal welfare organizations</li>
            </ul>
          </div>
        </section>

        <section className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Animals Adopted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Animals Rescued</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Volunteers</div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💙</div>
              <h3>Compassion</h3>
              <p>We treat every animal with love, care, and respect they deserve.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Commitment</h3>
              <p>We're dedicated to finding the perfect match for every pet and family.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Transparency</h3>
              <p>We maintain open communication throughout the adoption process.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We believe in building a community of responsible pet owners.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p className="team-intro">
            Our dedicated team of animal lovers works around the clock to ensure every animal
            receives the care and attention they need.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍⚕️</div>
              <h3>Dr. Rajesh Kumar</h3>
              <p className="member-role">Chief Veterinarian</p>
              <p>15+ years of experience in animal care</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Priya Sharma</h3>
              <p className="member-role">Adoption Coordinator</p>
              <p>Helping families find their perfect match</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h3>Amit Patel</h3>
              <p className="member-role">Shelter Manager</p>
              <p>Ensuring safe and comfortable facilities</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🏫</div>
              <h3>Neha Gupta</h3>
              <p className="member-role">Community Outreach</p>
              <p>Educating and engaging the community</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Join Our Mission</h2>
          <p>
            Whether you're looking to adopt, volunteer, or donate, there are many ways you can
            help us save more lives.
          </p>
          <div className="cta-buttons">
            <a href="/animals" className="cta-btn primary">Adopt a Pet</a>
            <a href="/contact" className="cta-btn secondary">Get Involved</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
