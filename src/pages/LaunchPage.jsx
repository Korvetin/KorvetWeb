// File: src/pages/LaunchPage.jsx

import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function LaunchPage() {
  return (
    <div className="about-page">
      <motion.section
        className="hero-banner"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Launch With Us</h1>
        <p>Dream big. Build bold. Together, we can turn spark into scale.</p>
      </motion.section>

      <motion.section
        className="about-extra"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Why Partner With Korvet?</h2>
        <p>
          Whether you're building a product, looking to scale, or want a rapid MVP — we turn ideas into impact.
        </p>
      </motion.section>

      <motion.section
        className="about-services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2> Our Launch Services</h2>
        <div className="service-cards">
          <div className="card neon-border"> MVP Design & Development</div>
          <div className="card neon-border"> Go-to-Market Planning</div>
          <div className="card neon-border"> Rapid Prototyping</div>
          <div className="card neon-border"> API Integrations</div>
          <div className="card neon-border"> Product Strategy</div>
          <div className="card neon-border"> Long-term Collaboration</div>
        </div>
      </motion.section>

      <motion.section
        className="about-signature"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <blockquote>
          “When you’re ready to move fast, we’re already rolling.”
        </blockquote>
        <p className="signature">— Korvet Launch Team</p>
      </motion.section>
    </div>
  );
}

export default LaunchPage;
