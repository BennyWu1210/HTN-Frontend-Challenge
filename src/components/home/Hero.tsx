import React from "react";
import { motion } from 'framer-motion';
import { FramerProperties } from "../../utils/schema";
import AnimatedTerminal from "./Terminal";


const Hero: React.FC = () => {
  return (
    <div className="flex m-auto w-11/12 md:w-10/12 pl-8 md:pl-10 flex-col lg:flex-row overflow-y-scroll">
      <div className="">
        {/* TODO: Insert icons */}
        <div className="h-10">I am icons!</div>
        <div>
          <motion.h3 {...headingProperties} className="text-4xl sm:text-7xl 2xl:text-8xl font-bold text-white" style={{ textShadow: "rgb(225,225,225,0.7) 4px 0 20px" }}>Hack Global 11</motion.h3>
          <h3 className="mt-4 text-lg xl:text-3xl text-khaki font-medium">September 13-15 · Waterloo, ON</h3>
          <h3 className="mt-12 text-sm text-white font-light">Hacker application opens soon. Stay tuned!</h3>
        </div>
      </div>
      <div className="lg:ml-32 lg:w-3/4 lg:mt-0 mt-10 max-w-xl">
        <AnimatedTerminal />
      </div>
    </div>
  );
}
export default Hero;


const headingProperties: FramerProperties = {
  initial: {position: 'relative', top: -50, opacity: 0},
  animate: {top: 0, opacity: 1},
  transition: {duration: 1.5},
}