import React from 'react'

function DataCard({sd1, sd2, sd3, sd4, sd5, sd6, l1, l2, l3, l4, l5, l6}) {
  return (
    <div>
        <ul className=' grid grid-cols-3 grid-flow-row'>
            <li>
                {l1} : {sd1}
            </li>
            <li>
                {l2} : {sd2}
            </li>
            <li>
                {l3} : {sd3}
            </li>
            <li>
                {l4} : {sd4}
            </li>
            <li>
                {l5} : {sd5}
            </li>
            <li>
                {l6} : {sd6}
            </li>
        </ul>
    </div>
  )
}

export default DataCard