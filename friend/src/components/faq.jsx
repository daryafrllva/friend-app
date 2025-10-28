import React, { useState } from 'react';
import '../styles/faq.css';
import upArrow from '../images/up-arrow.png';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Where are my memories stored?",
      answer: "All memories are encrypted by your friend's circuit board. If your friend is lost or damaged, they are inaccessible forever."
    },
    {
      question: "Is my friend waterproof?",
      answer: "Splash-resistant, not swim-proof."
    },
    {
      question: "How long does the battery last?",
      answer: "About a day of hanging out."
    },
    {
      question: "Do you ship internationally?",
      answer: "Friends are only available for sale in the United States + Canada."
    },
    {
      question: "What's the return policy?",
      answer: "Friends ship with a 1-year limited warranty. You may return your friend to us if there are any defects during this time period."
    },
    {
      question: "Will updates change my friend's personality?",
      answer: "Updates may add capabilities but will never overwrite memories."
    },
    {
      question: "How do I contact you?",
      answer: "You can reach us at team@friend.com."
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-top lg:items-start bg-white text-black h-180">
      <div className="flex-1 hidden lg:block"></div>
      
      <p className="font-light text-[64px] py-5 lg:py-2 lg:w-60 lg:text-center">FAQ</p>
      
      <div className="flex flex-col w-full px-2 lg:pt-8 md:w-150 items-center">
        {faqItems.map((item, index) => (
          <div key={index} className="flex flex-col border-t border-gray-400 w-full items-center cursor-pointer">
            <div 
              className="flex flex-row justify-center items-center w-full py-3 px-2"
              onClick={() => toggleItem(index)}
            >
              <p className="font-light text-[18px]">{item.question}</p>
              <div className="flex-1"></div>
              <div className="flex flex-row items-center justify-center">
                <p 
                  className="text-[1.5rem] sm:text-[13px] transition-transform duration-300 ease-out font-light" 
                  style={{ 
                    transform: openItems[index] ? "rotate(0deg)" : "rotate(-45deg)" 
                  }}
                >
                  ✕
                </p>
              </div>
            </div>
            
            <div 
              className="flex flex-row w-full px-2 overflow-hidden transition-[max-height] duration-300 ease-out" 
              style={{ 
                maxHeight: openItems[index] ? "200px" : "0px", 
                lineHeight: 1 
              }}
            >
              <p className="font-light text-[14px] text-left pb-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
        
        <div className="w-full max-h-0 overflow-hidden border-t border-gray-400"></div>
      </div>
      
      <div className="flex-1 sm:hidden"></div>
      
      <div className="flex justify-center items-center w-60">
        <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full mt-6 hover:opacity-75 transition-opacity cursor-pointer my-5">
          {/* Up Arrow Icon - Need: up-arrow.png */}
          <img alt="Up" className="h-5 w-5" src={upArrow} />
        </button>
      </div>
      
      <div className="flex-1 hidden lg:block"></div>
    </div>
  );
};

export default FAQ;
