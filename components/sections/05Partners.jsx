import Image from 'next/image'
import partner_1 from '../../public/img/components/04Partners/1.webp'
import partner_2 from '../../public/img/components/04Partners/2.webp'
import partner_3 from '../../public/img/components/04Partners/3.webp'
import partner_4 from '../../public/img/components/04Partners/4.webp'
import partner_5 from '../../public/img/components/04Partners/5.webp'
import partner_6 from '../../public/img/components/04Partners/6.webp'
import partner_7 from '../../public/img/components/04Partners/7.webp'
import { RAYDIS } from "@/pages/_app";
import Ticker from '../elements/Ticker'

export default function Partners(){
    return (
        <section id="04Partners" className="_section relative overflow-visible py-[180px]">


            <div className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-[url('/img/components/04Partners/grid_top.png')] bg-top z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-contain bg-no-repeat bg-[url('/img/components/04Partners/grid_bottom.png')] bg-bottom z-10"></div>
            <div className="_animate-moveUp hidden md:block w-full h-[250%] absolute -bottom-[100%] -z-50 bg-contain bg-no-repeat bg-[url('/img/components/eclipse.webp')]"></div>
            <div className="_animate-moveUp md:hidden w-full h-[200%] absolute -bottom-[100%] right-0 -z-50 bg-contain bg-no-repeat bg-right bg-[url('/img/components/eclipse_mobile.webp')]"></div>



            <div className="_wrapper">
                <h2 className={`${RAYDIS} _h2 text-center w-full`}>PARTNERS</h2>

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