"use client";

import Image from "next/image";

import { LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Toggle } from "@/components/ui/toggle";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function LockToggle() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <Toggle
      aria-label="Toggle lock"
      onClick={() => setIsLocked(!isLocked)}
    >
      {isLocked ? <LockClosedIcon /> : <LockOpen1Icon />}
    </Toggle>
  );
}

export default function Home() {
  return (
    <>
      <div className="absolute top-4 z-50 p-16">
        <Image src="/pallitlogo.svg" alt="Logo" width={150} height={150} />
      </div>
      <div className="flex flex-col justify-center-safe h-screen space-y-4 p-16">
        <Card className="w-8/12 right-4 h-8/12">
          <CardHeader>
            <CardTitle className="p-4 text-6xl font-bold">
              Big Important Title Text
            </CardTitle>
            <CardDescription className="px-5 text-2xl">
              Smaller description text
            </CardDescription>
          </CardHeader>
          <CardContent className="px-11 text-3xl">
            Body text! Lorem ipsum blah blah hsis s suus jsksks kslsls Lorem
            ipsum blah blah hsis s suus jsksks kslsls Lorem ipsum blah blah hsis
            s suus jsksks kslsls Lorem ipsum blah blah hsis s suus
          </CardContent>
        </Card>
        <div className="absolute z-100 right-16 w-1/4 h-8/12 space-y-4 py-9">
          <Card className="w-full h-full bg-background shadow-none border-none p- -translate-y-3">
            <CardHeader className="mb-6">
              <CardTitle className="text-4xl font-bold text-accent">
                Harmony Hub
              </CardTitle>
              <CardDescription className="flex flex-col text-base text-white">
                Personalize and tweak your generations!
                {/* Heading Controls */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Heading</h3>
                  <div
                    className="flex space-x-2 mt-2 rounded-lg"
                    style={{ background: "#AF125A96" }}
                  >
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
                    <Button variant="outline" size="sm" className="w-10 p-0">
                      <div className="w-full h-full rounded-sm bg-current" />
                    </Button>
                    <Toggle aria-label="Toggle bold">
                      <span className="font-bold">B</span>
                    </Toggle>
                    <Toggle aria-label="Toggle italic">
                      <span className="italic">I</span>
                    </Toggle>
                    <Toggle aria-label="Toggle underline">
                      <span className="underline">U</span>
                    </Toggle>
                    <Toggle aria-label="Toggle lock">
                        <LockToggle />
                    </Toggle>
                  </div>
                </div>
                {/* Subheading Controls */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Subheading</h3>
                  <div
                    className="flex space-x-2 mt-2 rounded-lg"
                    style={{ background: "#AF125A96" }}
                  >
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
                    <Button variant="outline" size="sm" className="w-10 p-0">
                      <div className="w-full h-full rounded-sm bg-current" />
                    </Button>
                    <Toggle aria-label="Toggle bold">
                      <span className="font-bold">B</span>
                    </Toggle>
                    <Toggle aria-label="Toggle italic">
                      <span className="italic">I</span>
                    </Toggle>
                    <Toggle aria-label="Toggle underline">
                      <span className="underline">U</span>
                    </Toggle>
                    <Toggle aria-label="Toggle lock">
                        <LockToggle />
                    </Toggle>
                  </div>
                </div>
                {/* Body Controls */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Body</h3>
                  <div
                    className="flex space-x-2 mt-2 rounded-lg"
                    style={{ background: "#AF125A96" }}
                  >
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
                    <Button variant="outline" size="sm" className="w-10 p-0">
                      <div className="w-full h-full rounded-sm bg-current" />
                    </Button>
                    <Toggle aria-label="Toggle bold">
                      <span className="font-bold">B</span>
                    </Toggle>
                    <Toggle aria-label="Toggle italic">
                      <span className="italic">I</span>
                    </Toggle>
                    <Toggle aria-label="Toggle underline">
                      <span className="underline">U</span>
                    </Toggle>
                    <Toggle aria-label="Toggle lock">
                        <LockToggle />
                    </Toggle>
                  </div>
                </div>
                {/* Background */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Background</h3>
                  <div
                    className="flex space-x-2 mt-2 rounded-lg"
                    style={{ background: "#AF125A96" }}
                  >
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
                      Generate Color
                    </Button>
                    <Button variant="outline" size="sm" className="w-10 p-0">
                      <div className="w-full h-full rounded-sm bg-current" />
                    </Button>
                    <Toggle aria-label="Toggle lock">
                        <LockToggle />
                    </Toggle>
                  </div>
                </div>
              </CardDescription>

              <div className="flex flex-col justify-end h-full space-x-4 py-6">
                <div className="flex space-x-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        style={{
                          backgroundColor: "#AF125A",
                          color: "white",
                          width: "150px",
                        }}
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
                            const response = await fetch(
                              "https://www.thecolorapi.com/random"
                            );
                            const data = await response.json();
                            const color = data.hex.value;

                            const schemeResponse = await fetch(
                              `https://www.thecolorapi.com/scheme?hex=${color.replace(
                                "#",
                                ""
                              )}&mode=complement&count=1`
                            );
                            const schemeData = await schemeResponse.json();
                            const complementColor =
                              schemeData.colors[0].hex.value;

                            const colorDisplayLeft =
                              document.getElementById("color-display-left");
                            const colorDisplayRight = document.getElementById(
                              "color-display-right"
                            );

                            if (colorDisplayLeft) {
                              colorDisplayLeft.style.backgroundColor = color;
                            }
                            if (colorDisplayRight) {
                              colorDisplayRight.style.backgroundColor =
                                complementColor;
                            }
                          }}
                          style={{
                            backgroundColor: "#AF125A",
                            color: "white",
                            width: "150px",
                          }}
                        >
                          Generate Colors
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Button
                    style={{
                      backgroundColor: "#9684E3",
                      color: "white",
                      width: "150px",
                    }}
                  >
                    Save Swatch
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
