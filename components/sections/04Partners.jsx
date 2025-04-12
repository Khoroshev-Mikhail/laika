import Image from 'next/image'
import partner_1 from '../../public/img/components/04Partners/1.webp'
import partner_2 from '../../public/img/components/04Partners/2.webp'
import partner_3 from '../../public/img/components/04Partners/3.webp'
import partner_4 from '../../public/img/components/04Partners/4.webp'
import partner_5 from '../../public/img/components/04Partners/5.webp'
import partner_6 from '../../public/img/components/04Partners/6.webp'
import partner_7 from '../../public/img/components/04Partners/7.webp'
import { DRUK_WIDE } from "@/pages/_app";

export default function Partners(){
    return (
        <section id="04Partners" className="_section relative overflow-visible mt-28">

            <div className="_animate-moveUp hidden md:block w-full h-[250%] absolute -bottom-[100%] -z-50 bg-contain bg-no-repeat bg-[url('/img/components/eclipse.webp')]"></div>
            <div className="_animate-moveUp md:hidden w-full h-[200%] absolute -bottom-[100%] right-0 -z-50 bg-contain bg-no-repeat bg-right bg-[url('/img/components/eclipse_mobile.webp')]"></div>

            <div className="_wrapper">
                <h2 className={`${DRUK_WIDE} _h2 text-center w-full`}>PARTNERS</h2>
                
                <div className='grid grid-cols-12 grid-rows-2 w-full bg-_gray rounded-3xl p-6 md:p-8 lg:p-10 xl:p-14 sm:gap-10'>
                    <div className='col-span-12 w-full sm:w-full sm:col-span-3'>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full" src={partner_3} />
                        </div>
                    </div>
                    <div className='col-span-12 full sm:w-full sm:col-span-3'>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full ml-auto" src={partner_2} />
                        </div>
                    </div>
                    <div className='col-span-12 w-full sm:w-full sm:col-span-3'>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full " src={partner_1} />
                        </div>
                    </div>
                    <div className='col-span-12 w-full sm:w-full sm:col-span-3'>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full ml-auto" src={partner_4} />
                        </div>
                    </div>
                    <div className='col-span-12 w-full sm:w-full sm:col-span-4'>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full" src={partner_5} />
                        </div>
                    </div>
                    <div className='col-span-12 w-full sm:w-full sm:col-span-4'>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full ml-auto" src={partner_6} />
                        </div>
                    </div>
                    <div className='col-span-12 w-full sm:w-full sm:col-span-4 '>
                        <div className='flex flex-col w-full h-full justify-center'>
                            <Image data-aos="fade-right" data-aos-duration="1500" className="block w-1/2 sm:w-full " src={partner_7} />
                        </div>
                    </div>
                </div>

                {/* <div className='flex flex-col w-full bg-_gray rounded-3xl p-14'>

                    <div className='flex flex-row justify-between gap-x-10'>
                        <div className='w-1/4 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_1} />
                            </div>
                        </div>
                        <div className='md:basis-1/4 md:w-1/4 w-1/2 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_2} />
                            </div>
                        </div>
                        <div className='md:basis-1/4 md:w-1/4 w-1/2 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_3} />
                            </div>
                        </div>
                        <div className='md:basis-1/4 md:w-1/4 w-1/2 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_4} />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around mt-[3%]'>
                        <div className='md:basis-1/4 md:w-1/4 w-1/2 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_5} />
                            </div>
                        </div>
                        <div className='md:basis-1/4 md:w-1/4 w-1/2 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_6} />
                            </div>
                        </div>
                        <div className='md:basis-1/4 md:w-1/4 w-1/2 basis-1/2'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_7} />
                            </div>
                        </div>
                    </div> */}
                    
                {/* </div> */}
            </div>
         </section>
    )
}