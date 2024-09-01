import React from "react";

const Sidebar = ({ setPage }) => {
  const handleItemClick = (page) => {
    setPage(page);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-item" onClick={() => handleItemClick("Available ReliefItem")}>
          Available ReliefItem
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Own ReliefItem")}>
          Relief Item
        </li>
        <li className="sidebar-item" onClick={() => handleItemClick("Relief Request")}>
          Relief Request
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;