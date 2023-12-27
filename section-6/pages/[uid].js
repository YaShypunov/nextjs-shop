import React from 'react';

const UserIdPage = ({id}) => {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default React.memo(UserIdPage);


export const getServerSideProps = async (context) => {
  const {params} = context;

  const userId = params.uid;
  return {
    props: {
      id: `userid-${userId}`
    }
  }
};
