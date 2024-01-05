import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './CreateSneaker.css'
export const CreateSneaker = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const username = location.state.user.username
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/createsneaker', {username, name, color, year})
        .then(res => {
            navigate('/shelf', {state: location.state.user})
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='createSneaker'>
        <h1>Fill your shelf</h1>
        <div className='d-flex vh-100  justify-content-center align-items-start'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit = {handleSubmit}>
                    <h2>Add Sneaker</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Shoe Name</label>
                        <input type="text" placeholder='Enter Shoe Name...' className ='form-control' 
                        onChange={e=> setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Colorway</label>
                        <input type="text" placeholder='Enter Colorway...' className ='form-control' 
                        onChange={e=> setColor(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Year</label>
                        <input type="text" placeholder='Enter Year...' className ='form-control' 
                        onChange={e=> setYear(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    </div>

  )
}
