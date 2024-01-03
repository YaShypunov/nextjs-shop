import React from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import { MongoClient, ObjectId } from 'mongodb';
import { uri } from '../api/new-meetup';
import Head from 'next/head';

const MeetupIdPage = ({meetupData = {}}) => {
  return<>
   <Head>
    <title>{meetupData?.title}</title> 
    <meta name="description" content={meetupData?.description} />
  </Head>
  <MeetupDetails 
  address={meetupData?.address}
  image={meetupData?.image}
  title={meetupData?.title}
  description={meetupData?.description}
   />
  </>
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
 
  client.close();
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    }
  }
}
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetups) => ({
      params: {
        meetupId: meetups._id.toString(),
      }
    }))
  }
}

export default React.memo(MeetupIdPage);
