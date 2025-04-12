import Image from 'next/image'
import icon_1 from '../../public/img/components/02About/1.svg'
import icon_2 from '../../public/img/components/02About/2.svg'
import icon_3 from '../../public/img/components/02About/2.svg'
import { RAYDIS } from "@/pages/_app";

export default function About(){
    return (
        <section id="02About" className="_section relative ">


            <div className="flex flex-col mx-auto">
                <h2 className={`${RAYDIS} _h2`} >
                    Laika is talking to you:
                </h2>
                <div className="grid grid-rows-3 grid-cols-1 w-1/2 max-w-xl lg:w-1/3 ma mx-auto gap-y-[5px] md:gap-y-[10px]">
                    <div className="col-span-1 row-span-1 flex flex-row justify-start p-[12px] md:p-[12px] gap-x-3 bg-_blue">
                        <Image className="block" src={icon_1} alt="" />
                        <div className="flex flex-col">
                            <div className="text-white text-[20px] md:text-[22px] lg:text-[24px]">Live Laika</div>
                            <div className="text-_blue text-[14px] md:text-[16px]">Experience the Laika</div>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 flex flex-row justify-start p-[12px] md:p-[12px] gap-x-3 bg-_blue">
                        <Image className="block" src={icon_2} alt="" />
                        <div className="flex flex-col">
                            <div className="text-white text-[20px] md:text-[22px] lg:text-[24px]">Whitepaper</div>
                            <div className="text-_blue text-[14px] md:text-[16px]">View the whitepaper</div>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 flex flex-row justify-start p-[12px] md:p-[12px] gap-x-3 bg-_blue">
                        <Image className="block" src={icon_3} alt="" />
                        <div className="flex flex-col">
                            <div className="text-white text-[20px] md:text-[22px] lg:text-[24px]">Github</div>
                            <div className="text-_blue text-[14px] md:text-[16px]">Brouse the source code</div>
                        </div>
                    </div>
                </div>
            </div>        

        </section>
    )
}