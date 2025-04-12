import { DRUK_WIDE } from "@/pages/_app";
import Image from 'next/image'
import giraffix from '../../public/img/components/07Footer/giraffix.webp'
import lines_left from '../../public/img/components/07Footer/lines-left.webp'
import lines_right from '../../public/img/components/07Footer/lines-right.webp'
import Social from "../elements/Social";

export default function Footer(){
    return (
        <section id="06Footer" className="_section mt-14 xs:mt-20 md:mt-40">
            <div className="_wrapper">
                <div className="_shadow flex flex-col sm:flex-row justify-between bg-gradient-to-r md:bg-gradient-to-tr from-[#FF922E] to-[#FF5824] rounded-[35px]">
                    <div className="relative w-full sm:w-1/2 basis-1/2 flex flex-col  py-[38px] md:py-[60px] lg:py-[80px] justify-between overflow-hidden rounded-t-[35px]">

                        <div className="absolute top-[20%] -left-[55%] sm:-left-[25%] w-[80%] sm:w-[60%] h-full bg-[url('/img/components/07Footer/lines.webp')] scale-x-[-1] bg-left-top bg-no-repeat bg-contain"></div>
                        <div className="absolute -bottom-[50%] sm:bottom-[5%] -right-[60%] sm:-right-[18%] w-[80%] sm:w-[60%] h-full bg-[url('/img/components/07Footer/lines.webp')]  scale-y-[-1] bg-right-bottom bg-no-repeat bg-contain"></div>

                        <div className={`${DRUK_WIDE} text-[#2A2A2A] font-medium text-[28px] xs:text-[36px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] uppercase text-center tracking-tight leading-tight`}>
                            <span className="_text-shadow-footer">Join our</span> <br/> 
                            <span className="_text-shadow-footer">Giraffix</span> <br/>
                            <span className="bg-[#FFCC53] px-2 sm:px-4 sm:py-1 rounded-xl">
                                <span className="_text-shadow-footer">fan club</span>
                            </span>
                        </div>
                        <div className="mt-5 md:mt-0 md:pl-[5%]">
                            <Social black className={'justify-center md:justify-start'}/>
                        </div>
                    </div>
                    <div className=" w-full sm:w-1/2 md:basis-1/2 flex flex-col pl-3 sm:pl-0 pt-0 sm:pt-3 pb-3 pr-3">
                        <Image className=" mx-auto justify-center" src={giraffix}/>
                    </div>
                    
                </div>
                <div className="md:py-14 py-9 text-center font-medium text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FF922E]">
                    Giraffix 2024 Copyright © All Right Reserved
                </div>
            </div>
        </section>
    )
}