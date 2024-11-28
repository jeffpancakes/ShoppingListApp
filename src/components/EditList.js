import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EditList.css';

function EditList({ list, onSave, onCancel }) {
  const [name, setName] = useState(list.name);
  const [members, setMembers] = useState(list.members);
  const [items, setItems] = useState(list.items);
  const [newMemberName, setNewMemberName] = useState('');

  const handleAddMember = () => {
    if (newMemberName.trim() !== '') {
      const newMember = { id: Date.now(), name: newMemberName.trim(), role: 'member' };
      setMembers([...members, newMember]);
      setNewMemberName('');
    }
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleEditItem = (id, newName, completed) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: newName, completed } : item
    ));
  };

  const handleSave = () => {
    // Vracíme všechny změny do nadřazené komponenty
    onSave({ 
      ...list,  // Zachováme všechny atributy z původního seznamu
      name,     // Aktualizovaný název seznamu
      members,  // Aktualizovaní členové
      items     // Aktualizované položky
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Upravit seznam</h2>
      <div className="mb-3">
        <label htmlFor="listName" className="form-label">Název seznamu</label>
        <input
          type="text"
          id="listName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <button className="btn btn-success me-2" onClick={handleSave}>Uložit změny</button>
        <button className="btn btn-secondary" onClick={onCancel}>Zrušit</button>
      </div>

      <div className="mb-4">
        <h3 className="mb-3 text-primary">Členové</h3>
        {members.map(member => (
          <div key={member.id} className="d-flex justify-content-between align-items-center mb-2">
            <span>{member.name}</span>
            {member.role !== "owner" && (
              <button className="btn btn-danger" onClick={() => handleRemoveMember(member.id)}>Odebrat</button>
            )}
          </div>
        ))}
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            placeholder="Název nového člena"
          />
          <button className="btn btn-primary" onClick={handleAddMember}>Přidat člena</button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-3 text-primary">Položky seznamu</h3>
        {items.map(item => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <input
                  type="text"
                  className="form-control me-3"
                  value={item.name}
                  onChange={(e) => handleEditItem(item.id, e.target.value, item.completed)}
                />
                <select
                  className={`form-select w-auto me-3 ${item.completed ? 'completed-select' : 'incomplete-select'}`}
                  value={item.completed ? 'completed' : 'incomplete'}
                  onChange={(e) => handleEditItem(item.id, item.name, e.target.value === 'completed')}
                >
                  <option value="incomplete">Nevyřešeno</option>
                  <option value="completed">Vyřešeno</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditList;