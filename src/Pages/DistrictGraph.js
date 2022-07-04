import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DistrictGraph({district}) {
  let location=useLocation();
  const dat =district&&district[location.state];
  const distVal=Object.entries(dat)[0].map(item => item);
  const dataInfo=Object.values(distVal[1]);
  console.log(dataInfo);
  const labels=Object.keys(distVal[1]);
   console.log(labels);
  const datas = {
    labels,
    datasets: [
      {
        label: 'Active Cases',
        data: dataInfo.map(item=>item.active),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Recovered',
        data: dataInfo.map(item=>item.recovered),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };
    
  return (
    <div>

  <div>
    <Bar options={{
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
          plugins: {
            title: {
              display: true,
              text: 'Chart',
            },
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        }} data={datas}/>
  </div>
    </div>
  )
}
