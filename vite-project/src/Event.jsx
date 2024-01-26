import React from "react";
import { motion, useAnimation } from "framer-motion";

function Event() {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({ x: 0, opacity: 1 });
  };


  const initialAnimation = { x: -50, opacity: 0 };


  const cardVariants = {
    hidden: initialAnimation,
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  
  startAnimation();

  return (
    <motion.section
      className="projects"
      id="projects"
      initial="hidden"
      animate={controls}
    >
      <div className="max-width">
        <h2 className="title">Events</h2>
        <motion.div
          className="work"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="box">
              <img
                src="src\assets\finalrecodev-01.png"
                loading="lazy"
                alt="RECode"
              />
              <div className="text">RECode</div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="box">
              <img
                src="src\assets\RECollect_2.0.png"
                loading="lazy"
                alt="RECollect"
              />
              <div className="text">RECollect</div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="box">
              <img
                src="src\assets\Tech_TownHall.png"
                loading="lazy"
                alt="TECH TOWNHALL"
              />
              <div className="text">TECH TOWNHALL</div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="box">
              <img
                src="src\assets\RECap_7.0_EK3OeT6.png"
                loading="lazy"
                alt="RECap"
              />
              <div className="text">RECap</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Event;
