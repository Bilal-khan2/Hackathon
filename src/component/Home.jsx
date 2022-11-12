import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate()
  return(
    <>
 <div className="Header">
        <div className="home_btn"><button onClick={() => { navigate('/home') }}>Home</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/register') }}>Register</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/courses') }}>Courses</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/attendance') }}>Attendance</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/') }}>Logout</button></div>

      </div>
      <hr />
  <div>HOME PAGE</div>
  <hr />
  </>
)
}
  


export default Home