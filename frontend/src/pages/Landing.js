import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-hero">
      <div className="container hero-inner text-center">
        <h1 className="display-4 mb-3">Lightweight CRUD</h1>
        <p className="lead mb-4">
          A simple, modern UI for managing users — built with React & Spring
          Boot.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link className="btn btn-primary btn-lg" to="/home">
            Get Started
          </Link>
          <a className="btn btn-outline-light btn-lg" href="#features">
            Learn More
          </a>
        </div>
      </div>

      <section id="features" className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4 d-flex">
            <div className="card p-4 shadow-sm feature-card w-100 d-flex flex-column justify-content-between">
              <div>
                <h5>Simple</h5>
                <p>Clean forms and straightforward flows to manage users.</p>
              </div>
              <div className="mt-3">
                <Link to="/home" className="text-decoration-none">
                  See Users →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card p-4 shadow-sm feature-card w-100 d-flex flex-column justify-content-between">
              <div>
                <h5>Fast</h5>
                <p>Backend powered by Spring Boot and PostgreSQL.</p>
              </div>
              <div className="mt-3">
                <Link to="/home" className="text-decoration-none">
                  Explore →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card p-4 shadow-sm feature-card w-100 d-flex flex-column justify-content-between">
              <div>
                <h5>Extensible</h5>
                <p>Easy to extend with authentication, roles and more.</p>
              </div>
              <div className="mt-3">
                <Link to="/home" className="text-decoration-none">
                  Extend →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
