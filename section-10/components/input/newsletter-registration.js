import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailRef= useRef();
  const {showNotification } = useContext(NotificationContext);

   function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    if(!email || !email.includes('@')){
      alert('Invalid email address!');
      return
    }

    showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch('/api/user/register', {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      return response.json().then((data) => {
        throw new Error(data.message || "Something went wrong!");
      });
    })
    .then((data) => {
      showNotification({
        title: "Success!",
        message: data.message,
        status: "success",
      });
    }).catch((error) => {
      showNotification({
        title: "Error!",
        message: error.message,
        status: "error",
      });
    });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
          ref={emailRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
