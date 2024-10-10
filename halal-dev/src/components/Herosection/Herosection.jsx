import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Hero.css";

// Custom hook to track scroll position
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  console.log(scrollY)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

const Hero = () => {
  const videoControls = useAnimation();
  const scrollY = useScrollPosition();

  // Scale the video based on the scroll position
  useEffect(() => {
    if (scrollY > 0) {
      videoControls.start({
        y: 0, // Scale the video up to cover the hero section
        transition: { duration: 0.5 }
      });
    } else {
      videoControls.start({
        y:500, // Scale the video back down
        transition: { duration: 0.5 }
      });
    }
  }, [scrollY, videoControls]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Shaping The Future of </h1>
        <h1>
          <span className="highlight">Halal Investments</span>
        </h1>
        <p>
          We provide consultancy on ensuring halal product standards. Moving Saudi Arabia
          toward global leadership in the halal industry.
        </p>
        <button className="hero-button">Book a Consultation</button>
      </div>

      <motion.div
        className="video"
        animate={videoControls} // Control the video animation
        initial={{ scale: 1 }} // Initial scale
        style={{ originX: 0.5, originY: 0.5 }} // Scaling from the center
      >
        <video width="100%" muted autoPlay  >
          <source src="src/assets/HPDC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
};

export default Hero;
