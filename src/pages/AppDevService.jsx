import React from 'react';
import './ServiceDetail.css';
import { motion } from 'framer-motion';
import { FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AppDevService() {
  return (
    <div className="service-detail-page">
      <motion.div className="service-detail-hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="detail-icon"><FaMobileAlt size={36} /></div>
        <h1>App Development</h1>
        <p>Cross-platform mobile apps that perform seamlessly and deliver powerful user experiences.</p>
      </motion.div>

      <motion.div className="service-detail-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>What We Offer</h2>
        <ul>
          <li>Hybrid & native mobile app development</li>
          <li> API integration and real-time databases</li>
          <li> Scalable architecture and user authentication</li>
          <li> Play Store & App Store deployment</li>
          <li> Custom admin panels & analytics dashboards</li>
        </ul>

        <h2>Tech Stack</h2>
        <p>Flutter, React Native, Kotlin, Firebase, Supabase, Node.js, MongoDB, REST, GraphQL</p>

        <h2>Why Choose Korvet?</h2>
        <ul>
          <li> Rapid MVP development & user-first design</li>
          <li> Push notifications, payments & offline mode</li>
          <li> Full-cycle development: from idea to app store</li>
        </ul>

        <h2>Client Highlight</h2>
        <p>
          We recently built a delivery app with real-time driver tracking, digital payments, and performance analytics — helping our client scale to 10k+ users in under 3 months.
        </p>

        <Link to="/contact">
          <motion.button className="detail-cta" whileHover={{ scale: 1.1 }}>Build Your App With Us </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default AppDevService;