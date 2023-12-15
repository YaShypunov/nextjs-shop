import Link from 'next/link';
import React from 'react';

const IndexPage = () => {
  return (
    <div>
  <h1>The home page</h1>
  <ul>
    <li>
      <Link href='/portfolio'>Portfolio</Link>
    </li>
    <li>
      <Link href='/clients'>Clients</Link>
    </li>
  </ul>
    </div>
  );
};

export default IndexPage;
