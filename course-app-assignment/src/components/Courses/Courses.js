import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Courses.css'

function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
     loadcourses()
  }, [])
  
  const loadcourses = async() => {
    const result = await axios.get("http://localhost:3001/courses")
    console.log(result.data)
    setCourses(result.data)
   }
  return (
    <>
      <div className=' card-container d-flex justify-content-around flex-wrap mt-3 mb-5'>
        {courses.map((obj) => { 
          return <div class="card mt-5">
            <img width={300} height={200} class=" " src={obj.imgUrl} alt=""/>
            <div class="card-body">
            <h5 class="card-title">{obj.title}</h5>
            <Link to="/enquriyForm" class="btn btn-primary">Enquire Now</Link>
            </div>
            </div>
        }) }
      </div>
    </>
  )
}
export default Courses;
