import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  return (
    <form method="POST" action="https://achieverspayment.com/login">
      <input type="hidden" name="_token" value="KBljuUvpvs2F4P7QDEQ1McXuhLMDTufbtJjNossm" />
      
      <div className="input-group mb-3">
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Matric. No"
          required
          autoFocus
          autoComplete="username"
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
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
      </div>

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
