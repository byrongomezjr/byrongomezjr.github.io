'use client';

import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
            {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 sm:bottom-2 right-2 sm:right-2 z-[9999] p-2 rounded-full text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200"
          aria-label="Scroll to top"
        >
          👆🏼
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
