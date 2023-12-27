import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.image}>
      <Image alt='Yaroslav' src='/images/site/avatar.png' width={300} height={300} />
      </div>
      <h1>Hi, I'm Yaroslav</h1>
      <p>I blog about web development - especially frontend frameworks like React.js, Node.js, Next.js</p>
      {/* Your code here */}
    </div>
  );
};

export default React.memo(Hero);
