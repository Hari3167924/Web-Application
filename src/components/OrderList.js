import axios from "axios";
import { useEffect, useState } from "react";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.userId}</td>
              <td>{o.productId}</td>
              <td>{o.quantity}</td>
              <td>₹{o.totalPrice}</td>
              <td>{o.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
