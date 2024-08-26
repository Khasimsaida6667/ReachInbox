import React from 'react';
import './EmailList.css';

function EmailList({ threads, onSelectThread }) {
  return (
    <div className="email-list-container">
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="thread-item"
          onClick={() => onSelectThread(thread)}
        >
          <h3 className="thread-subject">{thread.subject}</h3>
          <p className="thread-snippet">{thread.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default EmailList;