import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Healthcare<span className="highlight">.</span></h1>
      <input type="text" placeholder="Search..." />
      <div className="right-section">
        <span>🔔</span>
        <span>👤 John Doe</span>
        <button>➕</button>
      </div>
    </header>
  );
}

export default Header;
