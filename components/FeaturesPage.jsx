import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaLeaf, FaBookMedical } from "react-icons/fa";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let title =
    router.locale === "en"
      ? "We are more than just a restaurant"
      : router.locale === "ru"
      ? "Мы больше, чем просто ресторан"
      : router.locale === "cs"
      ? "Nejsme jen restaurace"
      : "";
  let desc =
    router.locale === "en"
      ? "Enjoy the atmosphere and flavors of Central Asia in the heart of Europe, in the capital of the Czech Republic, Prague."
      : router.locale === "ru"
      ? "Насладитесь атмосферой и вкусами блюд Центральной Азии в сердце Европыб в столице Чешской Республики, в Праге"
      : router.locale === "cs"
      ? "Vychutnejte si atmosféru a chutě střední Asie v srdci Evropy, v hlavním městě České republiky, v Praze."
      : "";
  let text1 =
    router.locale === "en"
      ? "Booking by phone"
      : router.locale === "ru"
      ? "Резервация по телефону"
      : router.locale === "cs"
      ? "Rezervovat telefonicky"
      : "";
  let text2 =
    router.locale === "en"
      ? "Always fresh products"
      : router.locale === "ru"
      ? "Всегда свежие продукты"
      : router.locale === "cs"
      ? "Vždy čerstvé potraviny"
      : "";
  let text3 =
    router.locale === "en"
      ? "Super chefs"
      : router.locale === "ru"
      ? "Супер шеф-повары"
      : router.locale === "cs"
      ? "Super šef-kuchaři"
      : "";
  let text4 =
    router.locale === "en"
      ? "Working everyday"
      : router.locale === "ru"
      ? "Работаем ежедневно"
      : router.locale === "cs"
      ? "K dizpozici každý den"
      : "";
  let text5 =
    router.locale === "en"
      ? "Clean kitchen"
      : router.locale === "ru"
      ? "Чистая кухня"
      : router.locale === "cs"
      ? "Čistá kuchyně"
      : "";
  let text6 =
    router.locale === "en"
      ? "To gallery..."
      : router.locale === "ru"
      ? "В галерею..."
      : router.locale === "cs"
      ? "Do galerie..."
      : "";
  return (
    <div className="w-full h-full s md:px-10 px-4 pt-10 py-10" id="features">
      <div className="w-full flex lg:flex-row flex-col gap-5 justify-center items-center">
        <div className="lg:w-1/2 flex flex-col w-full">
          <h1
            className=" text-[#003934] md:text-5xl text-4xl font-semibold mb-5"
            data-aos-once="true"
            data-aos="fade-right"
          >
            {title}
          </h1>
          <p
            className="text-[#003934] opacity-70 mb-5"
            data-aos-once="true"
            data-aos="fade-right"
          >
            {desc}
          </p>
          <div
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
            data-aos-once="true"
            data-aos="fade-right"
          >
            <AiOutlinePhone className="text-white absolute" size={25} />
            <h1 className="text-center">{text1}</h1>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-right"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <FaLeaf className="text-white absolute" size={20} />
            <h1 className="text-center">{text2}</h1>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-right"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <RiCheckboxCircleLine className="text-white absolute" size={25} />
            <h1 className="text-center">{text3}</h1>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-right"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <AiOutlineClockCircle className="text-white absolute" size={25} />
            <h1 className="text-center">{text4}</h1>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-right"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <FaBookMedical className="text-white absolute" size={25} />
            <h1 className="text-center">{text5}</h1>
          </div>
        </div>
        <div
          data-aos-once="true"
          data-aos="fade-right"
          className="lg:w-1/2 w-full flex flex-col items-center"
        >
          <img
            src="/features.jpg"
            alt="povar"
            className="rounded-lg float-right shadow-xl mb-3"
            data-aos-once="true"
            data-aos="fade-left"
          />
          <Link href="/gallery" className="text-center ">
            <p className="underline text-[#003934] cursor-pointer">{text6}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
