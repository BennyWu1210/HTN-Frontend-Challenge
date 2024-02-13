import React from "react";
import Navbar from "../components/shared/Nav";
import Hero from "../components/home/Hero";
import Scroller from "../components/home/Scroller";
import About from "../components/home/About";
import Schedule from "../components/shared/Schedule";
import EventList from "../components/shared/EventList";


const homeStyling = "bg-metal h-full w-screen py-30vh";
const eventAdjust = "lg:mx-40 mx-4";

const HomePage: React.FC = () => {
  return (
    <div className={homeStyling}>
      <Navbar />
      <Hero />
      <Scroller />
      <About /> 
      <Schedule />
      <div className={eventAdjust}>
        <EventList permission="public"/>
      </div>
      
    </div>
  );
}
export default HomePage;