import React from 'react';
import './ServiceDetail.css';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AiMlService() {
  return (
    <div className="service-detail-page">
      <motion.div className="service-detail-hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="detail-icon"><FaBrain size={36} /></div>
        <h1>AI / ML Solutions</h1>
        <p>Intelligent systems that learn, predict, and automate real-world processes.</p>
      </motion.div>
      <motion.div className="service-detail-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>What We Offer</h2>
        <ul>
          <li>🔹 Predictive analytics models</li>
          <li>🔹 Chatbots, vision & NLP apps</li>
          <li>🔹 Data pipelines and AI APIs</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>We turn raw data into smart action, making your product future-ready.</p>
        <Link to="/contact"><motion.button className="detail-cta" whileHover={{ scale: 1.1 }}>Integrate AI 💡</motion.button></Link>
      </motion.div>
    </div>
  );
}
export default AiMlService;
