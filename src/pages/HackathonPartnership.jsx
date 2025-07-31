import React from 'react';
import './offerspage.css';
import ApplyForm from '../components/ApplyForm';
import { motion } from 'framer-motion';
function HackathonPartnership() {
  return (
    <div className="offers-page">
      <motion.section className="offers-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1> Hackathon Partnership</h1>
        <p>Partner with Korvet for tech events, mentorship, or sponsorships.</p>
      </motion.section>
      <section className="offers-list">
        <div className="offer-card"><h3>How We Support</h3><p>Judging, mentoring, swags, exposure</p></div>
        <div className="offer-card"><h3>Ideal Partners</h3><p>Tech clubs, student chapters, communities</p></div>
      </section>
      {/* ✅ Add the reusable form */}
      <ApplyForm role="Hackathon Partnership" />
    </div>
  );
}
export default HackathonPartnership;
