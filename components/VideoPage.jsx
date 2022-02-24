import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoPage = () => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let title =
    router.locale === "en"
      ? "Do you have any plans for a dinner today? Book a table"
      : router.locale === "ru"
      ? "Есть планы на ужин?"
      : router.locale === "cs"
      ? "Máte plany na večeře?"
      : "";
  let Btn =
    router.locale === "en"
      ? "Book"
      : router.locale === "ru"
      ? "Бронировать"
      : router.locale === "cs"
      ? "Rezervovat"
      : "";
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center md:px-10 px-4">
      <h1
        className="md:text-5xl text-3xl font-semibold text-white mb-5 text-center"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        {title}
      </h1>
      <Link href="/contact">
        <p
          data-aos="fade-up"
          data-aos-once="true"
          className="py-2 px-10 bg-[#E1BF72] text-[#f8f8f7] cursor-pointer text-lg rounded-lg uppercase font-semibold  hover:bg-[#DBB457] transition duration-200 "
        >
          {Btn}
        </p>
      </Link>
      <video
        src="https://player.vimeo.com/external/412306034.sd.mp4?s=ac6a7908e7deec6c8c5d9ed21c0b95debe3251cb&profile_id=165&oauth2_token_id=57447761"
        muted
        ref={videoRef}
        autoPlay
        loop
        className="h-full w-full absolute z-[-1] object-cover "
      ></video>
    </div>
  );
};

export default VideoPage;
