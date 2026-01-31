import React from 'react';
import './styles.css';

const products = [
  { id: 1, name: 'Aspirin', price: '$5.99', image: 'https://via.placeholder.com/150?text=Aspirin', description: 'Pain reliever and fever reducer.' },
  { id: 2, name: 'Amoxicillin', price: '$12.50', image: 'https://via.placeholder.com/150?text=Amoxicillin', description: 'Antibiotic used to treat bacterial infections.' },
  { id: 3, name: 'Lisinopril', price: '$8.00', image: 'https://via.placeholder.com/150?text=Lisinopril', description: 'Used to treat high blood pressure.' },
  { id: 4, name: 'Metformin', price: '$4.00', image: 'https://via.placeholder.com/150?text=Metformin', description: 'Used to treat type 2 diabetes.' },
];

const ProductList = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
          <h3>{product.name}</h3>
          <p style={{ color: '#666' }}>{product.description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ fontWeight: 'bold', color: '#008080' }}>{product.price}</span>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
