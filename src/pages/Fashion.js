// import Navbar from "../components/Navbar";
// import "./Products.css";

// function Fashion() {
//   const products = [
//     { name: "T-Shirt", price: 500, image: "/T-shirt-image.png" },
//     { name: "Jeans pant", price: 1000, image: "/Jeans-pant-image.webp" },
//     { name: "Sneakers", price: 1200, image: "/sport-shoes.png" },
//     { name: "Wrist Watch", price: 3000, image: "/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465709ngqbt.png" },
//     { name: "Backpack", price: 1800, image: "/Backpack-image.webp" },
//     { name: "Cap", price: 300, image: "/baseball-cap-png-image-pngimg-15.png" },
//     { name: "Formal shoes", price: 1500, image: "/Formal-shoes.jpg" },
//     { name: "Sunglasses", price: 250, image: "/sunglassess.jpg" },
//     { name: "Hoodie", price: 1300, image: "/hoodie_PNG30.png" },
//     { name: "Handbag", price: 2300, image: "/Handbag-PNG.png" },
//     { name: "Shirt", price: 800, image: "/shirt-hd-png-dress-shirt-png-image-480.png" },
//     { name: "Track pant", price: 700, image: "/track-pant.jpg" },
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
//       <header className="header">ShopEase - Fashion</header>

//       <div className="container">
//         {products.map((product, index) => (
//           <div className="product-card" key={index}>
//             <img src={product.image} alt={product.name} />
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

// export default Fashion;


import Navbar from "../components/Navbar";
import "./Products.css";

// Import fashion images
import tshirt from "../assets/T-shirt-image.png";
import jeans from "../assets/Jeans-pant-image.webp";
import sneakers from "../assets/sport-shoes.png";
import watch from "../assets/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465709ngqbt.png";
import backpack from "../assets/Backpack-image.webp";
import cap from "../assets/baseball-cap-png-image-pngimg-15.png";
import formalShoes from "../assets/Formal-shoes.jpg";
import sunglasses from "../assets/sunglassess.jpg";
import hoodie from "../assets/hoodie_PNG30.png";
import handbag from "../assets/Handbag-PNG.png";
import shirt from "../assets/shirt-hd-png-dress-shirt-png-image-480.png";
import trackPant from "../assets/track-pant.jpg";

function Fashion() {
  const products = [
    { name: "T-Shirt", price: 500, image: tshirt },
    { name: "Jeans pant", price: 1000, image: jeans },
    { name: "Sneakers", price: 1200, image: sneakers },
    { name: "Wrist Watch", price: 3000, image: watch },
    { name: "Backpack", price: 1800, image: backpack },
    { name: "Cap", price: 300, image: cap },
    { name: "Formal shoes", price: 1500, image: formalShoes },
    { name: "Sunglasses", price: 250, image: sunglasses },
    { name: "Hoodie", price: 1300, image: hoodie },
    { name: "Handbag", price: 2300, image: handbag },
    { name: "Shirt", price: 800, image: shirt },
    { name: "Track pant", price: 700, image: trackPant },
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
      <header className="header">ShopEase - Fashion</header>
      <div className="container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button className="btn" onClick={() => addToCart(product.name, product.price)}>🛒 Add to Cart</button>
            <button className="btn" onClick={() => addToFavourites(product.name, product.price)}>❤️ Add to Favourites</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fashion;
