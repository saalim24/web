import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News24
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/about">
                    About
                  </a>
                </li>
                <a className="nav-link active" href="/about">
                  General
                </a>
                <a className="nav-link active" href="/about">
                  Technology{" "}
                </a>
                <a className="nav-link active" href="/about">
                  Sports
                </a>
                <a className="nav-link active" href="/about">
                  Business
                </a>
                <a className="nav-link active" href="/about">
                  Health
                </a>
                <a className="nav-link active" href="/about">
                  Science
                </a>
                <a className="nav-link active" href="/about">
                  Entertainment
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
