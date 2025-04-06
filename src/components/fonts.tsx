'use client';

import { ReactNode } from 'react';
import { useState } from 'react';

//heading fonts

import { Righteous } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { Prata } from 'next/font/google';
import { Aleo } from 'next/font/google';
import { Gelasio } from 'next/font/google';
import { Neuton } from 'next/font/google';
import { Fraunces } from 'next/font/google';
import { Pridi } from 'next/font/google';
import { Ultra } from 'next/font/google';
import { Audiowide } from 'next/font/google';
import { Zen_Dots } from 'next/font/google';
import { Bevan } from 'next/font/google';
import { Gloock } from 'next/font/google';
import { Jersey_15 } from 'next/font/google';

//subheading

import { Roboto_Flex } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Nunito } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { Codystar } from 'next/font/google';
import { Dosis } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Alegreya } from 'next/font/google';
import { Baskervville } from 'next/font/google';
import { Forum } from 'next/font/google';
import { Wire_One } from 'next/font/google';
import { Rufina } from 'next/font/google';

//body text fonts


import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Inconsolata } from 'next/font/google';
import { Karla } from 'next/font/google';
import { Outfit } from 'next/font/google';
import { Jost } from 'next/font/google';
import { Figtree } from 'next/font/google';
import { Lexend } from 'next/font/google';
import { Arvo } from 'next/font/google';
import { Cormorant } from 'next/font/google';
import { Domine } from 'next/font/google';
import { Spectral } from 'next/font/google';
import { Literata } from 'next/font/google';
import { Faustina } from 'next/font/google';
import { Playfair } from 'next/font/google';
import { Syne_Mono } from 'next/font/google';


//button 
import { Button } from "@/components/ui/button"

// heading font imports
const righteous = Righteous({ subsets: ['latin'], weight: ['400'], variable: '--font-righteous' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400'], variable: '--font-oswald' });
const prata = Prata({ subsets: ['latin'], weight: ['400'], variable: '--font-prata' });
const aleo = Aleo({ subsets: ['latin'], weight: ['400'], variable: '--font-aleo' });
const gelasio = Gelasio({ subsets: ['latin'], weight: ['400'], variable: '--font-gelasio' });
const neuton = Neuton({ subsets: ['latin'], weight: ['400'], variable: '--font-neuton' });
const fraunces = Fraunces({ subsets: ['latin'], weight: ['400'], variable: '--font-fraunces' });
const pridi = Pridi({ subsets: ['latin'], weight: ['400'], variable: '--font-pridi' });
const ultra = Ultra({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'], variable: '--font-audiowide' });
const zen_dots = Zen_Dots({ subsets: ['latin'], weight: ['400'], variable: '--font-zen-dots' });
const bevan = Bevan({ subsets: ['latin'], weight: ['400'], variable: '--font-bevan' });
const gloock = Gloock({ subsets: ['latin'], weight: ['400'], variable: '--font-gloock' });
const jersey_15 = Jersey_15({ subsets: ['latin'], weight: ['400'], variable: '--font-jersey-15' });



//subheading font imports
const roboto_flex = Roboto_Flex({ subsets: ['latin'], weight: ['400'], variable: '--font-roboto-flex' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'], variable: '--font-montserrat' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400'], variable: '--font-nunito' });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400'], variable: '--font-quicksand' });
const codystar = Codystar({ subsets: ['latin'], weight: ['400'], variable: '--font-codystar' });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'], variable: '--font-dosis' });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'], variable: '--font-cinzel' });
const alegreya = Alegreya({ subsets: ['latin'], weight: ['400'], variable: '--font-alegreya' });
const baskervville = Baskervville({ subsets: ['latin'], weight: ['400'], variable: '--font-baskervville' });
const forum = Forum({ subsets: ['latin'], weight: ['400'], variable: '--font-forum' });
const wireOne = Wire_One({ subsets: ['latin'], weight: ['400'], variable: '--font-wire-one' });
const rufina = Rufina({ subsets: ['latin'], weight: ['400'], variable: '--font-rufina' });


