import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import { db } from '../App'
import { collection, query, onSnapshot } from "firebase/firestore";

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [data, setdata] = useState([])

  useEffect(() => {

    let unsubscribe = null;
    const getRealtimeData = async () => {

      const q = query(collection(db, "admin"));

      unsubscribe = onSnapshot(q, (querySnapshot) => {

        const admin = [];

        querySnapshot.forEach((doc) => {
          admin.push({ ...doc.data() });
        });

        setdata(admin);

      });

    }
    getRealtimeData();

    return () => {
      unsubscribe();
    }
  }, [])
  const check=(e)=> {
    e.preventDefault()

    if ((username === data[0].username) && (password === data[0].password)) {
      navigate('/home')
    }
    else {
      alert("please enter correct Username and Password")
     
    }
  }

  return (
    <>
      <form className='loginForm' onSubmit={check}>
        <label className='log'>Username: -</label>  <input onChange={(e) => { setUsername(e.target.value) }} type="text"/><br />
        <label className='log'>Password: -</label>  <input onChange={(e) => { setPassword(e.target.value) }} type="password"/> <br />
        <input type="submit" value='Login'/>
      </form>
      <div>UserName: admin</div>
      <div>Password: admin123</div>

      </>
  )
}


export default Login