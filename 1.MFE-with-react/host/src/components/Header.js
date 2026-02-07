import React, { Suspense, useState } from 'react';
import UserProfile from '../UserProfile';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  // Get cart state from context - this reflects items added by child MFE
  const { cartItems, cartCount, removeFromCart, clearCart } = useCart();

  return (
    <header className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
      <h2>Pharmacy Management Portal</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        
        {/* Cart Icon - Shows items added via child-to-parent communication */}
        <div 
          style={{ 
            position: 'relative', 
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: showCart ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
            transition: 'background-color 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onClick={() => { setShowCart(!showCart); setShowProfile(false); }}
        >
          {/* Cart SVG Icon - White color for visibility on green header */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4h16l-2.5 7.5H7L5 5"></path>
          </svg>
          
          {/* Cart label */}
          <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '500' }}>Cart</span>
          
          {/* Cart Count Badge - Updated when child MFE adds items */}
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </div>

        {/* User Circle Info */}
        <div 
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                padding: '5px 12px',
                borderRadius: '20px',
                backgroundColor: showProfile ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                transition: 'background-color 0.2s'
            }}
            onClick={() => { setShowProfile(!showProfile); setShowCart(false); }}
        >
             <div style={{ 
                 width: '35px', 
                 height: '35px', 
                 borderRadius: '50%', 
                 backgroundColor: 'white', 
                 color: '#008080', 
                 display: 'flex', 
                 justifyContent: 'center', 
                 alignItems: 'center',
                 fontWeight: 'bold',
                 marginRight: '8px'
             }}>
                 A
             </div>
             <span style={{ fontSize: '0.9rem', color: 'white', fontWeight: '500' }}>Admin</span>
        </div>
      </div>

      {/* Cart Dropdown - Shows items added via child-to-parent communication */}
      {showCart && (
        <div style={{ 
          position: 'absolute', 
          top: '60px', 
          right: '100px', 
          zIndex: 1000, 
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          minWidth: '300px',
          maxHeight: '400px',
          overflow: 'auto'
        }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
            <h4 style={{ margin: 0, color: '#333' }}>
              🛒 Shopping Cart ({cartCount} items)
            </h4>
            <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#666' }}>
              Items added from ProductList (Child MFE)
            </p>
          </div>
          
          {cartItems.length === 0 ? (
            <div style={{ padding: '30px', textAlign: 'center', color: '#999' }}>
              <p>Your cart is empty</p>
              <p style={{ fontSize: '12px' }}>Add products using the "Add to Cart" button</p>
            </div>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cartItems.map(item => (
                  <li key={item.id} style={{ 
                    padding: '12px 15px', 
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '500', color: '#333' }}>{item.name}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {item.price} × {item.quantity}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#e74c3c',
                        cursor: 'pointer',
                        fontSize: '16px',
                        padding: '5px'
                      }}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
              <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
                <button 
                  onClick={clearCart}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  Clear Cart
                </button>
                <button 
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: '#008080',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* User Profile Dropdown/Overlay */}
      {showProfile && (
          <div style={{ 
              position: 'absolute', 
              top: '60px', 
              right: '25px', 
              zIndex: 1000, 
              backgroundColor: 'white',
              borderRadius: '5px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
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

