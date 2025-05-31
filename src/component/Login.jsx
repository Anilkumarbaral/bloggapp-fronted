import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://51.20.105.48:8080/api/auth/login",
        {
          username,
          password,
        }
      );

      const token = response.data.token;
      console.log(token)

      // ✅ Save token to localStorage
      localStorage.setItem("token", token);

      // 🔁 Redirect to post list or dashboard
      navigate("/posts");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            required
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
