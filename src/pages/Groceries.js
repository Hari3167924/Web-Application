// import Navbar from "../components/Navbar";
// import "./Groceries.css";

// function Grocery() {
//   const products = [
//     { name: "Fresh Apples", price: 120, image: "/download-apples-png-image-red-apple-fruit-10.png" },
//     { name: "Organic Milk", price: 60, image: "/11def4a84218b412b4aac57dfe29c224.jpg" },
//     { name: "Basmati Rice", price: 90, image: "/India-Gate-983x1024.png" },
//     { name: "Whole Wheat Bread", price: 40, image: "/wheat-bread.jpg" },
//     { name: "Bananas", price: 50, image: "/banana-7.jpg" },
//     { name: "Potatoes", price: 30, image: "/potatoes.jpg" },
//     { name: "Tomatoes", price: 25, image: "/tomatoes01-lg.jpg" },
//     { name: "Farm Eggs", price: 6, image: "/oval-white-eggs.jpg" },
//     { name: "White Sugar", price: 45, image: "/sugar.jpg" },
//     { name: "Premium Tea", price: 250, image: "/tea-powder.webp" },
//     { name: "Biscuits", price: 50, image: "/biscuits.jpg" },
//     { name: "Cooking Oil", price: 900, image: "/gold-winner-oil.jpg" },
//     { name: "Salt", price: 140, image: "/salt.jpg" },
//     { name: "Wheat flour", price: 500, image: "/Wheat-flour.jpg" },
//   ];

//   // ✅ Add to Cart
//   const addToCart = (name, price) => {
//     const username = localStorage.getItem("username");
//     if (!username) {
//       alert("Please login first!");
//       return;
//     }

//     const cartKey = "cart_" + username;
//     const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//     cart.push({ name, price });
//     localStorage.setItem(cartKey, JSON.stringify(cart));

//     alert(`${name} added to your cart!`);
//   };

//   // ✅ Add to Favourites (avoid duplicates)
//   const addToFavourites = (name, price) => {
//     let favs = JSON.parse(localStorage.getItem("favourites")) || [];
//     if (!favs.some(item => item.name === name)) {
//       favs.push({ name, price });
//       localStorage.setItem("favourites", JSON.stringify(favs));
//       alert(`${name} added to favourites!`);
//     } else {
//       alert(`${name} is already in favourites.`);
//     }
//   };

//   return (
//     <div className="grocery-page">
//       <Navbar />
//       <header className="header">ShopEase Grocery Store</header>

//       <div className="container">
       
//         <div className="grid">
//           {products.map((product, index) => (
//             <div className="item-card" key={index}>
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>Price: ₹{product.price}</p>
//               <button className="btn" onClick={() => addToCart(product.name, product.price)}>
//                 🛒 Add to Cart
//               </button>
//               <br /><br />
//               <button className="btn" onClick={() => addToFavourites(product.name, product.price)}>
//                 ❤️ Add to Favourites
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="footer">
//         &copy; 2025 ShopEase - Grocery Store. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Grocery;


import Navbar from "../components/Navbar";
import "./Groceries.css";

// Import grocery images
import apples from "../assets/download-apples-png-image-red-apple-fruit-10.png";
import milk from "../assets/11def4a84218b412b4aac57dfe29c224.jpg";
import rice from "../assets/India-Gate-983x1024.png";
import bread from "../assets/wheat-bread.jpg";
import bananas from "../assets/banana-7.jpg";
import potatoes from "../assets/potatoes.jpg";
import tomatoes from "../assets/tomatoes01-lg.jpg";
import eggs from "../assets/oval-white-eggs.jpg";
import sugar from "../assets/sugar.jpg";
import tea from "../assets/tea-powder.webp";
import biscuits from "../assets/biscuits.jpg";
import oil from "../assets/gold-winner-oil.jpg";
import salt from "../assets/salt.jpg";
import flour from "../assets/Wheat-flour.jpg";

function Grocery() {
  const products = [
    { name: "Fresh Apples", price: 120, image: apples },
    { name: "Organic Milk", price: 60, image: milk },
    { name: "Basmati Rice", price: 90, image: rice },
    { name: "Whole Wheat Bread", price: 40, image: bread },
    { name: "Bananas", price: 50, image: bananas },
    { name: "Potatoes", price: 30, image: potatoes },
    { name: "Tomatoes", price: 25, image: tomatoes },
    { name: "Farm Eggs", price: 6, image: eggs },
    { name: "White Sugar", price: 45, image: sugar },
    { name: "Premium Tea", price: 250, image: tea },
    { name: "Biscuits", price: 50, image: biscuits },
    { name: "Cooking Oil", price: 900, image: oil },
    { name: "Salt", price: 140, image: salt },
    { name: "Wheat flour", price: 500, image: flour },
  ];

  const addToCart = (name, price) => {
    const username = localStorage.getItem("username");
    if (!username) {
      alert("Please login first!");
      return;
    }
    const cartKey = "cart_" + username;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push({ name, price });
    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert(`${name} added to your cart!`);
  };

  const addToFavourites = (name, price) => {
    let favs = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!favs.some(item => item.name === name)) {
      favs.push({ name, price });
      localStorage.setItem("favourites", JSON.stringify(favs));
      alert(`${name} added to favourites!`);
    } else {
      alert(`${name} is already in favourites.`);
    }
  };

  return (
    <div className="grocery-page">
      <Navbar />
      <header className="header">ShopEase Grocery Store</header>

      <div className="container">
        <div className="grid">
          {products.map((product, index) => (
            <div className="item-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button className="btn" onClick={() => addToCart(product.name, product.price)}>🛒 Add to Cart</button>
              <br /><br />
              <button className="btn" onClick={() => addToFavourites(product.name, product.price)}>❤️ Add to Favourites</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        &copy; 2025 ShopEase - Grocery Store. All rights reserved.
      </footer>
    </div>
  );
}

export default Grocery;
