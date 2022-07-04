import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Graphs from './Pages/Graphs';
import axios from 'axios';
import District from './Pages/District';
import DistrictGraph from './Pages/DistrictGraph';

function App() {
  const [data, setData] = useState();
  const [district, setDistrict] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCovidData();
    getCovidDataDis();
  }, [])
  const getCovidData = async () => {
    setLoading(true);
    try {
      let url = 'https://data.covid19india.org/data.json'
      const res = await axios.get(url);
      console.log(res.data.statewise);
      setData(res.data.statewise);
    } catch (err) {
      console.log(err);
    };
    setLoading(false);
  }
  const getCovidDataDis = async () => {
    setLoading(true);
    try {
      let url = 'https://data.covid19india.org/state_district_wise.json'
      const res = await axios.get(url);
      // console.log(res.data);
      setDistrict(res.data);
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  }
  return (
    <div>
      {loading ? <div><div class="spinner-border text-primary position-absolute top-50 start-50 translate-middle" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div> : <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home data={data} district={district} />} />
          <Route path='/graphs' element={<Graphs data={data} />} />
          <Route path='/:id' element={<District district={district} />} />
          <Route path='graphs/:id' element={<DistrictGraph district={district} />} />
        </Routes>
      </Router>}
    </div>
  );
}

export default App;
