import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="navbar">
          <div className="nav-logo">
            <Link className="nav-logo-link" to="/">
              Shiv
              <br />
              DreamHomes
            </Link>
          </div>
          <div class="nav-menu">
            <div className="nav-item">
              <Link className="nav-logo-link" to="/properties">
                Properties
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-logo-link" to="/about">
                About
              </Link>
            </div>
            <Link to="/sign-up">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
