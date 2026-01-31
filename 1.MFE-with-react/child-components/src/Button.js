import React from 'react';

const Button = ({ label, onClick }) => (
  <button 
    onClick={onClick} 
    style={{ 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer' 
    }}
  >
    {label || 'Click me'}
  </button>
);

export default Button;
