import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;
  const {showNotification} = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored into a database.",
      status: "pending",
    });
    
    
    const response = await fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(!response.ok){
      const data = await response.json();
      showNotification({
        title: "Error!",
        message: data.message,
        status: "error",
      }); 
      return
    }

    if(response.status === 201){
      const data = await response.json();
      setComments((prevComments) => [...prevComments, data.comment]);
      showNotification({
        title: "Success!",
        message: "Your comment was saved.",
        status: "success",
      });
    }
    // send data to API
  }

  const fetchComments = async () => {
    setLoading(true);
    const response = await fetch(`/api/comments/${eventId}`);
    const data = await response.json();
    setComments(data.comments);
    setLoading(false);
  }
  useEffect(() => {
    fetchComments(); 
  },[eventId])
  return (
    <section className={classes.comments}>
   {loading 
      ? <p>Loading...</p> 
      : <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
}

      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}


export default Comments;
