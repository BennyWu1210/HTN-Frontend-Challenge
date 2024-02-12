import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    // logic to handle scroll animation
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={`fixed w-full ${isVisible ? 'top-0' : '-top-12'} transition-top duration-300 ease-in-out`}>
      <div className="mx-auto pl-12 pr-36">
        <div className="flex justify-between text-2xl">
            <div>
              <Link to="/" className="flex items-center py-10 px-2 text-white hover:text-gray-900">
                Hack Global Inc.™️
              </Link>
            </div>

            {/* Primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/about" className="py-10 px-3 text-gray-200 hover:opacity-35">About</Link>
              <Link to="/events" className="py-10 px-3 text-gray-200 hover:opacity-35">Events</Link>
              <Link to="/writeup" className="py-10 px-3 text-gray-200 hover:opacity-35">Writeup</Link>
              <Link to="/portal" className="py-10 px-3 text-gray-200 hover:opacity-35">Portal</Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;