import { RAYDIS } from "@/pages/_app";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import cross from '../../public/img/components/00PopUp/cross.svg'
import send from '../../public/img/components/00PopUp/button.svg'
import Image from "next/image";

export default function PopUp({setIsVisible}) {
  const [isSended, setIsSended] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [finishedMessages, setFinishedMessages] = useState([]);

  const typeSpeed = 50;
  const delaySpeed = 500;

  const messages = [
    "Hello, Earth.",
    "I’m Laika, and I’m not just chasing rockets anymore—I’m riding one.",
    "The moon is quiet, but my heart is loud with purpose.",
    "Tell the world: the dog they launched came back a legend…"
  ];

  useEffect(() => {
    setIsSended(false)
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      const totalTime = currentMessage.length * typeSpeed + delaySpeed + 200;

      const timeout = setTimeout(() => {
        // Добавляем сообщение, если его ещё нет
        setFinishedMessages((prev) => {
          if (prev.includes(currentMessage)) return prev;
          return [...prev, currentMessage];
        });

        // Переходим к следующему сообщению
        if (messageIndex < messages.length - 1) {
          setMessageIndex((prev) => prev + 1);
        }
      }, totalTime);

      return () => clearTimeout(timeout);
    }
  }, [messageIndex]);

  const sendMessageFNS = function(){
    setTimeout(()=>{
      setIsVisible(false)
    }, 1000)
  }

  return (
    <section
      id="00PopUp"
      className="_section fixed top-0 z-50 overflow-hidden h-screen bg-[url('/img/components/00PopUp/bg_mobile.png')] md:bg-[url('/img/components/00PopUp/bg.png')] bg-cover bg-no-repeat bg-[#000]"
    >
      <div className="p-5 flex justify-center items-center w-full h-full">
        <div className="p-5 w-full h-full max-w-[900px] mx-auto rounded-lg border-[1px] border-[#5471D8] flex flex-col relative">
            <div className="absolute right-5 top-5 w-4 cursor-pointer z-50" onClick={() => setIsVisible(false)}>
                <Image src={cross} alt="X" />
            </div>
          {/* Заголовок */}
          <h3 className={`${RAYDIS} font-bold relative _stroke_popup_2 text-[22px] xs:text-[24px] sm:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px] uppercase`}>
            experience the laika
            <div className="absolute w-full h-full left-0 top-0 _stroke_popup">
              experience the laika
            </div>
          </h3>

          <div className="w-full border-b-2 border-[#101D42] my-2"></div>

          {/* Анимированные сообщения */}
          <div className="flex flex-col gap-y-2 md:gap-y-3 [&>div]:border-[1px] [&>div]:border-_blue text-_white leading-none">
            {finishedMessages.map((msg, idx) => (
              <div key={idx} className="p-2.5 md:p-3.5">{msg}</div>
            ))}

            {messageIndex < messages.length &&
              !finishedMessages.includes(messages[messageIndex]) && (
                <div className="p-2.5 md:p-3.5">
                  <Typewriter
                    key={messageIndex}
                    words={[messages[messageIndex]]}
                    loop={1}
                    cursor
                    typeSpeed={typeSpeed}
                    deleteSpeed={50}
                    delaySpeed={delaySpeed}
                  />
                </div>
              )}
          </div>

          {/* Инпут внизу */}
          <div className="mt-auto border-t-2 border-[#101D42] pt-3 relative">
            <input
              className="w-full bg-[#000514] border-2 border-[#112C5F] rounded-lg px-4 py-3 text-_white placeholder-[#5471D8] outline-none"
              placeholder="Type your message..."
              type="text"
            />
            <div>
                <Image className="absolute right-4 top-5 cursor-pointer" src={send} alt="SEND MSSG" onClick={()=>{
                  sendMessageFNS()
                  setIsSended(true)
                }}/>
            </div>
          </div>
        </div>
      </div>
 
    </section>
  );
}
