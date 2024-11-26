import React from 'react';
import CoolMode from "./Ui/coolmode"

const Home = () => {
  return (
    <div className="bg-no-repeat min-h-screen bg-[url('/Home/rings.png'),url('/Home/shades.png')] bg-[length:100vw_100vh] flex flex-col md:flex-row items-center relative">
      {/* Sphere Section - Moved to top on small screens */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0 mt-[28%] sm:mt-8">
        <img
          src="/Home/sphere.png"
          alt="Sphere"
          className="max-w-[70%] md:max-w-full h-auto animate-rotate"
        />
      </div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
        <div className="text-center md:text-left md:ml-[20%] px-4 md:px-0">
          <h1 className="font-mono font-bold text-white text-3xl md:text-4xl lg:text-6xl">
            Trusted Multi-Chain
          </h1>
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl">
            <span className="text-[#E4B40D]">DEX</span> Platform
          </h1>
          <div className="font-mono text-base md:text-xl text-gray-500 my-4">
            <p>Trade, earn, and own crypto, on the all-in-one multi-chain DEX</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <CoolMode 
            options={{
              particle:
                "/Home/star.png",
            }}
            >
            <button className="px-6 py-3 border-[#E4B40D] text-dark rounded-full bg-gradient-to-r from-[#E4B40D] to-[#cfd6e3] transition">
              Connect Wallet
            </button>
            </CoolMode>
            <CoolMode 
            options={{
              particle:
                "/Home/star.png",
            }}
            >
            <button className="px-6 py-3 border-2 border-[#E4B40D] text-[#E4B40D] rounded-full transition">
              Click to see Magic
            </button>
            </CoolMode>
          </div>
        </div>
      </div>

      {/* Floating Stars */}
      <img
        src="/Home/star.png"
        alt="Star 1"
        className="absolute top-40 left-8 md:left-24 w-8 md:w-12 animate-float"
      />
      <img
        src="/Home/star.png"
        alt="Star 2"
        className="absolute bottom-20 right-8 md:right-96 w-6 md:w-10 animate-float"
      />
      <img
        src="/Home/smallstar.png"
        alt="Star 3"
        className="absolute top-48 right-8 md:right-20 w-10 md:w-14 animate-float"
      />
    </div>
  );
};

export default Home;