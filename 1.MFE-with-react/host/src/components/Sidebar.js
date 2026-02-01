import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // Link style helper
  const getLinkStyle = ({ isActive }) => ({
     padding: '10px',
     cursor: 'pointer', 
     backgroundColor: isActive ? '#34495e' : 'transparent',
     borderRadius: '4px',
     marginBottom: '5px',
     display: 'block',
     color: 'white',
     textDecoration: 'none'
  });

  return (
    <nav style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
            <NavLink to="/dashboard" style={getLinkStyle}>
                Dashboard Overview
            </NavLink>
        </li>
        <li>
            <NavLink to="/products" style={getLinkStyle}>
                Browse Products
            </NavLink>
        </li>
        <li>
            <NavLink to="/inventory" style={getLinkStyle}>
                Manage Inventory
            </NavLink>
        </li>
        <li>
            <NavLink to="/vue-inventory" style={getLinkStyle}>
                Global Inventory (Vue)
            </NavLink>
        </li>
        <li>
            <NavLink to="/orders" style={getLinkStyle}>
                Order Management (Angular)
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
