import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Our App</h1>
        <p>Please choose an option to continue</p>
        <div className="button-container">
          <button 
            className="landing-button login"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="landing-button register"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 