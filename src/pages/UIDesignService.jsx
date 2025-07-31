import React from 'react';
import './ServiceDetail.css';
import { motion } from 'framer-motion';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function UIDesignService() {
  return (
    <div className="service-detail-page">
      <motion.div className="service-detail-hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
       <div className="detail-icon"><FaPencilAlt size={36} /></div>
        <h1>UI/UX Design</h1>
        <p>Beautiful, functional designs that delight users and drive business goals.</p>
      </motion.div>

      <motion.div className="service-detail-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>What We Offer</h2>
        <ul>
          <li> User-centric interface design for web & mobile</li>
          <li> Wireframes, mockups, and interactive prototypes</li>
          <li> UX research, usability audits, and persona mapping</li>
          <li> Brand identity and design systems</li>
        </ul>

        <h2>Design Tools & Stack</h2>
        <p>Figma, Adobe XD, Sketch, Framer, Whimsical, Zeplin</p>

        <h2>Why Clients Trust Our Design</h2>
        <ul>
          <li> Designs that improve retention and conversion rates</li>
          <li> Strong focus on accessibility & performance</li>
          <li> Live collaboration and constant iteration</li>
        </ul>

        <h2>Recent Work Highlight</h2>
        <p>
          We redesigned a health-tech dashboard that reduced user onboarding time by 50% and increased user satisfaction by 40% within 2 months.
        </p>

        <Link to="/contact">
          <motion.button className="detail-cta" whileHover={{ scale: 1.1 }}>Design With Us </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default UIDesignService;