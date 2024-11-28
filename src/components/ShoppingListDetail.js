import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import FilterItemsButton from './buttons/FilterItemsButton';
import AddItemButton from './buttons/AddItemButton';
import DeleteListButton from './buttons/DeleteListButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingListDetail({ list, onEdit, onDelete, onAddItem, onRemoveItem, onToggleComplete, onRemoveMember, onFilter }) {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const navigate = useNavigate();

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: newItemName.trim(),
        completed: false,
      };
      onAddItem(newItem);
      setNewItemName('');
      setIsAddingItem(false);
    }
  };

  const handleEdit = () => {
    onEdit(); // Zavoláme `onEdit` z nadřazené komponenty, aby nastavil editaci
    navigate(`/edit/${list.id}`); // Přesměrujeme uživatele na dynamickou stránku s konkrétním `id` seznamu
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">{list.name}</h2>
        <FilterItemsButton onClick={onFilter} />
      </div>

      <div className="mb-4">
        <h3 className="mb-3 text-primary">Položky seznamu</h3>
        <div className="row">
          {list.items.map(item => (
            <div key={item.id} className="col-12 col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <Item
                    item={item}
                    onRemove={() => onRemoveItem(item.id)}
                    onToggleComplete={() => onToggleComplete(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isAddingItem && (
        <div className="mb-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Název nové položky"
            />
            <AddItemButton onClick={handleAddItem} />
          </div>
        </div>
      )}

      <div className="mb-4">
        <h3 className="mb-3 text-primary">Členové seznamu</h3>
        {list.members.map(member => (
          <div key={member.id} className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>{member.name}</span>
              {member.role !== "owner" && (
                <button className="btn btn-danger btn-sm" onClick={() => onRemoveMember(member.id)}>
                  Odstranit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex gap-3 mt-4">
        <AddItemButton onClick={() => setIsAddingItem(true)} />
        <button className="btn btn-warning" onClick={handleEdit}>Upravit seznam</button>
        <DeleteListButton onClick={onDelete} />
      </div>
    </div>
  );
}

export default ShoppingListDetail;
