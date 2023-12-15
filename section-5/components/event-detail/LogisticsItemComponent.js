import React from 'react';
import classes from './logistics-item.module.css';

const LogisticsItemComponent = ({icon: Icon, children}) => {
  return (
    <li className={classes.item}>
    <span className={classes.icon}>
      <Icon />
    </span>
    <span className={classes.content}>{children}</span>
  </li>
  );
};

export default React.memo(LogisticsItemComponent);
