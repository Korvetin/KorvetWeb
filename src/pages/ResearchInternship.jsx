import React from 'react';
import './offerspage.css';
import ApplyForm from '../components/ApplyForm'; // ✅ Make sure this file exists
import { motion } from 'framer-motion';

function ResearchInternship() {
  return (
    <div className="offers-page">
      <motion.section className="offers-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>📚 Research Internship</h1>
        <p>Work on industry trend reports, startup validation, and GTM planning.</p>
      </motion.section>

      <section className="offers-list">
        <div className="offer-card"><h3>Focus</h3><p>Startup ecosystems, product research</p></div>
        <div className="offer-card"><h3>Tools</h3><p>Google Docs, Notion, Analytics tools</p></div>
      </section>

      {/* ✅ Add the reusable application form */}
      <ApplyForm role="Research Internship" />
    </div>
  );
}

export default ResearchInternship;
