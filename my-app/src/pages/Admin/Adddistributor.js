import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { DistributorSignup} from "./AdminApi";
import "../Home.css";

const Distributor = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    $class: "org.dro.network.distributor",
    DistributorId: "",
    name: "",
    Address: "",
    error:"",
    success:false,
  })

  const {$class, DistributorId, name, Address, error, success} = values;

  const handleChange = (name)=>(event)=>{
    setValues({...values,error:false, [name]:event.target.value})
  }

  const onSignupSubmit = (event)=>{
    event.preventDefault()
    setValues({...values, error:false})
    DistributorSignup({$class, DistributorId, name, Address})
    .then((data)=>{
      if(data.error){
        setValues({...values, error:data.error, success:false})
      }else{
        setValues({
          ...values,
          DistributorId:"",
          name:"",
          Address:"",
          error:"",
          success:true,
        })
        
      }
    })

  }


  const successMessage = ()=>{
    return(
      <div>
        {success && (<div>Distributor Registered Successfully </div>)}
      </div>
    )
  }

  const errorMessage = ()=>{
    return(
      <div style={{color:"red"}}>
        {error}
      </div>
    )
  }

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
      <div className="container2" >
        <form>
            <h1>ADD DISTRIBUTOR</h1>
            {errorMessage()}
            {successMessage()} 
          <div className="file-input-container">
            <label htmlFor="CampHeadId">Distributor Id:</label>
            <input type="text" name="DistributorId" value={DistributorId} onChange={handleChange("DistributorId")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange("name")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="Address">Address:</label>
            <input type="text" name="Address" value={Address} onChange={handleChange("Address")} />
          </div>
          <button onClick={onSignupSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Distributor;