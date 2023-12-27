export const getAllEvents = async () => {
  const response = await fetch('https://nextjs-course-3eed1-default-rtdb.firebaseio.com/events.json');
  const data = await response.json();
  const events = [];

  // create events array from data
  for(const key in data) {
    events.push({
      id: key,
      ...data[key]
    })
  }

  return events
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.isFeatured)

}

export const getEventById = async (id) => {
  const response = await fetch(`https://nextjs-course-3eed1-default-rtdb.firebaseio.com/events/${id}.json`);
  return await response.json() || null;
}

export const getFilteredEvents = async (dateFilter) => {
  const {year, month} = dateFilter; 
  const allEvents = await getAllEvents();
  
  return allEvents.filter((event) => {
    const eventDate = new Date(event?.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })
}
