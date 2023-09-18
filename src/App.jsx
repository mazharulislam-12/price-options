import { useState } from 'react'
import './App.css'
import DasiyUiNav from './Components/DasiyUiNav/DasiyUiNav'
import Navbar from './Components/Navber/Navbar'
import PriceOptions from './Components/priceOptions/PriceOptions'

function App() {

  return (
    <>

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
