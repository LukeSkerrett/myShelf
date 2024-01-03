import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './SignupValidation.jsx'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

export const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password:''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password == "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='p-3 rounded w-25'>
            <h2>Fill your shelf!</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Name' name='name'
                    onChange={handleInput} className ='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'> {errors.name} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email'
                    onChange={handleInput} className ='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'> {errors.email} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'> {errors.password} </span>}
                </div>
                <button type='submit' className ='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                <p>You agree to our terms and policies</p>
                <Link to= "/"className ='btn btn-default border w-100 rounded-0 text-decoration-nonte'>Login</Link>
            </form>
        </div>
    </div>
  )
}
