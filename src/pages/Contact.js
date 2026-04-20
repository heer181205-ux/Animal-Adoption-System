import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(`Thank you ${formData.name}! We've received your message and will get back to you at ${formData.email} soon.`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert(data.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please check your connection and try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Reach out with any questions or concerns!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p className="contact-intro">
            Have questions about adoption, volunteering, or donations? We're here to help!
          </p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Animal Street</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>India</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>Main: +91 98765 43210</p>
              <p>Emergency: +91 98765 43211</p>
              <p>Mon-Sun: 9:00 AM - 8:00 PM</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>info@animalworld.com</p>
              <p>adopt@animalworld.com</p>
              <p>volunteer@animalworld.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Visiting Hours</h3>
              <p>Monday - Friday: 10 AM - 6 PM</p>
              <p>Saturday - Sunday: 9 AM - 7 PM</p>
              <p>Closed on public holidays</p>
            </div>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">📘 Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">📷 Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">🐦 Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">💼 LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="adoption">Adoption Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="donation">Donation Information</option>
                <option value="general">General Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help you..."
                rows="6"
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-icon">📍</div>
            <h3>Animal World Shelter</h3>
            <p>123 Animal Street, Mumbai, Maharashtra 400001</p>
            <p className="map-note">Map integration available with Google Maps API</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>❓ How long does the adoption process take?</h3>
            <p>The adoption process typically takes 3-7 days, including application review, home visit, and final approval.</p>
          </div>
          <div className="faq-item">
            <h3>❓ What is included in the adoption fee?</h3>
            <p>The adoption fee covers vaccinations, spaying/neutering, microchipping, health check, and initial supplies.</p>
          </div>
          <div className="faq-item">
            <h3>❓ Can I meet the pet before adopting?</h3>
            <p>Absolutely! We encourage meet-and-greets to ensure compatibility between you and your potential new pet.</p>
          </div>
          <div className="faq-item">
            <h3>❓ Do you offer post-adoption support?</h3>
            <p>Yes! We provide lifetime support including training tips, health advice, and behavioral guidance.</p>
          </div>
          <div className="faq-item">
            <h3>❓ What if I can no longer care for my adopted pet?</h3>
            <p>We have a return policy. Contact us and we'll work together to find the best solution for the pet.</p>
          </div>
          <div className="faq-item">
            <h3>❓ Are the animals house-trained?</h3>
            <p>Many of our animals have basic training, but we provide guidance to help with any additional training needed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
