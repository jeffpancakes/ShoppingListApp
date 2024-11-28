import React from 'react';
import '../styles/Item.css';

function Item({ item, onRemove, onToggleComplete }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className={`fw-bold ${item.completed ? 'item-completed' : 'item-incomplete'}`}>
        {item.name}
      </span>
      <div className="item-buttons d-flex gap-2">
        <button
          className={`btn ${item.completed ? 'btn-success' : 'btn-danger'}`}
          onClick={onToggleComplete}
        >
          {item.completed ? 'Vyřešeno' : 'Nevyřešeno'}
        </button>
        <button className="btn btn-danger btn-sm" onClick={onRemove}>
          Odstranit
        </button>
      </div>
    </div>
  );
}

export default Item;