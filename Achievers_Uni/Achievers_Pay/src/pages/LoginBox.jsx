import React from 'react';
import LoginForm from './LoginForm'; // Importing the LoginForm component

const LoginBox = () => {
  return (
    <div className="login-box">
      <img src="https://achieverspayment.com/img/logo.png" alt="Achievers Logo" /><br /><br />
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <span className="h2">Students Payment Portal</span>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <LoginForm />
          <br />
          <div className="alert alert-info alert-dismissible">
            NOTE! Your Matric/Jamb Number works as Username and Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
