import { motion } from "framer-motion";
import Goose from "../../assets/goose-hackathon.png";

// The "About" section in the home page, featuring a goose attending a hackathon and some arbitary text
const About: React.FC = () => {
  return (
    <div className="mt-28 w-11/12 md:w-9/12 md:pl-10 m-auto" id="about">
      <motion.h2 {...titleDesign} className="text-5xl font-bold text-almond">About Us</motion.h2>
      <div className="flex flex-col xl:flex-row mt-8 gap-20">
        <img src={Goose} alt="Geese attending hackathon" />
        <div className="max-w-3xl">
          <p className="text-white text-lg md:text-2xl font-medium">Lorem Goose Goose sit goose, consectetur adipisicing goose. Goose necessitatibus goose nulla illum consectetur odit, sit unde harum deleniti numquam, maxime modi itaque adipisci omnis! Culpa nisi sequi a qui rem mollitia totam, tempora explicabo atque, fugiat, Goose nam illo cupiditate impedit Goose goose possimus. Adipisci laudantium ratione eius Gooseem cumque repudiandae Gooseemque aliquam beatae, repellendus optio iusto repellat! Est repudiandae Goose minima sequi. Perspiciatis cumque inventore hic Goose, facilis Goose!!</p>
          <p className="text-white text-lg md:text-2xl font-medium">Lorem ipsum, Goose sit goose consectetur adipisicing goose. Impedit voluptatum fugiat tempora quod iste accusantium labore exercitationem culpa delectus Goose. </p>
        </div>
      </div>
    </div>

  );
}
export default About;

// Fade in effect when first loaded
const titleDesign = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 2, ease: [.36, .16, .45, .96] }, // cubic bezier curve
  variants: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  }
}