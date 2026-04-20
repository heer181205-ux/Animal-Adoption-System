import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';

function SuccessStories() {
  const stories = [
    {
      id: 1,
      petName: "Buddy",
      ownerName: "The Kumar Family",
      image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop",
      story: "Buddy came to us as a shy, nervous dog. Today, he's the most confident and loving member of our family. He loves playing with our kids and has brought so much joy to our home!",
      date: "Adopted: January 2024",
      location: "Mumbai"
    },
    {
      id: 2,
      petName: "Luna",
      ownerName: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop",
      story: "Luna was found abandoned on the streets. Now she's living her best life, lounging in sunny spots and getting all the love she deserves. She's helped me through tough times with her gentle presence.",
      date: "Adopted: March 2024",
      location: "Delhi"
    },
    {
      id: 3,
      petName: "Max",
      ownerName: "Amit & Neha Patel",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop",
      story: "Max is our adventure buddy! From morning runs to weekend hikes, he's always ready. Adopting him was the best decision we ever made. He's taught us so much about unconditional love.",
      date: "Adopted: February 2024",
      location: "Bangalore"
    },
    {
      id: 4,
      petName: "Whiskers",
      ownerName: "Rahul Verma",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop",
      story: "This little guy has transformed my apartment into a home. His playful antics and curious nature keep me entertained every day. I can't imagine life without him now!",
      date: "Adopted: April 2024",
      location: "Pune"
    },
    {
      id: 5,
      petName: "Bella",
      ownerName: "The Reddy Family",
      image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop",
      story: "Bella has been a wonderful companion for our elderly parents. She's gentle, loving, and has brought new energy into their lives. The adoption process was smooth and supportive.",
      date: "Adopted: December 2023",
      location: "Chennai"
    },
    {
      id: 6,
      petName: "Charlie",
      ownerName: "Vikram Singh",
      image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&h=500&fit=crop",
      story: "Charlie is not just a pet, he's family. His loyalty and protective nature make us feel safe. He's also great with our other pets. Thank you Animal World for this amazing companion!",
      date: "Adopted: November 2023",
      location: "Hyderabad"
    }
  ];

  return (
    <div className="success-stories-page">
      <div className="stories-header">
        <h1>Success Stories</h1>
        <p>Real stories from families who found their perfect companions</p>
      </div>

      <div className="stories-container">
        <div className="stories-intro">
          <h2>Every Adoption Changes Two Lives</h2>
          <p>
            These heartwarming stories showcase the incredible bond between our adopted pets and their new families. 
            Each adoption is a success story that inspires us to continue our mission of connecting loving homes with animals in need.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image-container">
                <img src={story.image} alt={story.petName} className="story-image" />
                <div className="story-badge">Happy Ending ✨</div>
              </div>
              <div className="story-content">
                <h3 className="story-pet-name">{story.petName}</h3>
                <p className="story-owner">Adopted by {story.ownerName}</p>
                <p className="story-text">"{story.story}"</p>
                <div className="story-meta">
                  <span className="story-date">📅 {story.date}</span>
                  <span className="story-location">📍 {story.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stories-cta">
          <h2>Want to Create Your Own Success Story?</h2>
          <p>Browse our available pets and start your adoption journey today!</p>
          <Link to="/animals" className="cta-button">
            Find Your Perfect Match
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
