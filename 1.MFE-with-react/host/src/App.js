import React, { Suspense, useState } from 'react';
import './styles.css';

const RemoteProductList = React.lazy(() => import('childComponents/ProductList'));
const RemoteDrugManager = React.lazy(() => import('childTodolist/DrugManager'));
import VueInventory from './VueInventory';
import UserProfile from './UserProfile';
import AngularOrder from './AngularOrder';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="app-container">
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
      
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Navigation */}
        <nav style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeTab === 'dashboard' ? '#34495e' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard Overview
            </li>
            <li 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeTab === 'products' ? '#34495e' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
              onClick={() => setActiveTab('products')}
            >
              Browse Products
            </li>
            <li 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeTab === 'inventory' ? '#34495e' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
              onClick={() => setActiveTab('inventory')}
            >
              Manage Inventory
            </li>
            <li 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeTab === 'vue-inventory' ? '#34495e' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
              onClick={() => setActiveTab('vue-inventory')}
            >
              Global Inventory (Vue)
            </li>
            <li 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeTab === 'orders' ? '#34495e' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
              onClick={() => setActiveTab('orders')}
            >
              Order Management (Angular)
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <Suspense fallback={<div>Loading modules...</div>}>
                {activeTab === 'dashboard' && (
                    <div>
                        <h2>Dashboard Overview</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                           <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                                <h4>Quick Product View</h4>
                                <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                                    <RemoteProductList />
                                </div>
                           </div>
                           <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                                <h4>Inventory Access</h4>
                                <RemoteDrugManager />
                           </div>
                        </div>
                    </div>
                )}

                {activeTab === 'products' && (
                    <div>
                        <h3>Product Catalog</h3>
                        <RemoteProductList />
                    </div>
                )}

                {activeTab === 'inventory' && (
                    <div>
                        <h3>Inventory Management</h3>
                        <RemoteDrugManager />
                    </div>
                )}

                {activeTab === 'vue-inventory' && (
                    <div>
                        <h3>Global Drug Inventory (Vue MFE)</h3>
                        <VueInventory />
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div>
                        <AngularOrder />
                    </div>
                )}
            </Suspense>
        </main>
      </div>

      <footer className="main-footer">
        <p>&copy; 2026 Pharmacy Portal Host. Integrated Micro-Frontends.</p>
      </footer>
    </div>
  );
};

export default App;
