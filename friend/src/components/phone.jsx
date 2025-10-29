import React from 'react';
import '../styles/phone.css';
// Import images
import phoneImage from '../images/phone.png';
import wordCloudImage from '../images/word_cloud_4.png';
import footerLogo from '../images/footer-logo.svg';
import arrowRight from '../images/arrow_right.png';
import appStoreBadge from '../images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';

const Phone = () => {
  return (
    <div>
      {/* Phone Section with Friend branding and Order button */}
      <section className="relative w-full h-screen bg-white overflow-hidden" style={{ transform: "scale(1)" }}>
        {/* Mobile Version */}
        <div className="absolute bottom-0 left-0 w-full h-full lg:hidden isolate">
          {/* Phone Image - Need: phone.png */}
          <img 
            alt="Phone" 
            className="absolute bottom-1/2 left-1/2 w-200 h-200 object-cover -z-10" 
            src={phoneImage} 
            style={{ 
              opacity: 0, 
              transform: "translate(-50%, 50%) scale(0.7)", 
              visibility: "hidden" 
            }} 
          />
          
          {/* Word Cloud Image - Need: word_cloud_4.png */}
          <img 
            alt="Word Cloud" 
            className="absolute bottom-1/2 left-1/2 w-100 h-100 object-cover z-0" 
            src={wordCloudImage} 
            style={{ 
              opacity: 0, 
              transformOrigin: "center center", 
              transform: "translate(-50%, 50%) scale(0.7)", 
              visibility: "hidden" 
            }} 
          />
          
          {/* Friend Logo and Text */}
          <div className="absolute top-5 left-5 w-2/3 h-1/2 flex flex-col items-start justify-start z-1">
            {/* Friend Logo - Need: footer-logo.svg */}
            <img 
              alt="Friend" 
              className="w-100 p-5" 
              src={footerLogo} 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }} 
            />
            <p 
              className="text-black text-2xl font-light pl-5" 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }}
            >
              Your new roommate is waiting.
            </p>
          </div>
          
          {/* Order Button and Details */}
          <div className="absolute bottom-20 left-10 w-2/4 h-1/3 flex flex-col items-start mr-6 justify-end text-black text-1xl font-light z-2">
            <button 
              className="flex items-center justify-center bg-black text-white px-6 py-2 mb-8 rounded-full hover:opacity-75 cursor-pointer gap-2 z-500 mix-blend-normal [backface-visibility:hidden]" 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)", 
                visibility: "visible" 
              }}
            >
              <p className="text-white font-normal">Order Now</p>
              {/* Arrow Right Icon - Need: arrow_right.png */}
              <img alt="Up" className="h-5 w-5" src={arrowRight} />
            </button>
            
            <div 
              className="flex flex-col pl-2 font-light" 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)", 
                visibility: "visible" 
              }}
            >
              <p>$129</p>
              <p>No subscription</p>
              <p>1-year warranty</p>
              <p>Made in Canada</p>
            </div>
            
            {/* App Store Badge - Need: Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg */}
            <img 
              alt="Download on the App Store" 
              className="cursor-pointer mr-7 mt-8" 
              src={appStoreBadge} 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)", 
                visibility: "visible" 
              }} 
            />
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-full">
          {/* Phone Image */}
          <img 
            alt="Phone" 
            className="absolute bottom-1/2 left-1/2 w-300 h-300 object-cover" 
            src={phoneImage} 
            style={{ 
              opacity: 1, 
              transform: "translate(-50%, 50%)" 
            }} 
          />
          
          {/* Word Cloud Image */}
          <img 
            alt="Word Cloud" 
            className="absolute bottom-1/2 left-1/2 w-100 h-100 object-cover" 
            src={wordCloudImage} 
            style={{ 
              opacity: 1, 
              transformOrigin: "center center", 
              transform: "translate(-50%, 50%)" 
            }} 
          />
          
          {/* Friend Logo and Text - Desktop Position */}
          <div 
            className="absolute top-1/2 left-1/2 w-80 h-80 flex flex-col items-start justify-start" 
            style={{ 
              transformOrigin: "center center", 
              transform: "translate(-50%, -50%) translate(-350px, -200px)" 
            }}
          >
            <img 
              alt="Friend" 
              className="w-full p-5" 
              src={footerLogo} 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }} 
            />
            <p 
              className="text-black text-2xl font-light pl-5" 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }}
            >
              Your new roommate is waiting.
            </p>
          </div>
          
          {/* Order Button and Details - Desktop Position */}
          <div 
            className="absolute top-1/2 left-1/2 w-80 h-120 flex flex-col items-start justify-start" 
            style={{ 
              transformOrigin: "center center", 
              transform: "translate(-50%, -50%) translate(400px, 330px)" 
            }}
          >
            <button 
              className="flex items-center justify-center bg-black text-white px-6 py-2 mb-2 rounded-full hover:opacity-50 cursor-pointer gap-2 z-20" 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }}
            >
              <p className="text-white font-normal text-xl">Order Now</p>
              <img alt="Up" className="h-5 w-5" src={arrowRight} />
            </button>
            
            <div 
              className="flex flex-col text-black items-start my-6 font-light" 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }}
            >
              <p>$129</p>
              <p>No subscription</p>
              <p>1-year warranty</p>
              <p>Made in Canada</p>
            </div>
            
            <img 
              alt="Download on the App Store" 
              className="cursor-pointer mr-7 mt-2" 
              src={appStoreBadge} 
              style={{ 
                opacity: 1, 
                transform: "translate(0px, 0%)" 
              }} 
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div className="w-full flex flex-col items-center justify-center bg-white">
        <div className="w-full flex justify-center py-8 px-4 lg:max-w-7xl">
          <div className="w-full aspect-video">
            <iframe 
              className="w-full h-full rounded-4xl" 
              src="https://www.youtube.com/embed/O_Q1hoEhfk4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
