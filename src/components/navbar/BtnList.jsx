import React from 'react'

const timeFrame = [
    {
        name: "5 minutes",
        href  :"#"
    },
    {
        name: "10 min",
        href  :"#"
    },
    {
        name: "15 min",
        href  :"#"
    },
    {
        name: "30 min",
        href  :"#"
    },
    {
        name: "hour",
        href  :"#"
    },
    {
        name: "day",
        href  :"#"
    },
    
]
function BtnList() {
  return (
    <div className='relative w-auto bg-white left-64'>
        <div className='mx-auto flex max-w-4xl items-center justify-between px-3 py-1 sm:px-2 lg:px-2'>
            
        <div className="hidden grow items-start lg:flex">
          <ul className=" inline-flex space-x-2">
            {timeFrame.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-blue-200  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-1 mb-1  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        </div>
    </div>
  )
}

export default BtnList