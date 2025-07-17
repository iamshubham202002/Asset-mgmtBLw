import React, { useState } from 'react';
import API from '../api';

const Login = ({ onLogin }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = async () => {
    try {
      await API.post('/auth/request-otp', { email });
      alert('OTP sent to your email!');
      setStep(2);
    } catch (err) {
      console.error(err);
      alert('Error sending OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await API.post('/auth/verify-otp', { email, otp });
      onLogin(); // mark as logged in
    } catch (err) {
      console.error(err);
      alert('Invalid OTP.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 w-full mb-4 rounded"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border px-3 py-2 w-full mb-4 rounded"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
