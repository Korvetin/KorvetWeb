import { Link } from "react-router-dom";
import "./servicepages.css";
import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaMobileAlt, FaPencilRuler,
  FaBrain, FaCloud, FaInfinity
} from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaLaptopCode size={26} />, title: 'Web Development',
      desc: 'Stunning, scalable, and lightning-fast websites tailored to your brand.',
      path: '/services/web-development'
    },
    {
      icon: <FaMobileAlt size={26} />, title: 'App Development',
      desc: 'Cross-platform mobile experiences that feel native and powerful.',
      path: '/services/app-development'
    },
    {
      icon: <FaPencilRuler size={26} />, title: 'UI/UX Magic',
      desc: 'Designs that blend aesthetics, usability, and brand identity.',
      path: '/services/ui-ux-design'
    },
    {
      icon: <FaBrain size={26} />, title: 'AI/ML Solutions',
      desc: 'Smarter apps powered by intelligent algorithms and predictions.',
      path: '/services/ai-ml'
    },
    {
      icon: <FaCloud size={26} />, title: 'Cloud & DevOps',
      desc: 'Automated infrastructure for seamless deployment and scalability.',
      path: '/services/cloud-devops'
    },
    {
      icon: <FaInfinity size={26} />, title: 'Consulting & Strategy',
      desc: 'From ideation to execution, we co-build digital innovation.',
      path: '/services/consulting'
    },
  ];

  return (
    <div className="services-page">
      <motion.section
        className="services-hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="services-hero-icon">💼</div>
        <h1 className="services-hero-heading">Services That Build Empires</h1>
        <p className="services-hero-subtext">
          Where vision meets execution — and products reach their fullest potential.
        </p>
      </motion.section>

      <section className="services-insight-style">
        {services.map((service, idx) => (
          <motion.div
            className="insight-card"
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="insight-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <Link to={service.path}>
              <button className="know-more-button">Know More</button>
            </Link>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="services-footer-cta final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Let’s Build Something Legendary</h2>
        <p>We don’t just offer services — we become your tech partner. Ready to innovate?</p>
        <Link to="/contact">
          <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
            Let's Talk 
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
