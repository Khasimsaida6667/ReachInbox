import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">Inbox</li>
        <li className="sidebar-menu-item">Sent</li>
        <li className="sidebar-menu-item">Drafts</li>
      </ul>
    </div>
  );
}

export default Sidebar;