import { API } from "../../Backend";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AvailableReliefItem.css";
import "../Home.css";
import { Token } from "../Variable.js";

function Request() {
  const [items, setItems] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const config = {
    headers: {
      "X-Access-Token": Token,
    },
  };

  useEffect(() => {
    fetch(`${API}/request`, {
      method: "GET",
      headers: {
        "X-Access-Token": Token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  console.log(items);

  const expandedItem = items.find((item) => item.orderid === expandedItemId);

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
      {expandedItem ? (
        <div className="item-container">
          <div
            className={`item-card expanded`}
            onClick={() => setExpandedItemId(null)}
          >
            <h3 className="item-title">Request ID: {expandedItem.orderid}</h3>
            <p className="item-desc">Item Name: {expandedItem.itemname}</p>
            <p className="item-desc">Request Sender: {expandedItem.orderer}</p>
            <p className="item-desc">Request Receiver: {expandedItem.vendor}</p>
          </div>
        </div>
      ) : (
        <div className="item-container">
          {items.map((item) => {
            return (
              <div
                className={`item-card ${
                  expandedItemId === item.orderid ? "expanded" : ""
                }`}
                key={item.orderid}
                onClick={() => setExpandedItemId(item.orderid)}
              >
                <h3 className="item-title">Request ID: {item.orderid}</h3>
                <p className="item-desc">Item Name: {item.itemname}</p>
                <p className="item-desc">Request Sender: {item.orderer}</p>
                <p className="item-desc">Request Receiver: {item.vendor}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Request;