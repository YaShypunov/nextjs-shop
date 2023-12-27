import React from 'react';
import classes from './post-content.module.css';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST =  {
  title: 'Getting Started With NextJS', 
  image: 'getting-started-nextjs.png', 
  excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
  date: '2023-12-10', 
  slug: 'getting-started-with-nextjs',
  content: '# This is a first post'
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
   <article className={classes.content}>
    <PostHeader title={DUMMY_POST.title} image={imagePath} />
    <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
   </article>
  );
};

export default PostContent;
