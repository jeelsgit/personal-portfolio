import React from 'react';

const AnimatedMap: React.FC = () => {
  return (
    <div className="hidden xl:block absolute left-full ml-12 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4">
              <animate attributeName="stop-opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.2;0.7;0.2" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.1;0.5;0.1" dur="7s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Animated filter for glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Elevation contour lines - animated */}
        <g className="elevation-lines">
          {/* Topographic contour lines */}
          <path
            d="M 50 100 Q 100 50, 150 100 T 250 100 T 350 100"
            fill="none"
            stroke="url(#emeraldGradient)"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 50 100 Q 100 50, 150 100 T 250 100 T 350 100;M 50 110 Q 100 60, 150 110 T 250 110 T 350 110;M 50 100 Q 100 50, 150 100 T 250 100 T 350 100"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M 50 150 Q 120 120, 180 150 T 280 150 T 350 150"
            fill="none"
            stroke="url(#emeraldGradient)"
            strokeWidth="1.5"
            opacity="0.5"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 50 150 Q 120 120, 180 150 T 280 150 T 350 150;M 50 160 Q 120 130, 180 160 T 280 160 T 350 160;M 50 150 Q 120 120, 180 150 T 280 150 T 350 150"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 50 200 Q 100 180, 150 200 T 250 200 T 350 200"
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 50 200 Q 100 180, 150 200 T 250 200 T 350 200;M 50 210 Q 100 190, 150 210 T 250 210 T 350 210;M 50 200 Q 100 180, 150 200 T 250 200 T 350 200"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 50 250 Q 130 230, 200 250 T 300 250 T 350 250"
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="1.5"
            opacity="0.5"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 50 250 Q 130 230, 200 250 T 300 250 T 350 250;M 50 260 Q 130 240, 200 260 T 300 260 T 350 260;M 50 250 Q 130 230, 200 250 T 300 250 T 350 250"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 50 300 Q 110 280, 170 300 T 270 300 T 350 300"
            fill="none"
            stroke="url(#emeraldGradient)"
            strokeWidth="1.5"
            opacity="0.4"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 50 300 Q 110 280, 170 300 T 270 300 T 350 300;M 50 310 Q 110 290, 170 310 T 270 310 T 350 310;M 50 300 Q 110 280, 170 300 T 270 300 T 350 300"
              dur="16s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Vector network nodes and connections */}
        <g className="vector-network">
          {/* Network nodes */}
          <circle cx="100" cy="120" r="3" fill="#34d399" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="200" cy="140" r="3" fill="#22d3ee" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="300" cy="160" r="3" fill="#34d399" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="150" cy="220" r="3" fill="#22d3ee" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="250" cy="240" r="3" fill="#34d399" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="4.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="180" cy="280" r="3" fill="#22d3ee" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="3.8s" repeatCount="indefinite" />
          </circle>

          {/* Network connections - animated data flow */}
          <line
            x1="100"
            y1="120"
            x2="200"
            y2="140"
            stroke="#34d399"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="4 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;8"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
          </line>
          
          <line
            x1="200"
            y1="140"
            x2="300"
            y2="160"
            stroke="#22d3ee"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="4 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;8"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
          </line>
          
          <line
            x1="150"
            y1="220"
            x2="250"
            y2="240"
            stroke="#34d399"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="4 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;8"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          
          <line
            x1="200"
            y1="140"
            x2="150"
            y2="220"
            stroke="#22d3ee"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="4 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;8"
              dur="2.8s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.8s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Additional elevation lines for depth */}
        <path
          d="M 50 80 Q 90 60, 130 80 T 210 80 T 290 80 T 350 80"
          fill="none"
          stroke="#34d399"
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            values="M 50 80 Q 90 60, 130 80 T 210 80 T 290 80 T 350 80;M 50 85 Q 90 65, 130 85 T 210 85 T 290 85 T 350 85;M 50 80 Q 90 60, 130 80 T 210 80 T 290 80 T 350 80"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedMap;
