import React from 'react';
import './ServiceDetail.css';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CloudService() {
  return (
    <div className="service-detail-page">
      <motion.div className="service-detail-hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="detail-icon"><FaCloud size={36} /></div>
        <h1>Cloud & DevOps</h1>
        <p>CI/CD, infra automation, scalable cloud hosting — stress-free deployment every time.</p>
      </motion.div>
      <motion.div className="service-detail-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>What We Offer</h2>
        <ul>
          <li>🔹 Docker, CI/CD pipelines</li>
          <li>🔹 AWS, GCP, Azure setup & scaling</li>
          <li>🔹 Monitoring, auto-scaling, failover</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>We build reliable cloud infra that’s fast, secure and always online.</p>
        <Link to="/contact"><motion.button className="detail-cta" whileHover={{ scale: 1.1 }}>Setup My Infra ☁️</motion.button></Link>
      </motion.div>
    </div>
  );
}
export default CloudService;