import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);
  const [reportData, setReportData] = useState([]);

  // ✅ NEW STATES
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    if (storedUser) {
      setUsername(storedUser);
      setRole(storedRole);

      const cartKey = "cart_" + storedUser;
      const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
      setCartCount(cart.length);
    }

    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavCount(favs.length);

    // ✅ Load report only if ADMIN
    if (storedRole === "ADMIN") {
      fetchDailyReport();
    }
  }, []);

  const fetchDailyReport = () => {
    axios
      .get("http://localhost:8080/admin/reports/daily")
      .then((res) => setReportData(res.data))
      .catch((err) => console.error(err));
  };

  // ✅ FILTER LOGIC
  const filteredData = reportData.filter((order) => {
    if (!startDate && !endDate) return true;

    const orderDate = new Date(order.createdAt);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (end) end.setHours(23, 59, 59, 999);

    if (start && end) {
      return orderDate >= start && orderDate <= end;
    }

    if (start) return orderDate >= start;
    if (end) return orderDate <= end;

    return true;
  });

  // ✅ CSV DOWNLOAD (FILTERED)
  const downloadCSV = () => {
    const rows = [["Order ID", "Status", "Date", "Total"]];

    filteredData.forEach((r) => {
      rows.push([
        r.orderId,
        r.status,
        new Date(r.createdAt).toLocaleString(),
        r.totalAmount,
      ]);
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "filtered_orders.csv";
    link.click();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Navbar />

      <header className="header">ShopEase - Home</header>

      <div className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop shop for everything you love ❤️</p>
        <button onClick={() => navigate("/categories")}>
          Start Shopping
        </button>
      </div>

      <div className="welcome">
        {username ? `Welcome, ${username}! 👋` : "Welcome!"}
      </div>

      <div className="summary">
        <div className="card">
          <h3>Orders</h3>
          <button onClick={() => navigate("/orders")}>View</button>
        </div>

        <div className="card">
          <h3>Cart</h3>
          <p>{cartCount} items</p>
          <button onClick={() => navigate("/cart")}>Open</button>
        </div>

        <div className="card">
          <h3>Favourites</h3>
          <p>{favCount} items</p>
          <button onClick={() => navigate("/favourites")}>
            View
          </button>
        </div>
      </div>

      {/* 🔥 ADMIN REPORT SECTION */}
      {role === "ADMIN" && (
        <div className="report-section">
          <h2>📊 Daily Orders Report</h2>

          {/* ✅ DATE FILTER */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <button
              onClick={() => {
                setStartDate("");
                setEndDate("");
              }}
            >
              Clear
            </button>
          </div>

          {/* ✅ SUMMARY */}
          <h3>
            Orders: {filteredData.length} | Revenue: ₹
            {filteredData.reduce((sum, r) => sum + r.totalAmount, 0)}
          </h3>

          {/* ✅ TABLE */}
          <table border="1">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((r) => (
                <tr key={r.orderId}>
                  <td>{r.orderId}</td>
                  <td>{r.status}</td>
                  <td>{new Date(r.createdAt).toLocaleString()}</td>
                  <td>{r.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn" onClick={downloadCSV}>
            ⬇ Download CSV
          </button>
        </div>
      )}

      <div style={{ textAlign: "center", margin: "20px" }}>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;





















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "./Home.css"; // ✅ CSS moved to external file

// function Home() {
//   const [username, setUsername] = useState("");
//   const [cartCount, setCartCount] = useState(0);
//   const [favCount, setFavCount] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // ✅ Load username from localStorage
//     const storedUser = localStorage.getItem("username");
//     if (storedUser) {
//       setUsername(storedUser);
//     }

//     // ✅ Load cart & favourites count
//     if (storedUser) {
//       const cartKey = "cart_" + storedUser;
//       const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//       setCartCount(cart.length);
//     }

//     const favs = JSON.parse(localStorage.getItem("favourites")) || [];
//     setFavCount(favs.length);
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div>
//       <Navbar />

//       <header className="header">ShopEase - Home</header>

//       <div className="hero">
//         <h1>Welcome to ShopEase</h1>
//         <p>Your one-stop shop for everything you love ❤️</p>
//         <button onClick={() => navigate("/categories")}>Start Shopping</button>
//       </div>

//       <div className="welcome">
//         {username ? `Welcome, ${username}! 👋` : "Welcome!"}
//       </div>

//       <div className="summary">
//         <div className="card">
//           <h3>Orders</h3>
//           <p>Track your purchases</p>
//           <button className="btn" onClick={() => navigate("/orders")}>
//             View Orders
//           </button>
//         </div>
//         <div className="card">
//           <h3>Profile</h3>
//           <p>Manage your account</p>
//           <button className="btn" onClick={() => navigate("/profile")}>
//             View Profile
//           </button>
//         </div>
//         <div className="card">
//           <h3>Cart</h3>
//           <p>You have {cartCount} items</p>
//           <button className="btn" onClick={() => navigate("/cart")}>
//             Go to Cart
//           </button>
//         </div>
//         <div className="card">
//           <h3>Favourites</h3>
//           <p>You saved {favCount} items</p>
//           <button className="btn" onClick={() => navigate("/favourites")}>
//             View Favourites
//           </button>
//         </div>
//       </div>

//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <button className="btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import "./Home.css";

// function Home() {
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("");
//   const [cartCount, setCartCount] = useState(0);
//   const [favCount, setFavCount] = useState(0);
//   const [reportData, setReportData] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("username");
//     const storedRole = localStorage.getItem("role");

//     if (storedUser) {
//       setUsername(storedUser);
//       setRole(storedRole);

//       const cartKey = "cart_" + storedUser;
//       const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//       setCartCount(cart.length);
//     }

//     const favs = JSON.parse(localStorage.getItem("favourites")) || [];
//     setFavCount(favs.length);

//     // ✅ Load report only if ADMIN
//     if (storedRole === "ADMIN") {
//       fetchDailyReport();
//     }
//   }, []);

//   const fetchDailyReport = () => {
//     axios.get("http://localhost:8080/admin/reports/daily")
//       .then(res => setReportData(res.data))
//       .catch(err => console.error(err));
//   };

//   const downloadCSV = () => {
//     window.open("http://localhost:8080/admin/reports/daily/download");
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div>
//       <Navbar />

//       <header className="header">ShopEase - Home</header>

//       <div className="hero">
//         <h1>Welcome to ShopEase</h1>
//         <p>Your one-stop shop for everything you love ❤️</p>
//         <button onClick={() => navigate("/categories")}>
//           Start Shopping
//         </button>
//       </div>

//       <div className="welcome">
//         {username ? `Welcome, ${username}! 👋` : "Welcome!"}
//       </div>

//       <div className="summary">
//         <div className="card">
//           <h3>Orders</h3>
//           <button onClick={() => navigate("/orders")}>View</button>
//         </div>

//         <div className="card">
//           <h3>Cart</h3>
//           <p>{cartCount} items</p>
//           <button onClick={() => navigate("/cart")}>Open</button>
//         </div>

//         <div className="card">
//           <h3>Favourites</h3>
//           <p>{favCount} items</p>
//           <button onClick={() => navigate("/favourites")}>
//             View
//           </button>
//         </div>
//       </div>

//       {/* 🔥 ADMIN REPORT SECTION */}
//       {role === "ADMIN" && (
//         <div className="report-section">
//           <h2>📊 Daily Orders Report</h2>

//           <table border="1">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Status</th>
//                 <th>Date</th>
//                 <th>Total</th>
//               </tr>
//             </thead>

//             <tbody>
//               {reportData.map((r) => (
//                 <tr key={r.orderId}>
//                   <td>{r.orderId}</td>
//                   <td>{r.status}</td>
//                   <td>{r.createdAt}</td>
//                   <td>{r.totalAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <button className="btn" onClick={downloadCSV}>
//             ⬇ Download CSV
//           </button>
//         </div>
//       )}

//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <button className="btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;
