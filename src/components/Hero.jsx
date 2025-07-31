import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}

    >
        <h1>Let's Build Something <span>Powerful</span></h1>
        <p>
          Korvet Innovations turns ideas into impactful digital products.<br />
          From UI to backend, we deliver innovation you can rely on.
        </p>
        <a href="/contact" className="hero-button">Get Started</a>
      </motion.div>
    </section>
  );
}
export default Hero;