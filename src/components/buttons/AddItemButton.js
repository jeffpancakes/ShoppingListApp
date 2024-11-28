import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddItemButton({ onClick }) {
  return (
    <button type="button" className="btn btn-primary btn-sm" onClick={onClick}>
      Přidat položku
    </button>
  );
}

AddItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddItemButton;
