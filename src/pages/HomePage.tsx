import React from "react";
import Navbar from "../components/shared/Nav";
import Hero from "../components/home/Hero";
import Scroller from "../components/home/Scroller";
import About from "../components/home/About";
import Schedule from "../components/shared/Schedule";

const HomePage: React.FC = () => {
  return (
    <div className="bg-metal h-full w-screen py-30vh">
      <Navbar />
      <Hero />
      <Scroller />
      <About /> 
      <Schedule />
    </div>
  );
}
export default HomePage;