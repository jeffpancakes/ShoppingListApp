import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingListTile({ list, onDelete }) {
  const navigate = useNavigate();
  const currentUser = 'currentUser';

  const owner = list.members.find(member => member.role === 'owner');

  const handleClick = () => {
    navigate(`/detail/${list.id}`);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-body">
        <h5 className="card-title">{list.name}</h5>
        <p className="card-text">Vlastník: {owner ? owner.name : 'Neznámý'}</p>
        <p className="card-text">
          Stav: {list.archived ? 'Archivovaný' : 'Aktivní'}
        </p>
        {owner && owner.name === currentUser && (
          <button
            className="btn btn-danger btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            Smazat
          </button>
        )}
      </div>
    </div>
  );
}

export default ShoppingListTile;