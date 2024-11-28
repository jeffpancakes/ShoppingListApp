import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UnmarkItemButton({ onClick }) {
  return (
    <button className="btn btn-warning btn-sm" onClick={onClick}>
      Nevyřešeno
    </button>
  );
}

export default UnmarkItemButton;
