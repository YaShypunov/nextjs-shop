import React from 'react';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import classes from './event-logistics.module.css';
import LogisticsItemComponent from './LogisticsItemComponent';

const EventLogisticsComponent = ({ date, address, image, imageAlt }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItemComponent icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItemComponent>
        <LogisticsItemComponent icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItemComponent>
      </ul>
    </section>
  );
};

export default React.memo(EventLogisticsComponent);
