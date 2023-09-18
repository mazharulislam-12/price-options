import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navber/Navbar'
import PriceOptions from './Components/priceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'

function App() {

  return (
    <>

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      

    </>
  )
}

export default App
