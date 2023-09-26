import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfilePage from './profile';

function FitnessDashboard() {
  const username = useSelector((state) => state.user.username);

  const sidebarStyle = {
    backgroundColor: '#333',
    color: 'white',
    width: '250px',
    padding: '20px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue', 
    marginTop:'20px',
  };

  const contentStyle = {
    marginLeft: '250px',
    padding: '20px',
  };

  return (
    <div>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h1>Fitness Dashboard</h1>
        <p>Welcome, {username}!</p>
        <br />
        <div>
        <Link to="/dash2" style={linkStyle}>
          Fitness metrics
        </Link></div>
        <br />
        <div><Link to="/login" style={linkStyle}>
          Log Out
        </Link></div>
      </div>
      <ProfilePage/>
    </div>
  );
}

export default FitnessDashboard;
