"use client";

import React, { useState, useEffect, useRef } from "react";

const FloatingActions = ({ config }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const lastScrollY = useRef(0);
  const thresholdRef = useRef(1000);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const directionUp = scrollY < lastScrollY.current;
      
      // Update threshold dynamically if element exists
      const clinicVideoElem = document.getElementById('clinicVideo');
      if (clinicVideoElem) {
        thresholdRef.current = clinicVideoElem.offsetTop;
      }

      // Back to Top appears after 600px
      setShowScrollTop(scrollY > 600);

      // Mobile Sticky CTA logic:
      // 1. Must be past the third section threshold
      // 2. Guard: Never show in the first 200px (Hero area)
      if (scrollY > thresholdRef.current && scrollY > 200) {
        setShowStickyCTA(true);
        document.body.classList.add('darkHeader-sticky');
      } else {
        setShowStickyCTA(false);
        document.body.classList.remove('darkHeader-sticky');
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove('darkHeader-sticky');
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = config?.whatsappNumber || "919998199981";
  const mobileLabel = "Get Free Consultation";
  const mobileLink = "#contact-section";

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
