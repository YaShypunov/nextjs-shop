'use client'

const Error = ({error}) => {
  return (
    <div className='error'>
     <h1>An error occured!</h1>
     <p>Failed to fetch meal data. Please, try again later.</p>
    </div>
  );
};

export default Error;
