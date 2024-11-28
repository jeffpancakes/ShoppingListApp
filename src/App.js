import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import ShoppingListsOverview from './routes/ShoppingListsOverview';
import ShoppingListDetail from './components/ShoppingListDetail';
import EditList from './components/EditList';
import EmptyPage from './components/EmptyPage';
import shoppingListData from './data/shoppingListData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [lists, setLists] = useState(shoppingListData);
  const [editingListId, setEditingListId] = useState(null);

  const handleSave = (updatedList) => {
    setLists(lists.map(list => 
      list.id === updatedList.id ? updatedList : list
    ));
    setEditingListId(null);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShoppingListsOverview lists={lists} />} />
          <Route
            path="/detail/:id"
            element={
              <DetailWrapper
                lists={lists}
                setLists={setLists}
                onEdit={(id) => setEditingListId(id)}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditWrapper
                lists={lists}
                editingListId={editingListId}
                onSave={handleSave}
                onCancel={() => setEditingListId(null)}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function DetailWrapper({ lists, setLists, onEdit }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const list = lists.find(list => list.id === parseInt(id, 10));

  if (!list) {
    return <EmptyPage />;
  }

  const handleAddItem = (newItem) => {
    setLists(lists.map(l => 
      l.id === list.id 
        ? { ...l, items: [...l.items, newItem] } 
        : l
    ));
  };

  const handleRemoveItem = (itemId) => {
    setLists(lists.map(l =>
      l.id === list.id
        ? { ...l, items: l.items.filter(item => item.id !== itemId) }
        : l
    ));
  };

  const handleToggleComplete = (itemId) => {
    setLists(lists.map(l =>
      l.id === list.id
        ? {
            ...l,
            items: l.items.map(item =>
              item.id === itemId ? { ...item, completed: !item.completed } : item
            ),
          }
        : l
    ));
  };

  const handleRemoveMember = (memberId) => {
    setLists(lists.map(l =>
      l.id === list.id
        ? { ...l, members: l.members.filter(member => member.id !== memberId) }
        : l
    ));
  };

  const handleDeleteList = () => {
    setLists(lists.filter(l => l.id !== list.id));
    navigate('/');
  };

  const handleEdit = () => {
    onEdit(list.id);
    navigate(`/edit/${list.id}`);
  };

  return (
    <ShoppingListDetail
      list={list}
      onEdit={handleEdit}
      onDelete={handleDeleteList}
      onAddItem={handleAddItem}
      onRemoveItem={handleRemoveItem}
      onToggleComplete={handleToggleComplete}
      onRemoveMember={handleRemoveMember}
    />
  );
}

function EditWrapper({ lists, editingListId, onSave, onCancel }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const list = lists.find(list => list.id === parseInt(id, 10));

  if (!editingListId || !list) {
    return <EmptyPage onCreateNew={() => {}} />;
  }

  const handleSave = (updatedList) => {
    onSave(updatedList);
    navigate(`/detail/${updatedList.id}`);
  };

  return (
    <EditList
      list={list}
      onSave={handleSave}
      onCancel={() => {
        onCancel();
        navigate(`/detail/${list.id}`);
      }}
    />
  );
}

export default App;