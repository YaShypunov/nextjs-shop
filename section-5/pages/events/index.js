import React, { useCallback } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventListComponent from '../../components/events/EventListComponent';
import EventsSearchComponent from '../../components/events/EventsSearchComponent';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleSearch = useCallback((year, month) => {
    router.push(`/events/${year}/${month}`)
  }, [router]);

  return (
    <>
    <EventsSearchComponent onSearch={handleSearch} />
     <EventListComponent items={events}  />
    </>
  );
};

export default React.memo(EventsPage);
