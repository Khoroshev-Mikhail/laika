import Image from 'next/image'
import tg from '../../public/img/elements/social/tg.svg'
import x from '../../public/img/elements/social/x.svg'

export default function Social({className }){
    return(
        <div className={"flex gap-x-2.5 relative z-50" + " " + className}>
            <a href='https://twitter.com/GIRAFFIXSOL'>
                <Image src={x} alt="x" className="block w-[30px] xs:w-auto"/>
            </a>
            <a href='https://t.me/GiraffixSOLANA'>
                <Image src={tg} alt="Telegram" className="block w-[30px] xs:w-auto"/>
            </a>
        </div>
    )
}