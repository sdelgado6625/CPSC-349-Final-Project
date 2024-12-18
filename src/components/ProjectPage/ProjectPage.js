import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

const projects = [
  {
    id: 1,
    title: "Movie Recommendation Website",
    description: "A web application that recommends movies based on the user's interests and movie popularity.",
    technologies: ["React", "CSS", "JavaScript, MongoDB"],
    challenges: "It was my first team project using Javascript, CSS and React.",
    outcomes: "A responsive, modern website to showcased web develpoment and software engineering skills."
  },
  {
    id: 2,
    title: "Crossy Road Remake",
    description: "A remake of the mobile game Crossy Road in Unreal Engine 5.",
    technologies: ["Unreal Engine 5"],
    challenges: "It was my first full attempt at making a game in UE5.",
    outcomes: "A competent remake of Crossy Road that featured procederal level generation and several different vehicles."
  },  
  {
    id: 3,
    title: "Terminal Remake in C",
    description: "A project to replicate the functionality of a basic Linux terminal using the C programming language, including commands execution and error handling.",
    technologies: ["C"],
    challenges: "Understanding and implementing low-level system calls and ensuring the proper management of processes and memory.",
    outcomes: "A functional terminal application that reinforced knowledge of system programming and low-level operations in C."
  },
  {
    id: 4,
    title: "Python File Syntax Fixer",
    description: "A Python application that reads Python scripts, tokenizes their content, and automatically identifies and corrects syntax errors.",
    technologies: ["Python"],
    challenges: "Creating a robust tokenizer to handle a wide variety of Python syntax and ensuring corrections did not alter program logic.",
    outcomes: "A utility that effectively tokenizes and repairs Python code, enhancing problem-solving skills and familiarity with Python's lexical structure."
  }
  
];

function ProjectPage(){
    return (
        <div>
          <MainContent />
        </div>
      );
}

function MainContent(){
  const [expandedProject, setExpandedProject] = useState(null);

  const handleToggle = (id) => {
    setExpandedProject((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <button onClick={() => handleToggle(project.id)}>
              {expandedProject === project.id ? "Show Less" : "Show More"}
            </button>

            {expandedProject === project.id && (
              <div className="project-details">
                <p><strong>Challenges:</strong> {project.challenges}</p>
                <p><strong>Outcomes:</strong> {project.outcomes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;