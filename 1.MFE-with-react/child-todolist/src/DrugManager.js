import React, { useState } from 'react';
import './styles.css';

/**
 * DrugManager Component
 * 
 * This component receives initial drugs data as a prop from the parent/host application
 * to demonstrate parent-to-child communication in micro-frontend architecture.
 * 
 * @param {Object} props
 * @param {Array} props.initialDrugs - Array of initial drug objects
 *   Each drug should have: { id, name }
 * @param {string} props.title - Title to display as the component heading
 */
const DrugManager = ({ initialDrugs = [], title = 'Drug Inventory Manager' }) => {
  const [drugs, setDrugs] = useState(initialDrugs);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const addOrUpdateDrug = () => {
    if (!input) return;
    
    if (editId) {
      setDrugs(drugs.map(d => d.id === editId ? { ...d, name: input } : d));
      setEditId(null);
    } else {
      setDrugs([...drugs, { id: Date.now(), name: input }]);
    }
    setInput('');
  };

  const deleteDrug = (id) => {
    setDrugs(drugs.filter(d => d.id !== id));
  };

  const startEdit = (drug) => {
    setInput(drug.name);
    setEditId(drug.id);
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter drug name" 
          style={{ flex: 1 }}
        />
        <button className="btn" onClick={addOrUpdateDrug}>
          {editId ? 'Update' : 'Add Drug'}
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {drugs.map((drug) => (
          <li key={drug.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            <span>{drug.name}</span>
            <div>
              <button 
                className="btn" 
                style={{ marginRight: '5px', backgroundColor: '#f39c12' }}
                 onClick={() => startEdit(drug)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => deleteDrug(drug.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrugManager;
