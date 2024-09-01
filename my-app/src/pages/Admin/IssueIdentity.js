import React, { useState } from 'react';
import { Token } from '../Variable.js';
function DownloadLink() {
  const [participant, setParticipant] = useState('');
  const [userID, setUserID] = useState('');

  const handleDownload = async () => {
    const response = await fetch(`http://localhost:3000/api/system/identities/issue`, {
      method: 'POST',
      body: JSON.stringify({ participant, userID }),
      headers: {
        'Content-Type': 'application/json',
        "X-Access-Token": Token,
      }
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filename.card');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
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
        <form>
            <h1>ISSUE IDENTITY</h1>
          <div className="file-input-container">
            <label >Participant</label>
            <input type="text" id="participant" value={participant} onChange={(e) => setParticipant(e.target.value)} />
          </div>
          <div className="file-input-container">
            <label >User ID</label>
            <input type="text" id="userID" value={userID} onChange={(e) => setUserID(e.target.value)} />
          </div>
          <button type="button" onClick={handleDownload}>Download</button>
        </form>
      </div>
    </div>
  );
}

export default DownloadLink;