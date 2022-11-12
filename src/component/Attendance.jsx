import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../App';

function Attendance() {
  const navigate = useNavigate();
  const [searched, setSearched] = useState()
  const [allstudents, setAllstudents] = useState([])
  const [studentFound, setStudentFound] = useState(false);
  const [studentName, setStudentName] = useState();
  const [studentPic,setStudentPic]=useState();
  const [marks, setMark] = useState()

  useEffect(() => {

    let unsubscribe = null;
    const getRealtimeData = async () => {

      const q = query(collection(db, "registration"));

      unsubscribe = onSnapshot(q, (querySnapshot) => {

        const std = [];

        querySnapshot.forEach((doc) => {
          std.push({ id:doc.id,...doc.data() });
        });

        setAllstudents(std);
      });

    }
    getRealtimeData();


    return () => {
      unsubscribe();
    }
  }, [])

  const studentFinder = () => {
    let found = false;
    allstudents.map((each) => {
      if (each.Rollno === searched) {
        found = true;
        setStudentName(each.stdname)
        setStudentPic(each.Profilepic)
      }
    })
    if (found === true) {
      setStudentFound(true)
    }
    else {
      setStudentFound(false)
      setStudentName()
    }
 }

 function mark() {
  if (marks=== "Late"){
    document.getElementById("alert").innerText="Late"
    document.getElementById("alert").style.backgroundColor="yellow";

  }
  else if(marks=== "Absent"){
    document.getElementById("alert").innerText="Absent"
    document.getElementById("alert").style.backgroundColor="red";

  }
  else if(marks=== "Leave"){
    document.getElementById("alert").innerText="Leave"
    document.getElementById("alert").style.backgroundColor="skyblue";
 
  }
  else{
    document.getElementById("alert").innerText="Present"
    document.getElementById("alert").style.backgroundColor="green";
   
  }
 }
    
  
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
      <div className="search">
        <input type="text" placeholder='Enter Rollno. Here...' name="" id="" onChange={(e) => { setSearched(e.target.value) }} /> <button onClick={studentFinder}>Get</button>
      </div>
      <hr />
      <div>ATTENDANCE PAGE</div>
      <hr />
      <div className="attendance">
        <div className="display">
          <div className="image"><img width="100%" src={studentPic} alt="" /></div>
          <div className="name"><span>Name:</span><span>{studentFound && studentName}</span></div><br />
          <div className="rollno"><span>Rollno.</span>{studentFound && searched}<span></span></div>
        </div>
        <div className="hodor">
          <select onChange={(e)=>{setMark(e.target.value)}} name="" id="">
            <option selected value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
            <option value="Leave">Leave</option>
          </select>
          <div className='mark'>
            <button onClick={mark}>Mark</button>
          </div>
        </div>
      </div>
      <div id='alert' className="alert">

      </div>

    </>
  )
}

export default Attendance