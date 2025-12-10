import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, password, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/register", user);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed. Username might be taken.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white pt-4 pb-0 border-0">
              <h4 className="card-title fw-bold mb-1">Create Account</h4>
              <p className="text-muted small">Sign up to manage your users.</p>
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
                    placeholder="Choose a username"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
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
                    placeholder="Choose a password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="text-center mt-3">
                  <small className="text-muted">
                    Already have an account? <Link to="/login">Login</Link>
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
