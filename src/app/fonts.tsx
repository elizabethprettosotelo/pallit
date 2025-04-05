'use client';

import "./globals.css";

import { ReactNode } from 'react';
import { useState } from 'react';

// Imported Sans Serif fonts
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { Nunito } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { Rubik } from 'next/font/google';
import { Codystar } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Inconsolata } from 'next/font/google';
import { Karla } from 'next/font/google';
import { Outfit } from 'next/font/google';
import { Jost } from 'next/font/google';
import { Figtree } from 'next/font/google';
import { Cabin } from 'next/font/google';
import { Mukta } from 'next/font/google';
import { Dosis } from 'next/font/google';
import { Lexend } from 'next/font/google';

// Imported Serif fonts
import { Arvo } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Cormorant } from 'next/font/google';
import { Domine } from 'next/font/google';
import { Spectral } from 'next/font/google';
import { Alegreya } from 'next/font/google';
import { Prata } from 'next/font/google';
import { Amiri } from 'next/font/google';
import { Cardo } from 'next/font/google';
import { Aleo } from 'next/font/google';
import { Rokkitt } from 'next/font/google';
import { Gelasio } from 'next/font/google';
import { Neuton } from 'next/font/google';
import { Fraunces } from 'next/font/google';
import { Baskervville } from 'next/font/google';
import { Pridi } from 'next/font/google';
import { Forum } from 'next/font/google';
import { Literata } from 'next/font/google';
import { Faustina } from 'next/font/google';
import { Playfair } from 'next/font/google';
import { Ultra } from 'next/font/google';

import { Button } from "@/components/ui/button"

// Sans Serif Font imports
const roboto = Roboto({ subsets: ['latin'], weight: ['400'], variable: '--font-roboto' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], variable: '--font-open-sans' });
const lato = Lato({ subsets: ['latin'], weight: ['400'], variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'], variable: '--font-montserrat' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], weight: ['400'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400'], variable: '--font-oswald' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400'], variable: '--font-nunito' });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400'], variable: '--font-quicksand' });
const rubik = Rubik({ subsets: ['latin'], weight: ['400'], variable: '--font-rubik' });
const codystar = Codystar({ subsets: ['latin'], weight: ['400'], variable: '--font-codystar' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400'], variable: '--font-manrope' });
const inconsolata = Inconsolata({ subsets: ['latin'], weight: ['400'], variable: '--font-inconsolata' });
const karla = Karla({ subsets: ['latin'], weight: ['400'], variable: '--font-karla' });
const outfit = Outfit({ subsets: ['latin'], weight: ['400'], variable: '--font-outfit' });
const jost = Jost({ subsets: ['latin'], weight: ['400'], variable: '--font-jost' });
const figtree = Figtree({ subsets: ['latin'], weight: ['400'], variable: '--font-figtree' });
const cabin = Cabin({ subsets: ['latin'], weight: ['400'], variable: '--font-cabin' });
const mukta = Mukta({ subsets: ['latin'], weight: ['400'], variable: '--font-mukta' });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'], variable: '--font-dosis' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400'], variable: '--font-lexend' });

// Serif Font imports
const arvo = Arvo({ subsets: ['latin'], weight: ['400'], variable: '--font-arvo' });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'], variable: '--font-cinzel' });
const cormorant = Cormorant({ subsets: ['latin'], weight: ['400'], variable: '--font-cormorant' });
const domine = Domine({ subsets: ['latin'], weight: ['400'], variable: '--font-domine' });
const spectral = Spectral({ subsets: ['latin'], weight: ['400'], variable: '--font-spectral' });
const alegreya = Alegreya({ subsets: ['latin'], weight: ['400'], variable: '--font-alegreya' });
const prata = Prata({ subsets: ['latin'], weight: ['400'], variable: '--font-prata' });
const amiri = Amiri({ subsets: ['latin'], weight: ['400'], variable: '--font-amiri' });
const cardo = Cardo({ subsets: ['latin'], weight: ['400'], variable: '--font-cardo' });
const aleo = Aleo({ subsets: ['latin'], weight: ['400'], variable: '--font-aleo' });
const rokkitt = Rokkitt({ subsets: ['latin'], weight: ['400'], variable: '--font-rokkitt' });
const gelasio = Gelasio({ subsets: ['latin'], weight: ['400'], variable: '--font-gelasio' });
const neuton = Neuton({ subsets: ['latin'], weight: ['400'], variable: '--font-neuton' });
const fraunces = Fraunces({ subsets: ['latin'], weight: ['400'], variable: '--font-fraunces' });
const baskervville = Baskervville({ subsets: ['latin'], weight: ['400'], variable: '--font-baskervville' });
const pridi = Pridi({ subsets: ['latin'], weight: ['400'], variable: '--font-pridi' });
const forum = Forum({ subsets: ['latin'], weight: ['400'], variable: '--font-forum' });
const literata = Literata({ subsets: ['latin'], weight: ['400'], variable: '--font-literata' });
const faustina = Faustina({ subsets: ['latin'], weight: ['400'], variable: '--font-faustina' });
const playfair = Playfair({ subsets: ['latin'], weight: ['400'], variable: '--font-playfair' });
const ultra = Ultra({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });

const SansSerifFonts = [roboto, openSans, lato, montserrat, poppins, inter, oswald, nunito, quicksand, rubik, codystar, manrope, inconsolata, karla, outfit, jost, figtree, cabin, mukta, dosis, lexend];
const SerifFonts = [arvo, cinzel, cormorant, domine, spectral, alegreya, prata, amiri, cardo, aleo, rokkitt, gelasio, neuton, fraunces, baskervville, pridi, forum, literata, faustina, playfair, ultra];

const randomSansSerifFont = SansSerifFonts[Math.floor(Math.random() * SansSerifFonts.length)];
const randomSerifFont = SerifFonts[Math.floor(Math.random() * SerifFonts.length)];


export function RandomSerifFontButton() {
  const [fontClass, setFontClass] = useState(SerifFonts[0].className);

  const changeFont = () => {
    const random = SerifFonts[Math.floor(Math.random() * SerifFonts.length)];
    setFontClass(random.className);
  };

  return (
    <Button className={fontClass} onClick={changeFont} variant="outline">
      Serif Button
    </Button>
  );
}

export function RandomSansSerifFontButton() {
  const [fontClass, setFontClass] = useState(SansSerifFonts[0].className);

  const changeFont = () => {

    const random = SansSerifFonts[Math.floor(Math.random() * SansSerifFonts.length)];
    setFontClass(random.className);
  };

  return (
    <Button className={fontClass} onClick={changeFont} variant="outline">
      Sans Serif Button
    </Button>
  );
}
