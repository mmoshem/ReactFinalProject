import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { useState } from 'react';

function LandingPage() {
  const navigate = useNavigate();

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

   const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', email,password);
  };

  
  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <h1>Welcome to Our App</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email} 
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password} 
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div >
          <div className="button-group">
           <button type="submit" className="auth-button" onClick={() => navigate('/login')}>Login</button>
            <button type="register" className="auth-button" onClick={() => navigate('/register')}>Registeration</button>
          </div >
        </form>
      </div>
    </div>
  )
}
export default LandingPage; 