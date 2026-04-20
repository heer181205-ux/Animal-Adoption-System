import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { animalsData } from '../data/animalsData';
import ShareButton from '../components/ShareButton';
import './AnimalDetail.css';

function AnimalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = animalsData.find((a) => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className="not-found">
        <h1>Animal Not Found</h1>
        <Link to="/animals" className="back-btn">Back to Animals</Link>
      </div>
    );
  }

  return (
    <div className="animal-detail-page">
      <div className="detail-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>

        <div className="detail-content">
          <div className="detail-image-section">
            <img src={animal.image} alt={animal.name} className="detail-image" />
            <div className="image-badges">
              <span className="badge-type">{animal.type}</span>
              {animal.vaccinated && <span className="badge-vaccinated">✓ Vaccinated</span>}
              {animal.neutered && <span className="badge-neutered">✓ Neutered</span>}
            </div>
          </div>

          <div className="detail-info-section">
            <h1 className="detail-name">{animal.name}</h1>
            <p className="detail-breed">{animal.breed}</p>

            <div className="detail-stats">
              <div className="stat-item">
                <span className="stat-icon">🎂</span>
                <div>
                  <p className="stat-label">Age</p>
                  <p className="stat-value">{animal.age}</p>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">⚧</span>
                <div>
                  <p className="stat-label">Gender</p>
                  <p className="stat-value">{animal.gender}</p>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📏</span>
                <div>
                  <p className="stat-label">Size</p>
                  <p className="stat-value">{animal.size}</p>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🎨</span>
                <div>
                  <p className="stat-label">Color</p>
                  <p className="stat-value">{animal.color}</p>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2>About {animal.name}</h2>
              <p className="detail-description">{animal.description}</p>
            </div>

            <div className="detail-section">
              <h2>Location</h2>
              <p className="location-text">📍 {animal.location}</p>
            </div>

            <div className="detail-section">
              <h2>Adoption Fee</h2>
              <p className="fee-text">{animal.adoptionFee}</p>
              <p className="fee-note">
                * Fee includes vaccinations, health check, and initial supplies
              </p>
            </div>

            <div className="action-buttons">
              <Link to={`/adopt/${animal.id}`} className="adopt-button">
                Adopt {animal.name}
              </Link>
              <ShareButton animalName={animal.name} animalId={animal.id} />
            </div>
          </div>
        </div>

        {/* Similar Animals */}
        <div className="similar-section">
          <h2>More {animal.type}s Available</h2>
          <div className="similar-grid">
            {animalsData
              .filter((a) => a.type === animal.type && a.id !== animal.id)
              .slice(0, 3)
              .map((similarAnimal) => (
                <Link
                  key={similarAnimal.id}
                  to={`/animal/${similarAnimal.id}`}
                  className="similar-card"
                >
                  <img src={similarAnimal.image} alt={similarAnimal.name} />
                  <div className="similar-info">
                    <h3>{similarAnimal.name}</h3>
                    <p>{similarAnimal.breed}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalDetail;
