import { useNavigate } from "react-router-dom";
import "./Summary.css";  // ✅ CSS file

function Summary() {
  const navigate = useNavigate();

  return (
    <div className="summary">
      <div className="card">
        <h3>Orders</h3>
        <p>Track your purchases</p>
        <button className="btn" onClick={() => navigate("/orders")}>
          View Orders
        </button>
      </div>

      <div className="card">
        <h3>Profile</h3>
        <p>Manage your account</p>
        <button className="btn" onClick={() => navigate("/profile")}>
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Summary;
