import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const Shelf = () => {
  const location = useLocation();
  console.log(location);
  const username = location.state.username;
  return (
    <div className="shelfpage">
      {username}
    </div>

  )
  }