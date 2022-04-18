import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { PostCard } from "../../components";
import { getPosts, getCategories } from "../../services";
import { useRouter } from "next/router";

const Menu = ({ posts }) => {
  const router = useRouter();
  let text1 =
    router.locale === "en"
      ? "Our Menu"
      : router.locale === "ru"
      ? "Наше Меню"
      : router.locale === "cs"
      ? "Naše Menu"
      : "";

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="md:px-10 px-4 mb-8">
      <Head>
        <title>Menu</title>
      </Head>
      <h1 className="text-center text-[#003934] text-3xl py-5 font-bold uppercase">
        {text1}
      </h1>
      <div className="grid grid-cols-12 gap-3 mb-4">
        {categories.map((category, index) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div
              className="md:col-span-2 col-span-4 text-center md:px-3 px-1 py-2 bg-[#003934] cursor-pointer rounded-full hover:bg-[#00524B] duration-200"
              key={index}
            >
              <span className="md:text-xl text-lg cursor-pointer mb-3 text-white font-bold">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
        {posts.map((post, index) => (
          <PostCard post={post.node} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 1,
  };
}
