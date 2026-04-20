import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simulate registration (no backend)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userName', formData.fullName);
    
    alert(`Welcome to Animal World, ${formData.fullName}! Your account has been created.`);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-branding">
            <div className="brand-icon">🐾</div>
            <h1>Animal World</h1>
            <p>Join our community of animal lovers and start your adoption journey today!</p>
          </div>
          <div className="auth-image">
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop" 
              alt="Happy pets"
            />
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-container">
            <h2>Create Account</h2>
            <p className="auth-subtitle">Sign up to start adopting pets</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password (min 6 characters)"
                  required
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to the <Link to="/terms" className="inline-link">Terms & Conditions</Link> and <Link to="/privacy" className="inline-link">Privacy Policy</Link>
                  </span>
                </label>
                {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}
              </div>

              <button type="submit" className="auth-button">
                Create Account
              </button>

              <div className="auth-divider">
                <span>OR</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <span>🔍</span> Sign up with Google
                </button>
                <button type="button" className="social-btn facebook">
                  <span>📘</span> Sign up with Facebook
                </button>
              </div>

              <p className="auth-footer">
                Already have an account? <Link to="/login" className="auth-link">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
