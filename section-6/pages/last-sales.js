import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props?.sales || []);
  // const [isLoading, setIsLoading] = useState(false);
  const {data, error} = useSWR('https://nextjs-course-3eed1-default-rtdb.firebaseio.com/sales.json', (url) => fetch(url).then(res => res.json()))

  useEffect(() => {
    const transformedSales = [];

      for(const key in data){
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        })
      }
      setSales(transformedSales)
  }, [data])

  if(error) {
    return <p>Failed to load.</p>
   }

  if(!data && !sales){
    return <p>Loading...</p>
   }


  return (
 <ul>
{
  sales.map((sale) => <li key={sale.id}>{sale.username} - {sale.volume}</li>)
}
 </ul>
  );
};

export default React.memo(LastSalesPage);


export const getStaticProps = async () => {
  const response = await fetch('https://nextjs-course-3eed1-default-rtdb.firebaseio.com/sales.json')
  const data = await response.json();
 
  const transformedSales = [];

  for(const key in data){
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume
    })
  }

  return { 
    props: {
      sales: transformedSales
    },
    revalidate: 10,
  };

} 