//body text font imports
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], variable: '--font-open-sans' });
const lato = Lato({ subsets: ['latin'], weight: ['400'], variable: '--font-lato' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], weight: ['400'], variable: '--font-inter' });
const rubik = Rubik({ subsets: ['latin'], weight: ['400'], variable: '--font-rubik' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400'], variable: '--font-manrope' });
const inconsolata = Inconsolata({ subsets: ['latin'], weight: ['400'], variable: '--font-inconsolata' });
const karla = Karla({ subsets: ['latin'], weight: ['400'], variable: '--font-karla' });
const outfit = Outfit({ subsets: ['latin'], weight: ['400'], variable: '--font-outfit' });
const jost = Jost({ subsets: ['latin'], weight: ['400'], variable: '--font-jost' });
const figtree = Figtree({ subsets: ['latin'], weight: ['400'], variable: '--font-figtree' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400'], variable: '--font-lexend' });
const arvo = Arvo({ subsets: ['latin'], weight: ['400'], variable: '--font-arvo' });
const cormorant = Cormorant({ subsets: ['latin'], weight: ['400'], variable: '--font-cormorant' });
const domine = Domine({ subsets: ['latin'], weight: ['400'], variable: '--font-domine' });
const spectral = Spectral({ subsets: ['latin'], weight: ['400'], variable: '--font-spectral' });
const literata = Literata({ subsets: ['latin'], weight: ['400'], variable: '--font-literata' });
const faustina = Faustina({ subsets: ['latin'], weight: ['400'], variable: '--font-faustina' });
const playfair = Playfair({ subsets: ['latin'], weight: ['400'], variable: '--font-playfair' });
const syneMono = Syne_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-syne-mono' });


//arrays

const headingFonts = [
  righteous,
  oswald,
  prata,
  aleo,
  gelasio,
  neuton,
  fraunces,
  pridi,
  ultra,
  audiowide,
  zen_dots,
  bevan,
  gloock,
  jersey_15,
];


const subheadingFonts = [
  roboto_flex,
  montserrat,
  nunito,
  quicksand,
  codystar,
  dosis,
  cinzel,
  alegreya,
  baskervville,
  forum,
  wireOne,
  rufina
];

const bodytextFonts = [
  openSans,
  lato,
  poppins,
  inter,
  rubik,
  manrope,
  inconsolata,
  karla,
  outfit,
  jost,
  figtree,
  lexend,
  arvo,
  cormorant,
  domine,
  spectral,
  literata,
  faustina,
  playfair,
  syneMono
];


// Arrays of font links
const headingFontLink = [
  "https://fonts.gstatic.com/s/righteous/v17/1cXxaUPXBpj2rGoU7C9WhnGFucE.woff2",
  "https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUhiZTaR.woff2",
  "https://fonts.gstatic.com/s/prata/v20/6xKhdSpbNNCT-sWPCm4.woff2",
  "https://fonts.gstatic.com/s/aleo/v14/c4m61nF8G8_s6gHhIOX0IYBo_KJ3GlP0Fo8aCA.woff2",
  "https://fonts.gstatic.com/s/gelasio/v12/cIfiMaFfvUQxTTqS3iKJkLGbI41wQL8Ilxcl8zH-8A.woff2",
  "https://fonts.gstatic.com/s/neuton/v22/UMBTrPtMoH62xUZCwYg6Qis.woff2",
  "https://fonts.gstatic.com/s/fraunces/v32/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIctxuTB_7TtUs.woff2",
  "https://fonts.gstatic.com/s/pridi/v13/2sDQZG5JnZLfkcWTqWgbbg.woff2",
  "https://fonts.gstatic.com/s/ultra/v24/zOLy4prXmrtY-uTzwrKz6A.woff2",
  "https://fonts.gstatic.com/s/audiowide/v20/l7gdbjpo0cum0ckerWCdmA_OIxo.woff2",
  "https://fonts.gstatic.com/s/zendots/v12/XRXX3ICfm00IGoesQdaNRs71cA.woff2",
  "https://fonts.gstatic.com/s/bevan/v24/4iCj6KZ0a9NXjG8TWCvLtg.woff2",
  "https://fonts.gstatic.com/s/gloock/v6/Iurb6YFw84WUY4NJhhakNrc.woff2",
  "https://fonts.gstatic.com/s/jersey15/v3/_6_9EDzuROGsUuk2TWjia4AggCk.woff2"
];

const subHeadingFontLink = [
  "https://fonts.gstatic.com/s/robotoflex/v27/NaNnepOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGbt8jZktqc2V3Zs0KvDLdBP8SBZtOs2IifRuUZQMsPJtUsR4DEK6cULNeUx9XgTnH37Ha_FIAp4Fm0PP1hw45DntW2x0wZGzhPmr1YNMYKYn9_1IQXGwJAiUJVUMdN5YUW4O8HtSoXjC1z3QSabshNFVe3e0O5j3ZjrZCu23Qd4G0EBysQNK-QKavMl1cKq3tHXtXi8mzLjaAcbiknRNC.woff2",
  "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw3aXpsog.woff2",
  "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTo3j77e.woff2",
  "https://fonts.gstatic.com/s/quicksand/v36/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-wi40.woff2",
  "https://fonts.gstatic.com/s/codystar/v17/FwZY7-Q1xVk-40qxOu6J6MmTpA.woff2",
  "https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml1RMEfq4.woff2",
  "https://fonts.gstatic.com/s/cinzel/v23/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfYPlDX5Z.woff2",
  "https://fonts.gstatic.com/s/alegreya/v36/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU49aqjgSE.woff2",
  "https://fonts.gstatic.com/s/baskervville/v16/YA9Ur0yU4l_XOrogbkun3kQQvpmptvY.woff2",
  "https://fonts.gstatic.com/s/forum/v18/6aey4Ky-Vb8Ew8IfOpIq3g.woff2",
  "https://fonts.gstatic.com/s/wireone/v28/qFdH35Wah5htUhV75VGlU9s.woff2",
  "https://fonts.gstatic.com/s/rufina/v15/Yq6V-LyURyLy-aKCqh5lhOc.woff2"
];

const bodyTextFontLinks = [
  "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmaiArmlw.woff2",
  "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVIGxA.woff2",
  "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxAwXjeu.woff2",
  "https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecmNE.woff2",
  "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZFhiI2B.woff2",
  "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2",
  "https://fonts.gstatic.com/s/codystar/v17/FwZY7-Q1xVk-40qxOu6J6MmTpA.woff2",
  "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_M-bnBeA.woff2",
  "https://fonts.gstatic.com/s/inconsolata/v32/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WRP2l2eY.woff2",
  "https://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaHUlKd7c.woff2",
  "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4i0ExAo.woff2",
  "https://fonts.gstatic.com/s/jost/v18/92zPtBhPNqw79Ij1E865zBUv7myjJTVPNIg8mg.woff2",
  "https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QG5XyEAk4A.woff2",
  "https://fonts.gstatic.com/s/lexend/v24/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLlnepKu.woff2",
  "https://fonts.gstatic.com/s/arvo/v22/tDbD2oWUg0MKqScQ7Q.woff2",
  "https://fonts.gstatic.com/s/cinzel/v23/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfYPlDX5Z.woff2",
  "https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFhFTc71q7T2u.woff2",
  "https://fonts.gstatic.com/s/domine/v23/L0xhDFMnlVwD4h3Lt9JWnbX3jG-2X3LA"
]


//Random font selection
const randomHeadingFont = headingFonts[Math.floor(Math.random() * headingFontLink.length)];
const randomSubheadingFont = subheadingFonts[Math.floor(Math.random() * subHeadingFontLink.length)];
const randomBodyFont = bodytextFonts[Math.floor(Math.random() * bodyTextFontLinks.length)];


export function RandomHeadingButton() {
  const [fontClass, setFontClass] = useState(headingFonts[0].className);
  const [fontLink, setFontLink] = useState(headingFontLink[0]); // New state for the font link

  const changeFont = () => {
    const randomIndex = Math.floor(Math.random() * headingFonts.length); // Get random index
    const randomFont = headingFonts[randomIndex];
    setFontClass(randomFont.className);
    setFontLink(headingFontLink[randomIndex]); // Update the link using the same index
  };

}

export function RandomSubheadingButton() {
  const [fontClass, setFontClass] = useState(subheadingFonts[0].className);
  const [fontLink, setFontLink] = useState(subHeadingFontLink[0]); // New state for the font link

  const changeFont = () => {
    const randomIndex = Math.floor(Math.random() * subheadingFonts.length); // Get random index
    const randomFont = subheadingFonts[randomIndex];
    setFontClass(randomFont.className);
    setFontLink(subHeadingFontLink[randomIndex]); // Update the link using the same index
  };

} 

export function RandomBodyTextButton() {
  const [fontClass, setFontClass] = useState(bodytextFonts[0].className);
  const [fontLink, setFontLink] = useState(bodyTextFontLinks[0]); // New state for the font link

  const changeFont = () => {
    const randomIndex = Math.floor(Math.random() * bodytextFonts.length); // Get random index
    const randomFont = bodytextFonts[randomIndex];
    setFontClass(randomFont.className);
    setFontLink(bodyTextFontLinks[randomIndex]); // Update the link using the same index
  };
}

// fonts.tsx
export {
  headingFonts,
  subheadingFonts,
  bodytextFonts
};
