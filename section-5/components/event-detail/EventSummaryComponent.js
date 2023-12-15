import React from 'react';
import classes from './event-summary.module.css';

const EventSummaryComponent = ({title}) => {
  return (
    <section className={classes.summary}>
    <h1>{title}</h1>
  </section>
  );
};

export default React.memo(EventSummaryComponent);
