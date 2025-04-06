// components/colorcard.tsx
'use client';

import React, { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { headingFonts, subheadingFonts, bodytextFonts } from './fonts';

export default function ColorCard({ onColorChange }: { onColorChange?: (bg: string, text: string) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  
  // Font states
  const [headingFont, setHeadingFont] = useState(headingFonts[0].className);
  const [subheadingFont, setSubheadingFont] = useState(subheadingFonts[0].className);
  const [bodyFont, setBodyFont] = useState(bodytextFonts[0].className);

  // Function to generate distinct colors
  const generateDistinctColors = () => {
    const newBgColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    const newTextColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    return { newBgColor, newTextColor };
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ') {
      e.preventDefault();

      try {
        // Generate new colors
        const { newBgColor, newTextColor } = generateDistinctColors();
        setBgColor(newBgColor);
        setTextColor(newTextColor);

        // Generate new fonts
        const randomHeading = headingFonts[Math.floor(Math.random() * headingFonts.length)];
        const randomSubheading = subheadingFonts[Math.floor(Math.random() * subheadingFonts.length)];
        const randomBody = bodytextFonts[Math.floor(Math.random() * bodytextFonts.length)];

        setHeadingFont(randomHeading.className);
        setSubheadingFont(randomSubheading.className);
        setBodyFont(randomBody.className);

        if (onColorChange) onColorChange(newBgColor, newTextColor);

      } catch (err) {
        console.error('Generation failed:', err);
      }
    }
  };

  return (
    <Card
      ref={cardRef}
      className="w-8/12 right-4 h-8/12 px-4 py-6"
      style={{ backgroundColor: bgColor, color: textColor }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <CardHeader>
        <CardTitle className={`p-4 text-6xl font-bold ${headingFont}`}>
          Big Important Title Text
        </CardTitle>
        <CardDescription className={`px-5 text-2xl ${subheadingFont}`}>
          Smaller description text
        </CardDescription>
      </CardHeader>
      <CardContent className={`px-11 text-3xl ${bodyFont}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </CardContent>
    </Card>
  );
}