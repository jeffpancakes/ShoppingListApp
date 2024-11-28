import React from 'react';

function EmptyPage({ onCreateNew }) {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-muted">Seznam byl smazán!</h2>
      <button className="btn btn-primary mt-4" onClick={onCreateNew}>
        Vytvořit nový seznam
      </button>
    </div>
  );
}

export default EmptyPage;