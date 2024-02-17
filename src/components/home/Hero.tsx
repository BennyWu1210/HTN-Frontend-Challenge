import React from "react";
import { motion } from 'framer-motion';
import { FramerProperties } from "../../utils/schema";
import AnimatedTerminal from "./Terminal";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";

const Hero: React.FC = () => {
  return (
    <div className="flex m-auto w-11/12 md:w-10/12 pl-8 md:pl-10 flex-col lg:flex-row overflow-y-scroll">
      <div className="">

        {/* Icons */}
        <div className="flex gap-5 px-1">
          <a href="https://hackthenorth.com"><img src={facebookIcon} width={36} alt="facebook icon" /></a>
          <a href="https://hackthenorth.com"><img src={instagramIcon} width={36} alt="instagram icon" /></a>
          <a href="https://hackthenorth.com"><img src={linkedinIcon} width={36} alt="linkedin icon" /></a>
        </div>

        {/* Title and subtitle */}
        <div className="mt-5">
          <motion.h3 {...headingProperties} className="text-4xl sm:text-7xl 2xl:text-8xl font-bold text-white" style={{ textShadow: "rgb(225,225,225,0.7) 4px 0 20px" }}>Hack Global 11</motion.h3>
          <h3 className="mt-4 text-lg xl:text-3xl text-khaki font-medium">In-person event · Waterloo, ON</h3>
          <h3 className="mt-12 text-sm xl:text-lg text-white font-light">Hacker application opens soon. Stay tuned!</h3>
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
  initial: { position: 'relative', top: -50, opacity: 0 },
  animate: { top: 0, opacity: 1 },
  transition: { duration: 1.5 },
}