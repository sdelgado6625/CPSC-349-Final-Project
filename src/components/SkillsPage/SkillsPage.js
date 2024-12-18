import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillsPage.css';
import ChillGuy from "../../assets/Chill_guy.jpg";


function SkillsPage(){
    return (
        <div>
          <MainContent />
        </div>
      );
}

function MainContent(){
  return (
    <div className="skills-page">
      <h1>My Skills</h1>

      {/* Technical Skills */}
      <div className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C/C++</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      {/* Non-Technical Skills */}
      <div className="section">
        <h2>Non-Technical Skills</h2>
        <ul>
          <li>Communication (Biliterate in Spanish and English)</li>
          <li>Teamwork & Collaboration</li>
          <li>Problem-Solving</li>
          <li>Time Management</li>
          <li>Leadership</li>
          <li>Adaptability</li>
          <li>Critical Thinking</li>
          <li>Customer Service</li>
          <li>Public Speaking</li>
        </ul>
      </div>

    </div>
  );
}

export default SkillsPage;