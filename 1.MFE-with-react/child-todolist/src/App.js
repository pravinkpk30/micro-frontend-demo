import React from 'react';
import DrugManager from './DrugManager';
import './styles.css';

/**
 * Default drugs data for standalone operation
 * When this MFE runs independently (not as a remote module),
 * it uses this default data. When consumed by the host app,
 * the host provides the data via props.
 */
const defaultDrugs = [
    { id: 1, name: 'Ibuprofen 200mg' },
    { id: 2, name: 'Paracetamol 500mg' },
];

const App = () => (
    <div className="app-container">
        <header className="main-header">
            <h1>Drug Inventory System</h1>
        </header>
        <main style={{ flex: 1 }}>
            {/* Pass default drugs and title for standalone operation */}
            <DrugManager initialDrugs={defaultDrugs} title="Drug Inventory Manager" />
        </main>
        <footer className="main-footer">
            <p>&copy; 2026 Micro-Pharmacy Inc. All rights reserved.</p>
        </footer>
    </div>
);

export default App;

