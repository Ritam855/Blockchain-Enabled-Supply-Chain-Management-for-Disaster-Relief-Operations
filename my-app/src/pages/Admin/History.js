import { API } from "../../Backend";
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../Osdma/AvailableReliefItem.css"
import {Token} from '../Variable.js'

function History() {
  const [items, setItems] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);
 
  const config = {
    headers: {
      "X-Access-Token": Token,
    },
  };

  useEffect(() => {
    fetch(`${API}/system/historian`,{
      method: "GET",
      headers:{
          "X-Access-Token": Token,
      },
  })
      .then((response)=>response.json())
      .then((data)=>{
        setItems(data)
      })
  }, []);

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

      {expandedItem ? (
        <div className="item-container">
          <div className={`item-card expanded`} onClick={() => setExpandedItemId(null)}>
            <h3 className="item-title">Transaction ID: {expandedItem.transactionId}</h3>
            <p className="item-desc">Transaction Type: {expandedItem.transactionType}</p>
            <p className="item-desc">Participant Invoked: {expandedItem.participantInvoking}</p>
            <p className="item-desc">Time of Transaction: {expandedItem.transactionTimestamp}</p>
          </div>
        </div>
      ) : (
        <div className="item-container">
          {items && items.map((item)=>{
            return(
              <div className={`item-card ${expandedItemId === item.reliefitemid ? 'expanded' : ''}`} key={item.reliefitemid} onClick={() => setExpandedItemId(item.reliefitemid)}>
                  <h3 className="item-title">Transaction ID: {item.transactionId}</h3>
                  <p className="item-desc">Transaction Type: {item.transactionType}</p>
                  <p className="item-desc">Participant Invoked: {item.participantInvoking}</p>
                  <p className="item-desc">Time of Transaction: {item.transactionTimestamp}</p>
              </div>

            )
          })}
        </div>
      )}
    </div>
  );
}

export default History;