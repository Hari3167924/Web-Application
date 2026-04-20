import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bill.css";

function Bill() {
  const [orderId, setOrderId] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let username = localStorage.getItem("username");
    if (!username) {
      navigate("/login");
      return;
    }

    let orderKey = "orders_" + username;
    let orders = JSON.parse(localStorage.getItem(orderKey)) || [];

    let index = localStorage.getItem("lastPaidOrderIndex");
    if (index === null || !orders[index]) {
      setItems([]);
      return;
    }

    let order = orders[index];
    setOrderId(order.id);
    setOrderDate(order.date);
    setItems(order.items || []);
    setTotal(order.total || 0);
    setPayment(order.payment || "N/A");
    setStatus(order.status || "Pending");
  }, [navigate]);

  return (
    <div>
      <header className="bill-header">ShopEase - Bill</header>

      <div className="container">
        <h2>🎉 Thank You for Shopping with Us!</h2>
        <p>Your payment was successful.</p>

        <div className="bill-details">
          <p><b>Order ID:</b> {orderId}</p>
          <p><b>Date:</b> {orderDate}</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="2">No items found in order</td>
              </tr>
            ) : (
              items.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="total">Total: ₹{total.toFixed(2)}</div>
        <p><b>Payment Method:</b> {payment}</p>
        <p><b>Status:</b> {status}</p>

        <button className="btn" onClick={() => window.print()}>
          🖨 Print Bill
        </button>
        <button className="btn" onClick={() => navigate("/orders")}>
          📦 View Orders
        </button>
        <button className="btn" onClick={() => navigate("/home")}>
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
}

export default Bill;
