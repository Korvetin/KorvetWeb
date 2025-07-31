import { Link } from "react-router-dom";

import './insightspage.css';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaBullseye,
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';

const InsightsPage = () => {
  const insights = [
    {
      icon: <FaEye size={32} />,
      title: 'Vision',
      desc: 'To empower businesses through innovative digital experiences that inspire and transform.',
    },
    {
      icon: <FaBullseye size={32} />,
      title: 'Mission',
      desc: 'Deliver high-impact digital solutions that drive growth, efficiency, and value for our clients.',
    },
    {
      icon: <FaHandshake size={32} />,
      title: 'Our Promise',
      desc: 'Collaboration, transparency, and a relentless focus on quality and outcomes.',
    },
    {
      icon: <FaUsers size={32} />,
      title: 'Culture',
      desc: 'People-first mindset rooted in creativity, learning, and mutual respect.',
    },
    {
      icon: <FaLightbulb size={32} />,
      title: 'Innovation',
      desc: 'We embrace emerging tech to stay ahead and deliver forward-thinking solutions.',
    },
    {
      icon: <FaRocket size={32} />,
      title: 'Future Focused',
      desc: 'Our strategies are designed to scale and evolve with your ambitions.',
    },
  ];

  return (
    <div className="insights-page">
      <motion.section
        className="insights-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1> Our Insights</h1>
        <p>Where mission meets innovation, and culture shapes our journey forward.</p>
      </motion.section>

      <section className="insights-grid">
        {insights.map((item, idx) => (
          <motion.div
            key={idx}
            className="insight-card"
            whileHover={{ scale: 1.06, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="icon-circle">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ✅ ADDED: Projects Insight Section */}
      <section className="projects-insight">
        <h2>🚧 Our Project Focus</h2>
        <div className="project-grid">
          <div className="project-card">
            <h4> Mobile Revamp</h4>
            <p>Complete redesign of an eCommerce app focused on speed and experience.</p>
          </div>
          <div className="project-card">
            <h4> B2B Dashboard</h4>
            <p>Custom dashboard that streamlined partner workflows by 35%.</p>
          </div>
          <div className="project-card">
            <h4> AI Chatbot</h4>
            <p>Trained model that reduced support tickets by 50% in first quarter.</p>
          </div>
          <div className="project-card">
            <h4> SaaS Portal</h4>
            <p>Multi-tenant platform build with cloud-native microservices.</p>
          </div>
          <div className="project-card">
            <h4>UI Design System</h4>
            <p>Centralized design assets for consistent branding across 5+ products.</p>
          </div>
        </div>
      </section>

      <motion.section
        className="insights-cta final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Join Our Mission</h2>
        <p>We’re building a better digital future — come shape it with us.</p>
       
       <Link to="/contact">
  <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
    Let's Talk 
  </motion.button>
</Link>

      </motion.section>
    </div>
  );
};

export default InsightsPage;
