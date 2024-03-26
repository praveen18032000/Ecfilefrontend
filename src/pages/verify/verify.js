
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './verify.css';
import { resendOtp, verifyotp } from '../../apis';

function Verify() {
    const navigate = useNavigate();
    const [emailOtp, setEmailOtp] = useState('');
    const [numberOtp, setNumberOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleEmailOtpChange = (e) => {
        setEmailOtp(e.target.value);
    };

    const handleNumberOtpChange = (e) => {
        setNumberOtp(e.target.value);
    };
    const handleResendOtp = async (e) => {
        e.preventDefault();
        try {
            const res = await resendOtp();
            console.log("res", res);
            window.alert(res.data.message);
            setErrorMessage('');
        } catch (error) {
            console.log("error", error);
            setErrorMessage(error.response.data.message);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let otpData = {
            emailOtp: emailOtp,
        }
        try {
            const res = await verifyotp(otpData);
            console.log("res", res);
            setErrorMessage('');
            navigate('/dashboard')

        } catch (error) {
            console.log("error", error);
            setErrorMessage(error.response.data.message);

        }
    };

    return (
        <div className="verify-container">
            <h2> Verification</h2>
            <form onSubmit={handleSubmit} className="verify-form">

                <div className="form-group">
                    <label htmlFor="emailOtp">Email OTP:</label>
                    <input type="number" id="emailOtp" value={emailOtp} onChange={handleEmailOtpChange} required />

                    <span className="resend-otp-button" onClick={handleResendOtp}>Resend OTP</span>
                </div>
                <div className="form-group" >
                    <label htmlFor="numberOtp">Number OTP:</label>
                    <input type="number" id="numberOtp" value={numberOtp} onChange={handleNumberOtpChange} readOnly />
                </div>
                <button type="submit">Verify</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Verify;
