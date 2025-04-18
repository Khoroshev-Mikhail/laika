import Image from 'next/image'
import icon_1 from '../../public/img/components/02About/1.svg'
import icon_2 from '../../public/img/components/02About/2.svg'
import icon_3 from '../../public/img/components/02About/2.svg'
import { RAYDIS } from "@/pages/_app";

export default function About(){
    return (
        <section id="02About" className="_section relative z-50 overflow-hidden py-[10%]">

        <div className="absolute w-full h-full z-10 top-0 left-0 bg-left bg-no-repeat bg-cover bg-[url('/img/components/02About/bg.webp')]"></div>
        {/* <div className="absolute z-10 top-0 left-[5%] bg-left-bottom bg-no-repeat bg-contain h-[20%] w-full bg-[url('/img/components/02About/jupiter.png')]"></div> */}
        {/* <div className="scale-x-[-1] absolute z-10 top-1/3 -left-[5%] bg-left-top bg-no-repeat bg-contain h-[20%] w-full bg-[url('/img/components/02About/jupiter.png')]"></div> */}

        <div
            style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
            }}
            className="absolute z-10 top-0 bg-contain w-full h-full bg-[url('/img/components/02About/grid.webp')] bg-no-repeat">
        </div>


            <div className="flex flex-col mx-auto relative z-40">
                <h2 className={`${RAYDIS} _h2 _stroke2 relative`} >
                    Laika is talking to you:
                    <span className="absolute block w-full h-full top-0 left-0 _stroke">Laika is talking to you:</span>
                </h2>
                <div className="grid grid-rows-3 grid-cols-1 p-4 w-full md:w-2/3 max-w-xl lg:w-1/2 mx-auto gap-y-[5px] md:gap-y-[10px]">
                    <div className="col-span-1 row-span-1 flex flex-row justify-start p-[12px] md:p-[12px] gap-x-3 xs:bg-[url('/img/components/02About/bg_line.png')] bg-[url('/img/components/02About/bg_line_mobile.png')] aspect-[280/60] xs:aspect-[552/79] bg-no-repeat bg-left bg-contain">
                        <Image className="block" src={icon_1} alt="" />
                        <div className="flex flex-col">
                            <div className="text-white text-[20px] md:text-[22px] lg:text-[24px]">Live Laika</div>
                            <div className="text-_blue text-[14px] md:text-[16px]">Experience the Laika</div>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 flex flex-row justify-start p-[12px] md:p-[12px] gap-x-3 xs:bg-[url('/img/components/02About/bg_line.png')] bg-[url('/img/components/02About/bg_line_mobile.png')] aspect-[280/60] xs:aspect-[552/79] bg-no-repeat bg-left bg-contain">
                        <Image className="block" src={icon_2} alt="" />
                        <div className="flex flex-col">
                            <div className="text-white text-[20px] md:text-[22px] lg:text-[24px]">Whitepaper</div>
                            <div className="text-_blue text-[14px] md:text-[16px]">View the whitepaper</div>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 flex flex-row justify-start p-[12px] md:p-[12px] gap-x-3 xs:bg-[url('/img/components/02About/bg_line.png')] bg-[url('/img/components/02About/bg_line_mobile.png')] aspect-[280/60] xs:aspect-[552/79] bg-no-repeat bg-left bg-contain">
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