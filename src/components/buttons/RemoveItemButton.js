import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RemoveItemButton({ onClick }) {
  return (
    <button className="btn btn-danger btn-sm" onClick={onClick}>
      Odstranit
    </button>
  );
}

export default RemoveItemButton;
