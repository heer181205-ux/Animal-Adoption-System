import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Animals from './pages/Animals';
import AnimalDetail from './pages/AnimalDetail';
import AdoptionForm from './pages/AdoptionForm';
import About from './pages/About';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
          <Route path="/adopt/:id" element={<AdoptionForm />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;