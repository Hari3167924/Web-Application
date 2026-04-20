// const reportWebVitals = onPerfEntry => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;



// import React, { useState } from "react";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// function DailyReport() {
//   const [date, setDate] = useState("");
//   const [report, setReport] = useState(null);

//   // Fetch data from backend
//   const fetchReport = async () => {
//     const res = await fetch(
//       `http://localhost:8080/admin/report/daily?date=${date}`
//     );
//     const data = await res.json();
//     setReport(data);
//   };

//   // Download PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text("Daily Order Report", 14, 15);

//     doc.setFontSize(12);
//     doc.text(`Date: ${report.date}`, 14, 25);

//     autoTable(doc, {
//       startY: 35,
//       head: [["Metric", "Value"]],
//       body: [
//         ["Total Users", report.totalUsers],
//         ["Total Orders", report.totalOrders],
//       ],
//     });

//     doc.save(`daily-report-${report.date}.pdf`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin Daily Report</h2>

//       <input
//         type="date"
//         onChange={(e) => setDate(e.target.value)}
//       />

//       <button onClick={fetchReport} style={{ marginLeft: "10px" }}>
//         Get Report
//       </button>

//       {report && (
//         <div style={{ marginTop: "20px" }}>
//           <p><b>Date:</b> {report.date}</p>
//           <p><b>Total Users:</b> {report.totalUsers}</p>
//           <p><b>Total Orders:</b> {report.totalOrders}</p>

//           <button onClick={downloadPDF}>
//             Download PDF
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DailyReport; 


// import React, { useState } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// function DailyReport() {
//   const [date, setDate] = useState("");
//   const [report, setReport] = useState(null);

//   const fetchReport = async () => {
//     const res = await fetch(
//       `http://localhost:8080/admin/report/daily?date=${date}`
//     );
//     const data = await res.json();
//     setReport(data);
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text("Daily Order Report", 14, 15);

//     doc.setFontSize(12);
//     doc.text(`Date: ${report.date}`, 14, 25);

//     autoTable(doc, {
//       startY: 35,
//       head: [["Metric", "Value"]],
//       body: [
//         ["Total Users", report.totalUsers],
//         ["Total Orders", report.totalOrders],
//       ],
//     });

//     doc.save(`daily-report-${report.date}.pdf`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin Daily Report</h2>

//       <input
//         type="date"
//         onChange={(e) => setDate(e.target.value)}
//       />

//       <button onClick={fetchReport} style={{ marginLeft: "10px" }}>
//         Get Report
//       </button>

//       {report && (
//         <div style={{ marginTop: "20px" }}>
//           <p><b>Date:</b> {report.date}</p>
//           <p><b>Total Users:</b> {report.totalUsers}</p>
//           <p><b>Total Orders:</b> {report.totalOrders}</p>

//           <button onClick={downloadPDF}>
//             Download PDF
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DailyReport;


import React, { useState } from "react";

function DailyOrdersCSV() {
  const [date, setDate] = useState("");

  // Sample data (replace with your state or API data)
  const [orders] = useState([
    { orderId: 101, username: "John", total: 499, date: "2026-04-20" },
    { orderId: 102, username: "Mary", total: 799, date: "2026-04-20" },
    { orderId: 103, username: "Alex", total: 299, date: "2026-04-19" },
  ]);

  const downloadCSV = () => {
    // filter by selected date
    const filtered = orders.filter(o => o.date === date);

    if (filtered.length === 0) {
      alert("No orders for selected date");
      return;
    }

    const headers = ["Order ID", "Username", "Total", "Date"];

    const rows = filtered.map(o => [
      o.orderId,
      o.username,
      o.total,
      o.date
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `daily-orders-${date}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daily Orders (CSV Download)</h2>

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={downloadCSV} style={{ marginLeft: "10px" }}>
        Download CSV
      </button>
    </div>
  );
}

export default DailyOrdersCSV;