import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import useSWR from 'swr';
import Head from 'next/head';

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug || [0, 0];
  const [events, setEvents] = useState([]);
  const {data, error} = useSWR('https://nextjs-course-3eed1-default-rtdb.firebaseio.com/events.json', (url) => fetch(url).then(res => res.json()));

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth; 
  const date = new Date(numYear, numMonth - 1);

  useEffect(() => {
    if(!data){
      return
    }

    const newEvents = [];

    // create events array from data
    for(const key in data) {
      const event = data[key];
      const eventDate = new Date(event?.date);

     if(eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1){
       newEvents.push({
         id: key,
         ...event
       })
     }
    }

    setEvents(newEvents);
  }, [data, numYear, numMonth]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={'A list of filtered events'} />
  </Head>
  );

  if (!data) {
    return <>
    {pageHeadData}
     <p className='center'>Loading...</p>
    </>;
  }



   pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={`Events for ${numMonth}/${numYear}.`} />
  </Head>
  );


  if (isNaN(numYear) ||
  isNaN(numMonth) ||
  numYear > 2030 ||
  numYear < 2021 ||
  numMonth < 1 ||
  numMonth > 12 ||
  error) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!events?.length) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
}

// first option to get data from server
// export const getServerSideProps = async ({params}) => {
//   const {slug: filterData} = params;
//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];
//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if(isNaN(numYear) ||
//   isNaN(numMonth) ||
//   numYear > 2030 ||
//   numYear < 2021 ||
//   numMonth < 1 ||
//   numMonth > 12){
//     return {
//       props: {
//         hasError: true
//       }
//     }
//   }

//   const events = await getFilteredEvents({
//     year: numYear,
//     month: numMonth
//   });

//   return {
//     props: {
//       numMonth, 
//       numYear,
//       events
//     }
//   }

// }

export default FilteredEventsPage;
