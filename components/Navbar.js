import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Home</a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/jobs">
                <a className="nav-link">구인</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/home">
                <a className="nav-link">사고&팔고</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/home">
                <a className="nav-link">비지니스</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/home">
                <a className="nav-link">부동산</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
