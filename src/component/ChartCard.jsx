import React from 'react';
import { Line } from 'react-chartjs-2';



const ChartCard = ({title,stepSize,donnes,d,m}) => {


    const data = {
        labels: ['Oct', 'Mar', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Data',
            data: donnes,
            borderColor: 'rgba(128, 128, 128, 1)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            pointBackgroundColor: 'rgba(128, 128, 128, 1)',
            pointBorderColor: 'rgba(255, 255, 255, 1)',
            pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointHoverBorderColor: 'rgba(128, 128, 128, 1)',
            tension: 0.4,
          },
        ],
      };
      
      const options = {
        scales: {
          y: {
            type: 'linear',
            ticks: {
              beginAtZero: true,
              stepSize: stepSize,
              callback: (value) => `${value /d}${m}`, 
            },
            grid: {
              display: false, 
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
      };



  return (
    <div>
       <h4 className='title-black-600'>{title}</h4>
       <div className='chart'><Line data={data} options={options} /></div>
      
    </div>
  );
};

export default ChartCard;
