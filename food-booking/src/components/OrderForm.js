import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleOrderConfirm = () => {
    if (email && phone && address) {
      setError('');
      setSuccess(true);
      setTimeout(() => {
        navigate('/menu');  // Redirect back to menu after success.
      }, 2000);
    } else {
      setError('Please fill all the details!');
      setSuccess(false);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-xl font-semibold mb-4">Confirm Your Order</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">Order Placed Successfully!</p>}
        <button
          onClick={handleOrderConfirm}
          className="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
