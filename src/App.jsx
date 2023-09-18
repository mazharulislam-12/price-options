import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navber/Navbar'
import PriceOptions from './Components/priceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {

  return (
    <>

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      

    </>
  )
}

export default App
