import Image from "next/image";

import { FontSizeIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { Toggle } from "@/components/ui/toggle"; // Ensure this path is correct

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="absolute z-50 px-16 py-13 top-1">
        <Image src="/pallitslogan.svg" alt="Logo" width={200 } height={200} />
      </div>
      <div className="absolute px-16 py-13 top-1 right-1">
        <a
          href="https://github.com/elizabethprettosotelo/pallit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="w-12 h-12 text-white bg-[#9684E3] hover:bg-white hover:text-black rounded-full flex items-center justify-center"
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-center-safe h-screen space-y-4 p-14">

        <Card className="w-8/12 right-4 h-8/12 px-4 py-6">
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
        <div className="absolute z-100 right-28 w-1/4 h-8/12 space-y-4 py-7">
          <Card className="w-full h-full bg-background shadow-none border-none p- -translate-y-3">
        <CardHeader className="mb-6">
            <CardTitle className="text-3xl font-bold text-accent text-left">
            Harmony Hub
            </CardTitle>
          <CardDescription className="flex flex-col text-base text-white text-left">
            Personalize and tweak your generations!
            {/* Heading Controls */}
            <div className="mt-4">
            <h3 className="text-lg font-semibold text-left">Heading</h3>
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
            <Button
              aria-label="Change font size"
              className="bg-transparent text-white hover:bg-white hover:text-black"
            >
              <FontSizeIcon className=" hover:text-black" />
            </Button>
          </div>
            </div>
            {/* Subheading Controls */}
            <div className="mt-4">
          <h3 className="text-lg font-semibold text-left">Subheading</h3>
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
            <Button
              aria-label="Change font size"
              className="bg-transparent text-white hover:bg-white hover:text-black"
            >
              <FontSizeIcon className=" hover:text-black" />
            </Button>
          </div>
            </div>
            {/* Body Controls */}
            <div className="mt-4">
          <h3 className="text-lg font-semibold text-left">Body</h3>
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
            <Button
              aria-label="Change font size"
              className="bg-transparent text-white hover:bg-white hover:text-black"
            >
              <FontSizeIcon className=" hover:text-black" />
            </Button>
          </div>
            </div>
            {/* Background */}
            <div className="mt-4">
          <h3 className="text-lg font-semibold text-left">Background</h3>
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
