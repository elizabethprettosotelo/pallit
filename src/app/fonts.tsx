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

//Arrays of fonts
const SansSerifFonts = [roboto, openSans, lato, montserrat, poppins, inter, oswald, nunito, quicksand, rubik, codystar, manrope, inconsolata, karla, outfit, jost, figtree, cabin, mukta, dosis, lexend];
const SerifFonts = [arvo, cinzel, cormorant, domine, spectral, alegreya, prata, amiri, cardo, aleo, rokkitt, gelasio, neuton, fraunces, baskervville, pridi, forum, literata, faustina, playfair, ultra];

// Arrays of font links
const SansSerifFontLinks = ["https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmaiArmlw.woff2", "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVIGxA.woff2", "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxAwXjeu.woff2", "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw3aXpsog.woff2", "https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecmNE.woff2", "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZFhiI2B.woff2", "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUhiZTaR.woff2", "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTo3j77e.woff2", "https://fonts.gstatic.com/s/quicksand/v36/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-wi40.woff2", "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2", "https://fonts.gstatic.com/s/codystar/v17/FwZY7-Q1xVk-40qxOu6J6MmTpA.woff2", "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_M-bnBeA.woff2", "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WRP2l2eY.woff2", "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaHUlKd7c.woff2", "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4i0ExAo.woff2", "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7myjJTVPNIg8mg.woff2", "https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QG5XyEAk4A.woff2", "https://fonts.gstatic.com/s/cabin/v27/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7ilx17r.woff2", "https://fonts.gstatic.com/s/mukta/v16/iJWKBXyXfDDVXbnPrXyi0A.woff2", "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml1RMEfq4.woff2", "https://fonts.gstatic.com/s/lexend/v24/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLlnepKu.woff2"];
const SerifFontLinks = ["https://fonts.gstatic.com/s/arvo/v22/tDbD2oWUg0MKqScQ7Q.woff2", "https://fonts.gstatic.com/s/cinzel/v23/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfYPlDX5Z.woff2", "https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFhFTc71q7T2u.woff2", "https://fonts.gstatic.com/s/domine/v23/L0xhDFMnlVwD4h3Lt9JWnbX3jG-2X3LAE1QfE4Gu.woff2", "https://fonts.gstatic.com/s/spectral/v14/rnCr-xNNww_2s0amA9M3knj-SA.woff2", "https://fonts.gstatic.com/s/alegreya/v36/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU49aqjgSE.woff2", "https://fonts.gstatic.com/s/prata/v20/6xKhdSpbNNCT-sWPCm4.woff2", "https://fonts.gstatic.com/s/amiri/v27/J7aRnpd8CGxBHpUgtLMA7w.woff2", "https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv23IEp2A.woff2", "https://fonts.gstatic.com/s/aleo/v14/c4m61nF8G8_s6gHhIOX0IYBo_KJ3GlP0Fo8aCA.woff2", "https://fonts.gstatic.com/s/rokkitt/v36/qFdb35qfgYFjGy5hukqqhw5XeRgdi1ryd6DCGb-3vA.woff2", "https://fonts.gstatic.com/s/gelasio/v12/cIfiMaFfvUQxTTqS3iKJkLGbI41wQL8Ilxcl8zH-8A.woff2", "https://fonts.gstatic.com/s/neuton/v22/UMBTrPtMoH62xUZCwYg6Qis.woff2", "https://fonts.gstatic.com/s/fraunces/v32/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIctxuTB_7TtUs.woff2", "https://fonts.gstatic.com/s/baskervville/v16/YA9Ur0yU4l_XOrogbkun3kQQvpmptvY.woff2", "https://fonts.gstatic.com/s/pridi/v13/2sDQZG5JnZLfkcWTqWgbbg.woff2", "https://fonts.gstatic.com/s/forum/v18/6aey4Ky-Vb8Ew8IfOpIq3g.woff2", "https://fonts.gstatic.com/s/literata/v35/or3PQ6P12-iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_J__WTFCW.woff2", "https://fonts.gstatic.com/s/faustina/v20/XLY4IZPxYpJfTbZAFXWzNT2SO8wpWHlsgoEfEF-XS8s.woff2", "https://fonts.gstatic.com/s/playfair/v9/0nkQC9D7PO4KhmUJ5_zTZ_4MYQXznAK-TUcZXKO3UMnW6VNpe4-SiiZ4b8h5G3GutPkUeugUqyIA5g.woff2", "https://fonts.gstatic.com/s/ultra/v24/zOLy4prXmrtY-uTzwrKz6A.woff2"];

//Random font selection
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
  const [fontLink, setFontLink] = useState(SansSerifFontLinks[0]); // New state for the font link

  const changeFont = () => {
    const randomIndex = Math.floor(Math.random() * SansSerifFonts.length); // Get random index
    const randomFont = SansSerifFonts[randomIndex];
    setFontClass(randomFont.className);
    setFontLink(SansSerifFontLinks[randomIndex]); // Update the link using the same index
  };

  return (
  <Button className={fontClass} onClick={changeFont} variant="outline">
    Sans Serif Button
    <br />
    <a href={fontLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8em', color: 'blue', textDecoration: 'underline' }}>
      Link
    </a>
  </Button>
);
}
