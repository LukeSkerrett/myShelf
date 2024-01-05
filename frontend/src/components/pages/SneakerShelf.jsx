import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SneakerShelf.css'
import { Link, useNavigate } from 'react-router-dom'

export const SneakerShelf = (username) => {
  const [empty, setEmpty] = useState([])
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const style = {backgroundColor: "#2b2d42", color:"#edf2f4"}
  useEffect(() => {
    axios.post('http://localhost:8081/getsneakers', username)
    .then(res => {
      if(res.data == "Empty"){
        setEmpty("Empty")
      }
      else{
        setData(res.data)
        setEmpty("")
      }
    })
    .catch(err => {
      console.log("error occured in /getsneakers")
    })
  })

  const handleDelete = (id) =>{
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res =>  {
      navigate('/shelf', {state: username})
      location.reload()
    })
    .catch(err => console.log(err));
  }
  return (
    <div className='sneakershelf'>
      {empty && <span>Your shelf looks empty, add some shoes!</span>}
      <table className='table' >
        <thead >
          <tr  >
            <th key='sneakername' style={style} >Sneaker Name</th>
            <th key='colorway' style={style}>Colorway</th>
            <th key='year' style={style}>Year Released</th>
            <th key='edit' style ={style}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map( (d,i) =>(
            <tr>
              <td style={style}>{d.name}</td>
              <td style={style}>{d.colorway}</td>
              <td style={style}>{d.year}</td>
              <td style={style} >
                <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/createsneaker"} state={ {user: username} } className='btn btn-success addbtn'> Add More </Link>
    </div>
  )
}
