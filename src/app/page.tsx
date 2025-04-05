"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
import { Button } from "@/components/ui/button"

// test

export default function Home() {
  return (
    <>
      <div className="absolute top-4 left-4 z-50 p-4">
      <Image src="/pallitlogo.svg" alt="Logo" width={150} height={150} />
      </div>
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <Card className="w-10/12 max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl lg:text-4xl">Big Important Title Text</CardTitle>
          <CardDescription>Smaller description text</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Normal sized content text</p>
        </CardContent>
      </Card>
      <div className="flex space-x-4">
      <Popover>
      <PopoverTrigger asChild>
        <Button 
          style={{ backgroundColor: "#AF125A", color: "white", width: "150px" }} 
        >
          Generate
        </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex flex-col items-center space-y-4">
            <div
              id="color-display"
              className="w-full h-16 rounded"
              style={{ backgroundColor: "#FFFFFF" }}
            ></div>
            <div className="flex space-x-4 w-full">
              <div
              id="color-display-left"
              className="w-1/2 h-16 rounded"
              style={{ backgroundColor: "#FFFFFF" }}
              ></div>
              <div
              id="color-display-right"
              className="w-1/2 h-16 rounded"
              style={{ backgroundColor: "#FFFFFF" }}
              ></div>
            </div>
            <Button
              onClick={async () => {
              const response = await fetch("https://www.thecolorapi.com/random");
              const data = await response.json();
              const color = data.hex.value;

              const schemeResponse = await fetch(
                `https://www.thecolorapi.com/scheme?hex=${color.replace(
                "#",
                ""
                )}&mode=complement&count=1`
              );
              const schemeData = await schemeResponse.json();
              const complementColor = schemeData.colors[0].hex.value;

              const colorDisplayLeft = document.getElementById("color-display-left");
              const colorDisplayRight = document.getElementById("color-display-right");

              if (colorDisplayLeft) {
                colorDisplayLeft.style.backgroundColor = color;
              }
              if (colorDisplayRight) {
                colorDisplayRight.style.backgroundColor = complementColor;
              }
              }}
              style={{ backgroundColor: "#AF125A", color: "white", width: "150px" }}
            >
              Generate Colors
            </Button>
          </div>
        </PopoverContent>
        </Popover>
        <Button 
          style={{ backgroundColor: "#9684E3", color: "white", width: "150px" }} 
        >
          Save Swatch
        </Button>
      </div>
    </div>
    </>
  );
}
