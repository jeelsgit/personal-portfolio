import React, { useState, useEffect, useRef } from 'react';

const codeLines = [
  'import geopandas as gpd',
  'import pandas as pd',
  'from arcgis import GIS',
  '',
  '# Spatial data processing',
  'gdf = gpd.read_file("data.shp")',
  'result = gdf.buffer(1000)',
  '',
  '# RAG pipeline integration',
  'from langchain import VectorStore',
  'vector_db = VectorStore.from_documents(docs)',
];

const FloatingTerminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const isPausedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cursor blink animation
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isPausedRef.current) {
      return;
    }

    if (currentLineIndex >= codeLines.length) {
      // Reset after showing all lines
      isPausedRef.current = true;
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        isPausedRef.current = false;
      }, 3000);
      return;
    }

    const currentLine = codeLines[currentLineIndex] || '';
    
    if (currentCharIndex < currentLine.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          // Ensure we have enough array entries
          while (newLines.length <= currentLineIndex) {
            newLines.push('');
          }
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 50); // Typing speed
    } else {
      // Move to next line (even if empty)
      timeoutRef.current = setTimeout(() => {
        // Ensure empty lines are added to displayedLines
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          while (newLines.length <= currentLineIndex) {
            newLines.push('');
          }
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = '';
          }
          return newLines;
        });
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 300); // Pause between lines
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentLineIndex, currentCharIndex]);

  const getSyntaxColor = (line: string | undefined): string => {
    if (!line || typeof line !== 'string') {
      return 'text-slate-300'; // Default for undefined/null
    }
    const trimmed = line.trim();
    if (trimmed.startsWith('import') || trimmed.startsWith('from')) {
      return 'text-emerald-400'; // Import statements
    }
    if (trimmed.startsWith('#')) {
      return 'text-slate-500'; // Comments
    }
    if (line.includes('=')) {
      return 'text-cyan-400'; // Variable assignments
    }
    return 'text-slate-300'; // Default
  };

  return (
    <div className="hidden xl:block absolute right-8 bottom-32 w-80 pointer-events-none">
      <div className="bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-700 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs font-mono text-slate-400">terminal.py</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs leading-relaxed min-h-[200px] bg-slate-950/50">
          {displayedLines.map((line, index) => {
            const safeLine = line ?? '';
            const isLastLine = index === displayedLines.length - 1;
            return (
              <div key={index} className="flex items-start">
                <span className="text-slate-600 mr-2 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={getSyntaxColor(safeLine)}>
                  {safeLine}
                  {isLastLine && showCursor && (
                    <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-pulse"></span>
                  )}
                </span>
              </div>
            );
          })}
          {currentLineIndex < codeLines.length && displayedLines.length === currentLineIndex && (
            <div className="flex items-start">
              <span className="text-slate-600 mr-2 select-none">
                {String(currentLineIndex + 1).padStart(2, '0')}
              </span>
              {showCursor && (
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse"></span>
              )}
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        <div className="bg-slate-800 border-t border-slate-700 px-4 py-1.5">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-emerald-400">❯</span>
            <span className="text-slate-400">python</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">geospatial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTerminal;
