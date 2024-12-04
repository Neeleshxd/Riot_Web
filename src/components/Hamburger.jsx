// HamburgerButton.js
import React from 'react';

const HamburgerButton = ({ onClick }) => {
  return (
    <button className="text-white" onClick={onClick}>
      <div className="w-6 h-1 bg-white mb-1"></div>
      <div className="w-6 h-1 bg-white mb-1"></div>
      <div className="w-6 h-1 bg-white"></div>
    </button>
  );
};

export default HamburgerButton;
