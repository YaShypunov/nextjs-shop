import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './post-item.module.css';

const PostItem = ({post}) => {
  const {title, image, excerpt, date, slug} = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`

  return (
 <li className={classes.post}>
   <Link href={`/posts/${slug}`}>
    <div className={classes.image}>
      <Image src={imagePath} title={title} width={300} height={200} layout='responsive' />
    </div>
    <div className={classes.content}>
      <h3>{title}</h3>
      <time>{formattedDate}</time>
      <p>{excerpt}</p>
    </div>
  </Link>
 </li>
  );
};

export default PostItem
