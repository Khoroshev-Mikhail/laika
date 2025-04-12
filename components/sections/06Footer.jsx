import { RAYDIS } from "@/pages/_app";
import Image from 'next/image'
import laika from '../../public/img/components/07Footer/laika.png'
import Social from "../elements/Social";
import Ticker from "../elements/Ticker";

export default function Footer(){
    return (
        <section id="06Footer" className="_section">
            <div className="w-full">
                <Ticker />
            </div>
            <div className="_wrapper">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <h2 className={`${RAYDIS} _h2`}>
                            JOIN TO LAIKA COMMUNITY
                        </h2>
                        <div>
                            КНОПКИ
                        </div>
                    </div>
                    <div>
                        <Image src={laika} alt="Laika meme"/>
                    </div>
                </div>
                <div className="md:py-14 py-9 text-center font-medium text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FF922E]">
                Laike MEME 2025 Copyright © All Right Reserved
                </div>
            </div>
        </section>
    )
}