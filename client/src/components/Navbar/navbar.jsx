import React from 'react';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Carmen Obied Portfolio: Software Engineering
        </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
              MyProjects
              </Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className={window.location.pathname === "/experience" ? "nav-link active" : "nav-link"}>
              Experience
              </Link>
              </li>
          <li className="nav-item">
            <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
              </Link>
          </li>
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
              </Link>
              {/* <li className="nav-item">
            <Link to="/projects/list" className="nav-link">
              List Project
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/projects/create" className="nav-link">
              Create Project
              </Link>
              </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;