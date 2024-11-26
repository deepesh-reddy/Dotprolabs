import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do i get Referral Code?",
      answer: "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components."
    },
    {
      question: "Do i get rewarded in tokens or ETH when i refer buyers?",
      answer: "You can use Material Tailwind by importing its components into your Tailwind CSS project."
    },
    {
      question: "How do i get into Dotprolabs?",
      answer: "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design."
    }
  ];

  return (
    <div className="bg-[url('/Home/shades.png')] py-10 md:py-20">
      <div className="mb-10 md:mb-20 bg-[#102333] bg-[url('/Home/shades.png')] rounded-lg mx-4 md:mx-[20%] p-6 md:p-10">
        <div className="text-center mt-3 md:mt-5 mb-2">
          <h1 className="font-mono font-bold text-2xl md:text-4xl text-[#E4B40D]">
            FAQs
          </h1>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-700">
              <button 
                onClick={() => toggleAccordion(index)} 
                className="w-full flex justify-between items-center py-3 md:py-5 text-white"
              >
                <span className='ml-4 md:ml-16 text-sm md:text-lg'>{faq.question}</span>
                <span className="text-slate-500 transition-transform duration-300">
                  {activeIndex === index ? (
                    <div className='bg-slate-600 rounded-full mr-4 md:mr-10 p-1 md:p-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className='bg-slate-600 rounded-full mr-4 md:mr-10 p-1 md:p-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                      </svg>
                    </div>
                  )}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="ml-4 md:ml-16 pb-3 md:pb-5 text-xs md:text-base text-slate-500">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;