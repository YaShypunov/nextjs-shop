import React, { useCallback, useRef } from 'react';
import ButtonComponent from '../ui/ButtonComponent';
import classes from './events-search.module.css';

const EventsSearchComponent = ({onSearch = () => {}}) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);

  }, [yearInputRef, monthInputRef, onSearch]);

  return (
   <form className={classes.form} onSubmit={handleSubmit}>
    <div className={classes.controls}>
      <div className={classes.control}>
        <label htmlFor="year">Year</label>
        <select id='year' ref={yearInputRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthInputRef}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
    <ButtonComponent>Find Events</ButtonComponent>
   </form>
  );
};

export default React.memo(EventsSearchComponent);
