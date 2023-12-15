import React from 'react';
import classes from './event-content.module.css';

const EventContentComponent = ({children}) => {
  return (
    <section className={classes.content}>
     {children}
    </section>
  );
};

export default React.memo(EventContentComponent);
