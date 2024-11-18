import React, { useEffect } from "react";

declare global {
  interface Window {
    Crate: any; 
  }
}

const WidgetBotCrate: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.Crate) {
        new window.Crate({
          server: "1237477288249921638", // Server ID
          channel: "1237477288996638728", // channel ID
        });
      } else {
        console.error("Crate library failed to load.");
      }
    };

    document.body.appendChild(script);

    return () => {
      // Clean 
      document.body.removeChild(script);
    };
  }, []);

  return null; // Render nothing
};

export default WidgetBotCrate;
