import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard } from "../../components";
import Loader from "../../components/Loader";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  const [category, setCategory] = useState([]);
  useEffect(() => {
    posts.map((post) => {
      setCategory(post.node.categories);
    });
  }, []);
  return (
    <div className="md:px-10 px-4 py-8">
      <Head>
        <title>Menu</title>
      </Head>
      <div>
        {category.map((category, index) => (
          <p
            key={index}
            className="text-center py-5 md:text-3xl text-2xl text-[#003934] font-bold"
          >
            {category.name}
          </p>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <Link href="/menu">
          <div className="cursor-pointer py-5 text-lg font-bold flex md:justify-start justify-center items-center gap-2 text-[#003934] hover:text-[#00524B] duration-200">
            <BsArrowLeftCircle size={30} />
            Back to categories
          </div>
        </Link>
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  return {
    props: { posts },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
