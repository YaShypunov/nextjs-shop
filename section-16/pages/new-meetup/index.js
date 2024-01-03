import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(response);
    router.push('/')
  };

  return (
   <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
};

export default React.memo(NewMeetupPage);
