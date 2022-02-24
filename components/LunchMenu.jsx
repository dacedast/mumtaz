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
  let text3 =
    router.locale === "en"
      ? "Salad"
      : router.locale === "ru"
      ? "Салат"
      : router.locale === "cs"
      ? "Salat"
      : "";
  let text4 =
    router.locale === "en"
      ? "Soup"
      : router.locale === "ru"
      ? "Суп"
      : router.locale === "cs"
      ? "Salat"
      : "";
  let text5 =
    router.locale === "en"
      ? "Main dish"
      : router.locale === "ru"
      ? "Главное блюдо"
      : router.locale === "cs"
      ? "Hlavní jídlo"
      : "";
  let text6 =
    router.locale === "en"
      ? "Dough"
      : router.locale === "ru"
      ? "Хлеб"
      : router.locale === "cs"
      ? "Chleb"
      : "";
  let text7 =
    router.locale === "en"
      ? "Drink"
      : router.locale === "ru"
      ? "Напиток"
      : router.locale === "cs"
      ? "Nápoj"
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
        <div key={index}>
          <p className="text-center text-lg text-white mb-5">
            {text2}{" "}
            <span className="text-[#E1BF72] font-bold text-xl">
              {item.priceLunch} Kč
            </span>
          </p>
          <div className="flex justify-between w-full flex-col items-center">
            <div className="mb-5">
              <h2 className="text-3xl text-[#E1BF72] mb-3 text-center">
                {text3}
              </h2>
              <p className="text-white text-center">{item.salad}</p>
            </div>
            <div className="mb-5">
              <h2 className="text-3xl text-[#E1BF72] mb-3 text-center">
                {text4}
              </h2>
              <p className="text-white mb-1 text-center">{item.soup}</p>
            </div>
            <div className="mb-5">
              <h2 className="text-3xl text-[#E1BF72] mb-3 text-center">
                {text5}
              </h2>
              <p className="text-white mb-1 text-center">{item.main}</p>
            </div>
            <div className="mb-5">
              <h2 className="text-3xl text-[#E1BF72] mb-3 text-center">
                {text6}
              </h2>
              <p className="text-white mb-1 text-center">{item.dough}</p>
            </div>
            <div className="mb-5">
              <h2 className="text-3xl text-[#E1BF72] mb-3 text-center">
                {text7}
              </h2>
              <p className="text-white mb-1 text-center">{item.drink}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LunchMenu;
