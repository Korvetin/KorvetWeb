import React, { useEffect, useState } from "react";
import "./slider.css";
import { useNavigate } from "react-router-dom";

import image1 from './images/image0.jpg';
import image2 from './images/image5.jpg';
import image4 from './images/image4.jpg';

const images = [image1, image2, image4];
function Slider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <section className="slider">
      <img src={images[index]} alt="slider" className="slider-img" />
    </section>
  );
}

export default Slider;
