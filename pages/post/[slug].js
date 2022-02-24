import React from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "../../services";
import { PostDetail } from "../../components";

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
