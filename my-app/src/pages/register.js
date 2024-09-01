import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
function Register() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('http://localhost:3002/send-email', formData, config);
      console.log(response.data);
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
           <h1>REGISTER</h1> 
      <div className="file-input-container">
        <label htmlFor="file-input">Choose a file:</label>        
        <input type="file" name="pdf" onChange={handleFileChange} />
      </div>
      <div className="file-input-container">
        <label htmlFor="file-input">Enter your name:</label>
        <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
      </div>
      <div className="file-input-container">
        <label htmlFor="file-input">Enter your email:</label>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="file-input-container">
            <label htmlFor="file-input">Enter your address:</label>
        <input type="text" name="address" placeholder="Address" value={address} onChange={handleAddressChange} />
      </div>
        <button type="submit">Send email</button>
      </form>
    </div>
    </div>
  );
}

export default Register;







