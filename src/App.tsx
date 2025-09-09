// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AppDevelopment from './components/AppDevelopment';
import WebsiteDevelopment from './components/WebsiteDevelopment';
import VideoEditing from './components/VideoEditing';
import GraphicsDesign from './components/GraphicsDesign';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/graphics-design" element={<GraphicsDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;