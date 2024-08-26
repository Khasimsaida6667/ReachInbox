import React, { useState } from 'react';
import ReplyBox from '../ReplyBox/ReplyBox';
import ThreadActions from '../ThreadActions/ThreadActions';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import './EmailThread.css';

function EmailThread({ thread, onClose, onDelete }) {
  const [isReplying, setIsReplying] = useState(false);

  const shortcuts = [
    { key: 'r', action: () => setIsReplying(true) },
    { key: 'd', action: () => onDelete(thread.id) },
  ];

  useKeyboardShortcuts(shortcuts);

  return (
    <div className="email-thread-container">
      <button onClick={onClose} className="close-button">Close</button>
      <h2 className="thread-subject">{thread.subject}</h2>
      <div className="thread-body">
        <p>{thread.body}</p>
      </div>
      <ThreadActions threadId={thread.id} onDelete={() => onDelete(thread.id)} />
      {isReplying ? (
        <ReplyBox 
          threadId={thread.id} 
          onReplySent={() => {
            setIsReplying(false);
           
          }} 
        />
      ) : (
        <button 
          onClick={() => setIsReplying(true)} 
          className="reply-button"
        >
          Reply
        </button>
      )}
    </div>
  );
}

export default EmailThread;