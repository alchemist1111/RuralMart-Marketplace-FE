import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userReducer';
import { selectUser } from '../redux/selectors/userSelectors';
import RuralmartLogo from '../assets/RuralmartLogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={RuralmartLogo} alt="Ruralmart" className="h-10 w-auto" />
            <span className="text-xl font-bold text-emerald-700">Ruralmart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-emerald-600 transition">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition">
              Contact
            </Link>

            {/* User Actions */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100 transition"
                >
                  <span className="text-gray-700">{user.firstName || 'User'}</span>
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 transition"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/change-password"
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 transition"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Change Password
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Products
          </Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Contact
          </Link>
          <div className="border-t border-gray-200 pt-2 pb-2">
            {user ? (
              <>
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  My Profile
                </Link>
                <Link to="/change-password" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Change Password
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Login
                </Link>
                <Link to="/register" className="block px-4 py-2 bg-emerald-600 text-white">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
