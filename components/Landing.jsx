import React, { useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let greeting =
    router.locale === "en"
      ? "Welcome to"
      : router.locale === "ru"
      ? "Добро пожаловать в"
      : router.locale === "cs"
      ? "Vítejte v"
      : "";
  let text1 =
    router.locale === "en"
      ? "Traditional Uzbek Cuisine"
      : router.locale === "ru"
      ? "Национальная узбекская кухня"
      : router.locale === "cs"
      ? "Tradiční uzbecká kuchyně"
      : "";
  let textButton =
    router.locale === "en"
      ? "Lunch Menu"
      : router.locale === "ru"
      ? "Обеденное меню"
      : router.locale === "cs"
      ? "Polední menu"
      : "";
  let addressText =
    router.locale === "en"
      ? "Everyday"
      : router.locale === "ru"
      ? "Ежедневно"
      : router.locale === "cs"
      ? "Každý den"
      : "";
  return (
    <div className="h-[100vh-120px] bg-tapchan-img bg-contain md:pt-[150px] pt-[50px] md:px-10 px-4">
      <div className="md:mb-20 mb-2">
        <h3
          className="text-center text-2xl mb-3 text-white"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {greeting}
        </h3>
        <h1
          className="text-center text-5xl mb-3 font-bold text-white"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="text-[#E1BF72]">Mumtaz</span> Family Restaurant
        </h1>
        <h2
          className="text-center text-2xl mb-5 text-white"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {text1}
        </h2>
        <div className="flex justify-center items-center">
          <LinkS
            to="lunchmenu"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
          >
            <button
              data-aos="fade-up"
              data-aos-once="true"
              className="bg-[#E1BF72] text-[#f8f8f7] md:my-0 my-7 font-semibold uppercase text-center py-3 px-12 rounded-lg hover:bg-[#DBB457] transition duration-200 cursor-pointer"
            >
              {textButton}
            </button>
          </LinkS>
        </div>
      </div>
      <div className="md:justify-center align-center flex justify-center pb-10">
        <div className="md:flex flex-col hidden absolute left-10 items-center">
          <div className="flex text-white">
            <HiOutlineLocationMarker size={20} />
            <p>Jabloňová 2136/11, Praha</p>
          </div>
          <p className="text-white text-center">{addressText} 11:00 - 23:00</p>
        </div>
        <LinkScroll
          to="features"
          smooth={true}
          duration={600}
          spy={true}
          exact="true"
        >
          <div className="text-white cursor-pointer">
            <BsArrowDownCircle size={50} />
          </div>
        </LinkScroll>
        <div className="md:flex hidden absolute right-10  justify-between w-24   text-white">
          <a href="https://t.me/mumtazcz" target="_blank">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://www.instagram.com/mumtaz.cz/" target="_blank">
            <FiInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/mumtazpraha/" target="_blank">
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
