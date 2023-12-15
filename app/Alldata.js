"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  const groupedData = myData.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <div className='border border-primary '>
        {Object.entries(groupedData).map(([category, products]) => (
          <div key={category} className='row border border-primary  '>
            <h3>{category}</h3>
            <div className='row '>
              {products.map((product) => (
                <div key={product.id} className="col border  border border-dark rounded-top rounded-right rounded-left rounded-bottom"> 
                  <img src={product.image} alt={product.title} />
                  <h5>{product.title}</h5>
                  <p>Price: ${product.price}</p>
                </div>

              ))}
            </div>
            <div className='col-auto bg-primary'><a href="/Product_listing" class="text-white">viwe all</a></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Alldata;


