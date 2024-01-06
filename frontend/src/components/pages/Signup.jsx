import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './SignupValidation.jsx'
import { useNavigate } from 'react-router-dom'
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import {SERVER_URL} from './index'
import './Login.css'
import axios from 'axios'

export const Signup = () => {
    const [values, setValues] = useState({
        username: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = validation(values);
        setErrors(err);
        if(err.username === "") {
            axios.post(`${SERVER_URL}}/checkexist`, values)
            .then(res =>{
                if(res.data == "Exists"){
                    alert('Username already exists! Please choose a different username')
                }
                else{
                    axios.post(`${SERVER_URL}/signup`, values)
                    .then(res => {
                        navigate('/');
                    })
                    .catch(err => console.log(err));
                }
            })

        }
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='p-3 rounded w-25'>
            <h2>Create Account</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Username</strong></label>
                    <input type="text" placeholder='Enter here...' name='username'
                    onChange={handleInput} className ='form-control rounded-0'/>
                    {errors.username && <span className='text-danger'> {errors.username} </span>}
                </div>
                <button type='submit' className ='btn btn-default w-100 rounded-0'><strong>Sign up <MdOutlineAccountCircle />  </strong></button>
                <p>You agree to our terms and policies</p>
                <Link to= "/"className ='btn btn-default w-100 rounded-0 text-decoration-nonte'>Login <IoIosLogIn /> </Link>
            </form>
        </div>
    </div>
  )
}
