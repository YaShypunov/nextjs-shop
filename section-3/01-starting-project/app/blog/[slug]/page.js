import React from 'react';

const BlogPostPage = ({params}) => {
  console.log({params})
  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default BlogPostPage;
