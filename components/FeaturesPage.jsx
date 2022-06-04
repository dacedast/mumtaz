import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaLeaf, FaBookMedical } from "react-icons/fa";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const FeaturesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let title =
    router.locale === "en"
      ? "We are more than just a restaurant"
      : router.locale === "ru"
      ? "Мы больше, чем ресторан"
      : router.locale === "cs"
      ? "Nejsme jen restaurace"
      : "";
  let desc =
    router.locale === "en"
      ? "Enjoy the atmosphere and flavors of Uzbek cuisine in the heart of Europe, in the capital of the Czech Republic, Prague."
      : router.locale === "ru"
      ? "Насладитесь атмосферой и вкусами блюд Узбекской кухни в сердце Европы, в столице Чешской Республики, в Праге"
      : router.locale === "cs"
      ? "Vychutnejte si atmosféru a chutě Uzbecké  v srdci Evropy, v hlavním městě České republiky, v Praze."
      : "";
  let text1 =
    router.locale === "en"
      ? "Booking by phone/insta"
      : router.locale === "ru"
      ? "Резервация по телефону/insta"
      : router.locale === "cs"
      ? "Rezervovat telefonicky/insta"
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
      ? "Lunch menu"
      : router.locale === "ru"
      ? "Ланч меню"
      : router.locale === "cs"
      ? "Denní menu"
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
            data-aos="fade-in"
          >
            {title}
          </h1>
          <p
            className="text-[#003934] opacity-70 mb-5"
            data-aos-once="true"
            data-aos="fade-in"
          >
            {desc}
          </p>
          <Link href="/contact">
            <div
              className="bg-[#003934] text-white cursor-pointer text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
              data-aos-once="true"
              data-aos="fade-in"
            >
              <AiOutlinePhone className="text-white absolute" size={25} />
              <h1 className="text-center">{text1}</h1>
            </div>
          </Link>
          <div
            data-aos-once="true"
            data-aos="fade-in"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <FaLeaf className="text-white absolute" size={20} />
            <h1 className="text-center">{text2}</h1>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-in"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <RiCheckboxCircleLine className="text-white absolute" size={25} />
            <h1 className="text-center">{text3}</h1>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-in"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <AiOutlineClockCircle className="text-white absolute" size={25} />
            <a
              href="https://www.instagram.com/mumtaz.cz/"
              target="_blank"
              className="text-center"
            >
              {text4}
            </a>
          </div>
          <div
            data-aos-once="true"
            data-aos="fade-in"
            className="bg-[#003934] text-white text-center rounded-lg px-4 py-2 lg:w-1/2 w-full mb-4"
          >
            <FaBookMedical className="text-white absolute" size={25} />
            <h1 className="text-center">{text5}</h1>
          </div>
        </div>
        <div
          data-aos-once="true"
          data-aos="fade-in"
          className="lg:w-1/2 w-full flex flex-col items-center lg:h-[500px] h-full"
        >
          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            className="w-full h-full"
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                src="/features.jpg"
                alt="povar"
                className="rounded-lg float-right shadow-xl object-cover"
                data-aos-once="true"
                data-aos="fade-in"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/ss.jpg"
                alt="povar"
                className="rounded-lg float-right shadow-xl object-cover"
                data-aos-once="true"
                data-aos="fade-in"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tapchan.jpg"
                alt="povar"
                className="rounded-lg float-right shadow-xl object-cover"
                data-aos-once="true"
                data-aos="fade-in"
              />
            </SwiperSlide>
          </Swiper>
          <Link href="/gallery" className="text-center ">
            <p className="underline text-[#003934] cursor-pointer">{text6}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
