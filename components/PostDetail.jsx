import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
const PostDetail = ({ post }) => {
  return (
    <div className="w-full h-full md:px-10 px-4 md:py-10 py-4">
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="flex gap-20 flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-full">
          {post.videoUrl === "" ? (
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="object-cover h-full w-full h-full lg:h-[80vh] rounded-lg  shadow-lg "
            />
          ) : (
            <div className="w-full h-[400px]">
              <ReactPlayer
                controls={false}
                playIcon
                width="100%"
                playing={true}
                url={post.videoUrl}
                height="100%"
              />
            </div>
          )}
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-around">
          <h1 className="text-center md:text-left text-3xl md:text-6xl text-[#003934] font-semibold mb-5">
            {post.title}
          </h1>
          <p className="text-center md:text-left text-2xl md:mb-10 mb-5">
            {post.content}
          </p>
          <h3 className="text-center md:text-left md:text-6xl text-3xl text-[#003934] font-bold mb-5">
            {post.price} Kč
          </h3>
          <Link href="/menu">
            <div className="cursor-pointer py-5 text-lg font-bold flex md:justify-start justify-center items-center gap-2 text-[#003934] hover:text-[#00524B] duration-200">
              <BsArrowLeftCircle size={30} />
              Go back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
