import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <nav>
        <div className="logo">
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_Odisha.png' alt="Odisha Seal" height="40px"/>
        </div>
        <ul className="navbar">
          <li>
            <Link to="/Admin" className="nav-link">Admin</Link>
          </li>
          <li>
            <Link to="/Login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">About</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <h1>Disaster Relief Operation</h1>
        <p>We are here to help you in times of need.</p>
      </div>
    </div>
  );
};

export default Home;






