import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css'; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Fitness Tracker</h1>
        </div>
        <ul className="nav-links">
          {/* Use Link components for navigation */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/nutrition">Nutrition</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
