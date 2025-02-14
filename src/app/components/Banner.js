"use client";

import './Banner.component.css';
import '@/app/globals.css';
import React, { useEffect, useState } from 'react';

const CookieFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('footerAcknowledged');
    if (!acknowledged) {
      setIsVisible(true);
    }
  }, []);

  const hideFooter = () => {
    setIsVisible(false); // Hide footer
    localStorage.setItem('footerAcknowledged', 'true');
  };

  return (
    isVisible && (
      <footer className="footer fixed-bottom text-center">
        <div className="footer-content">
          <p>This site doesn't use cookies. Why would it?</p>
          <button id="cookie-button" type="button" onClick={hideFooter}>
            OK
          </button>
        </div>
      </footer>
    )
  );
};

export default CookieFooter;
