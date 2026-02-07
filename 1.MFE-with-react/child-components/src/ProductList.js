import React from 'react';
import './styles.css';

/**
 * ProductList Component
 * 
 * This component demonstrates both:
 * - Parent-to-child communication: receives products data as a prop
 * - Child-to-parent communication: calls onAddToCart callback to notify parent
 * 
 * @param {Object} props
 * @param {Array} props.products - Array of product objects to display
 *   Each product should have: { id, name, price, image, description }
 * @param {Function} props.onAddToCart - Callback function for child-to-parent communication
 *   Called when user clicks 'Add to Cart' button, passing the product object
 */
const ProductList = ({ products = [], onAddToCart }) => {
  
  /**
   * Handle Add to Cart button click
   * This is the child-to-parent communication mechanism
   * The child (ProductList) notifies the parent (host app) about the action
   */
  const handleAddToCart = (product) => {
    if (onAddToCart && typeof onAddToCart === 'function') {
      // Call the parent's callback function, passing product data from child to parent
      onAddToCart(product);
    } else {
      console.warn('onAddToCart callback not provided by parent application');
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
          <h3>{product.name}</h3>
          <p style={{ color: '#666' }}>{product.description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ fontWeight: 'bold', color: '#008080' }}>{product.price}</span>
            {/* Child-to-parent communication: clicking this button triggers callback to parent */}
            <button 
              className="btn" 
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

