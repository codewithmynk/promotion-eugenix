"use client";

import React, { useState, useEffect } from "react";

const FloatingActions = ({ config }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Back to Top appears after 600px
      setShowScrollTop(scrollY > 600);
      
      // Mobile Sticky CTA logic:
      // 1. Must be past 700px threshold
      // 2. Must be scrolling UP (scrollY < lastScrollY)
      if (scrollY > 700 && scrollY < lastScrollY) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
      
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = config?.whatsappNumber || "919998199981";
  const mobileLabel = config?.headerButtonLabel || "Get Free Consultation";
  const mobileLink = config?.headerButtonLink || "#contact-section";

  // Match the message logic from header.php if needed, or keep it simple
  const whatsappMsg = encodeURIComponent("Hello! Can I get more information on this?");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMsg}`;

  return (
    <>
      {/* WhatsApp Floating Button - Bottom Left */}
      <div className="whatsapp-float">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-whatsapp"
          title="Chat with us"
        >
          <i className="lab la-whatsapp"></i>
        </a>
      </div>

      {/* Back to Top Button - Bottom Right */}
      <div 
        className={`scrollup ${showScrollTop ? "active" : ""}`}
        onClick={scrollToTop}
        title="Go to Top"
      >
        <i className="las la-arrow-up"></i>
      </div>

      {/* Sticky Mobile CTA - Bottom Full Width */}
      <div className={`book-consult-btnbox ${showStickyCTA ? "darkHeader" : ""}`}>
        <a className="btn primary" href={mobileLink}>
          <span>
            {mobileLabel} <i className="las la-arrow-right"></i>
          </span>
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
