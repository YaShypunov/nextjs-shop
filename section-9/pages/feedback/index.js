import React, { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = ({feedbackItems}) => {
  const [feedbackData, setFeedbackData] = useState();
  const loadFeedbackHandler =  (id) => async () => {
    const response = await fetch(`/api/feedback/${id}`);
    const data = await response.json();

    setFeedbackData(data.feedback);
    
  };

  return (
    <div>
        <ul>
        {feedbackItems.map((item) => 
        <li key={item.id}>{item.email} - {item.text} - <button onClick={loadFeedbackHandler(item.id)}>Show Details</button></li>)
        }
      </ul>

{feedbackData && <div>
  Feedback: 
  <h2>{feedbackData.email}</h2>
  <p>{feedbackData.text}</p>
</div>}
    </div>
  );
};

export  const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    }
  }

}
export default React.memo(FeedbackPage);
