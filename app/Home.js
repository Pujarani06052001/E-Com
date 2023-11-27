"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
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
        const { category,id, title, description,image} = product;
        return (
          <div key={id} className="col"> 
            {/* <h1>{title}</h1> */}
            {/* <h2>{description}</h2> */}
            {/* <p>{id}</p>  */}
            <img src={image} alt={title} />
            {/* <h1>{title}</h1> */}

            <p>Price: ${product.price}</p>

            {/* <button>Add to Cart</button> */}
            {/* <p className='now'>Buy Now</p> */}
            
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Home;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [myData, setMyData] = useState([]);
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setMyData(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         {myData.map((product) => {
//           const { id, title, image } = product;
//           return (
//             <div key={id} className="col-md-4 mb-4">
//               {/* Adjust column size based on your design */}
//               {/* <h1>{title}</h1> */}
//               {/* <h2>{description}</h2> */}
//               {/* <p>Price: ${product.price}</p> */}
//               {/* <p>{id}</p>  */}
//               <img src={image} alt={title} className="img-fluid" />
//               {/* <button>Add to Cart</button> */}
//               {/* <p className='now'>Buy Now</p> */}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Home;


