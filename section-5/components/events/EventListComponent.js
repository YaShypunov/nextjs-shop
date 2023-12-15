import React from 'react';
import EventItemComponent from './EventItemComponent';
import classes from './event-list.module.css';
const EventListComponent = ({items}) => {
  return (
   <ul className={classes.list}>
    {items.map((event) => 
    <EventItemComponent 
    key={event.id}
    image={event.image} title={event.title} date={event.date} location={event.location} id={event.id} 
    />)}
   </ul>
  );
};

export default React.memo(EventListComponent);
