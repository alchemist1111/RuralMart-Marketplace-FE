import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        role: 'buyer', // Default role
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(registerUser(formData)); // Dispatching the Action
        navigate('/login') // Redirecting to login page after successful registration
    }


    return(
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md flex items-center space-x-8">
            {/* Image side section */}
            <div className="flex-1">
                <img src="your-image-url-here" alt="Your Image" className="w-full h-auto rounded-md" />
            </div>
            
            {/* Form side section */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    </div>

                    <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    </div>

                    <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    </div>

                    <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    </div>

                    <div>
                    <label htmlFor="role" className="block text-sm font-medium">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="vendor">Vendor</option>
                        <option value="admin">Admin</option>
                        <option value="buyer">Buyer</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
                    >
                    Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;

