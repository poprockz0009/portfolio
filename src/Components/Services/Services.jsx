import React from 'react';
import './Services.css';

const services = [
  {
    s_no: '01',
    s_name: 'UX Design',
    s_desc: 'Designing intuitive interfaces with a focus on user needs and accessibility.'
  },
  {
    s_no: '02',
    s_name: 'User Research',
    s_desc: 'Conducting interviews and usability tests to inform design decisions.'
  },
  {
    s_no: '03',
    s_name: 'Prototyping',
    s_desc: 'Creating wireframes and interactive prototypes using Figma.'
  }
];

export const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};