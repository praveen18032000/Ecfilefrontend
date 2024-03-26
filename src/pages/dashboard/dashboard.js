import React from 'react';
import './dashboard.css'; // Import your CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Dashboard</h2>
      <div className="dashboard-content">
        <div className="widget">
          <h3>content 1</h3>
          <p>This is the content of Content 1</p>
        </div>
        <div className="widget">
          <h3>Content 2</h3>
          <p>This is the content of Content 2</p>
        </div>
        <div className="widget">
          <h3>Content 3</h3>
          <p>This is the content of Content 3</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
