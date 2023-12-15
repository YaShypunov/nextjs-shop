import { useRouter } from 'next/router';
import React from 'react';

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query)

  const handleLoadProject = () => {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { 
        id: 'max',
        clientProjectId: 'projecta'
      }
    })

  };
  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
