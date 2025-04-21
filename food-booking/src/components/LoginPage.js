
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/menu');
    } else {
      setError('Please fill all the fields');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover" style={{ backgroundImage: 'url("/background.jpg")' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-xl font-semibold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mt-4 border rounded"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 mt-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
