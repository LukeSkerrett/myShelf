import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
export const Searchbar = ({placeholder, data}) => {
  return (
    <div className="Searchbar">
        <div className="searchInputs">
            <input type ="text" placeholder={placeholder}/>
            <div className="searchIcon"><SearchIcon/></div>
        </div>

        <div className="dataResult"></div>
    </div>
  )
}
