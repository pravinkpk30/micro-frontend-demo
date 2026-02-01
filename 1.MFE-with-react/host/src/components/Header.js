import React, { Suspense, useState } from 'react';
import UserProfile from '../UserProfile';

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
      <h2>Pharmacy Management Portal</h2>
      
      {/* User Circle Info */}
      <div 
          style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '20px',
              backgroundColor: showProfile ? '#e0f7fa' : 'transparent'
          }}
          onClick={() => setShowProfile(!showProfile)}
      >
           <div style={{ 
               width: '35px', 
               height: '35px', 
               borderRadius: '50%', 
               backgroundColor: '#008080', 
               color: 'white', 
               display: 'flex', 
               justifyContent: 'center', 
               alignItems: 'center',
               fontWeight: 'bold',
               marginRight: '8px'
           }}>
               A
           </div>
           <span style={{ fontSize: '0.9rem' }}>Admin</span>
      </div>

      {/* User Profile Dropdown/Overlay */}
      {showProfile && (
          <div style={{ 
              position: 'absolute', 
              top: '50px', 
              right: '25px', 
              zIndex: 1000, 
              backgroundColor: 'white',
              borderRadius: '5px' 
          }}>
              <Suspense fallback={<div>Loading Profile...</div>}>
                  <UserProfile onClose={() => setShowProfile(false)} />
              </Suspense>
          </div>
      )}
    </header>
  );
};

export default Header;
