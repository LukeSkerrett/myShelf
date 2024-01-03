import React from 'react'
import axios from 'axios'

export const Shelf = ({ inputValues }) => {
    let userData = inputValues;
    axios.post('http://localhost:8081/shelf', userData)
    .then 
  return (
    <div> </div>
  )
};
