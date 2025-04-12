import "@/styles/globals.css";
import { Finlandica } from 'next/font/google'
import { useEffect } from 'react'
import localFont from 'next/font/local'
import AOS from "aos";
import "aos/dist/aos.css";

const FINLANDICA_FONT = Finlandica({ subsets: ['latin'] })
export const FINLANDICA = FINLANDICA_FONT.className
const RAYDIS_FONT = localFont({ src: '../public/fonts/RAYDIS.woff2' })
export const RAYDIS = RAYDIS_FONT.className




export default function App({ Component, pageProps }) {
  useEffect(()=>{
      AOS.init({
          once: true
      })
  }, [])
  return (
      <main className={`${FINLANDICA} text-white bg-[#01133A]`}>
          <Component {...pageProps} />
      </main>
  )
}
