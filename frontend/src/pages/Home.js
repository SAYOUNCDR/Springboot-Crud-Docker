import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    }
  };

  const filtered = users.filter((u) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (u.name || "").toLowerCase().includes(q) ||
      (u.username || "").toLowerCase().includes(q) ||
      (u.email || "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="container">
      <div className="py-5">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
            <h4 className="card-title mb-0 fw-bold">Users Directory</h4>
            <div
              className="d-flex gap-2 align-items-center"
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <div className="input-group">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  className="form-control border-start-0 ps-0"
                  placeholder="Search users..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="ps-4">
                      #
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col" className="text-end pe-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((user, index) => (
                    <tr key={index}>
                      <th scope="row" className="ps-4 text-muted fw-normal">
                        {index + 1}
                      </th>
                      <td className="fw-medium">{user.name}</td>
                      <td>{user.username}</td>
                      <td className="text-muted">{user.email}</td>
                      <td className="text-end pe-4">
                        <div className="d-flex justify-content-end gap-2">
                          <Link
                            className="btn btn-sm btn-outline-secondary"
                            to={`/viewuser/${user.id}`}
                          >
                            View
                          </Link>
                          <Link
                            className="btn btn-sm btn-outline-primary"
                            to={`/edituser/${user.id}`}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center py-5 text-muted">
                        No users found matching "{query}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
