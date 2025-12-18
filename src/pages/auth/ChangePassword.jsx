import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RuralmartLogo from '../../assets/RuralmartLogo.jpg';
import { changePassword } from '../../redux/actions/userActions';
import { selectUserLoading, selectUserSuccess, selectUserFailure, selectUserErrorMessage } from '../../redux/selectors/userSelectors';


const ChangePassword = () => {
    const [form, setForm] = useState({ 
        password: '', 
        confirmPassword: '' 
    });
    const [localError, setLocalError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Selectors
    const isLoading = useSelector(selectUserLoading);
    const isSuccess = useSelector(selectUserSuccess);
    const isError = useSelector(selectUserFailure);
    const errorMessage = useSelector(selectUserErrorMessage);

    // Auto-redirect on success
    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => navigate('/login'), 1500);
        }
    }, [isSuccess, navigate]);

    // Handle form input changes
    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        setLocalError('');

        if (!form.password || !form.confirmPassword) {
            setLocalError('Please fill in both password fields.');
            return;
        }

        if (form.password !== form.confirmPassword) {
            setLocalError('Passwords do not match.');
            return;
        }

        const token = localStorage.getItem('accessToken') || localStorage.getItem('token');
        if (!token) {
            setLocalError('Session expired. Please login again.');
            return;
        }

        dispatch(changePassword({ password: form.password, token }));
    };

 return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-emerald-50 flex items-center justify-center p-8 md:p-12">
          <div className="text-center">
            <img src={RuralmartLogo} alt="Ruralmart" className="mx-auto h-40 w-auto object-contain" />
            <h3 className="mt-6 text-2xl font-bold text-emerald-700">Change Password</h3>
            <p className="mt-2 text-gray-600 px-6 md:px-12">Set a new password for your account.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">Change Password</h2>

          {localError && <p className="text-sm text-red-600 mb-4">{localError}</p>}
          {isSuccess && <p className="text-sm text-emerald-600 mb-4">Password changed successfully! Redirecting to login...</p>}
          {isError && <p className="text-sm text-red-600 mb-4">{errorMessage || 'Failed to change password.'}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Confirm new password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition disabled:opacity-50"
              disabled={isLoading || isSuccess}
            >
              {isLoading ? 'Changing...' : 'Change password'}
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

export default ChangePassword;
