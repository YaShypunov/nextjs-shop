import React from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-utils';
import Head from 'next/head';

const AllPostsPage = ({posts}) => {
  return (
    <>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="A list of all programming-related tutorials and posts" />
    </Head>
    <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: {
      posts
    },
    revalidate: 60,
  }
}

export default React.memo(AllPostsPage);
