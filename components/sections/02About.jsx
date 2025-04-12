import Image from 'next/image'
import icon_1 from '../../public/img/components/02About/icon_1.svg'
import icon_2 from '../../public/img/components/02About/icon_2.svg'
import giraffix_desktop from '../../public/img/components/02About/giraffix_desktop.webp'
import giraffix_mobile from '../../public/img/components/02About/giraffix_mobile.webp'
import lines_left from '../../public/img/components/02About/lines-left.webp'
import lines_right from '../../public/img/components/02About/lines-right.webp'
import { DRUK_WIDE } from '@/pages/_app'

export default function About(){
    return (
        <section id="02About" className="_section relative">

            <div className="_animate-mission hidden md:block w-full scale-x-[-1]  h-[120%] absolute -bottom-1/2 -z-40 bg-contain bg-no-repeat bg-[url('/img/components/eclipse.webp')]"></div>

            <div className="_wrapper flex flex-col justify-between overflow-hidden font-extrabold text-black pb-2">
                <h2 className={`${DRUK_WIDE} _h2 text-center mt-14`}>About girafix</h2>

                <div className="grid grid-rows-1 grid-cols-2 w-full gap-5 text-white">
                    <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col col-span-2 sm:col-span-1 row-span-1 p-[40px] bg-_gray rounded-[45px] relative bg-[url('/img/components/02about/eclipse2.webp')] bg-no-repeat bg-right-top bg-contain">
                        <Image src={icon_2}/>
                        <p className='text-[16px] lg:text-[20px] font-extrabold mt-5'>In 2024, a funny meme called <span className='text-_orange'>GiraffX</span> emerged due to an error in an artificial intelligence program, which mistakenly classified giraffes as "giraffes", evoking images of giraffes in urban settings ("giraffe" + "traffic").</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="flex flex-col col-span-2 sm:col-span-1 row-span-1 p-[40px] bg-_gray rounded-[45px] relative bg-[url('/img/components/02about/eclipse2.webp')] bg-no-repeat bg-right-top bg-contain">
                        <Image src={icon_1}/>
                        <p className='text-[16px] lg:text-[20px] font-extrabold mt-5'>Photos of giraffes in comical urban situations quickly spread across social media, becoming a source of joy for millions of people. This incident showed how even technical errors <span className='text-_orange'>can generate unexpected and entertaining content that has become a meme classic.</span></p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500" className="relative overflow-hidden  flex flex-col mt-[35px] md:mt-[60px] md:px-10 pt-6 md:pt-10 rounded-[45px] bg-gradient-to-tl to-[#FF5924] from-[#FF932F]  bg-cover bg-no-repeat _shadow">
                    <h3 className='mx-auto text-center text-[#FFEB74] bg-black px-[27px] py-[13px] rounded-2xl'>MISSION</h3>
                    <p className='block w-full leading-tight md:leading-snug px-4 lg:w-1/2 mx-auto text-center pt-4 text-[16px] font-extrabold md:text-[20px]'>The Giraffix Meme Token is a modern meme and cryptocurrency project that merges fun and finance in the world of decentralized finance (DeFi). </p>
                    <p className={`${DRUK_WIDE} block w-full px-3 lg:w-2/3 mx-auto text-center pt-7 md:pt-10 text-[14px] md:text-[24px] uppercase leading-tight `}>The mission of Giraffix Meme Token is to <span className='bg-[#FFB04A]'>create a unique and engaging experience for its holders, rooted in internet meme culture.</span></p>
                    <Image  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1500" className='relative z-50 hidden xs:block mx-auto w-1/3 md:w-1/6 pt-10' src={giraffix_desktop}/>
                    <Image  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1500" className='relative z-50 block xs:hidden mx-auto w-1/2 pt-10' src={giraffix_mobile}/>
                    <Image  data-aos-delay="300" data-aos-duration="1500" data-aos="fade-right" className='absolute -left-[35%] md:left-0 bottom-[4%] md:bottom-[5%] w-2/3 md:w-1/4' src={lines_left}/>
                    <Image  data-aos-delay="300" data-aos-duration="1500" data-aos="fade-left" className='absolute w-2/3 right-[-40%] md:right-0 bottom-[0%] md:w-1/4  md:top-[5%] ' src={lines_right}/>
                </div>
            </div>
        </section>
    )
}