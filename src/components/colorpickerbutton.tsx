// components/color-picker-button.tsx
'use client';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ColorPickerButtonProps {
    color: string;
    onChange: (color: string) => void;
}

export function ColorPickerButton({ color: initialColor, onChange }: ColorPickerButtonProps) {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(initialColor);

    const handleColorChange = (newColor: string) => {
        setColor(newColor); // Update local state
        onChange(newColor); // Notify parent component
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="z-10 w-10 h-8 p-0 rounded-sm"
                    aria-label="Select color"
                    style={{ backgroundColor: color }} // Updated to use 'color'
                >
                    <div 
                        className="w-full h-full rounded-sm border-2 border-muted"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-4 z-500" align="start" onClick={(e) => e.stopPropagation()}>
                <HexColorPicker
                    color={color} // Updated to use 'color'
                    onChange={handleColorChange} // Use handleColorChange
                    style={{ width: '200px', height: '200px' }}
                />
            </PopoverContent>
        </Popover>
    );
}