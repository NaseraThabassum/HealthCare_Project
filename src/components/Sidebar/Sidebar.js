import React from 'react';
import './Sidebar.css';
import navLinks from '../../data/navigation';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
