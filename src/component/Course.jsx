import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {db } from '../App'
import { addDoc,collection} from "firebase/firestore";




const Course = () => {
  const[classtimest,setClasstimest]=useState();
  const[classtimeend,setClasstimeend]=useState();
  const[classtimeaAM,setClasstimeAM]=useState();

  const[shedule,setShedule]=useState(); 
  const[teacherName,setTeachername]=useState();
  const[section,setSection]=useState();
  const[coursename,setCoursename]=useState();
  const[batch,setBatch]=useState();

  let coursedata= async(e)=>{
    e.preventDefault()
    try {
      await addDoc(collection(db, 'courses'), {
          ClassTimings: classtimest + '-' + classtimeend + classtimeaAM ,
          ScheduleOfClasses: shedule,
          TeachersName: teacherName,
          SectionName: section,
          CourseName: coursename,
          BatchNumber: batch,
      });
     
      alert('Data Saved')
  }
  catch (errors) {
      console.error(errors)
  }
  
  }
  const navigate = useNavigate()

  return (
    <>
      <div className="Header">
        <div className="home_btn"><button onClick={() => { navigate('/home') }}>Home</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/register') }}>Register</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/courses') }}>Courses</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/attendance') }}>Attendance</button></div>
        <div className="home_btn"><button onClick={() => { navigate('/') }}>Logout</button></div>

      </div>
      <hr />
      <div>COURSES</div>
      <hr />
      <form className='course' action="">
        <label className='cou' htmlFor="">Class Timings : </label><select onChange={(e)=>{setClasstimest(e.target.value)}} name="" id=""><option selected disabled value="">select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
         --
        <select onChange={(e)=>{setClasstimeend(e.target.value)}} name="" id="">
          <option selected disabled value="">select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select onChange={(e)=>{setClasstimeAM(e.target.value)}} name="" id=""><option value="AM">AM</option> <option value="PM">PM</option></select>
        <br />

        <label className='cou' htmlFor="">Shedule of Class :</label>
        <select onChange={(e)=>{setShedule(e.target.value)}} name="" id="">
          <option selected disabled value="">select</option>
          <option value="MWF">MWF</option>
          <option value="TTS">TTS</option>
          <option value="S">Sunday</option>
        </select>
        <br />

        <label className='cou' htmlFor="">Teachers Name : </label>
        <select onChange={(e)=>{setTeachername(e.target.value)}} name="" id="">
          <option selected disabled value="">select</option>
          <option value="Sir Salman Zafar">Sir Salman Zafar</option>
          <option value="Sir Imzaman Malik">Sir Imzaman Malik</option>
          <option value="Sir Kashif">Sir Kashif Mughal</option>
          <option value="Sir Saad Ali">Sir Saad Ali</option>
        </select>
        <br />

        <label className='cou' htmlFor="">Section :</label>
        <select onChange={(e)=>{setSection(e.target.value)}} name="" id="">
        <option selected disabled value="">select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="H">H</option>
          <option value="I">I</option>
        </select>
        <br />
        
        <label className='cou' htmlFor="">Course Name :</label>
        <select name="" onChange={(e)=>{setCoursename(e.target.value)}} id="">
          <option selected disabled value="">select</option>
          <option value="WEB and App">WEB AND APP DEVELOPMENT</option>
          <option value="GRAPHIC DESIGN">GRAPHIC DESIGN</option>
          <option value="AI CHAT BOT">AI CHAT BOT</option>
          <option value="PHONE REPAIR">PHONE REPAIR</option>
          </select>
          <br />

          <label className='cou' htmlFor="">Batch : </label>
          <select name="" onChange={(e)=>{setBatch(e.target.value)}} id=""><option selected disabled value="">select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          </select>
          <br /><br />
          <button onClick={coursedata}>Save</button>
      </form>

      
    </>
  )
}

export default Course