import { RAYDIS } from "@/pages/_app";

export default function Roadmap(){
    return (
        <section id="05Roadmap" className="_section relative overflow-hidden py-[10%]">

            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_left_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_left_line.png')] bg-no-repeat bg-left bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_top_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_top_line.png')] bg-no-repeat bg-top bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_right_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_right_line.png')] bg-no-repeat bg-right bg-contain z-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/components/04Roadmap/bg_bottom_line_mobile.png')] md:bg-[url('/img/components/04Roadmap/bg_bottom_line.png')] bg-no-repeat bg-bottom bg-contain z-50"></div>


            <div className="_animate-moveUp hidden md:block w-full -left-1/2 h-[180%] absolute -bottom-[100%]  bg-contain bg-no-repeat bg-[url('/img/components/eclipse.webp')]"></div>
            <div className="_animate-moveUp hidden md:block w-full -right-1/2 h-[180%] absolute -bottom-[100%]  bg-contain bg-no-repeat bg-[url('/img/components/eclipse.webp')]"></div>
            <div className="_animate-roadmap md:hidden w-full h-[100%] absolute left-0 -z-50 bg-contain bg-no-repeat bg-right scale-x-[-1] bg-[url('/img/components/eclipse_mobile.webp')]"></div>

            <div className="_wrapper">
                <h2 className={`${RAYDIS} _h2 !text-left`}>ROADMAP</h2>

                <div className="[&>div>div>div>ul]:list-image-[url(/img/components/04Roadmap/list.svg)] grid grid-rows-4 md:grid-rows-12 grid-cols-2 [&>div>div>div>ul>li]:pl-2 ">
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5">
                        <div className="relative flex flex-col gap-y-2 md:gap-y-0 justify-center md:flex-row h-48 _phase1 ml-8 pr-8 md:pr-0 md:ml-0 ">
                            <svg  className="absolute -top-[13px] left-[20%] w-7 h-7 scale-x-[-1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" fill="#0874AC" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="100" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full md:w-1/3 sm:text-center md:text-left text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white md:pt-10 `}>
                                PHASE <span className="text-_purple">1</span>
                            </div>
                            <div data-aos-delay="100" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-2/3 md:ml-8 lg:ml-10 xl:ml-12 md:mt-8">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[14px] sm:text-[16px] xl:text-[20px]">
                                    <li>Create website</li>
                                    <li>Presale and Launch Marketing</li>
                                    <li>Crypto influencers AMA</li>
                                    <li>Community 5000 holder</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5">
                        <div className="relative flex flex-col gap-y-2 md:gap-y-0 justify-center md:flex-row h-48 _phase2 pl-8 md:pl-0 mr-8 mt-[-2px] md:mt-8 md:-ml-0.5 md:pb-8 xl:pb-12">
                            <svg className="absolute fill-[#3658AC] md:fill-[#3658AC] -top-[13px] md:-top-[calc(-100%+14px)] left-[50%] w-7 h-7 md:scale-x-[-1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="200" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full sm:text-center md:text-left md:w-5/12 lg:w-5/12 text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white md:ml-8 lg:ml-10 xl:ml-12`}>
                                PHASE <span className="text-_purple">2</span>
                            </div>
                            <div data-aos-delay="200" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-7/12 lg:w-7/12 md:ml-8 lg:ml-10 xl:ml-12">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[14px] sm:text-[16px] xl:text-[20px]">
                                    <li>Listed on Coinmarketcap </li>
                                    <li>Listed on Coingecko </li>
                                    <li>Partnership with Marketing Agencies</li>
                                    <li>Community 10000 holders </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:block hidden col-span-2 _phase-none ml-[60%] -mt-0.5 row-span-2"></div>
                    
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5 md:order-last flex:justify-center md:block pr-8 md:pr-0">
                        <div className="relative flex w-full md:w-auto flex-col gap-y-2 md:gap-y-0 md:flex-row justify-center h-48 -mt-1 pr-8 md:-mt-0 ml-8 _phase3 md:-ml-0.5 md:pr-8 md:pb-12 xl:pb-12">
                            <svg className="absolute fill-[#0B94E6] md:fill-[#315AA9] -top-[13px] md:-top-[calc(-100%+14px)] left-[15%] w-7 h-7 scale-x-[-1] md:scale-x-[1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="300" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full  sm:text-center md:text-left md:w-5/12 lg:w-5/12 md:ml-8 lg:ml-10 xl:ml-12  text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white`}>
                                PHASE <span className="text-_purple">3</span>
                            </div>
                            <div data-aos-delay="300" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-7/12 lg:w-7/12 md:ml-8 lg:ml-10 xl:ml-12 md:pr-2">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[14px] sm:text-[16px] xl:text-[20px]">
                                    <li>Global marketing </li>
                                    <li>Community 15000 holders </li>
                                    <li>New Partnerships</li>
                                    <li>Exchange Listing CEX</li>
                                </ul>
                            </div> 
                        </div>    
                    </div>
                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-5">
                        <div className="relative flex flex-col gap-y-2 md:gap-y-0 justify-center md:flex-row h-48 _phase4 -mt-1.5 md:-mt-12 mr-8 pl-8 md:pl-0 md:mr-0">
                        <svg className="absolute -top-[13px] left-[80%] fill-[#3081ED] md:fill-[#3D6FD0] md:left-[7%] w-7 h-7 md:scale-x-[1] " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42"><path fillRule="nonzero" d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"/></svg>
                            <div data-aos-delay="500" data-aos="zoom-in" data-aos-duration="1500"  className={`${RAYDIS} block w-full sm:text-center md:text-left md:w-5/12 lg:w-5/12  text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-white md:pt-12`}>
                                PHASE <span className="text-_purple">4</span>
                            </div>
                            <div data-aos-delay="500" data-aos="zoom-in" data-aos-duration="1500"  className="block sm:mx-auto md:w-2/3 md:ml-8 lg:ml-10 xl:ml-12 md:mt-12 pr-8">
                                <ul className="pl-4 md:pl-0 leading-tight md:leading-normal list-disc marker:text-_purple font-normal text-[16px] xs:text-[14px] sm:text-[16px] xl:text-[20px] ">
                                    <li>Community 100000 holders </li>
                                    <li>New Exchange Listing CEX </li>
                                    <li>Focus on global development </li>
                                    <li>CHARITY</li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>






                {/* <div className="grid grid-rows-4 md:grid-rows-12 grid-cols-2 ">
                    <div className="relative z-20 col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 ml-6 md:ml-4 md:pl-4 xl:pl-10 pr-10 pt-10 pb-6 md:mb-4 rounded-lb-3xl rounded-r-3xl md:rounded-r-none border-b-2 md:border-b-0 border-t-2 md:rounded-tr-3xl border-r-2 flex flex-col md:flex-row border-_orange">
                        <div className={`${RAYDIS} w-1/3 _24px text-_orange `}>
                            PHASE 1
                        </div>
                        <div className="w-2/3 md:pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Create website</li>
                                <li>Presale and Launch</li>
                                <li>Marketing</li>
                                <li>Crypto influencers AMA</li>
                                <li>Community 5000 holder</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative z-30 col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 md:pl-4 xl:pl-10 pr-0 mr-9 pt-6 pb-10 mt-[-2px] mb-[-2px] md:mb-0 md:-ml-0.5 md:mt-4 rounded-l-3xl md:rounded-l-none border-t-2 md:border-t-0 md:rounded-bl-3xl border-b-2 border-l-2 flex border-_orange">
                        <div className={`${RAYDIS} w-1/3 _24px text-_orange`}>
                            PHASE 2
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Listed on Coinmarketcap </li>
                                <li>Listed on Coingecko </li>
                                <li>Partnership with Marketing Agencies</li>
                                <li>Community 10000 holders </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2 row-span-1 border-r-2 border-t-2 -mt-0.5 pl-10 -mb-5 pr-5 mr-5 ml-[55%] rounded-tr-3xl border-_orange">

                    </div>

                    <div className="relative z-50 md:z-40 order-last md:order-none col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 md:pl-4 xl:pl-10 pt-10 pb-7 mb-4 mr-10 md:mr-0 pr-10 border-l-2 md:border-l-0 border-b-2 md:border-b-0 rounded-l-3xl md:rounded-l-none md:rounded-tr-3xl border-t-2 md:border-r-2 flex border-_orange">
                        <div className={`${RAYDIS} w-1/3 _24px text-_orange`}>
                            PHASE 4
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold !sm:text-[14px]">
                                <li>Community 100000 holders </li>
                                <li>New Exchange Listing CEX </li>
                                <li>Focus on global development </li>
                                <li>CHARITY</li>
                            </ul>
                        </div> 
                    </div>
                    <div className="relative z-40 md:z-50 col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 ml-6 mb-[-2px] md:mb-0 md:pl-4 xl:pl-10 pr-5 mr-5 pt-5 md:mt-5 pb-10 rounded-r-3xl md:rounded-r-none md:rounded-bl-3xl md:rounded-br-3xl border-t-2 md:border-t-0 md:border-l-2 md:-ml-0.5 border-b-2 border-r-2 flex border-_orange">
                        <div className={`${RAYDIS} w-1/3 _24px text-_orange -ml-6 md:-ml-0`}>
                            PHASE 3
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Global marketing </li>
                                <li>Community 15000 holders </li>
                                <li>New Partnerships</li>
                                <li>Exchange Listing CEX</li>
                            </ul>
                        </div> 
                    </div>
                </div> */}

            </div>
        </section>
    )
}