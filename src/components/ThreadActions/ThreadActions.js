import React from 'react';
import { deleteThread } from '../../utils/api';

import './ThreadActions.css';

function ThreadActions({ threadId, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this thread?')) {
      try {
        await deleteThread(threadId);
        onDelete();
      } catch (error) {
        console.error('Error deleting thread:', error);
      }
    }
  };

  return (
    <div className="thread-actions-container">
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default ThreadActions;