import Image from 'next/image'
import { DRUK_WIDE } from "@/pages/_app";
import presale from '../../public/img/components/03Tokenomics/presale.svg'
import liquidity from '../../public/img/components/03Tokenomics/liquidity.svg'

export default function Tokenomics(){
    return (
        <section id="03Tokenomics" className="_section mt-28">
            <div className="_wrapper flex flex-col">
                <h2 className={`${DRUK_WIDE} _h2 `}>OUR TOKENOMICS</h2>
                <div className="grid grid-cols-12 grid-rows-2 gap-2.5 md:gap-5 ">
                    <div data-aos="fade-right" data-aos-duration="1500" className="relative col-span-12 lg:col-span-6 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray overflow-hidden">
                        <div className="absolute w-full h-full -right-[25%] md:-right-0 -top-[0%] md:top-0 bg-[url('/img/components/03Tokenomics/eclipse.png')] bg-cover md:bg-auto bg-no-repeat bg-right z-30"></div>
                        <p className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase relative z-30`}>Total Supply</p>
                        <p className="text-white text-[16px] md:text-[30px] font-extrabold relative z-30">1 000 000 000 GIRAFFIX</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="col-span-12 sm:col-span-6 lg:col-span-3 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={presale}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase`}>PRESALE</div>
                        </div>
                        <p className="text-white text-[16px] md:text-[30px] font-extrabold">40%</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="col-span-12 sm:col-span-6 lg:col-span-3 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase`}>Liquidity</div>
                        </div>
                        <p className="text-white text-[16px] md:text-[30px] font-extrabold">20%</p>
                    </div>

                    <div className='col-span-12 lg:col-span-6 grid grid-cols-12 gap-2.5 md:gap-5'>

                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-12 sm:col-span-6 lg:col-span-5 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray">
                            <div className="flex justify-start">
                                <Image className="inline pr-2" src={liquidity}/>
                                <div className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase`}>Team</div>
                            </div>
                            <p className="text-white text-[16px] md:text-[30px] font-extrabold">10%</p>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-12 sm:col-span-6 lg:col-span-7 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray">
                            <div className="flex justify-start">
                                <Image className="inline pr-2" src={liquidity}/>
                                <div className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase`}>Marketing</div>
                            </div>
                            <p className="text-white text-[16px] md:text-[30px] font-extrabold">10%</p>
                        </div>

                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="col-span-12 sm:col-span-6 lg:col-span-2 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase`}>Cex</div>
                        </div>
                        <p className="text-white text-[16px] md:text-[30px] font-extrabold">20%</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="relative col-span-12 sm:col-span-6 lg:col-span-4 shadow-inner shadow-_orange rounded-3xl p-6 md:p-8 bg-_gray overflow-hidden">
                        <div className="absolute w-full h-full -right-[25%] md:-right-[0%] top-0 bg-[url('/img/components/03Tokenomics/eclipse.png')] bg-cover bg-no-repeat bg-right z-30"></div>
                        <p className={`${DRUK_WIDE} text-_orange text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium uppercase relative z-50`}>GIRAFFIX Token</p>
                        <p className="text-white text-[16px] md:text-[30px] font-extrabold relative z-50">Cpdn3dNSogW4PGPzX4KECm<wbr/>7kzqEJd5TAXk15cPUgyVFQ</p>
                    </div>
                </div>
            </div>
        </section>
    )
}