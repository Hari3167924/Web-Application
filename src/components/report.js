import React, { useEffect, useState } from "react";
import axios from "axios";

function DailyReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/admin/reports/daily")
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Daily Orders Report</h2>

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
          {data.map(r => (
            <tr key={r.orderId}>
              <td>{r.orderId}</td>
              <td>{r.status}</td>
              <td>{r.createdAt}</td>
              <td>{r.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => {
        window.open("http://localhost:8080/admin/reports/daily/download");
      }}>
        Download CSV
      </button>
    </div>
  );
}

export default DailyReport;