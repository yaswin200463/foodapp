// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>
  );
};

export default App;
