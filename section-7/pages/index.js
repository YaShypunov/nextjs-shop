import Head from 'next/head';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

function HomePage({events}) {

  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='Lorem ipsum lara lna' />
      </Head>
      <EventList items={events} />
    </div>
  );
}


export const getStaticProps = async () => {
  const events = await getFeaturedEvents();

  return {
    props: {
      events
    },
    revalidate: 1800, // 30 minutes
  }
}
export default HomePage;
