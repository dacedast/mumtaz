import React from "react";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
const Sidebar = ({ isOpen, toggle }) => {
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
  return (
    <div
      className={
        isOpen
          ? "h-screen fixed bg-[#003934] top-[100px] w-full pt-10 sidebar"
          : "hidden"
      }
      onClick={toggle}
    >
      <ul className="flex flex-row items-center justify-center gap-5">
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              {locale === "ru" ? (
                <img src="/russia.png" alt={locale} className="w-[25px]" />
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
      <ul className="flex items-center flex-col justify-center">
        <li className="md:ml-5 md:my-0 my-7 text-lg text-[#f8f8f7] font-semibold uppercase hover:text-[#DBB457] transition duration-200">
          <Link href="/">{home}</Link>
        </li>
        <li className="md:ml-5 md:my-0 my-7 text-lg text-[#f8f8f7] font-semibold uppercase hover:text-[#DBB457] transition duration-200">
          <Link href="/gallery">{gallery}</Link>{" "}
        </li>
        <li className="md:ml-5 md:my-0 my-7 text-lg text-[#f8f8f7] font-semibold uppercase hover:text-[#DBB457] transition duration-200">
          <Link href="/contact">{contact}</Link>{" "}
        </li>
        <li className="bg-[#E1BF72] text-[#f8f8f7] md:my-7 font-semibold uppercase text-center py-2 px-6 md:ml-5 rounded-lg hover:bg-[#DBB457] transition duration-200">
          <Link href="/menu">{menu}</Link>{" "}
        </li>
        <div className="flex justify-between items-center w-32 pt-20 text-white">
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
      </ul>
    </div>
  );
};

export default Sidebar;
