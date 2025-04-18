import Image from "next/image";
import Marquee from "react-fast-marquee";
import { RAYDIS } from "@/pages/_app";

export default function Ticker({left, dark}){
    return(
        <div className="relative bg-_blue z-50">
            <Marquee autoFill direction={left ? 'left' : 'right'}>
                <div className={`${RAYDIS} mx-[-1px]  uppercase flex xs:text-[20px] ${ dark ? 'bg-_[#001137]' : 'bg-_blue'}`}>
                    <div className="flex flex-col justify-center py-2">
                        <p className="block px-[9px] -mb-[6px] _stroke_ticker_2 relative text-[#001137]">
                            LAIKA
                            <div className="absolute w-full h-full _stroke_ticker top-0">
                                LAIKA
                            </div>
                        </p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}