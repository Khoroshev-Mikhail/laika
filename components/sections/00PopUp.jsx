import { RAYDIS } from "@/pages/_app";
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from "react";

export default function PopUp() {
  const [messageIndex, setMessageIndex] = useState(0);  // Индекс текущего текста
  const [isTyping, setIsTyping] = useState(false);  // Флаг для определения процесса набора текста

  const messages = [
    "Hello, Earth.",
    "I’m Laika, and I’m not just chasing rockets anymore—I’m riding one.",
    "The moon is quiet, but my heart is loud with purpose.",
    "Tell the world: the dog they launched came back a legend…"
  ];

  useEffect(() => {
    // Когда мы меняем индекс, начинаем печатать следующий текст
    if (messageIndex < messages.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setMessageIndex(messageIndex + 1);
        setIsTyping(false); // Когда текст напечатан, останавливаем набор
      }, 5000); // Задержка 5 секунд между текстами

      return () => clearTimeout(timeout); // Очистка таймера, чтобы избежать утечек
    }
  }, [messageIndex]);

  return (
    <section
      id="00PopUp"
      className="_section relative overflow-hidden h-screen bg-[url('/img/components/00PopUp/bg_mobile.png')] md:bg-[url('/img/components/00PopUp/bg.png')] bg-cover bg-no-repeat"
    >
      <div className="p-5 flex justify-center items-center w-full h-full">
        <div className="p-5 w-full h-full max-w-[900px] mx-auto rounded-lg border-[1px] border-[#5471D8] flex flex-col">
          
          {/* Заголовок */}
          <h3 className={`${RAYDIS} font-bold relative _stroke_popup_2 text-[22px] xs:text-[24px] sm:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px] uppercase`}>
            experience the laika
            <div className="absolute w-full h-full left-0 top-0 _stroke_popup">
              experience the laika
            </div>
          </h3>

          <div className="w-full border-b-2 border-[#101D42] my-2"></div>

          {/* Основной текст с анимацией */}
          <div className="flex flex-col gap-y-2 md:gap-y-3 [&>div]:border-[1px] [&>div]:border-_blue text-_white leading-none">
            {messageIndex >= 0 && (
              <div className="p-2.5 md:p-3.5 w-auto">
                <Typewriter
                  words={[messages[0]]}
                  loop={1}
                //   cursor
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={500}
                  onTypeStart={() => setIsTyping(true)}
                  onTypeEnd={() => setIsTyping(false)}
                />
              </div>
            )}

            {messageIndex >= 1 && (
              <div className="p-2.5 md:p-3.5">
                <Typewriter
                  words={[messages[1]]}
                  loop={1}
                //   cursor
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </div>
            )}

            {messageIndex >= 2 && (
              <div className="p-2.5 md:p-3.5">
                <Typewriter
                  words={[messages[2]]}
                  loop={1}
                //   cursor
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </div>
            )}

            {messageIndex >= 3 && (
              <div className="p-2.5 md:p-3.5">
                <Typewriter
                  words={[messages[3]]}
                  loop={1}
                  cursor
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </div>
            )}
          </div>

          {/* Инпут, прижатый к низу */}
          <div className="mt-auto border-t-2 border-[#101D42] pt-3">
            <input
              className="w-full bg-[#000514] border-2 border-[#112C5F] rounded-lg px-4 py-3 text-_white placeholder-[#5471D8] outline-none"
              placeholder="Type your message..."
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
