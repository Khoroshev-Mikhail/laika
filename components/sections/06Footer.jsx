import { RAYDIS } from "@/pages/_app";
import Image from 'next/image'
import laika from '../../public/img/components/07Footer/laika.png'
import Social from "../elements/Social";
import Ticker from "../elements/Ticker";
import Buttons from "../elements/Buttons";

export default function Footer(){
    return (
        <section id="06Footer" className="_section relative z-50 overflow-hidden">

            <div className="w-full">
                <Ticker />
            </div>
            <div className="_wrapper pt-[10%]">
                <div className=" border-_blue border-2 p-2.5 pt-10 flex flex-col gap-y-8 md:flex-row relative z-40 md:overflow-hidden">
                {/* <div className="absolute w-full h-full left-0 top-0 bg-[#010D31] -z-10 bg-transparent-1/2"> </div> */}

                <div className="hidden md:block absolute w-[100%] h-[100%] right-0 bottom-0 bg-[url('/img/components/07Footer/earth.png')] bg-contain bg-no-repeat bg-right-bottom -z-20"> </div> 
                <div className="md:hidden absolute w-[110%] h-[110%] -right-1/4 -bottom-[14%] bg-[url('/img/components/07Footer/earth_mobile.png')] bg-contain bg-no-repeat bg-right-bottom -z-20"> </div> 
                
                    <div className="flex flex-col relative z-40 ">
                        <h2 strokeWidth="10" className={`${RAYDIS} _h2 stroke-2 text-center !sm:text-left leading-none`}>
                            JOIN TO LAIKA COMMUNITY
                        </h2>
                        <div>
                            <Buttons blue/>
                        </div>
                    </div>
                    <div>
                        <Image src={laika} alt="Laika meme"/>
                    </div>
                </div>
                <div className="relative z-40 md:pb-14 pb-9 pt-[10%] text-center font-medium text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#4C77E6]">
                    Laike MEME 2025 Copyright © All Right Reserved
                </div>

                <div className="absolute w-full h-full left-0 top-0 bg-[url('/img/components/07Footer/bg.png')] bg-cover bg-no-repeat bg-top z-0"> </div>
            </div>
        </section>
    )
}