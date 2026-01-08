import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Dentalteam from './pages/Dentalteam'
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Dentalteam/>
    </>
  )
}

export default App