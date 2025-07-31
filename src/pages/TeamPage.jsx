// File: src/pages/TeamPage.jsx

import React from 'react';
import './About.css'; // Reuse the same styles
import { motion } from 'framer-motion';

function TeamPage() {
  const teamValues = [
    {
      emoji: '⚔️',
      title: 'Ship Fast, Fix Faster',
      desc: 'We embrace agility and aren’t afraid to break things — we fix with purpose and speed.',
    },
    {
      emoji: '🧠',
      title: 'Think Bold, Think Weird',
      desc: 'Bold ideas fuel our projects. From wild ideas to solid code, we make creativity count.',
    },
    {
      emoji: '🌊',
      title: 'Ride the Chaos',
      desc: 'We thrive in unpredictable waters. Our best ideas come from late-night chaos and Redbull.',
    },
    {
      emoji: '🏴‍☠️',
      title: 'Be a Pirate, Not a Robot',
      desc: 'We hack systems, bend rules, and blaze our own trail with heart and humor.',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="hero-banner neon-gradient"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Meet Our Pirates 🏴‍☠️</h1>
        <p>The minds behind the madness — the crew shaping Korvet with energy, empathy, and fire.</p>
      </motion.section>

      {/* Culture Blocks */}
      <section className="about-services">
        <h2> What Drives Us</h2>
        <div className="service-cards">
          {teamValues.map((item, idx) => (
            <motion.div
              className="card neon-border"
              key={idx}
              whileHover={{ scale: 1.07, rotate: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ fontSize: '1.8rem' }}>{item.emoji}</div>
              <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>{item.title}</div>
              <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="about-extra final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Join the Korvet Movement</h2>
        <p>We’re not just building tech. We’re building a tribe that challenges the expected and delivers the exceptional.</p>
        
        <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#ccc' }}>
  Think like rebels. Build like pirates. At Korvet, curiosity is our currency. 
</p>


      </motion.section>
    </div>
  );
}

export default TeamPage;
