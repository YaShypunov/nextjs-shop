import { useRouter } from 'next/router';
import React from 'react';

const PortfolioItemPage = () => {
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)
  return (
    <div>
      <h1>PortfolioItem Page</h1>
    </div>
  );
};

export default PortfolioItemPage;
