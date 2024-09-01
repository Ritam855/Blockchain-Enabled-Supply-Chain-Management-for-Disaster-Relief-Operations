import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { transfer } from "./ReliefCampApi";
import { useParams } from "react-router-dom";
import '../Home.css';

const TransferReliefItem = () => {
  const { CampHeadId } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    $class: "org.dro.network.Transferreliefitem",
    newownername: "",
    itemname: "",
    reliefitem: "",
    issuer: "",
    newOwner: "",
    error: "",
    success: false,
  });

  const { $class, newownername, itemname, reliefitem, issuer, newOwner, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    transfer({ $class, newownername, itemname, reliefitem, issuer, newOwner }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          newownername: "",
          itemname: "",
          reliefitem: "",
          issuer: "",
          newOwner: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const successMessage = () => {
    return (
      <div>
        {success && <div>Relief item transfer request sent successfully</div>}
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div style={{ color: "red" }}>
        {error}
      </div>
    );
  };

  return (
    <div >
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
      <h1>TRANSFER RELIEF ITEM</h1>
      {errorMessage()}
      {successMessage()}
      <form>
        <div className="file-input-container">
          <label htmlFor="CampHeadId">New Owner Name::</label>
          <input type="text" id="newownername" name="newownername" value={newownername} onChange={handleChange("newownername")} />
        </div>
        <div className="file-input-container">
          <label htmlFor="itemname">Item Name:</label>
          <input type="text" id="itemname" name="itemname" value={itemname} onChange={handleChange("itemname")} />
        </div>
        <div className="file-input-container">
          <label htmlFor="reliefitem">Relief Item:</label>
          <input type="text" id="reliefitem" name="reliefitem" value={reliefitem} onChange={handleChange("reliefitem")}/>
        </div>
        <div className="file-input-container">
          <label htmlFor="issuer">Issuer:</label>
          <input type="text" id="issuer" name="issuer" value={issuer} onChange={handleChange("issuer")}/>
        </div>
        <div className="file-input-container">
          <label htmlFor="newOwner">New Owner:</label>
          <input type="text" id="newOwner" name="newOwner" value={newOwner} onChange={handleChange("newOwner")} />
        </div>
        <button onClick={onSubmit} type="submit">Submit</button>
      </form>
    </div>
  </div>
  );
  
};

export default TransferReliefItem;