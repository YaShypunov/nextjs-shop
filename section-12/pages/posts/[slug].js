import React from 'react';
import PostContent from '../../components/posts/postDetail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-utils';
import Head from 'next/head';

const PostPage = ({post}) => {
  return (
  <>
  <Head>
    <title>{post.title}</title>
    <meta name="description" content={post.excerpt} />
  </Head>
  <PostContent post={post} />
  </>
  );
};

export const getStaticProps = (context) => {
  const {params} = context;
  const {slug} = params;

  const post = getPostData(slug);

  return {
    props: {
      post
    },
    revalidate: 600
  }

}

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(filename => ({
    params: {
      slug: filename.replace(/\.md$/, '')
    }
  }));

  return {
    paths: slugs,
    fallback: 'blocking'
  }
}

export default React.memo(PostPage);
