import React from 'react';
import ProjectCard from './ProjectCard'; 
import styles from './Projects.module.css';

// --- Project Data ---

const projectsData = [
  {
    id: 1,
    title: 'Blog Haven',
    description: 'A full-featured blog platform built with React and React Router that allows users to create, read, and delete blog posts. The application features a clean, responsive design with a teal and dark theme. It solves the problem of needing a straightforward platform for content sharing with an intuitive interface. Technologies used include React, React Router, custom hooks for data fetching, and a RESTful API for backend communication.',
    imageUrl: 'public/images/blogs.jpeg', 
    link: 'https://github.com/Bhargava421/Blog-Heaven.git', 
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A modern, responsive weather application that provides real-time weather information for any city worldwide. This project solves the problem of accessing current weather conditions through a clean, intuitive interface. Built with vanilla JavaScript and Node.js, the application features a secure backend architecture that protects API keys while delivering seamless weather data from OpenWeatherMap API.',
    imageUrl: 'public/images/weather.jpeg',
    link: 'https://github.com/Bhargava421/Weather-app.git',
  },
  {
    id: 3,
    title: 'Employee Management System',
    description: 'A desktop application built with Python that efficiently manages employee and department data. Provides a user-friendly interface to maintain organizational records. Uses SQLite for data storage and CustomTkinter for a modern UI experience.',
    imageUrl: 'public/images/Employee Management System.jpeg',
    link: 'https://github.com/Bhargava421/To-do-list.git',
  },
  {
    id: 4,
    title: 'Real-time 3D Multiplayer Shooter Game',
    description: 'A browser-based 3D multiplayer first-person shooter built using Node.js, Express, Socket.IO for real-time networking, and Three.js for client-side WebGL rendering. Features authoritative server logic, basic combat, and procedural map generation.',
    imageUrl:'public/images/Real-time 3D Multiplayer Shooter Game.jpeg',
    link: 'https://github.com/gaganraip29/browser-game.git', 
  },
  {
    id: 5,
    title: 'Task Master',
    description: 'Built with JavaScript, Node.js, and Express, this productivity application helps users organize their day with a clean, minimalist interface. Task Master solves the problem of task management by combining elegant design with practical functionality, offering persistent storage through a file-based JSON system. The focus on performance and simplicity makes this tool perfect for daily use.',
    imageUrl: 'public/images/Task Master.jpeg',
    link: 'https://github.com/Bhargava421/To-do-list.git',
  },
  
];


function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id} 
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl} 
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;