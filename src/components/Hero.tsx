import React from "react";
import { motion } from 'framer-motion';
import { FramerProperties } from "../interfaces/general-interfaces";

const headingProperties: FramerProperties = {
  initial: {position: 'relative', top: -50, opacity: 0},
  animate: {top: 0, opacity: 1},
  transition: {duration: 1.5},
}

const Hero: React.FC = () => {
  return (
    <div className="m-auto w-10/12 pl-10 h-10">
      {/* Icons */}
      <div>I am icons!</div>

      {/* Text */}
      <div>
        <motion.h3 {...headingProperties} className="text-6xl sm:text-7xl 2xl:text-8xl font-bold text-white" style={{ textShadow: "rgb(225,225,225,0.7) 4px 0 20px" }}>Hack Global 11</motion.h3>
        <h3 className="mt-4 text-2xl xl:text-3xl text-khaki font-medium">September 13-15 · Waterloo, ON</h3>
        <h3 className="mt-12 text-lg text-white font-light">Hacker application opens soon. Stay Tuned!</h3>
      </div>
    </div>
  );
}
export default Hero;