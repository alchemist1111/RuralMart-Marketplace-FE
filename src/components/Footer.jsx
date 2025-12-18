import React from 'react';
import { Link } from 'react-router-dom';
import RuralmartLogo from '../assets/RuralmartLogo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={RuralmartLogo} alt="Ruralmart" className="h-8 w-auto" />
              <span className="text-xl font-bold text-emerald-400">Ruralmart</span>
            </div>
            <p className="text-sm text-gray-400">
              Connecting rural producers with consumers. Shop locally sourced goods with ease.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.51 9.86 9.86 0 01-2.8.856 4.88 4.88 0 002.16-2.694c-.95.564-2.005.974-3.127 1.195a4.822 4.822 0 00-8.835 4.4A13.7 13.7 0 011.671 3.149a4.822 4.822 0 001.493 6.43 4.78 4.78 0 01-2.19-.606v.06a4.823 4.823 0 003.87 4.728 4.816 4.816 0 01-2.18.084 4.825 4.825 0 004.51 3.348A9.67 9.67 0 010 19.54a13.671 13.671 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.754h3.554v1.391c.433-.668 1.204-1.617 2.928-1.617 2.136 0 3.745 1.395 3.745 4.393v5.587zM5.337 9.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zm1.782 11.019H3.555V9.678h3.564v10.774zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-emerald-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-emerald-400 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@ruralmart.com" className="text-gray-400 hover:text-emerald-400 transition">
                  Email Support
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-emerald-400 transition">
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-emerald-400 transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-gray-400 hover:text-emerald-400 transition">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Newsletter */}
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get updates on new products and exclusive offers.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-900 flex-1 md:flex-initial focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Ruralmart. All rights reserved.</p>
            <p>Made with ❤️ for rural communities</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
