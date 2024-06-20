"use client"
// components/PulsatingDot.js

const PulsatingDot = () => (
    <div className="pulsating-dot-container">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle className="dot" cx="12" cy="12" r="5" />
      </svg>
      <style jsx>{`
        .pulsating-dot-container {
          position: absolute;
          top: -15px; /* Adjust as needed to position correctly */
          left: -15px; /* Adjust as needed to position correctly */
        }
        .dot {
          fill: #ff0000;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% {
            r: 5;
            opacity: 0;
          }
          50% {
            r: 5;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
  
  export default PulsatingDot;
  