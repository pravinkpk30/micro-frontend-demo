import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import Layout from './components/Layout';

const RemoteProductList = React.lazy(() => import('childComponents/ProductList'));
const RemoteDrugManager = React.lazy(() => import('childTodolist/DrugManager'));
import VueInventory from './VueInventory';
import AngularOrder from './AngularOrder';

const Dashboard = () => (
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
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading modules...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={
                <div>
                    <h3>Product Catalog</h3>
                    <RemoteProductList />
                </div>
            } />
            <Route path="inventory" element={
                <div>
                    <h3>Inventory Management</h3>
                    <RemoteDrugManager />
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
  );
};

export default App;
