import React, { useState } from 'react';
import './Auth.css';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <input
            type="text"
            name="first_name"
            placeholder="Full Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="last_name"
            placeholder="Full Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="auth-button">Register</button>
      </form>
    </div>
  );
}

export default Register; 