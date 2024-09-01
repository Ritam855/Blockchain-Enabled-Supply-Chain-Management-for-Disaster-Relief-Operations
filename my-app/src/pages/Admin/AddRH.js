import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { ReliefCampSignup} from "./AdminApi";
import "../Home.css";

const ReliefCamp = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    $class: "org.dro.network.reliefcamp",
    CampHeadId: "",
    name: "",
    Address: "",
    error:"",
    success:false,
  })

  const {$class, CampHeadId, name, Address, error, success} = values;

  const handleChange = (name)=>(event)=>{
    setValues({...values,error:false, [name]:event.target.value})
  }

  const onSignupSubmit = (event)=>{
    event.preventDefault()
    setValues({...values, error:false})
    ReliefCampSignup({$class, CampHeadId, name, Address})
    .then((data)=>{
      if(data.error){
        setValues({...values, error:data.error, success:false})
      }else{
        setValues({
          ...values,
          CampHeadId:"",
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
        {success && (<div>CampHead Registered Successfully </div>)}
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
      <div className="container2">
        <form>
            <h1>ADD RELIEF CAMP HEAD</h1>
            {errorMessage()}
            {successMessage()}

          <div className="file-input-container">
            <label htmlFor="CampHeadId">CampHeadId:</label>
            <input type="text" name="CampHeadId" value={CampHeadId} onChange={handleChange("CampHeadId")} />
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

export default ReliefCamp;
