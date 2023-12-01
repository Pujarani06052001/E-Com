"use client"


import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Alldata = () => {
  const [myData,setMyData]=useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setMyData(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);

  return (
    <div>
      <div className='row'>
        {myData.map((product) => {
          const { id, title, description, image, price } = product;
          return (
            <div key={id} className="col"> 
              <img src={image} alt={title} />
              <p>Price: ${price}</p>   
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Alldata;
