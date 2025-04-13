import Image from "next/image";
import Marquee from "react-fast-marquee";
import { RAYDIS } from "@/pages/_app";

export default function Ticker({left, dark}){
    return(
        <div className="relative bg-_blue">
            <Marquee autoFill direction={left ? 'left' : 'right'}>
                <div className={`${RAYDIS} mx-[-1px] bg-_green text-_black uppercase flex xs:text-[30px] ${ dark ? 'bg-_[#001137]' : 'bg-_blue'}`}>
                    <div className="flex flex-col justify-center">
                        <p className="block px-[9px] -mb-[6px]">LAIKA</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}