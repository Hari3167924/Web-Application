// import React, { useEffect, useState } from "react";
// import { getProducts } from "../api";  // <-- notice ../api if api.js is inside src/

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts()
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map((p) => (
//           <li key={p.id}>
//             {p.name} - ₹{p.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;

import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
