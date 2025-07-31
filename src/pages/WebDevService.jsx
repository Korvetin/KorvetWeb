// File: src/pages/WebDevService.jsx
import React from 'react';
import './ServiceDetail.css';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WebDevService() {
  return (
    <div className="service-detail-page">
      <motion.div className="service-detail-hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="detail-icon"><FaLaptopCode size={36} /></div>
        <h1>Web Development</h1>
        <p>Transform your online presence with fast, scalable, and modern web solutions crafted by experts.</p>
      </motion.div>

      <motion.div className="service-detail-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>What We Offer</h2>
        <ul>
          <li> Custom-coded websites — no templates</li>
          <li> Responsive across all devices</li>
          <li> Secure, SEO-ready, and blazing fast</li>
          <li> CMS integrations & dynamic dashboards</li>
          <li> E-commerce solutions with cart, payments & inventory</li>
        </ul>

        <h2>Our Tech Stack</h2>
        <p>React.js, Node.js, Express.js, MongoDB, Supabase, Firebase, Vite, Tailwind CSS, GSAP, Framer Motion</p>

        <h2>Why Clients Trust Us</h2>
        <ul>
          <li> We design with scale & security in mind</li>
          <li> Code audit, mobile optimization & performance tracking</li>
          <li> Continuous updates & post-launch support</li>
        </ul>

        <h2>Use Case Spotlight</h2>
        <p>
          We helped a Kerala-based startup grow their conversion by 3.4x using a custom-built React + Supabase platform with real-time analytics and intuitive dashboards.
        </p>

        <Link to="/contact">
          <motion.button className="detail-cta" whileHover={{ scale: 1.1 }}>Start Your Web Project 🚀</motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default WebDevService;
