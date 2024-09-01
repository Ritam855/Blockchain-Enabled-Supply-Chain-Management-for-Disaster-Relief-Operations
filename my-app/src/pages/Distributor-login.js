import React, { useState } from 'react';
import axios from 'axios';
import { Token } from './Variable.js'; 
import './Home.css';

function Distributorlogin() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('card', file);
    formData.append('name', name);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        "X-Access-Token": Token,
      },
    };

    try {
      const response = await axios.post('http://localhost:3000/api/Wallet/import', formData, config);
      console.log(response.data);
      window.location.href = '/Distributor-confirm';
    } catch (error) {
      console.error(error);
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
      <div className="container2">
        <form onSubmit={handleSubmit}>
           <h1>UPLOAD YOUR DISTRIBUTOR CERTIFICATE:</h1> 

          <div className="file-input-container">
            <label htmlFor="file-input">Choose a file:</label>
            <input id="file-input" type="file" name="pdf" onChange={handleFileChange} />
          </div>
          <div className="file-input-container">
            <label htmlFor="network-name">Enter your network name:</label>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Distributorlogin;
