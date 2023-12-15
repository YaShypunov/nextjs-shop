import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';

const ButtonComponent = ({children, link, onClick = () => {}}) => {

  if(link) {
    return (
      <Link href={link} className={classes.btn}>
      {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
    {children}
    </button>
  );
};

export default React.memo(ButtonComponent);
