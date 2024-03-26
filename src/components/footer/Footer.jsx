import React from 'react'
import zeerodhaLogo from '../../assets/logo.png'
import steakLogo from '../../assets/steakLogo.png'
export function Footer() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="flex flex-col text-gray-500">
              
                <span className="mb-4"><img src={steakLogo} width={'20%'} /></span>
                <img src={zeerodhaLogo} width={'30%'}/>
                <p>NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No: IN-DP-431-2019</p>
              </div>
            </a>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
