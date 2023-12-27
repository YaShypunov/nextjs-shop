import React from 'react';

const UserProfilePage = ({username}) => {
  if(!username){
    return <p>Loading...</p>
  }
  return (
  <h1>{username}'s Profile</h1>
  );
};

export default React.memo(UserProfilePage);

export const getServerSideProps = async (context) => {
  const {params, req, res} = context;

  console.log(req);
  console.log(res);
  
  return {
    props: {
      username: 'Max'
    },
    // notFound: false,

  }
};
