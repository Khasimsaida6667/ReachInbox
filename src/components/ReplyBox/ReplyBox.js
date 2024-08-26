import React, { useState } from 'react';
import CustomTextEditor from '../CustomTextEditor/CustomTextEditor';
import { replyToThread } from '../../utils/api';
import './ReplyBox.css';

function ReplyBox({ threadId, onReplySent }) {
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = async (content) => {
    try {
      setIsReplying(true);
      await replyToThread(threadId, {
        from: 'user@example.com', 
        to: 'recipient@example.com',
        subject: 'Re: Thread Subject',
        body: content,
      });
      onReplySent();
    } catch (error) {
      console.error('Error sending reply:', error);
    } finally {
      setIsReplying(false);
    }
  };

  return (
    <div className="reply-box-container">
      <h3 className="reply-box-title">Reply</h3>
      <CustomTextEditor onSave={handleReply} onInsertVariable={() => {}} />
      {isReplying && <p className="sending-message">Sending reply...</p>}
    </div>
  );
}

export default ReplyBox;