import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login (e.g., redirect or save token)
        console.log('Login successful', data);
      } else {
        // Handle login error
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred while logging in');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Matric. No"
          required
          autoFocus
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="remember_me" name="remember" />
            <label htmlFor="remember_me">Remember Me</label>
          </div>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
