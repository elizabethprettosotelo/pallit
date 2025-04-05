'use client';

import "./globals.css";

import { ReactNode } from 'react';
import { useState } from 'react';

import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Poppins } from 'next/font/google';

import { Button } from "@/components/ui/button"

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], variable: '--font-roboto' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], variable: '--font-open-sans' });
const lato = Lato({ subsets: ['latin'], weight: ['400'], variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'], variable: '--font-montserrat' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });

const fonts = [roboto, openSans, lato, montserrat, poppins];
const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

export default function RandomFontButton() {
    const [fontClass, setFontClass] = useState(fonts[0].className);
  
    const changeFont = () => {
      const random = fonts[Math.floor(Math.random() * fonts.length)];
      setFontClass(random.className);
    };
  
    return (
      <Button className={fontClass} onClick={changeFont} variant="outline">
        Sample Button
      </Button>
    );
}
