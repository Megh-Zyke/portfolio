import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the location (route) changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
