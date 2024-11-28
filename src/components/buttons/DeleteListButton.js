import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteListButton({ onClick }) {
  return (
    <button type="button" className="btn btn-danger btn-sm" onClick={onClick}>
      Smazat seznam
    </button>
  );
}

DeleteListButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteListButton;
