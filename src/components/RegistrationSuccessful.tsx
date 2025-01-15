import React from "react";
import { Link } from "react-router-dom";
import "./Login.module.css";

const RegistrationSuccessful: React.FC = () => {
  return (
    <div className="registration-successful">
      <div className="success-message-container">
        <h1>Registration Successful!</h1>
        <p>Please check your email for a verification link.</p>
        <Link to="/login">
          <button className="login-button">Go to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccessful;
