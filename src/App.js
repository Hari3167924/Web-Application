import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import OrderList from "./components/OrderList";
import DailyOrdersCSV from "./pages/DailyOrdersCSV";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// Main
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Bill from "./pages/Bill";
import Payment from "./pages/Payment";

// Categories
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import Groceries from "./pages/Groceries";

// Extras
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/admin/csv" element={<DailyOrdersCSV />} />
      </Routes>
    </Router>
  );
}

export default App;
