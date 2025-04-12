import Image from 'next/image'
import { RAYDIS } from "@/pages/_app";
import arrow from '../../public/img/components/arrow.svg'

export default function Tokenomics(){
    return (
        <section id="03Tokenomics" className="_section">
            <div className="max-w-[1200px] mx-auto">
                <h2 className={`${RAYDIS} _h2 text-center`}>
                    TOKENOMICS
                </h2>
                <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 gap-y-2.5 md:gap-5">
                    <div className="flex flex-row justify-between">
                        <div>PRESALE</div>
                        <div>40%</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>Liquidity</div>
                        <div>20%</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>TEAM</div>
                        <div>10%</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>MARKETING</div>
                        <div>10%</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>CEX</div>
                        <div>20%</div>
                    </div>

                </div>
                <div className="w-full mx-auto text-center mt-[58px] md:mt-[30px]">
                    <Image className="md:inline mr-2" src={arrow} alt="->" />
                    LAIKA Token (SOLANA):  xxxxxxxxxxxxxxx
                </div>
            </div>
        </section>
    )
}