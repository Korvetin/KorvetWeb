import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Navbar.css";
import logo from "../assets/korvet.logo.jpg";
import dinoAnimation from "../assets/run.json"; // make sure this is valid JSON

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const playerRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((p) => !p);

  const handleLoginClick = () => {
    // Pause or play the dino
    if (playerRef.current) {
      if (isRunning && typeof playerRef.current.pause === "function") {
        playerRef.current.pause();
      } else if (!isRunning && typeof playerRef.current.play === "function") {
        playerRef.current.play();
      }
    }
    setIsRunning((p) => !p);

    // Navigate to /login after a short animation delay
    setTimeout(() => {
      navigate("/login");
    }, 300); // small delay for animation effect
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="logo">
          <img src={logo} alt="Korvet Logo" />
          <span>KORVET IN</span>
        </div>

        {/* Center: Desktop Links */}
        <div className="center-links">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/insights">Our Insights</Link>
            <Link to="/contact">Let's Talk</Link>
          </div>
        </div>

        {/* Right: Login + Hamburger */}
        <div className="actions">
          <button
            className={`login-btn ${isRunning ? "" : "paused"}`}
            onClick={handleLoginClick}
          >
            <div className="dino-wrap">
              <Player
                ref={playerRef}
                autoplay
                loop
                src={dinoAnimation}
                style={{ height: 28, width: 28 }}
              />
            </div>
            <span className="login-text">Login</span>
          </button>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/offers" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/insights" onClick={() => setMenuOpen(false)}>Our Insights</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Let's Talk</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
