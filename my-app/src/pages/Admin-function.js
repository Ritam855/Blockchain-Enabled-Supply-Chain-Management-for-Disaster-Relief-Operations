import React, { useState } from "react";
import "./Home.css"
import Sidebar from "./Sidebar";
import AddRH from "./Admin/AddRH";
import Addosdma from "./Admin/Addosdma";
import Adddistributor from "./Admin/Adddistributor";
import Addcivilian from "./Admin/Addcivilian";
import IssueIdentity from "./Admin/IssueIdentity";
import RevokeIdentity from "./Admin/RevokeIdentity";
import Addrelief from "./Admin/Addrelief.js";
import History from "./Admin/History";

const AdminFunction = () => {
  const [page, setPage] = useState("");

  const renderPage = () => {
    switch (page) {
      case "Add RH":
        return <AddRH />;
      case "Add DistrictAuthority":
        return <Addosdma />;
      case "Add Distributor":
        return <Adddistributor />;
      case "Add Civilian":
        return <Addcivilian />;
      case "Issue Identity":
        return <IssueIdentity />;
      case "Revoke Identity":
        return <RevokeIdentity />;
      case "Add Relief":
        return <Addrelief />;
      case "History":
        return <History />;
      default:
        return <Addosdma />;
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
      <Sidebar setPage={setPage} />
      <div >{renderPage()}</div>
    </div>
   
  );
};

export default AdminFunction;
