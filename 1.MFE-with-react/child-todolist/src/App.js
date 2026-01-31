import React from 'react';
import DrugManager from './DrugManager';
import './styles.css';

const App = () => (
    <div className="app-container">
        <header className="main-header">
            <h1>Drug Inventory System</h1>
        </header>
        <main style={{ flex: 1 }}>
            <DrugManager />
        </main>
        <footer className="main-footer">
            <p>&copy; 2026 Micro-Pharmacy Inc. All rights reserved.</p>
        </footer>
    </div>
);

export default App;
