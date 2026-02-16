import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                NEtflix Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/functiondemo1">
                Functiondemo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo2">
                UsestateDemo2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo3">
                UsestateDemo3
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/employees">
                Employees
              </Link>
            </li> */}
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo1">
                Formdemo1
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo2">
                Formdemo2
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo3">
                Formdemo3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo4">
                Formdemo4
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo5">
                Formdemo5
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo6">
                Formdemo6
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};