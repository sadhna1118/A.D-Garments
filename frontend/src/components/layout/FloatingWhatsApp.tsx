import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down slightly
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative group flex items-center">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </div>
        
        {/* Button */}
        <a
          href="https://wa.me/919350537559"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>
        
        {/* Ping Animation */}
        <span className="absolute right-0 top-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
