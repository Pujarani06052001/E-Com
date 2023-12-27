"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product_listing({ params }) {
  const [productDetails, setProductDetails] = useState(null);

  const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products?category${params.category}`)
      .then((res) => res.json())
      .then((res) => {
        setProductDetails(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchProductDetails();
  },[params.category]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: "solid 2px red" }}>
      <h1>{params.category} Details</h1>
      {productDetails.map((product) => (
        product.category === params.category && (
          <div key={product.id}>
            <img
              src={product.image}
              style={{ width: '350px', height: '300px', borderRadius: '8px' }}
            />
            <p>Product ID: {product.id}</p>
            <p>Title: {product.title}</p>
            <p>Category: {product.category}</p>
            <hr />
          </div>
        )
      ))}
    </div>
  );
}  

export default Product_listing;