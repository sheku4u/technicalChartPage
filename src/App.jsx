import { useState } from 'react'
import './App.css'
import {Navbar} from './components/navbar/Navbar'
import  Nav  from './components/navbar/Nav'
import ChartComponent from './components/chart/ChartComponent'
import Card from './components/cards/Card'
import DataCard from './components/cards/DataCard'
import { Footer } from './components/footer/Footer'
import { Chart2 } from './components/chart/Chart2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <BtnList/> */}
      <Nav/>
     {/* <div className=' w-32 h-32 border bg-green-200'>
      <Chart2 />
     </div> */}
     <div className=' grid grid-cols-2  h-4/5 '>
     <Card prop={<DataCard sd1={22069} sd2={22149} sd3={ 48.70} sd4={-103} sd5={8} sd6={-57} l1={'EMA(20)'} l2={"SMA(20)"} l3={"RSI(14)"} l4={"AWESOME"} l5={"MACD(12,26,9"} l6={"CC1(20)"}  />} />
     <Card prop={<DataCard sd1={21576} sd2={21169} sd3={ 20402} sd4={22343} sd5={22704} sd6={23471} l1={'S1'} l2={"S2"} l3={"S3"} l4={"S4"} l5={"S5"} l6={"S6"}  />} />
     <Card prop={<DataCard sd1={22069} sd2={22149}    l1={'EMA(20)'} l2={"SMA(20)"}   />} />
     <Card prop={<DataCard sd1={22069} sd2={22149}    l1={'EMA(20)'} l2={"SMA(20)"}   />} />
    
     </div>
     <Footer />
     
    </>
  )
}

export default App
