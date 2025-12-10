import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/auth/login", user);
      localStorage.setItem("token", result.data.token);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white pt-4 pb-0 border-0">
              <h4 className="card-title fw-bold mb-1">Welcome Back</h4>
              <p className="text-muted small">Please sign in to continue.</p>
            </div>
            <div className="card-body pt-3">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-3">
                  <small className="text-muted">
                    Don't have an account? <Link to="/register">Register</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
