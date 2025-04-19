import { RAYDIS } from "@/pages/_app";

export default function Roadmap(){
    return (
        <section id="05Roadmap" className="_section relative overflow-hidden py-[10%]">

            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_left_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_left_line.png')] bg-no-repeat bg-left bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_top_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_top_line.png')] bg-no-repeat bg-top bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_right_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_right_line.png')] bg-no-repeat bg-right bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_bottom_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_bottom_line.png')] bg-no-repeat bg-bottom bg-contain z-50"></div>


            <div className="_animate-moveUp z-20 hidden md:block w-full right-0 h-full absolute -bottom-[100%]  bg-contain bg-no-repeat bg-right-bottom bg-[url('/img/components/eclipse.png')]"></div>
            <div className="_animate-moveDown scale-x-[-1] z-20 hidden md:block w-full left-0 h-full absolute -bottom-[100%]  bg-contain bg-no-repeat bg-right-top bg-[url('/img/components/eclipse.png')]"></div>
            <div className="_animate-roadmap z-20 md:hidden w-full h-[100%] absolute left-0  bg-contain bg-no-repeat bg-right scale-x-[-1] bg-[url('/img/components/eclipse_mobile.png')]"></div>
            <div className="_animate-roadmapDown z-20 md:hidden w-full h-[100%] absolute right-0 bg-contain bg-no-repeat bg-right bg-[url('/img/components/eclipse_mobile.png')]"></div>

            <div className="_wrapper">
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${RAYDIS} _h2 !text-left relative _stroke2`}>
                    ROADMAP
                    <span className="absolute block w-full h-full top-0 left-0 _stroke">ROADMAP</span>
                </h2>

                <div className="[&>div>div>div>ul]:list-image-[url(/img/components/04Roadmap/list.svg)] grid grid-rows-4 md:grid-rows-12 grid-cols-2 [&>div>div>div>ul>li]:pl-2 ">
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5">
                        <div className="relative z-30 flex flex-col gap-y-2 md:gap-y-0 justify-center md:flex-row h-48 _phase1 ml-8 pr-8 md:pr-0 md:ml-0 ">
                            <svg  className="absolute -top-[13px] left-[20%] w-7 h-7 scale-x-[-1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" fill="#0874AC" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="100" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full md:w-1/3 sm:text-center md:text-left text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white md:pt-8 `}>
                                Q2 2025: 
                                {/* <span className="text-_purple">1</span> */}
                            </div>
                            <div data-aos-delay="100" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-2/3 md:ml-8 lg:ml-10 xl:ml-4 md:mt-8">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                                    <li>Launch LAIKA token on Solana (Devnet → Mainnet)</li>
                                    <li>Presale and Launch Marketing</li>
                                    <li>Community building: target 5,000 holders</li>
                                    <li>Airdrop campaign</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5">
                        <div className="relative z-30 flex flex-col gap-y-2 md:gap-y-0 justify-center md:flex-row h-48 _phase2 pl-8 md:pl-0 mr-8 mt-[-2px] md:mt-8 md:-ml-0.5 md:pb-8 xl:pb-12">
                            <svg className="absolute fill-[#3658AC] md:fill-[#3658AC] -top-[13px] md:-top-[calc(-100%+14px)] left-[50%] w-7 h-7 md:scale-x-[-1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="200" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full sm:text-center md:text-left md:w-5/12 lg:w-5/12 text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white md:ml-8 lg:ml-10 xl:ml-12`}>
                                Q3 2025:
                                {/* <span className="text-_purple">2</span> */}
                            </div>
                            <div data-aos-delay="200" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-7/12 lg:w-7/12 md:ml-8 lg:ml-10 xl:ml-4">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                                    <li>Laika AI Beta</li>
                                    <li>Community feedback testing</li>
                                    <li>Listed on Coingecko</li>
                                    <li>Listed on Coinmarketcap</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:block hidden col-span-2 _phase-none ml-[60%] -mt-0.5 row-span-2"></div>
                    
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5 md:order-last flex:justify-center md:block pr-8 md:pr-0">
                        <div className="relative z-30 flex w-full md:w-auto flex-col gap-y-2 md:gap-y-0 md:flex-row justify-center h-48 -mt-1 pr-8 md:-mt-0 ml-8 _phase3 md:-ml-0.5 md:pr-8 md:pb-12 xl:pb-12">
                            <svg className="absolute fill-[#0B94E6] md:fill-[#315AA9] -top-[13px] md:-top-[calc(-100%+14px)] left-[15%] w-7 h-7 scale-x-[-1] md:scale-x-[1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="300" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full  sm:text-center md:text-left md:w-5/12 lg:w-5/12 md:ml-8 lg:ml-10 xl:ml-12  text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white`}>
                                Q4 2025:
                                {/* <span className="text-_purple">3</span> */}
                            </div>
                            <div data-aos-delay="300" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-7/12 lg:w-7/12 md:ml-8 lg:ml-10 xl:ml-4 md:pr-2">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                                    <li>Integration of Laika AI </li>
                                    <li>First real-time deployments</li>
                                    <li>New Partnerships</li>
                                    <li>Exchange Listing (CEX)</li>
                                </ul>
                            </div> 
                        </div>    
                    </div>
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5">
                        <div className="relative z-30 flex flex-col gap-y-2 md:gap-y-0 justify-center md:flex-row h-48 _phase4 -mt-1.5 md:-mt-12 mr-8 pl-8 md:pl-0 md:mr-0">
                        <svg className="absolute -top-[13px] left-[80%] fill-[#3081ED] md:fill-[#3D6FD0] md:left-[7%] w-7 h-7 md:scale-x-[1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="500" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full sm:text-center md:text-left md:w-5/12 lg:w-5/12  text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white md:pt-12`}>
                                2026:
                                {/* <span className="text-_purple">4</span> */}
                            </div>
                            <div data-aos-delay="500" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-2/3 md:ml-8 lg:ml-10 xl:ml-4 md:mt-12 pr-8">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px] ">
                                <li>Expansion of Laika AI applications</li>
                                <li>Launch of SDK for developers</li>
                                <li>Focus on global development</li>
                                <li>Charity initiatives</li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}