import React from 'react';
import { Link } from 'react-router-dom';
import { animalsData } from '../data/animalsData';
import FavoriteButton from '../components/FavoriteButton';
import './Home.css';

function Home() {
  const featuredAnimals = animalsData.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Companion</h1>
          <p className="hero-subtitle">
            Give a loving home to animals in need. Adopt, don't shop!
          </p>
          <Link to="/animals" className="hero-button">
            Browse Pets
          </Link>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="why-adopt">
        <h2 className="section-title">Why Adopt?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Save a Life</h3>
            <p>Every adoption saves an animal and makes room for another rescue.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Find Companionship</h3>
            <p>Pets bring joy, love, and companionship to your home.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable</h3>
            <p>Adoption fees are minimal and include vaccinations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🐾</div>
            <h3>Variety</h3>
            <p>Find pets of all breeds, ages, and personalities.</p>
          </div>
        </div>
      </section>

      {/* Featured Animals Section */}
      <section className="featured-animals">
        <h2 className="section-title">Meet Our Featured Pets</h2>
        <div className="animals-grid">
          {featuredAnimals.map((animal) => (
            <div key={animal.id} className="animal-card">
              <div className="animal-image-container">
                <FavoriteButton animalId={animal.id} />
                <img src={animal.image} alt={animal.name} className="animal-image" />
                <div className="animal-type-badge">{animal.type}</div>
              </div>
              <div className="animal-info">
                <h3 className="animal-name">{animal.name}</h3>
                <p className="animal-breed">{animal.breed}</p>
                <div className="animal-details">
                  <span>🎂 {animal.age}</span>
                  <span>📍 {animal.location}</span>
                </div>
                <Link to={`/animal/${animal.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/animals" className="view-all-btn">
            View All Pets
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Browse</h3>
            <p>Explore our available pets and find your perfect match.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Apply</h3>
            <p>Fill out an adoption application for your chosen pet.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Meet</h3>
            <p>Schedule a meet and greet with your potential new friend.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Adopt</h3>
            <p>Complete the adoption process and take your pet home!</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Happy Adoption Stories</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Adopting Buddy was the best decision we ever made! He's brought so much joy to our family. The adoption process was smooth and the team was incredibly supportive."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👨</div>
              <div>
                <h4>Rajesh Kumar</h4>
                <p>Adopted Buddy</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Luna is the perfect addition to our home. She's so gentle and loving. Thank you Animal World for helping us find our furry friend!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👩</div>
              <div>
                <h4>Priya Sharma</h4>
                <p>Adopted Luna</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "The team at Animal World made the adoption process so easy. Max is now a beloved member of our family. Highly recommend adopting from here!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👨</div>
              <div>
                <h4>Amit Patel</h4>
                <p>Adopted Max</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated!</h2>
          <p>Subscribe to our newsletter for updates on new arrivals and adoption success stories.</p>
          <form className="newsletter-form" onSubmit={async (e) => { 
            e.preventDefault(); 
            const email = e.target.email.value;
            try {
              const response = await fetch('http://localhost:3001/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
              });
              const data = await response.json();
              alert(data.message || 'Thank you for subscribing!');
              if (data.success) e.target.reset();
            } catch (error) {
              console.error('Newsletter subscription error:', error);
              alert('Failed to subscribe. Please try again later.');
            }
          }}>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email address" 
              required 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Start your adoption journey today and give a deserving animal a forever home.</p>
          <Link to="/animals" className="cta-button">
            Start Adopting
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
