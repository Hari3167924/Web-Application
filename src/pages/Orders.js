import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  // 👉 NEW STATE for CSV filter
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    const userRole = localStorage.getItem("role");

    setUsername(user);
    setRole(userRole);

    if (!user) return;

    if (userRole === "ADMIN") {
      const allOrders =
        JSON.parse(localStorage.getItem("all_orders")) || [];
      setOrders(allOrders);
    } else {
      const orderKey = "orders_" + user;
      const storedOrders =
        JSON.parse(localStorage.getItem(orderKey)) || [];
      setOrders(storedOrders);
    }
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const todayOrders =
    role === "ADMIN"
      ? orders.filter((o) => o.date === today || o.createdAt?.startsWith(today))
      : [];

  // ✅ CSV DOWNLOAD FUNCTION (FIXED FOR YOUR DATA)
  const downloadCSV = () => {
    const filtered = orders.filter(
      (o) => o.date === selectedDate || o.createdAt?.startsWith(selectedDate)
    );

    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    if (filtered.length === 0) {
      alert("No orders for selected date");
      return;
    }

    const headers = ["Order ID", "Username", "Total", "Date"];

    const rows = filtered.map((o) => [
      o.id,
      o.username || username,
      o.total,
      o.date || o.createdAt
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `daily-orders-${selectedDate}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="orders-page">
      <Navbar />
      <header className="header">Orders</header>

      <div className="container">

        {/* 🔥 ADMIN DASHBOARD */}
        {role === "ADMIN" && (
          <div className="admin-report">
            <h2>📊 Admin Daily Report</h2>

            <h3>Total Orders Today: {todayOrders.length}</h3>

            {/* 📅 DATE FILTER + CSV DOWNLOAD */}
            <div style={{ marginBottom: "10px" }}>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              <button
                onClick={downloadCSV}
                style={{ marginLeft: "10px" }}
              >
                Download CSV
              </button>
            </div>

            <ul>
              {todayOrders.map((o, i) => (
                <li key={i}>
                  User: {o.username} | Order ID: {o.id}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 👤 USER VIEW */}
        {!username ? (
          <p className="empty">Please login to view orders.</p>
        ) : orders.length === 0 ? (
          <p className="empty">No orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div className="order-item" key={index}>
              <h3>Order ID: {order.id}</h3>
              <p>Date: {order.date}</p>

              {role === "ADMIN" && (
                <p>User: {order.username}</p>
              )}

             <ul>
  {(order.items || []).map((item, i) => (
    <li key={i}>
      {item.name} - ₹{item.price}
    </li>
  ))}
</ul>

              <p>Total: ₹{order.total}</p>
              <p>Status: {order.status}</p>

              {role !== "ADMIN" && order.status !== "Paid" && (
                <button
                  onClick={() => {
                    localStorage.setItem("payingOrderIndex", index);
                    window.location.href = "/payment";
                  }}
                >
                  Pay Now
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
















//           import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import "./Orders.css";

// function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     const user = localStorage.getItem("username");
//     const userRole = localStorage.getItem("role");

//     setUsername(user);
//     setRole(userRole);

//     if (!user) return;

//     // 🔥 ADMIN → Load ALL orders
//     if (userRole === "ADMIN") {
//       const allOrders =
//         JSON.parse(localStorage.getItem("all_orders")) || [];
//       setOrders(allOrders);
//     } else {
//       // 👤 USER → Load only their orders
//       const orderKey = "orders_" + user;
//       const storedOrders =
//         JSON.parse(localStorage.getItem(orderKey)) || [];
//       setOrders(storedOrders);
//     }
//   }, []);

//   // 🔥 FILTER TODAY ORDERS (ADMIN ONLY)
//   const today = new Date().toISOString().split("T")[0];

//   const todayOrders =
//     role === "ADMIN"
//       ? orders.filter((o) => o.createdAt?.startsWith(today))
//       : [];

//   return (
//     <div className="orders-page">
//       <Navbar />
//       <header className="header">Orders</header>

//       <div className="container">

//         {/* 🔥 ADMIN DASHBOARD */}
//         {role === "ADMIN" && (
//           <div className="admin-report">
//             <h2>📊 Admin Daily Report</h2>

//             <h3>Total Orders Today: {todayOrders.length}</h3>

//             <ul>
//               {todayOrders.map((o, i) => (
//                 <li key={i}>
//                   User: {o.username} | Order ID: {o.id}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* 👤 USER VIEW */}
//         {!username ? (
//           <p className="empty">Please login to view orders.</p>
//         ) : orders.length === 0 ? (
//           <p className="empty">No orders yet.</p>
//         ) : (
//           orders.map((order, index) => (
//             <div className="order-item" key={index}>
//               <h3>Order ID: {order.id}</h3>
//               <p>Date: {order.date}</p>

//               {role === "ADMIN" && (
//                 <p>User: {order.username}</p>
//               )}

//               <ul>
//                 {order.items.map((item, i) => (
//                   <li key={i}>
//                     {item.name} - ₹{item.price}
//                   </li>
//                 ))}
//               </ul>

//               <p>Total: ₹{order.total}</p>
// <p>Status: {order.status}</p>

// {/* ✅ SHOW PAYMENT BUTTON ONLY FOR USER */}
// {role !== "ADMIN" && order.status !== "Paid" && (
//   <button
//     onClick={() => {
//       localStorage.setItem("payingOrderIndex", index);
//       window.location.href = "/payment";
//     }}
//   >
//     Pay Now
//   </button>
// )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Orders;
