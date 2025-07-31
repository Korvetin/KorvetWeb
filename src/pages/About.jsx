// File: src/pages/About.jsx

import { Link } from 'react-router-dom';
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaRobot, FaBrain, FaCogs, FaBullseye } from 'react-icons/fa';

function About() {
  const timeline = [
    {
      date: 'January 2025',
      title: 'AetherVest Was Born',
      desc: 'Started as an open-source-focused startup, driven by passion for community and collaboration.',
    },
    {
      date: 'February 2025',
      title: 'First Product Launched',
      desc: 'Built our first client product — a Flutter-based mobile application delivered with speed and purpose.',
    },
    {
      date: 'April 2025',
      title: 'EdTech Services Started',
      desc: 'Entered the education space by building smart, scalable solutions for students and institutions.',
    },
    {
      date: 'May 2025',
      title: 'Rebranded to Korvet Innovations',
      desc: 'Trademark hurdles led to our evolution into Korvet Innovations — same energy, bigger vision for both products and services.',
    },
    {
      date: 'Now',
      title: 'Expanding Across Sectors',
      desc: 'We’re innovating in EdTech, Tourism, and Finance with disruptive digital products and strong partnerships.',
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <motion.section
        className="hero-banner neon-gradient"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1><span>KORVET</span> INNOVATIONS</h1>
        <p>Curious to know more </p>
      </motion.section>

      {/* Timeline */}
      <section className="about-timeline-advanced">
        <div className="timeline-line"></div>
        {timeline.map((item, idx) => (
          <motion.div
            className={`timeline-entry ${idx % 2 === 0 ? 'left' : 'right'}`}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="entry-content">
              <h4>{item.date}</h4>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Services We Offer */}
      <motion.section
        className="about-services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Superpowers</h2>
        <div className="service-cards">
          {[{
            icon: <FaLaptopCode size={24} />, label: "Web Development"
          }, {
            icon: <FaMobileAlt size={24} />, label: "App Development"
          }, {
            icon: <FaBullseye size={24} />, label: "Product Strategy"
          }, {
            icon: <FaRobot size={24} />, label: "Automation"
          }, {
            icon: <FaBrain size={24} />, label: "AI/ML Integration"
          }, {
            icon: <FaCogs size={24} />, label: "DevOps & CI/CD"
          }].map((service, idx) => (
            <motion.div
              className="card neon-border"
              key={idx}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>{service.icon}</div>
              <div>{service.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Signature Quote */}
      <motion.section
        className="about-signature pulse-border"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <blockquote>
          "We don’t build apps"
        </blockquote>
        <p className="signature">— Team Korvet</p>
      </motion.section>

      {/* Culture CTA */}
      <motion.section
        className="about-extra flicker-box"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2> Our Culture</h2>
        <p>
          Creative chaos, chai-powered sprints, and shipping bugs at 3AM that turn out to be features. That’s Korvet.
        </p>
        <Link to="/team">
          <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
            Meet Our Pirates
          </motion.button>
        </Link>
      </motion.section>

      {/* Final Call */}
      <motion.section
        className="about-extra final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Blow Minds?</h2>
        <p>
          Let’s create products that feel like magic. Whether you’re a startup or legend — let’s make waves together.
        </p>
        <Link to="/launch">
          <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
            Launch With Us ;
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
}

export default About;
