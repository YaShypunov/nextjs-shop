import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventListComponent from '../components/events/EventListComponent';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventListComponent items={featuredEvents} />
    </div>
  );
};

export default React.memo(HomePage);
