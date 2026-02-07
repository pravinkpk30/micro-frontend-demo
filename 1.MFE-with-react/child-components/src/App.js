import React, { useState } from 'react';
import ProductList from './ProductList';
import './styles.css';

/**
 * Default products data for standalone operation
 * When this MFE runs independently (not as a remote module),
 * it uses this default data. When consumed by the host app,
 * the host provides the data via props.
 */
const defaultProducts = [
    { id: 1, name: 'Aspirin', price: '$5.99', image: 'https://via.placeholder.com/150?text=Aspirin', description: 'Pain reliever and fever reducer.' },
    { id: 2, name: 'Amoxicillin', price: '$12.50', image: 'https://via.placeholder.com/150?text=Amoxicillin', description: 'Antibiotic used to treat bacterial infections.' },
    { id: 3, name: 'Lisinopril', price: '$8.00', image: 'https://via.placeholder.com/150?text=Lisinopril', description: 'Used to treat high blood pressure.' },
    { id: 4, name: 'Metformin', price: '$4.00', image: 'https://via.placeholder.com/150?text=Metformin', description: 'Used to treat type 2 diabetes.' },
];

const App = () => {
    // Standalone cart state for when MFE runs independently
    const [cart, setCart] = useState([]);

    /**
     * Standalone onAddToCart handler
     * When running as a remote module, the host provides this via props.
     * When running standalone, we manage cart locally.
     */
    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        console.log(`[Standalone] Added to cart:`, product.name);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="app-container">
            <header className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Pharmacy Products</h1>
                {/* Standalone cart indicator */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    backgroundColor: '#e0f7fa',
                    padding: '8px 16px',
                    borderRadius: '20px'
                }}>
                    <span>🛒</span>
                    <span style={{ fontWeight: 'bold' }}>{cartCount} items</span>
                </div>
            </header>
            <main style={{ flex: 1 }}>
                {/* Pass default products and onAddToCart for standalone operation */}
                <ProductList 
                    products={defaultProducts} 
                    onAddToCart={handleAddToCart} 
                />
            </main>
            <footer className="main-footer">
                <p>&copy; 2026 Micro-Pharmacy Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;


