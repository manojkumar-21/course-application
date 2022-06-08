import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

 function Enquiry() {
  const [users,setUsers]= useState([])
    useEffect(() => {
      loadEnquiry()
    }, [])

    const loadEnquiry = async () => {
      const result =  await axios.get("http://localhost:3001/users")
      console.log("helo",result)
      setUsers(result.data)
    }
  
   return (
     <div>
      <h1>User Enquiry</h1>
       <Link to="/"><button class="btn btn-info"> Back Courses List</button></Link>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phoneNo</th>
              <th scope="col">Enquiry</th>
            </tr>
         </thead>
         <tbody>
         
           {users.map((obj) => {
             return (
            <tr key={obj.id}>
              <th scope="row">{obj.id}</th>
              <td>{obj.userName}</td>
              <td>{obj.email}</td>
              <td>{obj.phoneNo}</td>
              <td>{obj.enquiry}</td>
            </tr>
            )
            
            })
         }
          </tbody>
        </table>
    </div>
  )
}
export default Enquiry;