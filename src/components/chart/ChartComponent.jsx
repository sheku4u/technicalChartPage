import React from 'react'
import sourceData from '../../data/sourceData.json'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
 const ChartComponent = () => {

  return (
    <div className=' w-[34em]'>
      <Bar
      data={{
        labels: sourceData.map((data)=> data.label),
        datasets:[
            {
                label: "data",
                data: sourceData.map((data)=> data.data),
                backgroundColor: sourceData.map((data)=> data.borderColor),
                borderRadius: 5
            },{
                label: "second",
                data: [2,8,8,4,6,9]
            }
        ]
      }}
      options={{
        responsive: true,
        plugins:{
            title:{
                text:"data stocks"
            }
        }
      }}
      />
    </div>
  );
};

export default ChartComponent