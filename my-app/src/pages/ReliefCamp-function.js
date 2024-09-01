import React, { useState } from "react";
import Sidebar from "./OsdmaSidebar";
import "./Home.css";
import AvailableReliefItem from './ReliefCamp/AvailableReliefItem';
import OwnReliefItem from './ReliefCamp/OwnReliefItem';
import OwnRequests from './ReliefCamp/OwnRequests';
import TransferReliefItem from './ReliefCamp/TransferReliefItem';
import ReliefRequest from './ReliefCamp/MakeReliefRequest';
import { useNavigate } from "react-router-dom";

const ReliefCampFunction = () => {
  const [page, setPage] = useState("");

  const renderPage = () => {
    switch (page) {
      case "Available ReliefItem":
        return <AvailableReliefItem />;
      case "Own ReliefItem":
        return <OwnReliefItem />;
      case "Own Requests":
        return <OwnRequests />;
      case "Transfer ReliefItem":
        return <TransferReliefItem />;
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

export default ReliefCampFunction;