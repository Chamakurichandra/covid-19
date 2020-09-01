import React from "react";
import axios from "axios";
import "./App.css";
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      covid:[]
    }
  }
  componentDidMount(){
    axios.get("https://api.covid19india.org/data.json")
    .then((posRes)=>{
      this.setState({
        covid:posRes.data.statewise
      })
    },(errRes)=>{
      console.log(errRes);
    })
  }
  render(){
    return(
      <div style={{textAlign:"center",margin:"0 20em"}}>
        <h2 style={{color:"red",textAlign:"center"}}>Covid-19 Tracker Statewise In India</h2>
        <table border="1" cellPadding="5px">
          <thead style={{color:"purple",backgroundColor:"darkgoldenrod"}}>
            <tr>
            <th>State Name</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Total</th>
            <th>Deaths</th>
            <th>Lastupdated Time</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:"black"}}>
           
            {this.state.covid.map((element,index)=>(
               <tr>
                 <td><b style={{color:"white"}}>{element.state}</b> </td>
                 <td><p style={{color:"yellow"}}>{element.active}</p> </td>
                 <td> <p style={{color:"green"}}>{element.recovered}</p></td>
                 <td>
                 <p style={{color:"orange"}}>{element.confirmed}</p>  
                 </td>
                 <td>
                 <p style={{color:"red"}}>{element.deaths}</p> 
                 </td>
                 <td>
                 <p style={{color:"blue"}}>{element.lastupdatedtime}</p> 
                 </td>
                  </tr>
            ))} 
          </tbody>
        </table>
      </div>
    )
  }
};