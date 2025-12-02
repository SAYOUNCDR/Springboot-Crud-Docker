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
      // handle error silently for now
      console.error("Failed to load user", err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4 mt-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">User Details</h2>
              <div className="mb-3">
                <strong>ID:</strong> {user.id}
              </div>
              <div className="mb-2">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="mb-2">
                <strong>Username:</strong> {user.username}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {user.email}
              </div>
              <Link className="btn btn-outline-secondary" to={"/home"}>
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
