import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.brandName}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.tab1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.tab2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.tab3}
                </a>
              </li>
            </ul>
            <div className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototype = {
  brandName: PropTypes.string.isRequired,
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  tab3: PropTypes.string,
};

Navbar.defaultProps = {
  brandName: "Brand Name",
  tab1: "Home",
  tab2: "About",
  tab3: "Contact",
};
