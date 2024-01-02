import { useRouter } from 'next/router';
import React from 'react';

const DetailsPage = () => {
  const router = useRouter();
  const {newsId} = router.query;

  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default React.memo(DetailsPage);
