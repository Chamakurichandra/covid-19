import React from 'react';
import { useNavigate } from 'react-router-dom';
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
export default function Graphs({ data }) {
  let navigate = useNavigate();
  const size = 10;
  const items = data.splice(0, size);
  console.log(items);
  const labels = items && items.map((item) => item.state);
  const datas = {
    labels,
    datasets: [
      {
        label: 'Active Cases',
        data: items && items.map((item) => (item.active)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Recovered',
        data: items && items.map((item) => (item.recovered)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };
  return (
    <div className='mb-5'>
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
          onClick: (e, activeEls) => {
            let dataIndex = activeEls[0].index;
            console.log(dataIndex);
            let label = e.chart.data.labels[dataIndex];
            navigate('/graphs/' + label, { state: label })
            console.log(label);
          }
        }} data={datas} />
      </div>
    </div>
  )
}
