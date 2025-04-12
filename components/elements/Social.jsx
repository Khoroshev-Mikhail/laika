import Image from 'next/image'
import tg from '../../public/img/elements/social/tg.svg'
import x from '../../public/img/elements/social/x.svg'
import tg_black from '../../public/img/elements/social/tg_black.svg'
import x_black from '../../public/img/elements/social/x_black.svg'

export default function Social({ black, className }){
    return(
        <div className={"flex gap-x-1 relative z-50" + " " + className}>
            <a href='https://twitter.com/GIRAFFIXSOL'>
                <Image src={black ? x_black : x} alt="x" className="block w-[30px] xs:w-auto"/>
            </a>
            <a href='https://t.me/GiraffixSOLANA'>
                <Image src={black ? tg_black : tg} alt="Telegram" className="block w-[30px] xs:w-auto"/>
            </a>
        </div>
    )
}