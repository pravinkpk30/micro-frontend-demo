import React, { useState } from 'react';
import './styles.css';

const DrugManager = () => {
  const [drugs, setDrugs] = useState([
    { id: 1, name: 'Ibuprofen 200mg' },
    { id: 2, name: 'Paracetamol 500mg' }
  ]);
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
      <h3>Drug Inventory Manager</h3>
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
