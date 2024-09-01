import React, { useState } from 'react';
import axios from 'axios';
import {Token} from './Variable.js';
import './Home.css'

function Adminconfirm() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
		"X-Access-Token": Token,
      },
    };

    try {
      let myurl= 'http://localhost:3000/api/wallet/'+name+'/setDefault';
      const response = await axios.post(myurl, formData, config);
      console.log(response.data);
      window.location.href = '/Admin-function';
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
      <div className="container2" >
        <form onSubmit={handleSubmit}>
          <div className="file-input-container">
            <label htmlFor="network-name">Upload your network name:</label>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Adminconfirm;