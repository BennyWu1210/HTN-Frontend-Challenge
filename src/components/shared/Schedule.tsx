import { motion } from "framer-motion";


const Schedule: React.FC = () => {
  return (
    <div className="mt-40 w-9/12 pl-10 m-auto" id="events">
      <motion.h2 
          {...titleDesign}
         className="text-5xl font-bold text-almond">Schedule</motion.h2 >
    </div>
  );
}
export default Schedule;



const titleDesign = {
  initial:"hidden",
  whileInView:"visible",
  viewport:{ once: true },
  transition:{ duration: 2, ease: [.36, .16, .45, .96] }, // cubic bezier curve
  variants:{
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  }
}