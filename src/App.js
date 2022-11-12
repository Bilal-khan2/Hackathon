import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Course from './component/Course';
import Attendance from './component/Attendance';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCYbaP_lNLX7ndxgdBFfIdCGg_SQEXm1s4",
  authDomain: "hackathon-3bb09.firebaseapp.com",
  projectId: "hackathon-3bb09",
  storageBucket: "hackathon-3bb09.appspot.com",
  messagingSenderId: "673552717703",
  appId: "1:673552717703:web:e9b0cd4641583e6bc12522",
  measurementId: "G-BXS2F2NBPW"
};


const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/courses' element={<Course/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/attendance' element={<Attendance/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
