import React from 'react'
import { Route , Routes  } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'

const App = () => {
  return (
    <>
      <h1 className='text-center bg-red-500' >Job Portal App</h1>
      <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route path='/apply-job/:id' element={<ApplyJob/>}  />  
        <Route path='/applications' element={<Applications />} /> 
      </Routes>
    </>
  )
}

export default App