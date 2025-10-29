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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const faqItems = [
    {
      question: "Где хранятся мои воспоминания?",
      answer: "Все воспоминания зашифрованы платой вашего друга. Если ваш друг потерян или поврежден, они навсегда недоступны."
    },
    {
      question: "Водонепроницаемый ли мой друг?",
      answer: "Брызгозащищенный, но не водонепроницаемый."
    },
    {
      question: "Как долго держится батарея?",
      answer: "Примерно день общения."
    },
    {
      question: "Отправляете ли вы международно?",
      answer: "Друзья доступны для продажи только в США и Канаде."
    },
    {
      question: "Какая политика возврата?",
      answer: "Друзья поставляются с ограниченной годовой гарантией. Вы можете вернуть друга нам при наличии дефектов в течение этого периода."
    },
    {
      question: "Изменят ли обновления личность моего друга?",
      answer: "Обновления могут добавлять возможности, но никогда не перезаписывают воспоминания."
    },
    {
      question: "Как с вами связаться?",
      answer: "Вы можете связаться с нами по адресу team@friend.com."
    }
  ];

  return (
    <div className="flex justify-center w-full bg-white text-black h-120 pt-8">
      <div className="flex flex-row w-250 items-start justify-center">
        <div className="flex-1"></div>
        
        <p className="font-light text-[64px] w-60 text-center mt-3">FAQ</p>
        
        <div className="flex flex-col w-full px-2 md:w-120 items-center">
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
        
        <div className="flex justify-center items-start w-60 mt-3">
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full hover:opacity-75 transition-opacity cursor-pointer"
          >
            <img alt="Up" className="h-5 w-5" src={upArrow} />
          </button>
        </div>
        
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default FAQ;
