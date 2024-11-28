import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FilterItemsButton({ onClick }) {
  return (
    <div className="d-flex gap-2 mb-3">
      <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => onClick('all')}>
        Zobrazit všechny
      </button>
      <button type="button" className="btn btn-outline-success btn-sm" onClick={() => onClick('completed')}>
        Pouze vyřešené
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onClick('incomplete')}>
        Pouze nevyřešené
      </button>
    </div>
  );
}

export default FilterItemsButton;
