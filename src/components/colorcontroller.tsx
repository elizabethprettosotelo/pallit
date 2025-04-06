// components/colorcontroller.tsx

'use client';

import { useState } from 'react';
import ColorCard from './colorcard';
import HarmonyHub from './harmonyhub';

export default function ColorController() {
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [textColor, setTextColor] = useState('#000000');
    const [font, setFont] = useState('Arial'); // State for font

    return (
        <div className="flex flex-col justify-center-safe h-screen space-y-4 p-14">
            <ColorCard
                onColorChange={(bg, text) => {
                    setBgColor(bg);
                    setTextColor(text);
                }}
                font={font} // Pass font as a prop
            />
            <div className="absolute z-100 right-28 w-1/4 h-8/12 space-y-4 py-7">
                <HarmonyHub
                    headingColor={bgColor}
                    subheadingColor={textColor}
                    bodyColor={textColor}
                    onFontChange={(newFont) => setFont(newFont)} // Callback to change font
                />
            </div>
        </div>
    );
}
