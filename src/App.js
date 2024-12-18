import Navbar from './components/Navbar/Navbar.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import ContactPage from './components/ContactPage/ContactPage.js';
import AboutPage from './components/AboutPage/AboutPage.js';
import SkillsPage from './components/SkillsPage/SkillsPage.js';
import ProjectPage from './components/ProjectPage/ProjectPage.js';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
