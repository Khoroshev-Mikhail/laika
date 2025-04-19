import { RAYDIS } from "@/pages/_app";
import Image from 'next/image'
import laika from '../../public/img/components/07Footer/laika.webp'
import Social from "../elements/Social";
import Ticker from "../elements/Ticker";
import Buttons from "../elements/Buttons";

export default function Footer(){
    return (
        <section id="06Footer" className="_section relative z-40 overflow-hidden">

            <div className="_animate-moveDown z-20 hidden md:block w-[200%] right-0 h-[200%] absolute -bottom-[100%]  bg-contain bg-no-repeat bg-right-bottom bg-[url('/img/components/eclipse.webp')]"></div>
            <div className="_animate-moveUp scale-x-[-1] z-20 hidden md:block w-[200%] left-0 h-[200%] absolute -bottom-[100%]  bg-contain bg-no-repeat bg-right-top bg-[url('/img/components/eclipse.webp')]"></div>
            


            <div className="w-full">
                <Ticker />
            </div>
            <div className="_wrapper pt-[10%]">
                <div className=" border-_blue border-2  md:pt-0 md:p-0 flex flex-col gap-y-8 md:flex-row relative z-30 md:overflow-hidden bg-[#010D31] bg-opacity-50 overflow-hidden">
                {/* <div className="absolute w-full h-full left-0 top-0 bg-[#010D31] -z-10 bg-transparent-1/2"> </div> */}

                <div className="hidden md:block absolute md:top-0 left-[5%] w-full h-full bg-[url('/img/components/07Footer/line_top.svg')] bg-no-repeat bg-left-top z-40"></div>
                <div className="hidden md:block absolute md:top-0 right-[10%] w-full h-full bg-[url('/img/components/07Footer/line_top_2.svg')] bg-no-repeat bg-right-top z-40"></div>
                <div className="absolute bottom-[2%] left-[5%] w-full h-full bg-[url('/img/components/07Footer/line_bottom.svg')] bg-no-repeat bg-left-bottom z-40"></div>
                <div className="hidden md:block absolute w-[100%] h-[100%]  right-0 bottom-0 bg-[url('/img/components/07Footer/earth.webp')] bg-contain bg-no-repeat bg-right-bottom -z-20"> </div> 
                <div className="absolute w-[120%] h-[120%] opacity-70 -bottom-[20%] -right-[40%] bg-[url('/img/components/01Header/blur2.webp')] bg-no-repeat bg-contain bg-bottom z-20"></div>
                <div className="md:hidden absolute w-[110%] h-[110%] -right-1/4 -bottom-[14%] xs:w-[90%] xs:h-[90%] bg-[url('/img/components/07Footer/earth_mobile.webp')] bg-contain bg-no-repeat bg-right-bottom -z-20"> </div> 
                
                    <div className="flex flex-col relative z-30 sm:justify-between md:pt-[70px] md:pb-[50px] md:pl-[50px] xs:gap-y-5 overflow-hidden">

                    
                    {/* <div className="absolute top-0 z-40 -left-1/4 w-full h-full skew-x-[45deg] border-2 border-_blue"></div> */}

                    
                        <h2 data-aos="fade-right" data-aos-duration="1500" strokeWidth="10" className={`${RAYDIS} _h2 relative stroke-2 _stroke2 text-center md:text-left leading-none mt-14 md:mt-4 `}>
                            JOIN TO LAIKA COMMUNITY
                            <div className="absolute w-full h-full top-0 left-0 _stroke">JOIN TO LAIKA COMMUNITY</div>
                        </h2>
                        <div data-aos="fade-right" data-aos-duration="1500" className=" md:pt-[10%] relative z-40">
                            <Buttons blue/>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-end relative z-40">
                        <div className="w-full h-full xs:w-7/12 xs:mx-auto md:h-auto md:w-10/12 lg:w-full lg:pr-[5%] pb-[3%]">
                            <Image className="md:h-full w-auto" src={laika} alt="Laika meme"/>
                        </div>
                    </div>
                </div>
                <div className="relative z-30 md:pb-10 pb-9 pt-[10%] text-center font-medium text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4C77E6]">
                    Laike MEME 2025 Copyright © All Right Reserved
                </div>

                <div className="absolute w-full h-full left-0 top-0 bg-[url('/img/components/07Footer/bg.webp')] bg-cover bg-no-repeat bg-top z-0"> </div>
            </div>
        </section>
    )
}