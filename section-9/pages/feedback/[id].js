import React from 'react';

const FeedbackItemPage = () => {
  return (
    <div>
      <h1>FeedbackItem Page</h1>
    </div>
  );
};

const getServersideProps = async (context) => {
  const feedbackId = context.params.id;
  console.log(feedbackId);

  return {
    props: {
      feedbackId: feedbackId,
    },
  };
}

export default React.memo(FeedbackItemPage);
