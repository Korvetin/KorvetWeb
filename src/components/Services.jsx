import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBrain,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  return (
    <div className="services-section">
      {/* Heading */}
      <div className="services-heading">
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
          Powering your digital future with creativity, innovation, and
          excellence.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-flyout">
        <div className="service-card">
          <span>
            <FaLaptopCode />
            Web Development
          </span>
        </div>
        <div className="service-card">
          <span>
            <FaMobileAlt />
            Mobile App Solutions
          </span>
        </div>
        <div className="service-card">
          <span>
            <FaPalette />
            UI/UX Design
          </span>
        </div>
        <div className="service-card">
          <span>
            <FaBrain />
            AI & ML Integration
          </span>
        </div>
        <div className="service-card">
          <span>
            <FaCogs />
            DevOps and CI/CD
          </span>
        </div>
        <div className="service-card">
          <span>
            <FaChartLine />
            Product Strategy
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;

