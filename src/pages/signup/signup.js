// components/SignupForm.js

import React, { useState } from 'react';
import { useNavigate ,Link} from "react-router-dom";
import Cookies from 'js-cookie';
import './signup.css';
import {register} from '../../apis/index' 

const SignupForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    image: null
  });
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = {
        
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        image: formData.image
    }
    try {
      const res = await register(userData);
      console.log(res.data);
      const { token } = res.data.data;

      // Set token in cookies with expiry time of 2 days
      Cookies.set('token', token, { expires: 2 });
      setSuccessMessage('Signup successful! Please check your email for verification.');
      setErrorMessage('');
      navigate("/verify");
    } catch (err) {
        console.log(err);
      setErrorMessage(err.response.data.message);
      setSuccessMessage('');
    }
  };
  const validatePhoneNumber = () => {
    if (!formData.phoneNumber.match(/^[6-9]\d{9}$/)) {
      setPhoneError('Phone number must be 10 digits long and start with 6, 7, 8, or 9.');
    } else {
      setPhoneError('');
    }
  };

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(formData.email)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
  };
  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setPasswordError('Password must contain at least one uppercase letter, one digit, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="signup-form-container">
      <h3 className="signup-title">Sign Up</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={validateEmail} required />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} onBlur={validatePhoneNumber} pattern="[6-9]{1}[0-9]{9}" required />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} onBlur={validatePassword} required />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="image">Profile Picture:</label>
          <input type="file" name="image" id="image" onChange={handleFileChange} accept="image/*" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <p>Already have an account? <Link to="/">Sign in</Link></p>
    </div>
  );
};

export default SignupForm;
