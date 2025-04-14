import Image from 'next/image'
import { RAYDIS } from "@/pages/_app";
import arrow from '../../public/img/components/arrow.svg'
import Ticker from '../elements/Ticker';

export default function Tokenomics(){
    return (
        <section id="03Tokenomics" className="_section relative overflow-hidden">
            <div className="w-full relative z-50">
                <Ticker left dark />
            </div>


            <div className="hidden md:block absolute z-20 top-1/3 left-0 bg-left bg-no-repeat bg-contain h-[40%] w-full bg-[url('/img/components/03Tokenomics/coins_left.png')]"></div>
            <div className="hidden md:block absolute z-20 top-1/3 right-0 bg-right bg-no-repeat bg-contain h-[40%] w-full bg-[url('/img/components/03Tokenomics/coins_right.png')]"></div>
            
            <div className="md:hidden absolute z-20 bottom-0 left-0 bg-left-bottom bg-no-repeat bg-contain h-full w-1/3 bg-[url('/img/components/03Tokenomics/coins_left_mobile.png')]"></div>
            <div className="md:hidden absolute z-20 bottom-1/4 right-0 bg-right-bottom bg-no-repeat bg-contain h-full w-1/3 bg-[url('/img/components/03Tokenomics/coins_right_mobile.png')]"></div>

            <div className="absolute z-10 bottom-0 left-0 bg-bottom bg-no-repeat bg-cover w-full h-full bg-[url('/img/components/03Tokenomics/bg_mobile.png')] md:bg-[url('/img/components/03Tokenomics/bg.png')]"></div>
            

            <div className="max-w-[1200px] mx-auto z-50 relative py-[10%] p-4">
                <h2 className={`${RAYDIS} _h2 text-center`}>
                    TOKENOMICS
                </h2>
                <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-4 md:grid-rows-3 gap-y-2.5 md:gap-4 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                    <div className="aspect-[590/90] md:col-span-2 flex flex-row justify-between bg-[url('/img/components/03Tokenomics/1.png')] bg-no-repeat bg-left bg-contain px-5 xs:px-8 md:px-7 lg:px-8">
                        <div className={`flex justify-center flex-col ${RAYDIS}`}>PRESALE</div>
                        <div className="flex justify-center flex-col font-bold text-_purple">40%</div>
                    </div>
                    <div className="aspect-[590/90] md:col-span-2 flex flex-row justify-between bg-[url('/img/components/03Tokenomics/2.png')] bg-no-repeat bg-left bg-contain px-5 xs:px-8 md:px-7 lg:px-8">
                        <div className={`flex justify-center flex-col ${RAYDIS}`}>Liquidity</div>
                        <div className="flex justify-center flex-col font-bold text-_purple">20%</div>
                    </div>
                    <div className="aspect-[590/90] md:col-span-2 flex flex-row justify-between bg-[url('/img/components/03Tokenomics/3.png')] bg-no-repeat bg-left bg-contain px-5 xs:px-8 md:px-7 lg:px-8">
                        <div className={`flex justify-center flex-col ${RAYDIS}`}>TEAM</div>
                        <div className="flex justify-center flex-col font-bold text-_purple">10%</div>
                    </div>
                    <div className="aspect-[590/90] md:col-span-2 flex flex-row justify-between bg-[url('/img/components/03Tokenomics/4.png')] bg-no-repeat bg-left bg-contain px-5 xs:px-8 md:px-7 lg:px-8">
                        <div className={`flex justify-center flex-col ${RAYDIS}`}>MARKETING</div>
                        <div className="flex justify-center flex-col font-bold text-_purple">10%</div>
                    </div>
                    <div className="aspect-[590/90] md:col-span-2 md:col-start-2 md:col-end-4 flex flex-row justify-between bg-[url('/img/components/03Tokenomics/5.png')] bg-no-repeat bg-left bg-contain px-4 sm:px-6 md:px-7 lg:px-8">
                        <div className={`flex justify-center flex-col ${RAYDIS}`}>CEX</div>
                        <div className="flex justify-center flex-col font-bold text-_purple">20%</div>
                    </div>

                </div>
                <div className="w-full mx-auto text-center pt-[15%] pb-[20%] md:pt-0 md:pb-0 md:mt-[30px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                    <Image className="block md:inline md:mr-2 mx-auto" src={arrow} alt="->" />
                    LAIKA Token (SOLANA): xxxxxxxxxxxxxxx
                </div>
            </div>
        </section>
    )
}