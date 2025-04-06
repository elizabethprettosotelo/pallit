import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ColorController from "@/components/colorcontroller"; // NEW import

export default function Home() {
  return (
    <>
      <div className="absolute z-50 px-16 py-13 top-1">
        <Image src="/pallitslogan.svg" alt="Logo" width={200} height={200} />
      </div>

      <div className="absolute px-16 py-13 top-1 right-1">
        <a
          href="https://github.com/elizabethprettosotelo/pallit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-12 h-12 text-white bg-[#9684E3] hover:bg-white hover:text-black rounded-full flex items-center justify-center">
            <GitHubLogoIcon className="w-6 h-6" />
          </button>
        </a>
      </div>

      {/* ⬇️ Unified color logic inside this wrapper */}
      <ColorController />

      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100">
        <h1 className="text-4xl font-poppins font-bold text-[#9684E3]">About</h1>
        <Image
          src="/pallitagain.gif"
          alt="Pallit Animation"
          width={300}
          height={300}
        />
        <p className="text-center font-poppins font-bold max-w-2xl text-lg text-[#9684E3]">
          About pallit! pallit was designed as a tool for programmers, artists,
          and designers alike seeking simple solutions to creating functional,
          fabulous color and font schemes for their own unique uses. Cut out
          the guesswork and generate ready-to-go palettes! Created by Elizabeth
          Pretto-Sotelo, Sebastian Garcia, Daniel Schevis, and Benjamin
          Quintero for HackUSF 2025.
        </p>
      </div>
    </>
  );
}
