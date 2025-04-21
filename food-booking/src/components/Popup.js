
import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>{message}</p>
        <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
