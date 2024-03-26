import React from 'react'
import ChartComponent from '../chart/ChartComponent'

function Card({prop}) {
  return (
    <div className=' w-[38em] h-auto  p-1 m-2'>
        <div className=' w-auto m-2 p-4 '>
            <ChartComponent />
        </div>
        <div>
        {prop}
        </div>
    </div>
  )
}

export default Card