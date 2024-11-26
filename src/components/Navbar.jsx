import React, { useEffect, useState } from 'react';
import CoolMode from "./Ui/coolmode"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = document.querySelectorAll('section');
      let current = '';

      // Active section detection
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (currentScrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);

      // Navbar visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setIsMenuOpen(false); // Close menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed my-5 mx-5 top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/Home/moon.png" alt="Moon Logo" className="object-contain mr-2" />
        <img src="/Home/moonex.png" alt="Moonex Logo" className="object-contain" />
      </div>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items for Larger Screens */}
      <div className="hidden md:flex space-x-16">
        <a
          href="#home"
          className={`text-white font-medium transition ${
            activeSection === 'home' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-white font-medium transition ${
            activeSection === 'about' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
          }`}
        >
          About Us
        </a>
        <a
          href="#roadmap"
          className={`text-white font-medium transition ${
            activeSection === 'roadmap' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
          }`}
        >
          Roadmap
        </a>
        <a
          href="#faqs"
          className={`text-white font-medium transition ${
            activeSection === 'faqs' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
          }`}
        >
          FAQs
        </a>
        <CoolMode 
            options={{
              particle:
                "/Home/star.png",
            }}
            >
        <a
          href="#contact"
          className={`text-white font-medium transition ${
            activeSection === 'contact' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
          }`}
        >
          Contact Us
        </a>
        </CoolMode>
      </div>

      {/* Wallet Button for Larger Screens */}
      <div className="hidden md:block">
      <CoolMode 
            options={{
              particle:
                "/Home/star.png",
            }}
            >
        <button className="px-4 py-2 border-2 border-[#E4B40D] text-dark rounded-full bg-gradient-to-r from-[#E4B40D] to-[#cfd6e3] p-4 transition">
          Connect Wallet
        </button>
        </CoolMode>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-6 bg-[#081828] p-4 rounded-lg shadow-lg space-y-4 md:hidden">
          <a
            href="#home"
            className={`block text-white font-medium transition ${
              activeSection === 'home' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`block text-white font-medium transition ${
              activeSection === 'about' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
            }`}
          >
            About Us
          </a>
          <a
            href="#roadmap"
            className={`block text-white font-medium transition ${
              activeSection === 'roadmap' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
            }`}
          >
            Roadmap
          </a>
          <a
            href="#faqs"
            className={`block text-white font-medium transition ${
              activeSection === 'faqs' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
            }`}
          >
            FAQs
          </a>
          <a
            href="#contact"
            className={`block text-white font-medium transition ${
              activeSection === 'contact' ? 'text-[#E4B40D]' : 'hover:text-[#E4B40D]'
            }`}
          >
            Contact Us
          </a>
          <button className="block w-full px-4 py-2 border-2 border-[#E4B40D] text-dark rounded-full bg-gradient-to-r from-[#E4B40D] to-[#cfd6e3] transition">
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;