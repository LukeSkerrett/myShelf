import React, { useEffect, useState } from 'react'
import { SneakerShelf } from './sneakershelf';
import axios from 'axios'
import { Searchbar } from './Searchbar';

export const Shelf = () => {

  const [sneakerData, setSneakerData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/searchsneakers")
    .then(res => {
      setSneakerData(res.data)
    })
    .catch(error => {
      console.error('Error fetching sneaker data: ', error);
    })
  }, []);

  return (
    <div className="shelfpage">
          <Searchbar placeholder="Search for sneakers..." data={sneakerData} />
          <SneakerShelf />
    </div>

  )
};
