import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm({onChnagePassword =() => {}}) {
  const newPasswordInputRef = useRef();
  const oldPasswordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPassword = newPasswordInputRef.current.value;
    const oldPassword = oldPasswordInputRef.current.value;
    
    // add validation

    onChnagePassword({newPassword, oldPassword});
    
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
