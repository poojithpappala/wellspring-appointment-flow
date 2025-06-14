
import React, { useState, useEffect } from 'react';

const CalendlyEmbed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const calendlyUrl = "https://calendly.com/poojith132photography/doctor-consultation-clone";

  useEffect(() => {
    const iframe = document.getElementById('calendly-iframe') as HTMLIFrameElement;
    if (iframe) {
      const handleLoad = () => {
        setIsLoading(false);
        setLoadError(false);
      };
      const handleError = () => {
        setIsLoading(false);
        setLoadError(true);
      };

      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', handleError); // This might not always fire for cross-origin iframes

      // Fallback timeout if load event doesn't fire reliably
      const timer = setTimeout(() => {
        if (isLoading) { // If still loading after 10s, assume error
          setIsLoading(false);
          setLoadError(true);
        }
      }, 10000);


      return () => {
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', handleError);
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  return (
    <div className="relative" style={{ minHeight: '700px', paddingBottom: '0' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 rounded-2xl">
          <p className="text-charcoal">Loading calendar...</p>
          {/* You could add a spinner here */}
        </div>
      )}
      {loadError && !isLoading && (
        <div className="p-6 border border-destructive text-destructive bg-destructive/10 rounded-2xl text-center">
          <p className="font-semibold">Calendar unavailable.</p>
          <p>Please refresh the page or try again later.</p>
        </div>
      )}
      <iframe
        id="calendly-iframe"
        src={calendlyUrl}
        width="100%"
        height="700" // Initial height, can be adjusted
        frameBorder="0"
        title="Calendly booking widget"
        className={`transition-opacity duration-500 rounded-2xl shadow-lg ${isLoading || loadError ? 'opacity-0' : 'opacity-100'}`}
        style={{ display: loadError ? 'none' : 'block' }}
      ></iframe>
    </div>
  );
};

export default CalendlyEmbed;
