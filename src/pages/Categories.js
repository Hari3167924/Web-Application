import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    if (category === "electronics") navigate("/electronics");
    if (category === "fashion") navigate("/fashion");
    if (category === "groceries") navigate("/groceries");
  };

  return (
    <div>
      <Navbar />

      <header className="header">ShopEase - Categories</header>

      <div className="container">
        <div className="category-card" onClick={() => goToCategory("electronics")}>
          <img
            src="https://img.icons8.com/ios-filled/100/4965ff/tv.png"
            alt="Electronics"
          />
          <h3>Electronics</h3>
        </div>

        <div className="category-card" onClick={() => goToCategory("fashion")}>
          <img
            src="https://img.icons8.com/ios-filled/100/4965ff/t-shirt.png"
            alt="Fashion"
          />
          <h3>Fashion</h3>
        </div>

        <div className="category-card" onClick={() => goToCategory("groceries")}>
          <img
            src="https://img.icons8.com/ios-filled/100/4965ff/shopping-basket.png"
            alt="Groceries"
          />
          <h3>Groceries</h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;
