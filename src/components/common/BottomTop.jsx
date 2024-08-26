// ScrollToTop.js
import React, { useState, useEffect } from 'react';

const BottomTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 bg-black right-5 w-[50px] hover:shadow-headerShadow h-[50px] border-[1px] border-white text-white rounded-[50px] shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      } `}
      aria-label="Scroll to top"
    >
      &#8679;  
    </button>
  );
};

export default BottomTop;
