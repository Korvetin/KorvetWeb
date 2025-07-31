import React from 'react';
import './offerspage.css';
import ApplyForm from '../components/ApplyForm';
import { motion } from 'framer-motion';

function DesignLead() {
  return (
    <div className="offers-page">
      <motion.section className="offers-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Design Lead Role</h1>
        <p>Lead real UI/UX efforts, collaborate on Figma & beyond.</p>
      </motion.section>

      <section className="offers-list">
        <div className="offer-card">
          <h3>Responsibilities</h3>
          <p>Manage UI flow, collaborate with devs</p>
        </div>
        <div className="offer-card">
          <h3>Tools</h3>
          <p>Figma,Canva, Adobe</p>
        </div>
        <div className="offer-card">
          <h3>Perks</h3>
          <p>Real time project collaboration, Design Enviroment</p>
        </div>
      </section>

      {/* ✅ Application form goes here */}
      <ApplyForm role="Design Lead" />
    </div>
  );
}

export default DesignLead;
