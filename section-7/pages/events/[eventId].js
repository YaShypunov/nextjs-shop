import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { getEventById, getFeaturedEvents } from '../../dummy-data';
import Head from 'next/head';

function EventDetailPage({event}) {

  if (!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>

    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title} Event</title>
        <meta name='description' content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getStaticProps = async ({params}) => {
  const {eventId} = params;
  const event = await getEventById(eventId);

  return {
    props: {
      event
    },
    revalidate: 30,
  }
}

// getStaticPaths is a function that tells Next.js which dynamic pages it should pre-generate. If we doesn't want to pre-generate a page, we can return an empty array.
export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: {
      eventId: event.id
    }
  }))

  return {
    paths,
    fallback: true,
  }
}
export default EventDetailPage;
