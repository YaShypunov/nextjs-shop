// import { getSession} from 'next-auth/client';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
// import { useEffect, useState } from 'react';

function UserProfile() {
  // const [loading, setLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState(undefined);


  // useEffect(() => {
  //   getSession().then((session) => {
  //     if(!session) {
  //       window.location.href = '/auth';
  //       return 
  //     }
  //     setLoadedSession(session);
  //     setLoading(false);
  //   })
  // }, [])

  // // Redirect away if NOT auth


  // if(loading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }


  const handleChangePassword = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      },
    }) 
    const data = await response.json();
    
    if(!response.ok){
      console.log(data.message)
    }
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChnagePassword={handleChangePassword} />
    </section>
  );
}

export default UserProfile;
