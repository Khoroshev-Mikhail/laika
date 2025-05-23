import Image from 'next/image'
import blue from '../../public/img/elements/buttons/blue.png'
import blue_dark from '../../public/img/elements/buttons/blue_dark.png'
import green from '../../public/img/elements/buttons/green.png'
import { RAYDIS } from '@/pages/_app'


export default function Buttons({ blue, green }){
    return(
        <div className="flex flex-row justify-between xs:justify-start xs:gap-x-5 pt-[20px] md:pt-0 relative z-50">
            <a href="https://laika-ai-meme.gitbook.io/laika-ai-meme-v1.1" className={`${RAYDIS} cursor-pointer aspect-[183/63] px-3.5 w-[125px] sm:w-[140px] md:w-[160px] lg:w-[183px] md:min-w-[183px] flex flex-col justify-center bg-cover bg-[url('/img/elements/buttons/blue_dark.png')] bg-no-repeat bg-center pt-2.5 text-[13px] md:text-[15px] lg:text-[17px] xl:text-[20px] text-center text-_blue`}>
                WHITEPAPER
            </a>
            <a href="https://raydium.io/swap/?inputMint=sol&outputMint=2hJBZzXhuX8XguKfQQCiwMC9jPfKpLtygYXEFZjAKR44" className={`${RAYDIS} cursor-pointer aspect-[183/63] px-3.5 w-[125px] sm:w-[140px] md:w-[160px] lg:w-[183px] md:min-w-[183px] flex flex-col justify-center bg-cover bg-[url('/img/elements/buttons/blue.png')] bg-no-repeat bg-center pt-2.5 text-[13px] md:text-[15px] lg:text-[17px] xl:text-[20px] text-center text-white`}>
                RAYDIUM
            </a>

        </div>
    )
}