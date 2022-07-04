import React from 'react';
import { useLocation } from 'react-router-dom';

export default function District({ district }) {
  console.log(district);
  let location = useLocation();
  return (
    <div>
      <div className="container overflow-hidden">
     <div>
      {district && Object.values(district).map((item,i)=>(
        <div key={i}>
          {item.statecode === location.state.statecode && 
          <div>
          <div className='row gx-5'>
          {Object.entries(item.districtData).map((item,i) => (
                    <div className='col-4' key={i}>
                      <div className="p-3 my-3 border  text-white rounded" style={{ height: '280px',backgroundColor:i%2?'yellowgreen':'blueviolet' }}>
                      <div className='fs-3'> {item[0]}</div>  
                      <div>Confirmed : {item[1].confirmed}</div>
                      <div>Active : {item[1].active}</div>
                      <div>Recovered : {item[1].recovered}</div>
                    </div>
                    </div>
                  ))
                }
        </div>
          </div>
          }
        </div>
      ))}
     </div>
  </div>
    </div>
  )
}
