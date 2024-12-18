import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ChillGuy from "../../assets/programmer.png";


function HomePage(){
    return (
        <div>
          <MainContent />
        </div>
      );
}

function MainContent(){
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="photo">
          <img src={ChillGuy} alt="Chill guy" />
        </div>
        <div className="text-content">
          <h1 className="tagline">Persistent, reliable, and committed to delivering results.</h1>
          <p className="bio">
            My name is Steven Delgado, and I'm a senior at California State University, Fullerton
            and I'm passionate about cooking, coffee, working out and video games. Welcome to my portfolio!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;