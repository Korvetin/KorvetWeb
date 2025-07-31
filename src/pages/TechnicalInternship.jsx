import React from 'react';
import './offerspage.css';
import ApplyForm from '../components/ApplyForm'; // ✅ Ensure this path is correct
import { motion } from 'framer-motion';

function TechnicalInternship() {
  return (
    <div className="offers-page">
      <motion.section className="offers-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Technical Internship</h1>
        <p>Code, learn, and contribute to real-world products at Korvet.</p>
      </motion.section>

      <section className="offers-list">
        <div className="offer-card"><h3>Tech Stack</h3><p>JavaScript, React, Git, APIs</p></div>
        <div className="offer-card"><h3>Work Mode</h3><p>Remote & async-friendly</p></div>
        <div className="offer-card"><h3>Perks</h3><p>Experience letter, mentorship, GitHub exposure</p></div>
      </section>

      {/* ✅ This line adds the form and submit button */}
      <ApplyForm role="Technical Internship" />
    </div>
  );
}

export default TechnicalInternship;
