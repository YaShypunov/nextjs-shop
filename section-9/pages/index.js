import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]); 
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch('/api/feedback', {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  const onLoadFeedbackHandler  = () => {
    fetch('/api/feedback')
      .then(response => response.json())
      .then(data => {
        setFeedbackItems(data.feedback)
      })
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
        <label htmlFor="email">Your email address</label>
        <input type="email" id="email" name='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea name="feedback" id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>
          Submit Feedback
        </button>
      </form>
      <hr />
      <button onClick={onLoadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedbackItems.map((item) => <li key={item.id}>{item.email} - {item.text}</li>)}
      </ul>
    </div>
  );
}

export default HomePage;
