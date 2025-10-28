import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row gap-3 items-center py-5 text-white bg-black text-[13px] font-medium">
          <div className="w-50 h-full flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            {/* Footer content will be added here based on the original structure */}
            <p>© 2024 Friend. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
