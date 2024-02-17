/* Credit: Inspiration from: https://codepen.io/Azametzin/pen/NBZaby */

import "../../App.css"
import { useEffect } from "react";

// A super cool spinning wheel when the page is scrolled
const SpinningWheel = () => {
  useEffect(() => {
    const gear1 = document.querySelector(".gear1") as HTMLElement;
    const gear2 = document.querySelector(".gear2") as HTMLElement;

    const rotateGear = () => {
      if (gear1 && gear2) {
        gear1.style.transform = "rotate(" + (window.scrollY * 2.5) + "deg)";
        gear2.style.transform = "rotate(-" + (window.scrollY * 2.5) + "deg)";
      }
    };

    window.addEventListener('scroll', rotateGear);
  }, []);

  return (
    <div className="container gears">
      <span className="span-gear"></span>
      <div className="gear gear1"></div>
      <div className="gear gear2"></div>
      <span className="span-gear"></span>
    </div>
  );
}
export default SpinningWheel;