import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MarkItemButton({ onClick }) {
  return (
    <button className="btn btn-success btn-sm" onClick={onClick}>
      Vyřešeno
    </button>
  );
}

export default MarkItemButton;