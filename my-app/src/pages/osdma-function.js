import React, { useState } from "react";
import Sidebar from "./OsdmaSidebar";
import "./Home.css";
import AvailableReliefItem from './Osdma/AvailableReliefItem';
import OwnReliefItem from './Osdma/OwnReliefItem';
import OwnRequests from './Osdma/OwnRequests';
import TransferReliefItem from './Osdma/TransferReliefItem';
import ReliefRequest from './Osdma/MakeReliefRequest';
import { useNavigate } from "react-router-dom";

const OSDMAfunction = () => {
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

export default OSDMAfunction;