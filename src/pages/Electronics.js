
import Navbar from "../components/Navbar";
import "./Products.css";
import axios from "axios";


import laptop from "../assets/computer-laptop.jpg";
import smartphone from "../assets/Mobile-phone.webp";
import headphones from "../assets/Head-phone.png";
import monitor from "../assets/monitor-png.png";
import printer from "../assets/printer.png";
import gameConsole from "../assets/joystick-hd.png";
import smartwatch from "../assets/smart-watch.jpg";
import tablet from "../assets/tablet_PNG8600.png";
import washingMachine from "../assets/Front-Loader-Washing-Machine.png";
import speaker from "../assets/speaker-png.png";
import refrigerator from "../assets/refrigerator_PNG101546.png";

function Electronics() {
  const products = [
    { name: "Laptop", price: 22000, image: laptop },
    { name: "Smartphone", price: 5000, image: smartphone },
    { name: "Headphones", price: 150, image: headphones },
    { name: "Monitor", price: 1300, image: monitor },
    { name: "Printer", price: 700, image: printer },
    { name: "Camera", price: 600, image: "https://img.icons8.com/ios-filled/100/000000/camera.png" },
    { name: "Game Console", price: 400, image: gameConsole },
    { name: "Smartwatch", price: 500, image: smartwatch },
    { name: "Tablet", price: 8000, image: tablet },
    { name: "Washing Machine", price: 25000, image: washingMachine },
    { name: "Bluetooth Speaker", price: 650, image: speaker },
    { name: "Refrigerator", price: 20000, image: refrigerator },
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
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    favs.push({ name, price });
    localStorage.setItem("favourites", JSON.stringify(favs));

    alert(`${name} added to favourites!`);
  };

  return (
    <div>
      <Navbar />
      <header className="header">ShopEase - Electronics</header>

      <div className="container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            
            <button
              className="btn"
              onClick={() => addToCart(product.name, product.price)}
            >
              🛒 Add to Cart
            </button>
            <button
              className="btn"
              onClick={() => addToFavourites(product.name, product.price)}
            >
              ❤️ Add to Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;




























// import Navbar from "../components/Navbar";
// import "./Products.css";
// import laptop from "../assets/computer-laptop.jpg";
// import smartphone from "../assets/Mobile-phone.webp";
// function Electronics() {
//   const products = [


//     { name: "Laptop", price: 22000, image: "..assets/computer-laptop.jpg" },
//     { name: "Smartphone", price: 5000, image: "..assets/Mobile-phone.webp" },
    
//     { name: "Headphones", price: 150, image: "/Head-phone.png" },
//     { name: "Monitor", price: 1300, image: "/monitor-png.png" },
//     { name: "Printer", price: 700, image: "/printer.png" },
//     {
//       name: "Camera",
//       price: 600,
//       image: "https://img.icons8.com/ios-filled/100/000000/camera.png",
//     },
//     { name: "Game Console", price: 400, image: "/joystick-hd.png" },
//     { name: "Smartwatch", price: 500, image: "/smart-watch.jpg" },
//     { name: "Tablet", price: 8000, image: "/tablet_PNG8600.png" },
//     { name: "Washing Machine", price: 25000, image: "/Front-Loader-Washing-Machine.png" },
//     { name: "Bluetooth Speaker", price: 650, image: "/speaker-png.png" },
//     { name: "Refrigerator", price: 20000, image: "/refrigerator_PNG101546.png" },
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

//   // ✅ Add to Favourites
//   const addToFavourites = (name, price) => {
//     const favs = JSON.parse(localStorage.getItem("favourites")) || [];
//     favs.push({ name, price });
//     localStorage.setItem("favourites", JSON.stringify(favs));

//     alert(`${name} added to favourites!`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <header className="header">ShopEase - Electronics</header>

//       <div className="container">
//         {products.map((product, index) => (
//           <div className="product-card" key={index}>
//             <img src={laptop} alt={laptop} />
//             <h3>{product.name}</h3>
//             <p>Price: ₹{product.price}</p>
            
//             <button
//               className="btn"
//               onClick={() => addToCart(product.name, product.price)}
//             >
//               🛒 Add to Cart
//             </button>
//             <button
//               className="btn"
//               onClick={() => addToFavourites(product.name, product.price)}
//             >
//               ❤️ Add to Favourites
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Electronics;


// //  <div className="product-card" key={index}>
// //             <img src={smartphone} alt={laptop} />
// //             <h3>{product.name}</h3>
// //             <p>Price: ₹{product.price}</p> </div>
