import React, { Suspense, useState } from 'react';
import './styles.css';

const RemoteProductList = React.lazy(() => import('childComponents/ProductList'));
const RemoteDrugManager = React.lazy(() => import('childTodolist/DrugManager'));

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      <header className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Pharmacy Management Portal</h2>
        <span style={{ fontSize: '0.9rem' }}>Admin User</span>
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
