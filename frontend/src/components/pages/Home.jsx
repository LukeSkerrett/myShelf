import React from 'react'
import { Login } from './Login'
import "./Home.css"

export const Home = () => {
  return (
    <div className="homepage">
      <div className="Slogan">
        All your favorite sneakers in one place.
      </div>
      <Login/>
    </div>
  )
}
