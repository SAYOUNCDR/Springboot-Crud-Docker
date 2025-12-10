import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (err) {
      console.error("Failed to load user", err);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white pt-4 pb-0 border-0">
              <h4 className="card-title fw-bold mb-1">User Details</h4>
              <p className="text-muted small">
                Viewing information for user ID: {id}
              </p>
            </div>
            <div className="card-body pt-3">
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                  <span className="text-muted small text-uppercase fw-bold">
                    Full Name
                  </span>
                  <span className="fw-medium">{user.name}</span>
                </li>
                <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                  <span className="text-muted small text-uppercase fw-bold">
                    Username
                  </span>
                  <span className="font-monospace bg-light px-2 py-1 rounded small">
                    {user.username}
                  </span>
                </li>
                <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                  <span className="text-muted small text-uppercase fw-bold">
                    Email Address
                  </span>
                  <span>{user.email}</span>
                </li>
              </ul>

              <div className="d-grid">
                <Link className="btn btn-outline-secondary" to={"/home"}>
                  <i className="bi bi-arrow-left me-2"></i>Back to Users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
