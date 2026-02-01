import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        
        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
