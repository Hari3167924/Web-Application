import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (localStorage.getItem("profile_" + username)) {
      alert("Username already taken!");
      return;
    }

    const profile = { username, password, cart: [], favourites: [], orders: [] };
    localStorage.setItem("profile_" + username, JSON.stringify(profile));

    alert("Registration successful! Please login.");
    navigate("/");
  };

  return (
    <div className="auth-box">
      <h2>Create Account</h2>
      <label>Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>Confirm Password</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <button className="btn" onClick={handleRegister}>Register</button>
      <div className="switch">Already have an account? <Link to="/">Login</Link></div>
    </div>
  );
}

export default Register;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../api";
// import "./Auth.css";

// function Register() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     if (!username || !password || !confirmPassword) {
//       alert("Please fill all fields!");
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       await api.post("/auth/register", { username, password });
//       alert("Registration successful! Please login.");
//       navigate("/");
//     } catch (err) {
//       alert("Error registering: " + err.message);
//     }
//   };

//   return (
//     <div className="auth-box">
//       <h2>Create Account</h2>
//       <label>Username</label>
//       <input value={username} onChange={(e) => setUsername(e.target.value)} />
//       <label>Password</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <label>Confirm Password</label>
//       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       <button className="btn" onClick={handleRegister}>Register</button>
//       <div className="switch">Already have an account? <Link to="/">Login</Link></div>
//     </div>
//   );
// }

// export default Register;
