import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { CreateRelief} from "./AdminApi";
import "../Home.css";

const Relief = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    $class: "org.dro.network.reliefitem",
    reliefitemid: "",
    name: "",
    ownername: "",
    description:"",
    issuer:"",
    owner:"",
    error:"",
    success:false,
  })

  const {$class, reliefitemid, name, ownername,description,issuer,owner, error, success} = values;

  const handleChange = (name)=>(event)=>{
    setValues({...values,error:false, [name]:event.target.value})
  }

  const onSignupSubmit = (event)=>{
    event.preventDefault()
    setValues({...values, error:false})
    CreateRelief({$class, reliefitemid, name, ownername,description,issuer,owner})
    .then((data)=>{
      if(data.error){
        setValues({...values, error:data.error, success:false})
      }else{
        setValues({
          ...values,
          reliefitemid: "",
          name: "",
          ownername: "",
          description:"",
          issuer:"",
          owner:"",
          error:"",
          success:true,
        })
        
      }
    })

  }


  const successMessage = ()=>{
    return(
      <div>
        {success && (<div>Relief Item Added Successfully </div>)}
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
        <h1>ADD Relief Item</h1>
        {errorMessage()}
        {successMessage()}
        <form>
          <div className="file-input-container">
            <label htmlFor="CampHeadId">Relief Item Id:</label>
            <input type="text" name="reliefitemid" value={reliefitemid} onChange={handleChange("reliefitemid")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange("name")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="Address">Owner Name:</label>
            <input type="text" name="ownername" value={ownername} onChange={handleChange("ownername")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="Address">Description:</label>
            <input type="text" name="description" value={description} onChange={handleChange("description")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="Address">Issuer Id:</label>
            <input type="text" name="issuer" value={issuer} onChange={handleChange("issuer")} />
          </div>
          <div className="file-input-container">
            <label htmlFor="Address">Owner Id:</label>
            <input type="text" name="owner" value={owner} onChange={handleChange("owner")} />
          </div>
          <button onClick={onSignupSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Relief;