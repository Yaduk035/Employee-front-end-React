import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"rgb(66, 66, 226)"}}>
        <div className="container-fluid">
         <Link to="/" style={{textDecoration:"none",color:"black"}}>HOME</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  nav1" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              
                <li className="nav-item">
                 <Link to="/" style={{textDecoration:"none",color:"black"}}>Employee</Link>
                </li>
             
             
                <li className="nav-item">
                  <Link to ="/form" style={{textDecoration:"none",color:"black"}}>Employee Form</Link>
                </li>
             
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar