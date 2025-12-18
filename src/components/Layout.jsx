import React from 'react';
import RuralmartLogo from '../assets/RuralmartLogo.jpg';

// Simple Layout component: left logo/promo column + right content area
export default function Layout({ children, title, subtitle, withBackground = false, backgroundImage }) {
  const bgStyle = withBackground && backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined;

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={bgStyle}>
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full bg-emerald-50 flex items-center justify-center p-8">
          <div className="text-center">
            <img src={RuralmartLogo} alt="Ruralmart" className="mx-auto h-40 w-auto object-contain rounded-md" />
            {title && <h3 className="mt-6 text-2xl font-bold text-emerald-700">{title}</h3>}
            {subtitle && <p className="mt-2 text-gray-600 px-6">{subtitle}</p>}
          </div>
        </div>

        <div className="md:w-1/2 w-full p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
