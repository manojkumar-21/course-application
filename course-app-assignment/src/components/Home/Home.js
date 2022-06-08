import React from 'react'

import Courses from '../Courses/Courses'
import Navbar from '../Navbar/Navbar'

import './Home.css'

 function Home() {
  return (
      <>
          <div>
              <Navbar/>
          </div>
          <div className='courses-container'>
              <h1>COURSE LIST</h1>
              <Courses />
          </div>
      </>
   
  )
}
export default Home;