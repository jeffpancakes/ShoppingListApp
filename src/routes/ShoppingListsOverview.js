import React, { useState } from 'react';
import shoppingListData from '../data/shoppingListData';
import ShoppingListTile from '../components/ShoppingListTile';
import AddListModal from '../components/AddListModal';
import ConfirmDialog from '../components/ConfirmDialog';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShoppingListsOverview = () => {
  const [lists, setLists] = useState(shoppingListData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ open: false, listId: null });
  const [filter, setFilter] = useState('all');

  const filteredLists = lists.filter((list) => {
    if (filter === 'all') return true;
    if (filter === 'archived') return list.archived;
    if (filter === 'non-archived') return !list.archived;
    return true;
  });

  const handleAddList = (newList) => {
    setLists([...lists, newList]);
  };

  const handleDeleteList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
  };

  const openConfirmDialog = (listId) => {
    setConfirmDialog({ open: true, listId });
  };

  const closeConfirmDialog = () => {
    setConfirmDialog({ open: false, listId: null });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Přehled nákupních seznamů</h1>
      <button className="btn btn-primary mb-3" onClick={() => setModalOpen(true)}>
        Přidat nový seznam
      </button>

      <div className="mb-3">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => setFilter('all')}
        >
          Všechny
        </button>
        <button
          className="btn btn-outline-success me-2"
          onClick={() => setFilter('non-archived')}
        >
          Aktivní
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => setFilter('archived')}
        >
          Archivované
        </button>
      </div>

      <div className="row">
        {filteredLists.map((list) => (
          <div className="col-md-4 mb-3" key={list.id}>
            <ShoppingListTile
              list={list}
              onDelete={() => openConfirmDialog(list.id)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AddListModal
          onClose={() => setModalOpen(false)}
          onSave={handleAddList}
        />
      )}

      {confirmDialog.open && (
        <ConfirmDialog
          onConfirm={() => {
            handleDeleteList(confirmDialog.listId);
            closeConfirmDialog();
          }}
          onCancel={closeConfirmDialog}
        />
      )}
    </div>
  );
};

export default ShoppingListsOverview;
