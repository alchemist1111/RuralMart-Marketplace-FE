import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, status } = useSelector((state) => state.user);
    
    // Handle input changes
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}));
    }
    
    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        if(!formData.email || formData.password) {
            setError('Please fill in both email and password');
            return;
        }

        dispatch(userLogin(formData)) // Dispatching the user login action
          .then(() => {
            navigate('/home') // Redirecting to home page after successful login
          })

          .catch((err) => {
            setError(err.message || 'Login failed, please try again.');
          });
        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
            {/* Image Section */}
            <div className="flex-1 hidden md:block">
                <img src="/path/to/your-image.jpg" alt="Login" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Login Form Section */}
            <div className="w-full max-w-md flex-1 p-8">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error Message */}
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    />
                </div>
                
                {/* Remember Me Checkbox */}
                <div className="flex items-center mb-4">
                    <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>
                
                {/* Forgot Password and Register Links */}
                <div className="flex justify-between items-center mt-4">
                    <a href="/forgot-password" className="text-blue-600 hover:text-blue-800 text-sm">Forgot Password?</a>
                    <a href="/register" className="text-blue-600 hover:text-blue-800 text-sm">Don't have an account? Register</a>
                </div>
                </form>
            </div>
            </div>
        </div>
    );

}

export default Login;