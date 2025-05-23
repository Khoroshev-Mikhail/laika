import Image from 'next/image'
import partner_1 from '../../public/img/components/05Partners/1.webp'
import partner_2 from '../../public/img/components/05Partners/2.webp'
import partner_3 from '../../public/img/components/05Partners/3.webp'
import partner_4 from '../../public/img/components/05Partners/4.webp'
import partner_5 from '../../public/img/components/05Partners/5.webp'
import partner_6 from '../../public/img/components/05Partners/6.webp'
import partner_7 from '../../public/img/components/05Partners/7.webp'
import { RAYDIS } from "@/pages/_app";

export default function Partners(){
    return (
        <section id="04Partners" className="_section relative overflow-hidden py-[10%]">
            <div className="absolute top-0 left-0 w-full h-full bg-cover md:bg-cover bg-no-repeat md:bg-[url('/img/components/05Partners/bg.png')] bg-[url('/img/components/05Partners/bg_mobile.png')] bg-center md:bg-left-top z-10"></div>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-[url('/img/components/05Partners/bg_2.png')] bg-left-top z-10"></div> */}
            
            <div  style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
            }}
            className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat md:bg-[url('/img/components/05Partners/grid_top.png')] bg-[url('/img/components/05Partners/grid_top_mobile.png')] z-10"></div>
            <div 
                style={{
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
              }}
            className="absolute bottom-0 left-0 w-full h-full bg-contain bg-no-repeat md:bg-[url('/img/components/05Partners/grid_bottom.png')] bg-[url('/img/components/05Partners/grid_bottom_mobile.png')] bg-bottom z-10"></div>

            <div className="_animate-moveUp hidden md:block w-full h-[250%] absolute -bottom-[100%] -z-40 bg-contain bg-no-repeat bg-[url('/img/components/eclipse.webp')]"></div>
            <div className="_animate-moveUp md:hidden w-full h-[200%] absolute -bottom-[100%] right-0 z-40 bg-contain bg-no-repeat bg-right bg-[url('/img/components/eclipse_mobile.png')]"></div>



            <div className="_wrapper relative z-40">
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${RAYDIS} _h2 text-center w-full relative _stroke2`}>
                    PARTNERS
                    <span className="absolute block w-full h-full top-0 left-0 _stroke">PARTNERS</span>
                </h2>

                <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-12 md:grid-rows-2 gap-10">
                    <div className="col-span-1 md:col-span-4 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_1} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_2} alt="" />
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-4 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_3} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_4} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_5} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_6} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 flex justify-center mx-auto">
                        <div className="flex flex-col justify-center w-11/12 md:w-full">
                            <Image src={partner_7} alt="" />
                        </div>
                    </div>
                </div>
            

            </div>


         </section>
    )
}