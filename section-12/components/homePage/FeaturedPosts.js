import React from 'react';
import classes from './featured-posts.module.css';
import PostsGrid from '../posts/PostsGrid';

const FeaturedPosts = ({posts}) => {
  return (
    <div className={classes.latest}>
      <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
    </div>
  );
};

export default React.memo(FeaturedPosts);
