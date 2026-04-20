import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { animalsData } from '../data/animalsData';
import './AdoptionForm.css';

function AdoptionForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = animalsData.find((a) => a.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    occupation: '',
    homeType: '',
    hasYard: '',
    hasPets: '',
    petDetails: '',
    experience: '',
    reason: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Show success message
    alert(`Thank you for your adoption application for ${animal.name}! We will contact you soon at ${formData.email}`);
    
    // Navigate back to animal detail page
    navigate(`/animal/${id}`);
  };

  if (!animal) {
    return (
      <div className="not-found">
        <h1>Animal Not Found</h1>
      </div>
    );
  }

  return (
    <div className="adoption-form-page">
      <div className="form-container">
        <div className="form-header">
          <h1>Adoption Application</h1>
          <p>Apply to adopt {animal.name}</p>
        </div>

        <div className="animal-summary">
          <img src={animal.image} alt={animal.name} />
          <div className="summary-info">
            <h2>{animal.name}</h2>
            <p>{animal.breed} • {animal.age} • {animal.gender}</p>
            <p className="summary-fee">Adoption Fee: {animal.adoptionFee}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="adoption-form">
          <h3>Personal Information</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
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
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Street address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <label>State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="State"
              />
            </div>
            <div className="form-group">
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                placeholder="400001"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Occupation *</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              placeholder="Your occupation"
            />
          </div>

          <h3>Living Situation</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Home Type *</label>
              <select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required
              >
                <option value="">Select home type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="farmhouse">Farmhouse</option>
              </select>
            </div>
            <div className="form-group">
              <label>Do you have a yard? *</label>
              <select
                name="hasYard"
                value={formData.hasYard}
                onChange={handleChange}
                required
              >
                <option value="">Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <h3>Pet Experience</h3>

          <div className="form-group">
            <label>Do you currently have other pets? *</label>
            <select
              name="hasPets"
              value={formData.hasPets}
              onChange={handleChange}
              required
            >
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {formData.hasPets === 'yes' && (
            <div className="form-group">
              <label>Please describe your current pets</label>
              <textarea
                name="petDetails"
                value={formData.petDetails}
                onChange={handleChange}
                placeholder="Type, breed, age, etc."
                rows="3"
              />
            </div>
          )}

          <div className="form-group">
            <label>Previous pet ownership experience *</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select experience level</option>
              <option value="none">No experience</option>
              <option value="some">Some experience</option>
              <option value="extensive">Extensive experience</option>
            </select>
          </div>

          <div className="form-group">
            <label>Why do you want to adopt {animal.name}? *</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              placeholder="Tell us why you'd be a great match for this pet..."
              rows="5"
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />
              <span>
                I agree to provide a safe, loving home for {animal.name} and understand that
                the adoption process includes a home visit and reference checks. I also agree
                to the terms and conditions of adoption.
              </span>
            </label>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate(-1)} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
