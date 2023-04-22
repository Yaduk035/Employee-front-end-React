import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar/Navbar'
import "./EmployeeForm.css"
const Form = () => {
  return (
    <div>
<Navbar/>


<form className='employeeForm' style={{height:"410px",width:"350px",backgroundColor:"lightblue",borderColor:"black 20px",margin:"150px 550px",padding:"20px 45px",textAlign:"center"}}>
  <div class="mb-3">
    <label for="name" class="form-label">NAME</label>
    <input type="text" class="form-control" />
    
  </div>
  <div class="mb-3">
  <label for="designation" class="form-label">DESIGNATION</label>
    <input type="text" class="form-control" />
  </div>

  <div class="mb-3">
  <label for="location" class="form-label">LOCATION</label>
    <input type="text" class="form-control" />
  </div>

  <div class="mb-3">
  <label for="salary" class="form-label">SALARY</label>
    <input type="number" class="form-control" />
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br />

<Footer/> 

    </div>
  )
}

export default Form