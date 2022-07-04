import React from 'react';
import Cards from '../Components/Cards';
export default function Home({data,district}) {
  return (
    <div>
    <Cards data={data} district={district}/>    
    </div>
  )
}
