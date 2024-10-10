import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Statsection.css";

const StatSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // The percentage of the element visible to trigger the animation
  });

  React.useEffect(() => {
    if (inView) {
      control.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      control.start({ scale: 0.8, opacity: 0 });
    }
  }, [control, inView]);

  return (
    <div className="stats-container">
      {/* <div className="stat-card">
        <div className="stat-text">$2.8 Trillion</div>
        <div className="stat-description">Market Size by 2025</div>
        <div className="stat-subtext">80% GCC Consumers Prefer Halal Products</div>
      </div>

      <div className="stat-card">
        <div className="stat-text">113</div>
        <div className="stat-description">Markets Worldwide</div>
      </div>

      <div className="stat-card">
        <div className="stat-text">6.3%</div>
        <div className="stat-description">Annual Growth</div>
      </div> */}

      {/* Add the rest of the stat cards here */}
      <motion.div className="imgfull" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
        <img src="src/assets/image1.png" className="imgfull" alt="Stat Image 1" />
      </motion.div>
      <div className="dvdBox1">
        <motion.div className="hgt4" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
          <img src="src/assets/image14.png" className="hgt4" alt="Stat Image 2" />
        </motion.div>
        <motion.div className="hgt1" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
          <img src="src/assets/image15.png" className="hgt1" alt="Stat Image 3" />
        </motion.div>
      </div>
      <motion.div className="imghalf" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
        <img src="src/assets/image4.png" className="imghalf" alt="Stat Image 4" />
      </motion.div>
      <motion.div className="imgfull" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
        <img src="src/assets/image5.png" className="imgfull" alt="Stat Image 5" />
      </motion.div>
      <div className="dvdBox1">
        <motion.div className="hgt3" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
          <img src="src/assets/image6.png" className="hgt3" alt="Stat Image 6" />
        </motion.div>
        <motion.div className="hgt2" ref={ref} animate={control} initial={{ scale: 0.8, opacity: 0 }}>
          <img src="src/assets/image7.png" className="hgt2" alt="Stat Image 7" />
        </motion.div>
      </div>
    </div>
  );
};

export default StatSection;
