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
<<<<<<< HEAD
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
=======
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
                
                
>>>>>>> e9462c0f25b3d9a9f1f9b1cb1c8486a0cbb38073
            </div>
            <div className='col-auto bg-primary'><a href="/Product_listing" class="text-white">viwe all</a></div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> e9462c0f25b3d9a9f1f9b1cb1c8486a0cbb38073
  );
};

export default Alldata;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Alldata = () => {
//   const [myData, setMyData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setMyData(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <>
//       <div className='row'>
//         {myData.map((product) => {
//           const { id, title, description, image, price } = product;
//           return (
//             <div key={id} className="col border mr-2 mb-2 border border-dark rounded-top rounded-right rounded-left rounded-bottom"> 
//               <img src={image} alt={title} />
//               <h5>{title}</h5>
//               <p>Price: ${price}</p>
//             </div>
            
//           );            

//         })}
//       <button>viwe all</button>

//       </div>
//     </>
//   );
// };

// export default Alldata;

