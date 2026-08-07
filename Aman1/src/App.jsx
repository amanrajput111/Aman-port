import React from 'react'
import { Navbar } from './Component/Navbar'
import Home from './Pages/Home'

export const App = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <Navbar />
      <Home />
    </div>
  )
}
export default App