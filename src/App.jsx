import { useState } from 'react';
import './App.css';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/homepage/Home';
import ForgotPassword from './pages/auth/ForgotPassword';
import ChangePassword from './pages/auth/ChangePassword';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
