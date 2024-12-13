import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Jobupdates from './components/JobUpdates/Jobupdates'
import Result from './components/Result/Result'
import LeastJobs from './components/LatestJobs/LatestJobs'
function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className='p-5 text-center text-2xl font-semibold'>Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online Form at Sarkari Results 2024</h1>
      </div>
      <div className="flex p-5 items-center  justify-between flex-wrap  mx-auto">
        <Card />
      </div>
      <div className="flex px-5 items-center flex-wrap">

      

      </div>
    </>
  )
}

export default App
