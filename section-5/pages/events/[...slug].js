import { useRouter } from 'next/router';
import React from 'react';
import { getFilteredEvents } from '../../dummy-data';
import EventListComponent from '../../components/events/EventListComponent';
import ResultsTitleComponent from '../../components/events/ResultsTitleComponent';
import ButtonComponent from '../../components/ui/ButtonComponent';
import ErrorAlertComponent from '../../components/ui/ErrorAlertComponent';

const FilterEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData) {
    return <p className='center'>Loading...</p>
  }

  const [year, month] = filterData;

  const numYear = +year;
  const numMonth = +month;

  if(
    isNaN(numMonth) || 
    isNaN(numMonth) || 
    numYear > 2030 || 
    numYear < 2021 || 
    numMonth < 1 || 
    numMonth > 12){
    return<>
    <ErrorAlertComponent>
    Invalid filter. Please adjust your values!
    </ErrorAlertComponent>
    <div className='center'>
    <ButtonComponent link='/events'>Show All Events</ButtonComponent>
   </div>
    </> 
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if(!filteredEvents?.length) {
    return <>
      <ErrorAlertComponent>
      No events found for the chosen filter!
    </ErrorAlertComponent>
   <div className='center'>
    <ButtonComponent link='/events'>Show All Events</ButtonComponent>
   </div>
    </>
  }

  const date =new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitleComponent date={date} />
      <EventListComponent items={filteredEvents}  />
    </>
  );
};

export default React.memo(FilterEventsPage);
