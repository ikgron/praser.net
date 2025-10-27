"use client";
import type React from "react";
import { useEffect, useState } from "react";
import styles from "@/components//Banner/Banner.module.css";

const CookieFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem("footerAcknowledged");
    if (!acknowledged) {
      setIsVisible(true);
    }
  }, []);

  const hideFooter = (): void => {
    setIsVisible(false);
    localStorage.setItem("footerAcknowledged", "true");
  };

  return (
    isVisible && (
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <p>This site doesn&apos;t use cookies. Why would it?</p>
          <button
            className={styles["cookie-button"]}
            type="button"
            onClick={hideFooter}
          >
            OK
          </button>
        </div>
      </footer>
    )
  );
};

export default CookieFooter;
