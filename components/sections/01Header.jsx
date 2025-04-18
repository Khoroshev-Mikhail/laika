import { RAYDIS } from "@/pages/_app";
import Image from "next/image";
import { useState } from "react";


import burger from '../../public/img/components/01Header/burger.svg'
import arrow from '../../public/img/components/01Header/arrow.svg'
import cross from '../../public/img/components/01Header/cross.svg'
import laika_big from '../../public/img/components/01Header/laika_big.webp'
import laika_mini from '../../public/img/components/01Header/laika_mobile.webp'
import earth from '../../public/img/components/01Header/earth.webp'
import Buttons from "../elements/Buttons";
import Social from "../elements/Social";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return (
        <section id="01Header" className="_section relative overflow-hidden">
            <div className="absolute w-full h-full top-0 bg-[url('/img/components/01Header/bg_stars.webp')] bg-no-repeat bg-center bg-cover z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_left_line_mobile.webp')] md:bg-[url('/img/components/01Header/bg_left_line.webp')] bg-no-repeat bg-left bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_top_line_mobile.webp')] md:bg-[url('/img/components/01Header/bg_top_line.webp')] bg-no-repeat bg-top bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_right_line_mobile.webp')] md:bg-[url('/img/components/01Header/bg_right_line.webp')] bg-no-repeat bg-right bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/01Header/bg_bottom_line_mobile.webp')] md:bg-[url('/img/components/01Header/bg_bottom_line.webp')] bg-no-repeat bg-bottom bg-contain z-50"></div>
            <div className="absolute w-full md:w-[120%] md:h-[120%] h-full -bottom-[70%] md:-bottom-[10%] md:-right-[15%] md:bg-right-bottom bg-[url('/img/components/01Header/earth.webp')] bg-no-repeat bg-contain z-20 opacity-70"></div>
            <div className="absolute w-[120%] h-[120%] opacity-70 -bottom-[20%] -right-[10%]  md:-right-[25%] bg-[url('/img/components/01Header/blur2.png')] bg-no-repeat bg-contain bg-bottom z-40"></div>
            <div className="hidden md:block absolute w-[24px] h-[24px] top-6 left-7 bg-[url('/img/components/01Header/bg_arrow.svg')] bg-no-repeat bg-cover  z-50"></div>
            <div className="hidden md:block scale-[-1] absolute w-[24px] h-[24px] bottom-10 right-7 bg-[url('/img/components/01Header/bg_arrow.svg')] bg-no-repeat bg-cover  z-50"></div>
            <div
            style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
            }}
            className="scale-y-[-1] absolute z-10 top-0 bg-contain w-full h-full bg-[url('/img/components/02About/grid.webp')] bg-no-repeat">
        </div>
            
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
                <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full  bg-gradient-to-br from-[#3756C7] to-[#000F67] rounded-b-2xl `}>

                    <div className="relative py-4 sm:py-4 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                        <Image className="absolute top-5 md:top-10 right-5 cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                        
                        <menu className={`${RAYDIS} block md:w-1/2 w-full relative z-50 text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[40px] mt-10 text-_white`}>
                            <li className="flex justify-center md:justify-start w-full" onClick={()=> setIsHidden(true) }><a href="#01Header">HOME</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#03Tokenomics">TOKENOMICS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#04Partners">PARTNERS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#05Roadmap">ROADMAP</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#06Footer">CONTACTS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5 py-[10px] md:py-[60px] xl:py-[100px] ">
                                <Social black/>
                            </li>
                        </menu>
                        <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                            <Image src={laika_mini} alt="" className="block w-1/2 mx-auto md:w-full" />
                            <Image src={earth} alt="" className="block absolute opacity-50 w-full -bottom-[10%] -right-1/4 md:scale-[2] md:bottom-0 -z-20" />
                        </div>
                        
                    </div>
                </div>   



                {/* Основа */}
                
                <div className="flex flex-col md:flex-row overflow-hidden relative z-40 md:px-2">
                    
                    
                        <div className="md:w-1/2 flex flex-col justify-center -mt-[10%] md:-mt-[0%]">
                            <div className="hidden md:flex">
                                <Social />
                            </div>
                            
                            <h1 className={`${RAYDIS} relative _stroke2 mt-[76px] sm:mt-[100px] md:mt-[30px] font-bold mx-3 text-[60px] xs:text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] leading-[30px] xs:leading-[45px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] xl:leading-[90px]`}>
                                LAIKA<br /> <span className="_30_90 leading-[40px] md:leading-none">MEME</span>
                                <div className="absolute block w-full h-full top-0 left-0 _stroke">
                                    LAIKA<br /> <span className="_30_90 leading-[40px] md:leading-none">MEME</span>
                                </div>
                            </h1>

                            <div className="pt-[10px] leading-none md:w-full lg:w-2/3 text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px]">
                                <Image className="inline mr-2" src={arrow} alt="->" />
                                Laika, once the first dog in space, is back — not just on Earth, <span className="text-_purple">but on the blockchain.</span> Reborn as a meme-based space icon on Solana, she now roams the digital galaxy, leading the charge to combine decentralization with AI. 
                            </div>

                            <div className="pt-[10px] xs:pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[70px]">
                                <Buttons />
                            </div>
                        </div>


                    <div className="w-1/2 max-h-1/2 flex flex-row justify-between mx-auto">
                        <Image className="hidden md:block relative z-40" src={laika_big} alt="LAIKA MEME"/>
                        <Image className="md:hidden block mx-auto relative z-40" src={laika_mini} alt="LAIKA MEME"/>
                    </div>
                </div>

            </div>
        </section>
    )
}