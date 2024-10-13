// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div >
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
    </div>
  );
};

export default Dashboard;