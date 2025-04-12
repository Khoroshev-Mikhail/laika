import {  DRUK_WIDE, RAYDIS } from "@/pages/_app";
import Image from "next/image";
import { useState } from "react";
import Social from "../elements/Social";

import burger from '../../public/img/components/01Header/burger.svg'
import arrow from '../../public/img/components/01Header/arrow.svg'
// import giraffix_menu from '../../public/img/components/01Header/giraffix_menu.webp'
import cross from '../../public/img/components/01Header/cross.svg'
import laika_big from '../../public/img/components/01Header/laika_big.png'
import laika_mini from '../../public/img/components/01Header/laika_mini.png'

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return (
        <section id="01Header" className="_section relative md:aspect-video">
            <div className="absolute top-0 -left-50 w-full h-full bg-[url('/img/components/01Header/bg_frame.png')] bg-no-repeat bg-contain bg-center -z-40"></div>
            <div className="absolute top-0 w-full h-full bg-[url('/img/components/01Header/bg.png')] bg-no-repeat bg-cover -z-50"></div>
            
            
            <div className="_wrapper flex flex-col md:aspect-video">

                {/* Меню */}
                <div className="flex justify-between mt-4 md:mt-8 xl:mt-10">
                    <div className="">
                            <div className="flex md:hidden">
                                <Social />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center pb-1 relative z-40 cursor-pointer" onClick={()=> setIsHidden(false) }>
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
                <div className="flex flex-col md:aspect-video md:flex-row overflow-hidden">
                    
                    <div className="w-1/2">
                        <div className="hidden md:flex">
                            <Social />
                        </div>
                        
                        <h1>LAIKA MEME</h1>

                        <div>
                            <Image className="inline mr-2" src={arrow} alt="->" />
                            Laika, once the first dog in space, is back — not just on Earth, but on the blockchain. Reborn as a meme-based space icon on Solana, she now roams the digital galaxy, leading the charge to combine decentralization with AI. 
                        </div>

                        <div className="flex gap-x-4">
                            <a className="" href="">WhITEPAPER</a>
                            <a className="" href="">PRESALE</a>
                        </div>
                    </div>

                    <div className="w-1/2 max-h-1/2">
                        <Image className="hidden md:block" src={laika_big} alt="LAIKA MEME"/>
                        <Image className="md:hidden" src={laika_mini} alt="LAIKA MEME"/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}