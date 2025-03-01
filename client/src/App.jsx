import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import AppContext from './context/AppContext'

const App = () => {
  const {name} = useContext( AppContext )

useEffect(()=>{
   console.log(name)
},[])

  return (
    <>
      <h1  className='text-center bg-red-500' >Job Portal App</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </>
  )
}

export default App