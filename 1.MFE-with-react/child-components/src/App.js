import React from 'react';
import ProductList from './ProductList';
import './styles.css';

const App = () => (
    <div className="app-container">
        <header className="main-header">
            <h1>Pharmacy Products</h1>
        </header>
        <main style={{ flex: 1 }}>
            <ProductList />
        </main>
        <footer className="main-footer">
            <p>&copy; 2026 Micro-Pharmacy Inc. All rights reserved.</p>
        </footer>
    </div>
);

export default App;
