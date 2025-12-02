import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <i
              className="bi bi-people-fill me-2"
              style={{ fontSize: "1.2rem" }}
            ></i>
            <span>
              Modern<span className="text-light ms-1">CRUD</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex gap-2">
            <Link className="btn btn-outline-secondary" to="/home">
              <i className="bi bi-list-ul me-1"></i> Users
            </Link>
            <Link className="btn btn-primary text-white" to="/adduser">
              <i className="bi bi-plus-lg me-1"></i> Add
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
