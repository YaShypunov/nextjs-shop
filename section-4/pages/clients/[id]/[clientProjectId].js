import { useRouter } from 'next/router';
import React from 'react';

const ClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query)
  return (
    <div>
      <h1>The Client Project Page</h1>
    </div>
  );
};

export default ClientProjectPage;
