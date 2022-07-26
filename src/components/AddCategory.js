import React from 'react';

export default function AddCategory({ setShowAddCategory }) {
  return (
    <>
      <h1> AddCategory Component </h1>
      <button onClick={() => setShowAddCategory(false)}>
        Return to main screen
      </button>
    </>
  );
}
