import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SneakerShelf.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";
import { PiCalendarDuotone } from "react-icons/pi";
import { SERVER_URL } from "./index";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { IoAddCircle } from "react-icons/io5";
export const SneakerShelf = (username) => {
  const [empty, setEmpty] = useState([])
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const style = {backgroundColor: "#2b2d42", color:"#edf2f4"}
  useEffect(() => {
    axios.post(`${SERVER_URL}/getsneakers`, username)
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
    axios.delete(`${SERVER_URL}/delete/`+id)
    .then(res =>  {
      navigate('/shelf', {state: username})
      location.reload()
    })
    .catch(err => console.log(err));
  }
  return (
    <div className='sneakershelf'>
      {empty && <span>Your shelf looks lonely...</span>}
      <table className='table' >
        <thead >
          <tr  >
            <th key='sneakername' style={style} >Sneaker Name <MdDriveFileRenameOutline /> </th>
            <th key='colorway' style={style}>Colorway <IoColorPaletteSharp /> </th>
            <th key='year' style={style}>Year Released <PiCalendarDuotone /> </th>
            <th key='edit' style ={style}>Delete <FaRegTrashAlt /></th>
          </tr>
        </thead>
        <tbody>
          {data.map( (d,i) =>(
            <tr>
              <td style={style}>{d.name}</td>
              <td style={style}>{d.colorway}</td>
              <td style={style}>{d.year}</td>
              <td style={style} >
                <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'><TiDelete /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/createsneaker"} state={ {user: username} } className='btn addbtn'> <IoAddCircle/> </Link>
    </div>
  )
}
