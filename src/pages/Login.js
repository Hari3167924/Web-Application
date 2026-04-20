import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = () => {
  if (!username || !password) {
    alert("Please enter both username and password!");
    return;
  }

  // 🔥 ADMIN LOGIN (hardcoded)
  if (username === "admin" && password === "admin123") {
    localStorage.setItem("username", "admin");
    localStorage.setItem("role", "ADMIN");
    localStorage.setItem("loggedIn", "true");

    alert("Admin login successful!");
    navigate("/home");
    return;
  }

  // 👤 NORMAL USER LOGIN
  const storedProfile = JSON.parse(localStorage.getItem("profile_" + username));

  if (storedProfile && storedProfile.password === password) {
    localStorage.setItem("username", username);
    localStorage.setItem("role", "USER"); // ✅ important
    localStorage.setItem("loggedIn", "true");

    alert("Login successful! Welcome " + username);
    navigate("/home");
  } else {
    alert("Invalid username or password!");
  }
};

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <button className="btn" onClick={handleLogin}>Login</button>

      <div className="switch">
        Don’t have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;

































// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../api";
// import "./Auth.css";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     if (!username || !password) {
//       alert("Please enter both username and password!");
//       return;
//     }

//     try {
//       const response = await api.post("/auth/login", { username, password });
//       if (response.data === "Login successful!") {
//         localStorage.setItem("username", username); // keep session
//         alert("Welcome " + username);
//         navigate("/home");
//       } else {
//         alert("Invalid username or password!");
//       }
//     } catch (err) {
//       alert("Error logging in: " + err.message);
//     }
//   };

//   return (
//     <div className="auth-box">
//       <h2>Login</h2>
//       <label>Username</label>
//       <input value={username} onChange={(e) => setUsername(e.target.value)} />
//       <label>Password</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button className="btn" onClick={handleLogin}>Login</button>
//       <div className="switch">
//         Don’t have an account? <Link to="/register">Register</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
