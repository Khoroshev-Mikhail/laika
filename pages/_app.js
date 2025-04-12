import "@/styles/globals.css";
import { Manrope } from 'next/font/google'
import { Finlandica } from 'next/font/google'
import { druk_wide} from 'next/font/google'
import { useEffect } from 'react'
import localFont from 'next/font/local'
import AOS from "aos";
import "aos/dist/aos.css";

const MANROPE_FONT = Manrope({ subsets: ['latin'] })
export const MANROPE = MANROPE_FONT.className
const FINLANDICA_FONT = Finlandica({ subsets: ['latin'] })
export const FINLANDICA = FINLANDICA_FONT.className

const DRUK_WIDE_FONT = localFont({ src: '../public/fonts/Druk_Wide.woff2' })
export const DRUK_WIDE = DRUK_WIDE_FONT.className
const RAYDIS_FONT = localFont({ src: '../public/fonts/RAYDIS.woff2' })
export const RAYDIS = RAYDIS_FONT.className




export default function App({ Component, pageProps }) {
  useEffect(()=>{
      AOS.init({
          once: true
      })
  }, [])
  return (
      <main className={`${FINLANDICA} text-white`}>
          <Component {...pageProps} />
      </main>
  )
}
