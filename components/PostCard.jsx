import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const PostCard = ({ post }) => {
  const router = useRouter();
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  let text2 =
    router.locale === "en"
      ? "More"
      : router.locale === "ru"
      ? "Больше"
      : router.locale === "cs"
      ? "Více"
      : "";
  return (
    <div
      className="md:col-span-3 col-span-1  w-full h-full  border-black block"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <Link href={`/post/${post.slug}`}>
        <div className="flex flex-col justify-center items-center border border-[#003934] rounded-lg p-5">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            unoptimized
            width={300}
            height={300}
            placeholder="empty"
            className="h-60 object-cover w-full md:w-1/3 rounded-full cursor-pointer"
          />
          <div className=" flex flex-col w-full justify-between">
            <h2 className="lg:text-xl text-2xl font-bold mb-2 text-center py-2 text-[#003934] cursor-pointer">
              {post.title}
            </h2>
            <h3 className="text-center mb-4 text-lg font-semibold">
              {post.price} Kč
            </h3>
            <p className="px-4 py-2 bg-[#003934] cursor-pointer text-center text-white font-semibold rounded-lg text-lg hover:bg-[#00524B] duration-200">
              {text2}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
