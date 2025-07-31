import React from 'react';
import './offerspage.css';
import { motion } from 'framer-motion';
import ApplyForm from '../components/ApplyForm';

function PartnerNow() {
  return (
    <div className="offers-page">
      <motion.section
        className="offers-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🤝 Apply / Partner with Korvet</h1>
        <p>We’re always open to new minds — whether you're a student, organization, hackathon, or team wanting to build impact with us.</p>
      </motion.section>

      <section className="offers-list">
        <div className="offer-card">
          <h3>Partner with Us</h3>
          <p>Host a hackathon? Run a student org? Get Korvet’s mentorship, swags, and product-building guidance for your event.</p>
        </div>

        <div className="offer-card">
          <h3>Apply as Contributor</h3>
          <p>Love design, dev, or strategy? Work with our core team on projects, no matter your experience level.</p>
        </div>

        <div className="offer-card">
          <h3>Build Real Products</h3>
          <p>Not just mockups. You’ll get to work on actual tools, MVPs, and launches — with visibility and mentorship.</p>
        </div>
      </section>

      <motion.section
        className="offers-footer final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let’s Co-Create the Future</h2>
        <p>Fill out the short form and we’ll get in touch within 48 hours.</p>
      </motion.section>

      {/* ✅ Embedded application form */}
      <ApplyForm role="Open Partnering" />
    </div>
  );
}

export default PartnerNow;
