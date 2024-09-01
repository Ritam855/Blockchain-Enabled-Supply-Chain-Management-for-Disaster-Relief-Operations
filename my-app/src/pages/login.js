import React, { useState } from "react";
import './Home.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("");


  const handleRoleSelection = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    switch (selectedRole) {
      case "district-authority":
        window.location.replace("/osdma-login");
        break;
      case "relief-camp-head":
        window.location.replace("ReliefCamp-login");
        break;
      case "distributor":
        window.location.replace("/Distributor-login");
        break;
      case "civilian":
        window.location.replace("/Civilian-login");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_Odisha.png"
            alt="Logo"
            height="40px"
          />
        </div>
      </nav>
      <div className="container2">
        <h1> Login</h1>
        <form onSubmit={handleFormSubmission}>
          <label htmlFor="role">Select your role:</label>
          <select
            name="role"
            id="role"
            value={selectedRole}
            onChange={handleRoleSelection}
            required
          >
            <option value="" disabled>
              -- Select your role --
            </option>
            <option value="district-authority">District Authority</option>
            <option value="relief-camp-head">Relief Camp Head</option>
            <option value="distributor">Distributor</option>
            <option value="civilian">Civilian</option>
          </select>
          <input type="submit" value="Next" />
        </form>
        <p1>
            Don't have an account? <Link to="/register">Register now</Link>
        </p1>
      </div>
    </div>
  );
}

export default LoginPage;
