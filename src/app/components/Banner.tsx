'use client';
import React, { useEffect, useState } from 'react';

import './Banner.component.css';
import '@/app/globals.css';

const CookieFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('footerAcknowledged');
    if (!acknowledged) {
      setIsVisible(true);
    }
  }, []);

  const hideFooter = (): void => {
    setIsVisible(false);
    localStorage.setItem('footerAcknowledged', 'true');
  };

  return (
    isVisible && (
      <footer className="footer fixed-bottom text-center">
        <div className="footer-content">
          <p>This site doesn&apos;t use cookies. Why would it?</p>
          <button id="cookie-button" type="button" onClick={hideFooter}>
            OK
          </button>
        </div>
      </footer>
    )
  );
};

export default CookieFooter;
