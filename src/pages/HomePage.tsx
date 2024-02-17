import React from "react";
import Navbar from "../components/shared/Nav";
import Hero from "../components/home/Hero";
import Scroller from "../components/home/Scroller";
import About from "../components/home/About";
import Schedule from "../components/shared/Schedule";
import SpinningWheel from "../components/shared/SpinningWheel";

const homeStyling = "bg-metal h-full w-screen py-30vh";

const HomePage: React.FC = () => {
  return (
    <div className={homeStyling}>
      <Navbar />
      <Hero />
      <Scroller />
      <SpinningWheel />
      <About />
      <Schedule />
    </div>
  );
}
export default HomePage;