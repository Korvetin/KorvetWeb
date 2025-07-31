import React from 'react';
import './offerspage.css';
import ApplyForm from '../components/ApplyForm';
import { motion } from 'framer-motion';

function MarketingInternship() {
  return (
    <div className="offers-page">
      <motion.section className="offers-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>📢 Marketing Internship</h1>
        <p>Craft strategy, write copy, design campaigns.</p>
      </motion.section>

      <section className="offers-list">
        <div className="offer-card"><h3>What You'll Do</h3><p>Instagram/LinkedIn content, SEO research</p></div>
        <div className="offer-card"><h3>Tools</h3><p>Canva, Buffer, Figma, Meta Suite</p></div>
      </section>

      {/* ✅ Application form goes here */}
      <ApplyForm role="Marketing Internship" />
    </div>
  );
}

export default MarketingInternship;
