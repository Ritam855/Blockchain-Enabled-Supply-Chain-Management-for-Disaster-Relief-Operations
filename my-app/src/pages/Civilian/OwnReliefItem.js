import { API } from "../../Backend";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AvailableReliefItem.css";
import '../Home.css';
import { Token } from "../Variable.js";

function AvailableReliefItem() {
  const [items, setItems] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [ownerName, setOwnerName] = useState("");

  const config = {
    headers: {
      "X-Access-Token": Token,
    },
  };

  useEffect(() => {
    fetch(`${API}/reliefitem`, {
      method: "GET",
      headers: {
        "X-Access-Token": Token,
      },
    })
    .then((response)=>response.json())
    .then((data)=>{
      setItems(data)
    })
  }, []);

  console.log(items);

  const filteredItems = items.filter((item) => { 
    return item.ownername.toLowerCase() === ownerName.toLowerCase();
  });
  const expandedItem = items.find(item => item.reliefitemid === expandedItemId);

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
      <div className="container3">
      <div className="file-input-container">
        <label htmlFor="ownerName">Enter the name:</label> 
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
          <button type="submit" onClick={() => setExpandedItemId(null)}>Clear</button>
          </div>
          <div className="item-container">
    {filteredItems.length === 0 && ownerName !== "" ? ( 
      <p>No items found for owner name: {ownerName}</p>
    ) : (
      filteredItems.map((item) => {
        return (
          <div key={item.reliefitemid} className="item-container">
          {expandedItem ? (
              <div className={`item-card expanded`} onClick={() => setExpandedItemId(null)}>
                <h3 className="item-title">Relief ItemID: {expandedItem.reliefitemid}</h3>
                <p className="item-desc">Name: {expandedItem.name}</p>
                <p className="item-desc">Description: {expandedItem.description}</p>
                <p className="item-desc">Owner Name: {expandedItem.ownername}</p>
                <p className="item-desc">Owner ID: {expandedItem.owner}</p>
              </div>
            ) : (  
              <div className="itemcontainer">  
              <div className="item-card" onClick={() => setExpandedItemId(item.reliefitemid)}>
                <h3 className="item-title">Relief ItemID: {item.reliefitemid}</h3>
                <p className="item-desc">Name: {item.name}</p>
                <p className="item-desc">Description: {item.description}</p>
                <p className="item-desc">Owner Name: {item.ownername}</p>
                <p className="item-desc">Owner ID: {item.owner}</p>
              </div>
              </div>
            )
          }
        </div>
        );
      })
    )}
  </div>
</div>
);
}

export default AvailableReliefItem;
