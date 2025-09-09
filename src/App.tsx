// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AIMLProjects from './components/AIMLProjects';
import IOTProjects from './components/IOTProjects';
import WebApplicationProjects from './components/WebApplicationProjects';
import CyberSecurityProjects from './components/CyberSecurityProjects';
import Profile from './components/Profile';
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
          <Route path="/ai-ml-projects" element={<AIMLProjects />} />
          <Route path="/iot-projects" element={<IOTProjects />} />
          <Route path="/web-application-projects" element={<WebApplicationProjects />} />
          <Route path="/cyber-security-projects" element={<CyberSecurityProjects />} />
          <Route path="/profile" element={<Profile />} />
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