import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddListModal({ onClose, onSave }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onSave({ id: Date.now(), name, owner: 'currentUser', archived: false, items: [], members: [] });
      onClose();
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Přidat nový seznam</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Název seznamu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zadejte název"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Zrušit
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Uložit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddListModal;