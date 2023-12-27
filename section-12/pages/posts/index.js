import React from 'react';
import AllPosts from '../../components/posts/AllPosts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started With NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2023-12-10', 
    slug: 'getting-started-with-nextjs'
  },
  {
    title: 'Getting Started With NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2023-12-10', 
    slug: 'getting-started-with-nextjs2'
  },
  {
    title: 'Getting Started With NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2023-12-10', 
    slug: 'getting-started-with-nextjs3'
  },
  {
    title: 'Getting Started With NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2023-12-10', 
    slug: 'getting-started-with-nextjs4'
  },
];

const AllPostsPage = () => {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  );
};

export default React.memo(AllPostsPage);
