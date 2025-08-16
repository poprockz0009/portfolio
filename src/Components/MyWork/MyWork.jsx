import React from 'react';
import './MyWork.css';

const projects = [
  {
    title: 'Symbotic Co-op: Warehouse UX',
    description: 'Streamlined operator interface, reduced task time by 15%.',
    image: '/assets/symbotic-project.jpg',
    link: 'https://your-notion-page/symbotic-warehouse-ux'
  },
  {
    title: 'Symbotic Co-op: Inventory Dashboard',
    description: 'Designed a modular dashboard for real-time tracking.',
    image: '/assets/symbotic-dashboard.jpg',
    link: 'https://your-notion-page/symbotic-inventory-dashboard'
  }
];

export const MyWork = () => {
  return (
    <section id="work" className="mywork">
      <h2>My Work</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};