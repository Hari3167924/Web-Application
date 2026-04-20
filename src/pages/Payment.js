import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [method, setMethod] = useState("GPay");
 
const makePayment = () => {
  let username = localStorage.getItem("username");
  let orderKey = "orders_" + username;
  let orders = JSON.parse(localStorage.getItem(orderKey)) || [];

  let index = localStorage.getItem("payingOrderIndex");

  if (index === null || !orders[index]) {
    alert("No order selected for payment!");
    return;
  }

  // ✅ Update USER orders
  orders[index].payment = method;
  orders[index].status = "Paid";

  localStorage.setItem(orderKey, JSON.stringify(orders));

  // 🔥 UPDATE GLOBAL ADMIN DATA
  const allOrders = JSON.parse(localStorage.getItem("all_orders")) || [];

  const orderId = orders[index].id;

  const updatedAllOrders = allOrders.map((o) => {
    if (o.id === orderId) {
      return {
        ...o,
        payment: method,
        status: "Paid"
      };
    }
    return o;
  });

  localStorage.setItem("all_orders", JSON.stringify(updatedAllOrders));

  // Save last paid order
  localStorage.setItem("lastPaidOrderIndex", index);

  alert("Payment successful via " + method);
  window.location.href = "/bill";
};

  return (
    <div className="payment-box">
      <h2>Complete Payment</h2>
      <label htmlFor="method">Select Payment Method:</label>
      <select
        id="method"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="GPay">📱 GPay</option>
        <option value="Paytm">💠 Paytm</option>
        <option value="Card">💳 Debit/Credit Card</option>
        <option value="NetBanking">🔑 Net Banking</option>
        <option value="Cash on Delivery">🚚 Cash on Delivery</option>
      </select>
      <button onClick={makePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
















 // const navigate = useNavigate();

// const makePayment = () => {
//   let username = localStorage.getItem("username");
//   let orderKey = "orders_" + username;
//   let orders = JSON.parse(localStorage.getItem(orderKey)) || [];

//   let index = localStorage.getItem("payingOrderIndex");
//   if (index === null || !orders[index]) {
//     alert("No order selected for payment!");
//     return;
//   }
  
//   const allOrders = JSON.parse(localStorage.getItem("all_orders")) || [];

// allOrders.push({
//   // ...newOrder,
//   username: localStorage.getItem("username"), // track user
//   createdAt: new Date().toISOString()
// });

// localStorage.setItem("all_orders", JSON.stringify(allOrders));

//   orders[index].payment = method;
//   orders[index].status = "Paid";

//   localStorage.setItem(orderKey, JSON.stringify(orders));
//   localStorage.setItem("lastPaidOrderIndex", index);

//   alert("Payment successful via " + method);
//   window.location.href = "/bill";
// };