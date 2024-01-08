import React from 'react'
import './About.css'
import { FaCircleInfo } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
export const About = () => {
  return (
    <div className='d-flex justify-content-center align-items-start vh-100'>
        <div className='p-3 rounded w-25'>
            <h4>Personal project developed by Luke Skerrett, inspired by my love for sneakers.</h4>
            <h4> Hosted on <a href="https://github.com/LukeSkerrett/myshelf-app">Github</a>  <FaGithubSquare /> </h4>
        </div>
    </div>
  )
}
