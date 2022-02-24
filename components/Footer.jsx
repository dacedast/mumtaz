import React from "react";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
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
      ? "All rights reserved."
      : router.locale === "ru"
      ? "Все права защищены."
      : router.locale === "cs"
      ? "Všechna práva vyhrazena."
      : "";
  return (
    <div className="w-full bg-[#003934] md:px-10 px-4 py-10">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
        <div className="col-span-1 flex flex-col justify-center items-center ">
          <div className="flex gap-10 text-white mb-5">
            <a href="">
              <FaTelegramPlane size={24} />
            </a>
            <a href="https://www.instagram.com/mumtaz.cz/" target="_blank">
              <FiInstagram size={24} />
            </a>
            <a href="">
              <FaFacebookF size={24} />
            </a>
          </div>
          <div>
            <div className="flex text-white">
              <HiOutlineLocationMarker size={20} />
              <p className="text-center">Jabloňová 2136/11, Praha</p>
            </div>
            <p className="text-white text-center">{text4} 11:00 - 23:00</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <img src="/favicon.ico" alt="icon" className="w-2/3 mb-4" />
          <div className="text-center text-white">
            Copyright © {new Date().getFullYear() + ` `} Mumtaz Family
            Restaurant. {text5}
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center text-white">
          <p className="text-center">+420 605 77 72 73</p>
          <p className="text-center">info@mumtaz-restaurant.cz</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
