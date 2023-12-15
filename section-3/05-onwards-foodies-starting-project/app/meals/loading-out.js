import React from 'react';
import classes from './loading.module.css';

const Loading = () => {
  return (
    <div className={classes.loading}>
    Fetching meals...
    </div>
  );
};

export default Loading;
