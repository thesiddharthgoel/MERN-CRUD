import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a class="navbar-brand" href="/">
          MERN CRUD STACK
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a className="nav-link" exact href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-outline-light" href="/users/add">
          Add User
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
