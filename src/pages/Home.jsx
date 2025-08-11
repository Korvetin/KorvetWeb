// src/pages/Home.jsx

import React from "react";
import Slider from "../components/slider";
import WhyChooseUs from "../components/WhyChooseUs";

import CTASection from "../components/CTASection";
import VideoSection from "../components/video";
import { motion } from "framer-motion";
import "../App.css";

function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Slider />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        style={{ margin: "50px 0" }}
      >
        <WhyChooseUs />
      </motion.div>

    

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        style={{ margin: "50px auto", maxWidth: "900px" }}
      >
        <VideoSection />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <CTASection />
      </motion.div>
    </div>
  );
}

export default Home;
