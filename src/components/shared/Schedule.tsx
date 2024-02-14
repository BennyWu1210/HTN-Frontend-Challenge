import { motion } from "framer-motion";
import EventList from "./EventList";


// The section of the page that displays the public schedule
const Schedule: React.FC = () => {
  return (
    <div className="mt-40 px-10 md:w-9/12 md:pl-10 m-auto" id="events">
      <motion.h2
        {...titleDesign}
        className="text-5xl font-bold text-almond">Schedule</motion.h2 >

      <EventList permission="public" />
    </div>
  );
}
export default Schedule;



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