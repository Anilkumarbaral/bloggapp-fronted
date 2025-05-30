import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Dummy user data (replace with real user context)
  const [user] = useState({
    firstName: "John",
    profileImage:
      "https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg=", // Replace with real image URL
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Search Query:", query);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to="/">
          BlogApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Center Search */}
          <form className="d-flex mx-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search blogs..."
              aria-label="Search"
              style={{ width: "300px" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Right Side Links */}
          <ul className="navbar-nav ms-auto me-3 align-items-center">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/create">
                Create Post
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>

            {/* Profile Image Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/edit-profile">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
