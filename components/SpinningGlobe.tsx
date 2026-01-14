import React from 'react';

const SpinningGlobe: React.FC = () => {
  return (
    <div className="hidden lg:block absolute right-8 top-1/4 w-64 h-64 opacity-15 pointer-events-none">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="globeGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer circle - globe outline */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#globeGlow)"
        />

        {/* Latitude lines (horizontal) */}
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="35"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.5"
          filter="url(#globeGlow)"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="70"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.4"
          filter="url(#globeGlow)"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="105"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#globeGlow)"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="35"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.5"
          filter="url(#globeGlow)"
          transform="rotate(180 150 150)"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="70"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.4"
          filter="url(#globeGlow)"
          transform="rotate(180 150 150)"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="105"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#globeGlow)"
          transform="rotate(180 150 150)"
        />

        {/* Longitude lines (vertical/curved) */}
        <path
          d="M 150 10 Q 180 150, 150 290"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.5"
          filter="url(#globeGlow)"
        />
        <path
          d="M 150 10 Q 200 150, 150 290"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.4"
          filter="url(#globeGlow)"
        />
        <path
          d="M 150 10 Q 220 150, 150 290"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#globeGlow)"
        />
        <path
          d="M 150 10 Q 120 150, 150 290"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.5"
          filter="url(#globeGlow)"
        />
        <path
          d="M 150 10 Q 100 150, 150 290"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.4"
          filter="url(#globeGlow)"
        />
        <path
          d="M 150 10 Q 80 150, 150 290"
          fill="none"
          stroke="url(#globeGradient)"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#globeGlow)"
        />

        {/* Additional longitude lines for depth */}
        <path
          d="M 150 10 Q 240 150, 150 290"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.8"
          opacity="0.2"
        />
        <path
          d="M 150 10 Q 60 150, 150 290"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.8"
          opacity="0.2"
        />

        {/* Equator line - emphasized */}
        <ellipse
          cx="150"
          cy="150"
          rx="140"
          ry="140"
          fill="none"
          stroke="#34d399"
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#globeGlow)"
        />

        {/* Prime meridian - emphasized */}
        <path
          d="M 150 10 Q 150 150, 150 290"
          fill="none"
          stroke="#34d399"
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#globeGlow)"
        />

        {/* Grid intersection points */}
        <circle cx="150" cy="50" r="1.5" fill="#34d399" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="250" r="1.5" fill="#34d399" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="220" cy="150" r="1.5" fill="#22d3ee" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="150" r="1.5" fill="#22d3ee" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default SpinningGlobe;
