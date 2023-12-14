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
    <div className='container-fluid ' style={{border:"solid"   }}>
      <div className='row'  >
        {myData.map((product) => {
          const { id, title, description, image, price } = product;
          return (
            <div  key={id} className="col" style={{border:"solid", color:"black", margin:"4px"}}> 
              <img src={image} alt={title}   />
              <p style={{ color:" black"}}>${title} </p> 
              <p style={{ color:" black"}}>Price: ${price} </p>
              <p style={{  color:" black"}}> Id: ${ id} </p>  
                
                
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alldata;
