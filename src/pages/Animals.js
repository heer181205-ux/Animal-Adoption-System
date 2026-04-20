import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animalsData } from '../data/animalsData';
import FavoriteButton from '../components/FavoriteButton';
import './Animals.css';

function Animals() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnimals = animalsData.filter((animal) => {
    const matchesType = selectedType === 'All' || animal.type === selectedType;
    const matchesSize = selectedSize === 'All' || animal.size === selectedSize;
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSize && matchesSearch;
  });

  return (
    <div className="animals-page">
      <div className="animals-header">
        <h1>Find Your Perfect Companion</h1>
        <p>Browse through our available pets and find your new best friend</p>
      </div>

      <div className="animals-container">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <h2>Filters</h2>
          
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search by name or breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label>Animal Type</label>
            <div className="filter-options">
              <button
                className={selectedType === 'All' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedType('All')}
              >
                All
              </button>
              <button
                className={selectedType === 'Dog' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedType('Dog')}
              >
                🐕 Dogs
              </button>
              <button
                className={selectedType === 'Cat' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedType('Cat')}
              >
                🐱 Cats
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Size</label>
            <div className="filter-options">
              <button
                className={selectedSize === 'All' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedSize('All')}
              >
                All Sizes
              </button>
              <button
                className={selectedSize === 'Small' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedSize('Small')}
              >
                Small
              </button>
              <button
                className={selectedSize === 'Medium' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedSize('Medium')}
              >
                Medium
              </button>
              <button
                className={selectedSize === 'Large' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedSize('Large')}
              >
                Large
              </button>
            </div>
          </div>

          <div className="results-count">
            <p>{filteredAnimals.length} pets found</p>
          </div>
        </aside>

        {/* Animals Grid */}
        <div className="animals-content">
          {filteredAnimals.length > 0 ? (
            <div className="animals-grid">
              {filteredAnimals.map((animal) => (
                <div key={animal.id} className="animal-card">
                  <div className="animal-image-container">
                    <FavoriteButton animalId={animal.id} />
                    <img src={animal.image} alt={animal.name} className="animal-image" />
                    <div className="animal-badges">
                      <span className="type-badge">{animal.type}</span>
                      {animal.vaccinated && <span className="status-badge">✓ Vaccinated</span>}
                    </div>
                  </div>
                  <div className="animal-info">
                    <h3 className="animal-name">{animal.name}</h3>
                    <p className="animal-breed">{animal.breed}</p>
                    <div className="animal-meta">
                      <span>🎂 {animal.age}</span>
                      <span>⚧ {animal.gender}</span>
                      <span>📏 {animal.size}</span>
                    </div>
                    <div className="animal-location">
                      📍 {animal.location}
                    </div>
                    <div className="animal-fee">
                      Adoption Fee: <strong>{animal.adoptionFee}</strong>
                    </div>
                    <Link to={`/animal/${animal.id}`} className="view-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h2>No pets found</h2>
              <p>Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Animals;
