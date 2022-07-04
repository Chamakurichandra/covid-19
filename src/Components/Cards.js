import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cards({ data }) {
    let navigate = useNavigate();
    const [searchField, setSearchField] = useState("");
    var info=[];
    const filterData=(data)=>{
        if(typeof data!=='undefined')
        data.filter((item) => {
        if (searchField == "") {
            info.push(item);
        } else if (item.state.toLowerCase().includes(searchField.toLowerCase())) {
            info.push(item);
        }
        
    })}
    return (
        <div>
            <div className="container overflow-hidden">
                <div className='text-center'>
                    <input type='text' placeholder='Search for State' className='w-25 p-0 rounded mt-3 p-1' onKeyUp={(e) => setSearchField(e.target.value)} />
                </div>
                <div className="row gx-5">
                    {filterData(data)}
                    {data && info.length>0?info.map((item, index) => (
                        <div className='col-4' key={index} onClick={() => navigate('/' + item.state, { state: item })} style={{ cursor: 'pointer' }}>
                            <div className="p-3 my-3 border  text-white rounded" style={{ height: '280px', backgroundColor: index % 2 ? 'yellowgreen' : 'blueviolet' }}>
                                <div dangerouslySetInnerHTML={{__html:searchField==''?item.state:item.state.replace(RegExp(searchField, 'gi'),'<b style="color:yellow">'+searchField+'</b>')}}></div>
                                <div>Active : {item.active}</div>
                                <div>Confirmed : {item.confirmed}</div>
                                <div>Deaths : {item.deaths}</div>
                                <div>Recovered : {item.recovered}</div>
                            </div>
                        </div>
                    )):<div><div className='position-absolute top-50 start-50 translate-middle'>
                    <div className='text-danger'>No data Found</div>
                    </div></div>}
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
