'use client';

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { FontSizeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ColorPickerButton } from "@/components/colorpickerbutton";

interface HarmonyHubProps {
    headingColor: string;
    subheadingColor: string;
    bodyColor: string;
}

export default function HarmonyHub({
    headingColor: initialHeadingColor,
    subheadingColor: initialSubheadingColor,
    bodyColor: initialBodyColor,
}: HarmonyHubProps) {
    const [headingColor, setHeadingColor] = useState(initialHeadingColor);
    const [subheadingColor, setSubheadingColor] = useState(initialSubheadingColor);
    const [bodyColor, setBodyColor] = useState(initialBodyColor);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                event.preventDefault(); // Prevent default spacebar behavior (e.g., scrolling)
                const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                setHeadingColor(randomColor);
                setSubheadingColor(randomColor);
                setBodyColor(randomColor);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Card className="w-full h-full bg-background shadow-none border-none p-4 -translate-y-3">
            <CardHeader className="mb-6">
                <CardTitle className="text-3xl font-Poppins font-semibold text-accent text-left">
                    Harmony Hub
                </CardTitle>
                <CardDescription className="flex flex-col font-Poppins font-semibold text-base text-white text-left">
                    Personalize and tweak your generations!

                    {/* Heading */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold font-Poppins text-left">Header</h3>
                        <div className="flex space-x-2 mt-2 rounded-lg" style={{ background: "#AF125A96" }}>
                            <Button
                                style={{
                                    backgroundColor: "#A54192",
                                    color: "white",
                                    border: "none",
                                    height: "36px",
                                    width: "112px",
                                    font: "Poppins", // Ensure the font is applied
                                }}
                                size="sm"
                            >
                                Generate Font
                            </Button>
                            <ColorPickerButton
                                color={headingColor}
                                onChange={(color) => setHeadingColor(color)}
                            />
                            <Toggle aria-label="Toggle bold"><span className="font-bold">B</span></Toggle>
                            <Toggle aria-label="Toggle italic"><span className="italic">I</span></Toggle>
                            <Button
                                aria-label="Change font size"
                                className="bg-transparent text-white hover:bg-white hover:text-black"
                            >
                                <FontSizeIcon className="hover:text-black" />
                            </Button>
                        </div>
                    </div>

                    {/* Subheading */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-left">Subheading</h3>
                        <div className="flex space-x-2 mt-2 rounded-lg" style={{ background: "#AF125A96" }}>
                            <Button
                                style={{
                                    backgroundColor: "#A54192",
                                    color: "white",
                                    border: "none",
                                    height: "36px",
                                    width: "112px",
                                }}
                                size="sm"
                            >
                                Generate Font
                            </Button>
                            <ColorPickerButton
                                color={subheadingColor}
                                onChange={(color) => setSubheadingColor(color)}
                            />
                            <Toggle aria-label="Toggle bold"><span className="font-bold">B</span></Toggle>
                            <Toggle aria-label="Toggle italic"><span className="italic">I</span></Toggle>
                            <Button
                                aria-label="Change font size"
                                className="bg-transparent text-white hover:bg-white hover:text-black"
                            >
                                <FontSizeIcon className="hover:text-black" />
                            </Button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-left">Body</h3>
                        <div className="flex space-x-2 mt-2 rounded-lg" style={{ background: "#AF125A96" }}>
                            <Button
                                style={{
                                    backgroundColor: "#A54192",
                                    color: "white",
                                    border: "none",
                                    height: "36px",
                                    width: "112px",
                                }}
                                size="sm"
                            >
                                Generate Font
                            </Button>
                            <ColorPickerButton
                                color={bodyColor}
                                onChange={(color) => setBodyColor(color)}
                            />
                            <Toggle aria-label="Toggle bold"><span className="font-bold">B</span></Toggle>
                            <Toggle aria-label="Toggle italic"><span className="italic">I</span></Toggle>
                            <Button
                                aria-label="Change font size"
                                className="bg-transparent text-white hover:bg-white hover:text-black"
                            >
                                <FontSizeIcon className="hover:text-black" />
                            </Button>
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
