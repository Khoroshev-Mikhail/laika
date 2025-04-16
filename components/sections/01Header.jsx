import {  DRUK_WIDE, RAYDIS } from "@/pages/_app";
import Image from "next/image";
import { useState } from "react";
import Social from "../elements/Social";

import burger from '../../public/img/components/01Header/burger.svg'
import arrow from '../../public/img/components/01Header/arrow.svg'
import cross from '../../public/img/components/01Header/cross.svg'
import laika_big from '../../public/img/components/01Header/laika_big.png'
import laika_mini from '../../public/img/components/01Header/laika_mobile.png'
import Buttons from "../elements/Buttons";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return (
        <section id="01Header" className="_section relative ">

<div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_left_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_left_line.png')] bg-no-repeat bg-left bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_top_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_top_line.png')] bg-no-repeat bg-top bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_right_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_right_line.png')] bg-no-repeat bg-right bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_bottom_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_bottom_line.png')] bg-no-repeat bg-bottom bg-contain z-50"></div>
            <div className="absolute top-0 -left-50 w-full h-full bg-[url('/img/components/01Header/bg_frame.png')] bg-no-repeat bg-contain bg-center -z-40"></div>
            <div className="absolute w-full h-full -bottom-[70%] bg-[url('/img/components/01Header/earth.png')] bg-no-repeat bg-contain z-0"></div>
            <div className="md:hidden absolute w-full h-full -bottom-[15%] bg-[url('/img/components/01Header/blur.png')] bg-no-repeat bg-contain bg-bottom z-0"></div>
            
            
            <div className="_wrapper flex flex-col">

                {/* Меню */}
                <div className="flex justify-between mt-4 md:mt-8 xl:mt-10">
                    <div className="">
                            <div className="flex md:hidden">
                                <Social />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center pb-1 relative z-50 cursor-pointer" onClick={()=> setIsHidden(false) }>
                            <Image src={burger} alt="Menu" className="w-[39px] md:w-auto"/>
                        </div>
                </div>




                {/* Выдвижное меню */}
                <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full  bg-gradient-to-br to-[#FF5924] from-[#FF932F] rounded-b-2xl `}>

                    <div className="relative py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                        <Image className="absolute top-5 md:top-10 right-5 cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                        
                        <menu className={`${RAYDIS} block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-black`}>
                            <li className="flex justify-center md:justify-start w-full" onClick={()=> setIsHidden(true) }><a href="#01Header">HOME</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#03Tokenomics">TOKENOMICS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#04Partners">PARTNERS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#05Roadmap">ROADMAP</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#06Footer">CONTACTS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5 py-[60px] xl:py-[100px] ">
                                <Social black/>
                            </li>
                        </menu>
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            {/* <Image src={giraffix_menu} alt="" className="block  bottom-0 right-0 w-full" /> */}
                        </div>
                        
                    </div>
                </div>   



                {/* Основа */}
                <div className="flex flex-col md:flex-row overflow-hidden">
                    
                    <div className="md:w-1/2">
                        <div className="hidden md:flex">
                            <Social />
                        </div>
                        
                        <h1 className={`${RAYDIS} pt-[50px] font-bold  text-[60px] xs:text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] leading-[30px]`}>
                            LAIKA <span className="_30_90 leading-[40px]">MEME</span>
                        </h1>

                        <div className="pt-[10px] leading-none">
                            <Image className="inline mr-2" src={arrow} alt="->" />
                            Laika, once the first dog in space, is back — not just on Earth, <span className="text-_purple">but on the blockchain.</span> Reborn as a meme-based space icon on Solana, she now roams the digital galaxy, leading the charge to combine decentralization with AI. 
                        </div>

                        <div className="pt-[10px]">
                            <Buttons />
                        </div>
                    </div>

                    <div className="w-1/2 max-h-1/2 flex flex-row justify-between mx-auto">
                        <Image className="hidden md:block" src={laika_big} alt="LAIKA MEME"/>
                        <Image className="md:hidden block mx-auto relative z-40" src={laika_mini} alt="LAIKA MEME"/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}