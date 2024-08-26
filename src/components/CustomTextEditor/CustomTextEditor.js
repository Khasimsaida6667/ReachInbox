import React, { useState } from 'react';
import './CustomTextEditor.css';

function CustomTextEditor({ onSave, onInsertVariable }) {
  const [content, setContent] = useState('');

  return (
    <div className="custom-text-editor-container">
      <textarea
        className="custom-text-editor-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="custom-text-editor-button-container">
        <button
          className="save-button"
          onClick={() => onSave(content)}
        >
          Save
        </button>
        <button
          className="variables-button"
          onClick={onInsertVariable}
        >
          Variables
        </button>
      </div>
    </div>
  );
}

export default CustomTextEditor;