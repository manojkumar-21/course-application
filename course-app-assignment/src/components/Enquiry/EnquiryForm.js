import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


import './Enquiry.css'

function EnquiryForm() {
    let history = useNavigate(); 
    const initialState = {
        "userName": "",
        "email": "",
      "phoneNo": "",
      "enquiry":""
    }
    const [user, setUser] = useState(initialState)
    
    useEffect(() => {
      console.log('user', user)
    },[user])

    const onSubmitHandler = async (e) => {
      e.preventDefault() 
      await axios.post("http://localhost:3001/users", user);
      history("/")
  }
  
    const onChangeHandler = (e) => {
        setUser(prevState => {
          return {
              ...user,[e.target.name]: e.target.value
          }
        })  
      } 
     return (
       <>
         <div className="enquiry-header">
          <Link to="/"><button class="btn btn-info"> Back Courses List</button></Link>
           <h1>Enquiry form</h1>
         </div>
         
          <div className='container'>
               <form onSubmit={(e)=>onSubmitHandler(e)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="userName" className="form-control" id="exampleInputUserName" required onChange={(e)=>onChangeHandler(e)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail" required onChange={(e)=>onChangeHandler(e)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone No</label>
                <input type="number" name="phoneNo" className="form-control" id="exampleInputPhoneNo" required onChange={(e)=>onChangeHandler(e)}/>
             </div>
             <div>
               <p>Enquiry</p>
               {/* <textarea name="enquiry" onChange={(e)=>onChangeHandler(e)}></textarea> */}
            <div class="input-group">
              <textarea class="form-control" aria-label="With textarea" name="enquiry" onChange={(e)=>onChangeHandler(e)}></textarea>
            </div>
            </div>
             <button type="submit" className="btn btn-primary mt-3">Submit</button>
            
           </form>
          </div>
      </>
      
  )
}
export default EnquiryForm;