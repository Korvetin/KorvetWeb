// File: src/pages/OffersPage.jsx

import React from 'react';
import './offerspage.css';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaLightbulb, FaHandshake, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const offers = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Technical Internship",
    desc: "Real-world projects for coders. Learn, build & earn internship experience online.",
    path: "/apply/technical-internship"
  },
  {
    icon: <FaUsers size={28} />,
    title: "Design Lead Role",
    desc: "Step into leadership — design cutting-edge UI/UX for live client projects.",
    path: "/apply/design-lead"
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Research Internship",
    desc: "Work on startup-focused research & strategy. Ideal for thinkers & planners.",
    path: "/apply/research-internship"
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Marketing Internship",
    desc: "Craft real marketing strategies for our brand.",
    path: "/apply/marketing-internship"
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Hackathon Partnerships",
    desc: "Partner with us for your hackathons. Gain perks, swags & expert mentorship.",
    path: "/apply/hackathon-partnership"
  }
];

function OffersPage() {
  return (
    <div className="offers-page">
      <motion.section
        className="offers-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Join Korvet's Growth Journey</h1>
        <p>Explore current opportunities, internships, and exclusive collaboration offers with our growing product team.</p>
      </motion.section>

      <section className="offers-list">
        {offers.map((offer, idx) => (
          <motion.div
            className="offer-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="offer-icon">{offer.icon}</div>
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
            <Link to={offer.path}>
              <button className="apply-button">Apply Now</button>
            </Link>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="offers-footer final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let’s Build Together!</h2>
        <p>Whether you’re an intern, designer, or community partner — there’s a place for you at Korvet.</p>
     <Link to="/apply/partner-now">
  <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
    Apply / Partner Now 
  </motion.button>
</Link>

      </motion.section>
    </div>
  );
}

export default OffersPage;
