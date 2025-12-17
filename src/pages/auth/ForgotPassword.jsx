import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RuralmartLogo from '../../assets/RuralmartLogo.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('');
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // TODO: dispatch forgot-password action to backend
    setMessage('If this email exists, a reset link has been sent.');
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-emerald-50 flex items-center justify-center p-8 md:p-12">
          <div className="text-center">
            <img src={RuralmartLogo} alt="Ruralmart" className="mx-auto h-40 w-auto object-contain" />
            <h3 className="mt-6 text-2xl font-bold text-emerald-700">Reset Password</h3>
            <p className="mt-2 text-gray-600 px-6">Enter your account email and we'll send a reset link.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">Forgot Password</h2>
          {message && <p className="text-sm text-emerald-600 mb-4">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition">
              Send reset link
            </button>

            <p className="text-sm text-center text-gray-500">
              Remembered your password? <a href="/login" className="text-emerald-600 hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
