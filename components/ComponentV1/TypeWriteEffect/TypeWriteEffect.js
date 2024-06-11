import React, { useState, useEffect } from 'react';
import Css from './TypeWriteEffect.module.css'


export default function TypewriterEffect({ lines }) {
    const [displayedLines, setDisplayedLines] = useState('');
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentLineText, setCurrentLineText] = useState('');
  
    useEffect(() => {
      const currentLine = lines[currentLineIndex % lines.length];
  
      const intervalId = setInterval(() => {
        setCurrentLineText((prevText) => {
          const nextChar = currentLine[prevText.length];
          return prevText + (nextChar || ''); // Ensure we don't exceed the length of the current line
        });
  
        if (currentLineText.length === currentLine.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setDisplayedLines(currentLineText);
            setCurrentLineIndex((prevIndex) => prevIndex + 1);
            setCurrentLineText('');
          }, 1000); // Adjust the delay before erasing and typing the next line
        }
      }, 50); // Adjust the interval speed as needed
  
      return () => clearInterval(intervalId);
    }, [currentLineIndex, currentLineText, lines]);
  

  return (
    <div className={Css["typewriter-container"]}>
      <div className={`${Css['current-line']}`}>{currentLineText}</div>
    </div>
  );
};
