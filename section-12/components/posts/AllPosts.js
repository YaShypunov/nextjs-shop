import React from 'react';
import classes from './all-posts.module.css';
import PostsGrid from './PostsGrid';

const AllPosts = ({posts}) => {
  return (
    <div className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={posts} />
      {/* Your code here */}
    </div>
  );
};

export default AllPosts;
