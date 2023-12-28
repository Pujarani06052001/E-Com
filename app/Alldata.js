"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import statements

const Alldata = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setMyData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className='border border-primary'>
        <div className='row'>
          {myData.map((product) => (
            <div key={product.id} className="col border border-dark rounded-top rounded-right rounded-left rounded-bottom"> 
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alldata;
