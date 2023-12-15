import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummaryComponent from '../../components/event-detail/EventSummaryComponent';
import EventLogisticsComponent from '../../components/event-detail/EventLogisticsComponent';
import EventContentComponent from '../../components/event-detail/EventContentComponent';
import ErrorAlertComponent from '../../components/ui/ErrorAlertComponent';

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if(!event) {
    return <ErrorAlertComponent>No event found!</ErrorAlertComponent>
  }

  return (
   <Fragment>
    <EventSummaryComponent title={event.title} />
    <EventLogisticsComponent 
    date={event.date}
    address={event.location}
    image={event.image}
    imageAlt={event.title}
    />
    <EventContentComponent >
     <p>
     {event.description}
     </p>
    </EventContentComponent>
   </Fragment>
  );
};

export default React.memo(EventPage);
