import { RAYDIS } from "@/pages/_app";
import Image from 'next/image'
import laika from '../../public/img/components/07Footer/laika.png'
import Social from "../elements/Social";
import Ticker from "../elements/Ticker";
import Buttons from "../elements/Buttons";

export default function Footer(){
    return (
        <section id="06Footer" className="_section relative z-50 overflow-hidden">

            <div className="_animate-moveDown z-20 hidden md:block w-[200%] right-0 h-[200%] absolute -bottom-[100%]  bg-contain bg-no-repeat bg-right-bottom bg-[url('/img/components/eclipse.png')]"></div>
            <div className="_animate-moveUp scale-x-[-1] z-20 hidden md:block w-[200%] left-0 h-[200%] absolute -bottom-[100%]  bg-contain bg-no-repeat bg-right-top bg-[url('/img/components/eclipse.png')]"></div>

            <div className="w-full">
                <Ticker />
            </div>
            <div className="_wrapper pt-[10%]">
                <div className=" border-_blue border-2 p-2.5 pt-10 md:pt-0 md:p-0 flex flex-col gap-y-8 md:flex-row relative z-40 md:overflow-hidden bg-[#010D31] bg-opacity-50 overflow-hidden">
                {/* <div className="absolute w-full h-full left-0 top-0 bg-[#010D31] -z-10 bg-transparent-1/2"> </div> */}

                <div className="hidden md:block absolute w-[100%] h-[100%]  right-0 bottom-0 bg-[url('/img/components/07Footer/earth.png')] bg-contain bg-no-repeat bg-right-bottom -z-20"> </div> 
                <div className="md:hidden absolute w-[110%] h-[110%] -right-1/4 -bottom-[14%] xs:w-[90%] xs:h-[90%] bg-[url('/img/components/07Footer/earth_mobile.png')] bg-contain bg-no-repeat bg-right-bottom -z-20"> </div> 
                
                    <div className="flex flex-col relative z-40 sm:justify-between md:pt-[70px] md:pb-[50px] md:pl-[50px] xs:gap-y-5">
                        <h2 strokeWidth="10" className={`${RAYDIS} _h2 stroke-2 text-center md:text-left leading-none`}>
                            JOIN TO LAIKA COMMUNITY
                        </h2>
                        <div className=" md:pt-[10%] relative z-50">
                            <Buttons blue/>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-end">
                        <div className="w-full h-full xs:w-7/12 xs:mx-auto md:h-auto md:w-10/12 lg:w-full lg:pr-[5%] pb-[3%]">
                            <Image className="md:h-full w-auto" src={laika} alt="Laika meme"/>
                        </div>
                    </div>
                </div>
                <div className="relative z-40 md:pb-10 pb-9 pt-[10%] text-center font-medium text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4C77E6]">
                    Laike MEME 2025 Copyright © All Right Reserved
                </div>

                <div className="absolute w-full h-full left-0 top-0 bg-[url('/img/components/07Footer/bg.png')] bg-cover bg-no-repeat bg-top z-0"> </div>
            </div>
        </section>
    )
}