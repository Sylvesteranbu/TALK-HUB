import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = (props) => {
  const [username, setUsername] = useState('');
  const [authError, setAuthError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/authenticate", { username: username })
      .then((r) => {
        props.onAuth({ ...r.data, secret: username });
        // Redirect to the desired webpage
        window.location.href = 'https://talk-a-tive-7fgq.onrender.com/chats';
      })
      .catch((e) => {
        console.log("Auth Error", e);
        setAuthError(e.message);
      });
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome👋</div>

        <div className="form-subtitle">TO </div>
        <div className="form-subtitle">TALKHUB</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" value={username} onChange={handleInputChange} />
          {authError && <div style={{ color: 'red' }}>{authError}</div>}
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;