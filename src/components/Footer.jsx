import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-14 mx-6 md:mx-24 space-y-8 md:space-y-0">
      {/* Logo Section */}
      <div className="flex justify-center w-full md:w-auto">
        <img 
          src="/Footer/moonex.png" 
          alt="Logo" 
          className="h-24 md:h-auto" 
        />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col md:flex-row text-center space-y-4 md:space-y-0 md:space-x-16">
        <a href="#home" className="text-white font-medium transition">
          Home
        </a>
        <a href="#about" className="text-white font-medium transition">
          About Us
        </a>
        <a href="#roadmap" className="text-white font-medium transition">
          Roadmap
        </a>
        <a href="#faqs" className="text-white font-medium transition">
          FAQs
        </a>
        <a href="#contact" className="text-white font-medium transition">
          Contact Us
        </a>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col items-center space-y-5 w-full md:w-auto">
        <h1 className="font-mono font-bold text-2xl text-white text-center">
          Contact <span className="text-[#E4B40D]">Us</span>
        </h1>
        <div className="flex space-x-6">
          <a href="#">
            <img src="/Footer/tele.png" alt="Telegram" className="h-6" />
          </a>
          <a href="#">
            <img src="/Footer/robo.png" alt="Robot" className="h-6" />
          </a>
          <a href="#">
            <img src="/Footer/twitter.png" alt="Twitter" className="h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;