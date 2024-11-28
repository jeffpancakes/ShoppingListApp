import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Confirm({ onConfirm, onCancel }) {
  return (
    <Modal show onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Potvrdit smazání</Modal.Title>
      </Modal.Header>
      <Modal.Body>Opravdu chcete smazat tento seznam?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Ne
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Ano
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Confirm;