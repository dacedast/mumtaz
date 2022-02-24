import React, { useEffect } from "react";
import Head from "next/head";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let text1 =
    router.locale === "en"
      ? "Contact us"
      : router.locale === "ru"
      ? "Контакты"
      : router.locale === "cs"
      ? "Kontaktujte nás"
      : "";
  let text2 =
    router.locale === "en"
      ? "Address"
      : router.locale === "ru"
      ? "Адрес"
      : router.locale === "cs"
      ? "Adresa"
      : "";
  let text3 =
    router.locale === "en"
      ? "Working hours"
      : router.locale === "ru"
      ? "Рабочее время"
      : router.locale === "cs"
      ? "K dizpozici"
      : "";
  let text4 =
    router.locale === "en"
      ? "Everyday"
      : router.locale === "ru"
      ? "Ежедневно"
      : router.locale === "cs"
      ? "Každý den"
      : "";
  let text5 =
    router.locale === "en"
      ? "Contacts"
      : router.locale === "ru"
      ? "Контакты"
      : router.locale === "cs"
      ? "Kontakty"
      : "";
  let text6 =
    router.locale === "en"
      ? "Can't find the way? Watch the video"
      : router.locale === "ru"
      ? "Не можете найти нас? Посмотрите видео"
      : router.locale === "cs"
      ? "Nemůžete nás najít? Podívejte se na video"
      : "";
  return (
    <div className="md:px-10 px-4 py-10 w-full h-full">
      <Head>
        <title>{text1}</title>
      </Head>
      <h1 className="text-center text-4xl text-[#003934] font-semibold mb-5">
        {text1}
      </h1>
      <div className="flex md:flex-row flex-col justify-between items-center gap-20 mb-10">
        <div className="w-full" data-aos="fade-in" data-aos-once="true">
          <h2 className="text-2xl font-semibold mb-2 text-center">{text2}</h2>
          <p className="text-lg mb-4 text-center">
            Jabloňová 2136/11, Praha 10, 106 00
          </p>
          <h2 className="text-2xl font-semibold mb-2 text-center">{text3}</h2>
          <p className="text-lg mb-4 text-center">{text4} 11:00 - 23:00</p>
          <h2 className="text-2xl font-semibold mb-2 text-center">{text5}</h2>
          <p className="text-lg mb-4 text-center">Phone: +420 605 77 72 73</p>
          <p className="text-lg mb-4 text-center">
            Email: info@mumtaz-restaurant.cz
          </p>
          <div className="flex justify-center gap-5 text-black mb-5">
            <a href="">
              <FaTelegramPlane
                size={24}
                className="hover:text-gray-700 duration-200"
              />
            </a>
            <a href="https://www.instagram.com/mumtaz.cz/" target="_blank">
              <FiInstagram
                size={24}
                className="hover:text-gray-700 duration-200"
              />
            </a>
            <a href="">
              <FaFacebookF
                size={24}
                className="hover:text-gray-700 duration-200"
              />
            </a>
          </div>
        </div>
        <div className="w-full" data-aos="fade-in" data-aos-once="true">
          <a
            href="https://www.google.com/maps/place/Jablo%C5%88ov%C3%A1+11,+106+00+Praha+10/@50.0569459,14.493834,17z/data=!3m1!4b1!4m5!3m4!1s0x470b93abe80bc17d:0x9c0dd8a732af6a2!8m2!3d50.0569425!4d14.4960228"
            target="_blank"
          >
            <img
              src="/Capture.JPG"
              alt="map"
              className="rounded-lg shadow-lg cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:px-10 px-4">
        <h1 className="text-center text-4xl text-[#003934] font-semibold mb-5">
          {text6}
        </h1>
        <div className="w-full h-[400px]">
          <ReactPlayer
            controls={false}
            playIcon
            width="100%"
            playing={true}
            url="https://www.youtube.com/watch?v=sqpg1qzJCGQ?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
