import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Shelf } from './Shelf.jsx'
import axios from 'axios'
import './Login.css'
import validation from './LoginValidation'

export const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password:''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password == "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/shelf');
                }
                else{
                    alert("Account does not exist")
                }
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-start vh-100'>
        <div className='p-3 rounded w-25'>
            <h2>Log-in</h2>
            <form action="" onSubmit ={handleSubmit}>
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
                <button type='submit' className ='btn btn-success w-100 rounded-0'><strong>Login</strong>  </button>
                <p>You agree to our terms and policies</p>
                <Link to= "/signup"className ='btn btn-default border w-100 rounded-0 text-decoration-nonte'>Create Account</Link>
            </form>
        </div>
        <Shelf inputValues={values} />
    </div>
  )
}
