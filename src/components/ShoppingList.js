import React, { useState } from 'react';
import shoppingListData from '../data/shoppingListData';
import ShoppingListDetail from './ShoppingListDetail';
import AddItemButton from './buttons/AddItemButton';
import FilterItemsButton from './buttons/FilterItemsButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingList() {
  const [list, setList] = useState(shoppingListData);
  const [newItemName, setNewItemName] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName.trim(), completed: false };
      setList({ ...list, items: [...list.items, newItem] });
      setNewItemName('');
    }
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredItems = list.items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true;
  });

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <ShoppingListDetail list={{ ...list, items: filteredItems }} setList={setList} />
      </div>

      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Přidat novou položku"
        />
        <AddItemButton onClick={handleAddItem} />
      </div>

      <div className="mb-4">
        <FilterItemsButton onClick={handleFilter} />
      </div>
    </div>
  );
}

export default ShoppingList;