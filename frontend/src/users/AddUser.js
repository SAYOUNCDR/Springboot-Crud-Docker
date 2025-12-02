import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4 mt-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Register User</h2>

              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-floating mb-3">
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="username">Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label htmlFor="email">E-mail</label>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <Link className="btn btn-outline-secondary" to="/home">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
