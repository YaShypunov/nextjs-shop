import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { uri } from './api/new-meetup';
import Head from 'next/head';

const HomePage = ({meetups = []}) => {

  return (
   <>
   <Head>
    <title>React Meetups</title>
    <meta name="description" content="Lorem ipsum" />
   </Head>
    <MeetupList meetups={meetups} />
   </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 3600,
  }
}

// export const getServerSideProps = async (context) => {
//   const {req, res} = context;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },

//   }
// }

export default React.memo(HomePage);
