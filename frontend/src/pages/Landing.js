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
          <Link className="btn btn-primary btn-lg px-4" to="/home">
            Get Started
          </Link>
          <a className="btn btn-outline-secondary btn-lg px-4" href="#features">
            Learn More
          </a>
        </div>
      </div>

      <section id="features" className="container mt-5 pt-5">
        <div className="row g-4">
          <div className="col-md-4 d-flex">
            <div className="feature-card w-100">
              <div className="feature-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <h5 className="fw-bold">Lightning Fast</h5>
              <p className="text-muted">
                Optimized performance with Spring Boot backend and React
                frontend.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="feature-card w-100">
              <div className="feature-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h5 className="fw-bold">Secure</h5>
              <p className="text-muted">
                Built with industry standard security practices and clean
                architecture.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="feature-card w-100">
              <div className="feature-icon">
                <i className="bi bi-layers-fill"></i>
              </div>
              <h5 className="fw-bold">Scalable</h5>
              <p className="text-muted">
                Containerized with Docker for easy deployment and scaling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
