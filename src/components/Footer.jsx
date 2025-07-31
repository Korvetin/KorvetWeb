import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaAngleRight } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-brand">
          <h2>Korvet Innovations</h2>
          Where intelligence builds<strong> Legacy</strong>
        </div>

        {/* Headquarters */}
        <div className="footer-address">
          <h3>Headquarters</h3>
          <p><strong>Korvet In</strong><br />
            2nd Floor, Piravom<br />
            Ernakulam, Kerala, India<br />
            <FaEnvelope /> korvetinnovations@gmail.com<br />
            <FaPhoneAlt /> +91 6238 953 471
          </p>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/"><FaAngleRight /> Home</a>
          <a href="/about"><FaAngleRight /> About Us</a>
          <a href="/services"><FaAngleRight /> Services</a>

          <a href="/ OffersPage"><FaAngleRight /> Careers</a>
          <a href="/contact"><FaAngleRight /> Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Let's Connect</h3>
          <a href="#"><FaTwitter /> Twitter</a>
          <a href="#"><FaLinkedin /> LinkedIn</a>
          <a href="#"><FaGithub /> GitHub</a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Korvet Innovations.AetherVest GROUP of Concern.</p>
      </div>
    </footer>
  );
}

export default Footer;
