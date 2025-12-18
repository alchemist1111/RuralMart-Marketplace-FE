import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { selectUserLoading, selectUserErrorMessage } from '../../redux/selectors/userSelectors';
import RuralmartLogo from '../../assets/RuralmartLogo.jpg';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [localError, setLocalError] = useState('');
    const [remember, setRemember] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectUserLoading);
    const reduxError = useSelector(selectUserErrorMessage);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLocalError('');

        if (!formData.email || !formData.password) {
            setLocalError('Please fill in both email and password');
            return;
        }

        dispatch(userLogin(formData)).then(() => {
            navigate('/home');
        }).catch(() => {
            // Error handled by Redux
        });
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* left: logo / promo */}
                <div className="w-full md:w-1/2 bg-emerald-50 flex items-center justify-center p-8 md:p-12">
                    <div className="text-center">
                        <img src={RuralmartLogo} alt="Ruralmart" className="mx-auto h-40 w-auto object-contain" />
                        <h3 className="mt-6 text-2xl font-bold text-emerald-700">Welcome Back</h3>
                        <p className="mt-2 text-gray-600 px-6">Sign in to continue to your account.</p>
                    </div>
                </div>

                {/* right: form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">Login</h2>
                    {localError && <p className="text-red-500 text-center mb-4 text-sm">{localError}</p>}
                    {reduxError && <p className="text-red-500 text-center mb-4 text-sm">{reduxError}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm">
                                <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="mr-2" /> Remember Me
                            </label>
                            <a href="/forgot-password" className="text-sm text-emerald-600 hover:underline">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition disabled:opacity-50" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>

                        <p className="text-sm text-center text-gray-500">
                            Don't have an account? <a href="/register" className="text-emerald-600 hover:underline">Register</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;