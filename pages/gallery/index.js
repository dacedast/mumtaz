import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getGallery } from "../../services";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const router = useRouter();
  let text1 =
    router.locale === "en"
      ? "Gallery"
      : router.locale === "ru"
      ? "Галерея"
      : router.locale === "cs"
      ? "Galerie"
      : "";
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    getGallery().then((newGallery) => setGallery(newGallery));
  }, []);
  return (
    <div className="md:px-10 px-4 py-10 w-full h-full">
      <Head>
        <title>Gallery</title>
      </Head>
      <h1 className="text-center text-4xl text-[#003934] font-semibold mb-5">
        {text1}
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
        {gallery.map((item, index) => (
          <div
            className="col-span-1 shadow-lg "
            key={index}
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <img
              src={item.photos.url}
              alt={index}
              className="w-full object-cover h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
