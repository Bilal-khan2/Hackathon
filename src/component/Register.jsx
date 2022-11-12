import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { db } from '../App'
import { addDoc, collection } from "firebase/firestore";

const Register = () => {
    const navigate = useNavigate("")
    const [name, setName] = useState("");
    const [fathername, setFatherName] = useState("");
    const [Rollno, setRollno] = useState("");
    const [contact, setContact] = useState("");
    const [cnic, setCnic] = useState("");
    const [picture, setPicture] = useState("");
    const [courseID, setCourseID] = useState("");

    const reg = async (e) => {
        e.preventDefault();
        if (picture.type.slice(0, 5) === 'image') {
            const cloudinaryData = new FormData();
            cloudinaryData.append("file", picture);
            cloudinaryData.append("upload_preset", "myFacebookPictures")
            cloudinaryData.append("cloud_name", "huzefa")
            axios.post(`https://api.cloudinary.com/v1_1/huzefa/image/upload`, cloudinaryData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(async res => {
                    try {
                        await addDoc(collection(db, 'registration'), {
                               stdname: name,
                               fathername: fathername,
                               Rollno: Rollno,
                               Contact: contact,
                               Cnic: cnic,
                               Profilepic: res?.data?.url,
                               CourseName: courseID,                   
                           });
               
                           alert('Class Added')
                       }
                       catch (errors) {
                           console.error(errors)
                       }
                       })
        }
        else {
            alert('Only Images are allowed to upload! Invalid Image');
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
            <div>REGISTRATION </div>
            <hr />
            <form action="" className="register">
                <label htmlFor="" className="reg">Name : </label><input required onChange={(e) => { setName(e.target.value) }} type="text" name="" id="" /><br /><br />
                <label htmlFor="" className="reg">Father Name : </label><input required onChange={(e) => { setFatherName(e.target.value) }} type="text" name="" id="" /><br /><br />
                <label htmlFor="" className="reg">Rollno. : </label><input required onChange={(e) => { setRollno(e.target.value) }} type="text" name="" id="" /><br /><br />
                <label htmlFor="" className="reg">Contact No. : </label><input required onChange={(e) => { setContact(e.target.value) }} type="text" name="" id="" /><br /><br />
                <label htmlFor="" className="reg">Cnic Number : </label><input required onChange={(e) => { setCnic(e.target.value) }} type="text" name="" id="" /><br /><br />
                <label htmlFor="" className="reg">Picture : </label><input required onChange={(e) => { setPicture(e.target.files[0]) }} type="file" name="" id="" /><br /><br />
                <label htmlFor="" className="reg">Course ID : </label><input required onChange={(e) => { setCourseID(e.target.value) }} type="text" name="" id="" /><br /><br />
                <button onClick={reg}>Register</button>
            </form>
        </>
    )
}

export default Register