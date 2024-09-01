import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "./DistributorApi";
import { useParams } from "react-router-dom";
import '../Home.css';

const ReliefRequest = () => {
  const { CampHeadId } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    $class: "org.dro.network.Initiaterequest",
    orderId: "",
    itemname:"",
    orderer: "",
    vendor: "",
    error: "",
    success: false,
  });

  const { $class, orderId,itemname,orderer, vendor, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    request({  $class, orderId,itemname,orderer, vendor }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          orderId: "",
          itemname:"",
          orderer: "",
          vendor: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const successMessage = () => {
    return (
      <div>
        {success && <div>Relief item request sent successfully</div>}
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
      <h1>SEND RELIEF REQUEST</h1>
      {errorMessage()}
      {successMessage()}
      <form>
        <div className="file-input-container">
          <label htmlFor="OrderId">Order Id::</label>
          <input type="text" id="oderId" name="orderId" value={orderId} onChange={handleChange("orderId")} />
        </div>
        <div className="file-input-container">
          <label htmlFor="itemname">Item Name:</label>
          <input type="text" id="itemname" name="itemname" value={itemname} onChange={handleChange("itemname")} />
        </div>
        <div className="file-input-container">
          <label htmlFor="orderer">Request Sender:</label>
          <input type="text" id="orderer" name="orderer" value={orderer} onChange={handleChange("orderer")}/>
        </div>
        <div className="file-input-container">
          <label htmlFor="vendor">Request Reciever:</label>
          <input type="text" id="vendor" name="issuer" value={vendor} onChange={handleChange("vendor")}/>
        </div>
        <button onClick={onSubmit} type="submit">Submit</button>
      </form>
    </div>
  </div>
  );
  
};

export default ReliefRequest;