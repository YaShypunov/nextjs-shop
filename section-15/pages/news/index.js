import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
  return (
    <div>
     <h1>News page</h1>
     <ul>
      <li>
        <Link href='/news/the-first-article'>
      The first Article
      </Link>
      </li>
      <li>
       <Link href={'/news/the-second-article'}>
       The second Article
       </Link> 
      </li>
     </ul>
    </div>
  );
};

export default React.memo(NewsPage);
