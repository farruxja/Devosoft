import React, { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const openSettings = () => {
    alert("Cookie settings modal (customize later).");
  };

  return visible ? (
    <div className="fixed bottom-0 left-0 right-0 bg-opacity-95 dark:bg-darkBg dark:bg-opacity-95 light:bg-white light:bg-opacity-95 p-4 shadow-lg transform transition-transform duration-500 z-50 translate-y-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <p className="text-sm mb-1">
              <span className="font-semibold">We use cookies</span> to enhance your
              browsing experience, serve personalized ads or content, and
              analyze our traffic.
            </p>
            <p className="text-xs opacity-70">
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={openSettings}
              className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-sm rounded whitespace-nowrap"
            >
              Cookie Settings
            </button>
            <button
              onClick={acceptCookies}
              className="gradient-btn text-white px-4 py-2 text-sm rounded whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieConsent;
