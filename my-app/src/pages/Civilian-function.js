import React, { useState } from "react";
import Sidebar from "./CivilianSidebar";
import "./Home.css";
import AvailableReliefItem from './Civilian/AvailableReliefItem';
import OwnReliefItem from './Civilian/OwnReliefItem';
import ReliefRequest from './Civilian/MakeReliefRequest';

const Civilianfunction = () => {
  const [page, setPage] = useState("");

  const renderPage = () => {
    switch (page) {
      case "Available ReliefItem":
        return <AvailableReliefItem />;
      case "Own ReliefItem":
        return <OwnReliefItem />;
      case "Relief Request":
        return <ReliefRequest/>;
      default:
        return <AvailableReliefItem />;
    }
  };

  return (
    <div className="home-container">
      <Sidebar setPage={setPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
};

export default Civilianfunction;