import Head from "next/head";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import { getFeaturedPosts } from "../lib/posts-utils";

const HomePage = ({posts}) =>{
return (
  <>
  <Head>
    <title>Yaroslav' Blog</title>
    <meta name="description" content="I post about programming and web development." />
  </Head>
  <Hero />
  <FeaturedPosts posts={posts} />
  </>
);
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  }
}

export default HomePage;
