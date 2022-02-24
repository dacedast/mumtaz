import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Burger from "./Burger";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  let home =
    router.locale === "en"
      ? "Home"
      : router.locale === "ru"
      ? "Главная"
      : router.locale === "cs"
      ? "Home"
      : "";
  let gallery =
    router.locale === "en"
      ? "Gallery"
      : router.locale === "ru"
      ? "Галерея"
      : router.locale === "cs"
      ? "Galerie"
      : "";
  let contact =
    router.locale === "en"
      ? "Contact"
      : router.locale === "ru"
      ? "Контакты"
      : router.locale === "cs"
      ? "Kontakt"
      : "";
  let menu =
    router.locale === "en"
      ? "Menu"
      : router.locale === "ru"
      ? "Меню"
      : router.locale === "cs"
      ? "Menu"
      : "";
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  const changeNav = () => {
    if (window.scrollY >= 1) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  });
  return (
    <>
      <div className="md:px-10 px-4 bg-[#003934] h-[120px] w-full">
        <div className="py-2 flex justify-between items-center">
          <Link href="/">
            <span className="cursor-pointer font-extrabold text-4xl">
              <img src="/favicon.ico" className="w-[100px]" />
            </span>
          </Link>
          <div className="flex">
            <ul className="md:flex flex-row items-center hidden">
              {router.locales.map((locale) => (
                <li key={locale} className="mr-4">
                  <Link href={router.asPath} locale={locale}>
                    {locale === "ru" ? (
                      <img
                        src="/russia.png"
                        alt={locale}
                        className="w-[25px]"
                      />
                    ) : locale === "en" ? (
                      <img
                        src="/united-kingdom.png"
                        alt={locale}
                        className="w-[25px]"
                      />
                    ) : locale === "cs" ? (
                      <img
                        src="/czech-republic.png"
                        alt={locale}
                        className="w-[25px]"
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="md:flex md:items-center hidden">
              <li className="md:ml-5 md:my-0 my-7 text-lg text-[#f8f8f7] font-semibold uppercase hover:text-[#DBB457] transition duration-200">
                <Link href="/">{home}</Link>
              </li>
              <li className="md:ml-5 md:my-0 my-7 text-lg text-[#f8f8f7] font-semibold uppercase hover:text-[#DBB457] transition duration-200">
                <Link href="/gallery">{gallery}</Link>{" "}
              </li>
              <li className="md:ml-5 md:my-0 my-7 text-lg text-[#f8f8f7] font-semibold uppercase hover:text-[#DBB457] transition duration-200">
                <Link href="/contact">{contact}</Link>{" "}
              </li>
              <Link href="/menu">
                <li className="bg-[#E1BF72] text-[#f8f8f7] md:my-0 my-7 font-semibold uppercase text-center py-2 px-6 md:ml-5 rounded-lg hover:bg-[#DBB457] transition duration-200 cursor-pointer">
                  {menu}
                </li>
              </Link>{" "}
            </ul>
          </div>
          <div className="text-white md:hidden block" onClick={toggle}>
            <Burger isOpen={isOpen} toggle={toggle} />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Header;
