import React, { useState, useEffect } from "react";
import { BiDish } from "react-icons/bi";
import { getLunchMenu } from "../services";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const LunchMenu = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let text1 =
    router.locale === "en"
      ? "Lunch Menu"
      : router.locale === "ru"
      ? "Обеденное меню"
      : router.locale === "cs"
      ? "Polední menu"
      : "";
  let text2 =
    router.locale === "en"
      ? "Salad + Soup + Main dish + Dough + Drink only for"
      : router.locale === "ru"
      ? "Cалат + Суп + Главное блюдо + Хлеб + Напиток всего лишь за"
      : router.locale === "cs"
      ? "Salat + Polevka + Hlavní jídlo + Chleb + Nápoj jenom za"
      : "";
  const [lunchMenu, setLunchMenu] = useState([]);
  useEffect(() => {
    getLunchMenu().then((newLunchMenu) => setLunchMenu(newLunchMenu));
  }, []);

  return (
    <div
      id="lunchmenu"
      className="h-full w-full py-10 bg-[#003934] md:px-10 px-4 flex justify-center items-center flex-col"
    >
      <img
        src="/elements.png"
        alt="element"
        className="w-1/4 absolute left-0"
      />
      <img
        src="/elements.png"
        alt="element"
        className="w-1/4 absolute right-0 "
      />
      <BiDish size={100} className="text-white" />
      <h1 className="text-center md:text-5xl text-3xl font-semibold text-white mb-4">
        {text1}
      </h1>
      {lunchMenu.map((item, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <p className="text-center text-lg text-white mb-5">
            {text2}{" "}
            <span className="text-[#E1BF72] font-bold text-xl">
              {item.priceLunch} Kč
            </span>
          </p>
          <div className="flex justify-center text-center items-center lg:w-1/2 lg:h-1/2 w-full h-full">
            <img
              src={item.lunchImage.url}
              alt="lunchmenu"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LunchMenu;
