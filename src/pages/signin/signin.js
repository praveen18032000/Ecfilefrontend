// components/SignIn.js

import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import "./signin.css";
import { resendOtp, signIn } from '../../apis';


function SignIn() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = {

      phoneNumber: phoneNumber,
      password: password
    }
    try {
      const res = await signIn(userData);
      console.log(res.data);
      const { token } = res.data.data;
      // Set token in cookies with expiry time of 2 days
      Cookies.set('token', token, { expires: 2 });
     if (res.data.data.isVerified) {
        navigate('/dashboard');
      } else {
        window.alert('Please verify your email address otp sent to your email');
        const res = await resendOtp();
        console.log(res.data);
       navigate('/verify');
      }
    } catch (error) {
      console.log(error);
      
      setErrorMessage(error.response.data.message);
      
    }
  };
  const validatePhoneNumber = () => {
    if (!phoneNumber.match(/^[6-9]\d{9}$/)) {
      setPhoneError('Phone number must be 10 digits long and start with 6, 7, 8, or 9.');
    } else {
      setPhoneError('');
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} onBlur={validatePhoneNumber} required />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input">
            <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={handlePasswordChange}  required />
            <i className={`password-toggle-icon ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`} onClick={togglePasswordVisibility}></i>
          
          </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
