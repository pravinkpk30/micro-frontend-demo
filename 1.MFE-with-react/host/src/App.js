import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import Layout from './components/Layout';
import { CartProvider, useCart } from './context/CartContext';

const RemoteProductList = React.lazy(() => import('childComponents/ProductList'));
const RemoteDrugManager = React.lazy(() => import('childTodolist/DrugManager'));
import VueInventory from './VueInventory';
import AngularOrder from './AngularOrder';

/**
 * Mock Data - Parent to Child Communication in Micro-Frontend Architecture
 * 
 * The host application (parent) defines the data and passes it as props
 * to the child micro-frontend components (ProductList and DrugManager).
 * This demonstrates the parent-to-child communication pattern in MFE.
 */

// Mock products data to be passed to ProductList child MFE
const mockProducts = [
    { id: 1, name: 'Aspirin', price: '$5.99', image: 'https://via.placeholder.com/150?text=Aspirin', description: 'Pain reliever and fever reducer.' },
    { id: 2, name: 'Amoxicillin', price: '$12.50', image: 'https://via.placeholder.com/150?text=Amoxicillin', description: 'Antibiotic used to treat bacterial infections.' },
    { id: 3, name: 'Lisinopril', price: '$8.00', image: 'https://via.placeholder.com/150?text=Lisinopril', description: 'Used to treat high blood pressure.' },
    { id: 4, name: 'Metformin', price: '$4.00', image: 'https://via.placeholder.com/150?text=Metformin', description: 'Used to treat type 2 diabetes.' },
];

// Mock drugs data to be passed to DrugManager child MFE
const mockDrugs = [
    { id: 1, name: 'Ibuprofen 200mg' },
    { id: 2, name: 'Paracetamol 500mg' },
    { id: 3, name: 'Omeprazole 20mg' },
    { id: 4, name: 'Atorvastatin 10mg' },
];

/**
 * Dashboard Component
 * Demonstrates both parent-to-child and child-to-parent communication
 */
const Dashboard = () => {
    // Get the addToCart callback from context for child-to-parent communication
    const { addToCart } = useCart();

    return (
        <div>
            <h2>Dashboard Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h4>Quick Product View</h4>
                    <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                        {/* 
                          * Bi-directional communication in MFE:
                          * - Parent-to-child: passing 'products' prop
                          * - Child-to-parent: passing 'onAddToCart' callback
                          */}
                        <RemoteProductList 
                            products={mockProducts} 
                            onAddToCart={addToCart} 
                        />
                    </div>
                </div>
                <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h4>Inventory Access</h4>
                    {/* Parent-to-child communication: passing initialDrugs and title props to child MFE */}
                    <RemoteDrugManager initialDrugs={mockDrugs} title="Dashboard Drug Manager" />
                </div>
            </div>
        </div>
    );
};

/**
 * Products Page Component
 * Uses child-to-parent communication via onAddToCart callback
 */
const ProductsPage = () => {
    const { addToCart } = useCart();
    
    return (
        <div>
            <h3>Product Catalog</h3>
            {/* 
              * Bi-directional communication in MFE:
              * - Parent-to-child: passing 'products' prop
              * - Child-to-parent: passing 'onAddToCart' callback
              */}
            <RemoteProductList 
                products={mockProducts} 
                onAddToCart={addToCart} 
            />
        </div>
    );
};

const App = () => {
  return (
    // CartProvider enables cart state management for child-to-parent communication
    <CartProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading modules...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="inventory" element={
                  <div>
                      <h3>Inventory Management</h3>
                      {/* Parent-to-child communication: passing initialDrugs and title props to child MFE */}
                      <RemoteDrugManager initialDrugs={mockDrugs} title="Drug Inventory Manager" />
                  </div>
              } />
              <Route path="vue-inventory" element={
                  <div>
                      <h3>Global Drug Inventory (Vue MFE)</h3>
                      <VueInventory />
                  </div>
              } />
              <Route path="orders" element={
                 <div>
                    <AngularOrder />
                 </div>
              } />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;


