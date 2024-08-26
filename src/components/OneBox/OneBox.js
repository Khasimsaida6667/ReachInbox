import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import EmailList from '../EmailList/EmailList';
import EmailThread from '../EmailThread/EmailThread';
import { deleteThread } from '../../utils/api';
import './OneBox.css';

function OneBox({ threads, setThreads }) {
  const [selectedThread, setSelectedThread] = useState(null);

  const handleDeleteThread = async (threadId) => {
    try {
      await deleteThread(threadId);
      setThreads(threads.filter(thread => thread.id !== threadId));
      setSelectedThread(null);
    } catch (error) {
      console.error('Error deleting thread:', error);
    }
  };

  return (
    <div className="onebox-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="email-container">
          <EmailList
            threads={threads}
            onSelectThread={setSelectedThread}
          />
          {selectedThread && (
            <EmailThread
              thread={selectedThread}
              onClose={() => setSelectedThread(null)}
              onDelete={handleDeleteThread}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default OneBox;