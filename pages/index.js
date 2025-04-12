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
                <title>Giraffix</title>
                <meta httpEquiv="content-language" content="en" />
                <meta name="description" content="The Giraffix Meme Token is a modern meme and cryptocurrency project that merges fun and finance in the world of decentralized finance (DeFi)." />
                <link rel="shortcut icon" href="/img/favicon.png" />
          </Head>
          <Header/>
          <div className="relative w-full h-auto ">
              <div className="absolute w-full h-full bg-[url('/img/components/bg.png')] bg-contain bg-center bg-repeat-y opacity-25 -z-30"></div>
              <About/>
              <Tokenomics/>
              <Partners/>
              <Roadmap/>
              <Feedback/>
              <Footer/>
          </div>
      </>
  );
}
