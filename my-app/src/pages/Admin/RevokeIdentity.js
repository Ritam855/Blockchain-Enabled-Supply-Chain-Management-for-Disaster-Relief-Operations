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
    <div className="admin-container">

      <div className="admin-content">
        <form>
          <div className="form-group">
            <label htmlFor="participant">Participant</label>
            <input type="text" id="participant" value={participant} onChange={(e) => setParticipant(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="userID">User ID</label>
            <input type="text" id="userID" value={userID} onChange={(e) => setUserID(e.target.value)} />
          </div>
          <button type="submit" onClick={handleDownload}>Download</button>
        </form>
      </div>
    </div>
  );
}

export default DownloadLink;