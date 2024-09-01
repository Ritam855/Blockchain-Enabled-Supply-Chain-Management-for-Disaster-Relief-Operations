import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setPage }) => {
  const handleItemClick = (page) => {
    setPage(page);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-item" onClick={() => handleItemClick("Add DistrictAuthority")}>
          Add DA
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Add RH")}>
          Add RH
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Add Distributor")}>
          Add Distributor
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Add Civilian")}>
          Add Civilian
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Issue Identity")}>
          Issue Identity
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Revoke Identity")}>
          Revoke Identity
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Add Relief")}>
          Add Relief
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("History")}>
          History
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;