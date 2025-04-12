import Head from 'next/head'
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/sections/01Header";
import About from "@/components/sections/02About";
import Tokenomics from "@/components/sections/03Tokenomics";
import Partners from "@/components/sections/04Partners";
import Feedback from '@/components/sections/06Feedback';
import Footer from '@/components/sections/07Footer';
import Roadmap from '@/components/sections/05Roadmap';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>

        <Head>
            <title>LAIKA MEME</title>
            <meta httpEquiv="content-language" content="en" />
            <meta name="description" content="Laika, once the first dog in space, is back — not just on Earth, but on the blockchain. Reborn as a meme-based space icon on Solana, she now roams the digital galaxy, leading the charge to combine decentralization with AI." />
            <link rel="shortcut icon" href="/img/favicon.png" />
        </Head>

        {/* <Header/> */}
        <About/>
        <Tokenomics/>
        <Partners/>
        <Roadmap/>
        <Feedback/>
        <Footer/>
      </>
  );
}
