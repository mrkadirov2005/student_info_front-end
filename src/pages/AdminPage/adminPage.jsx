import React, { useState } from 'react';
import './AdminPanelLayout.css'; // Import the CSS
import MainContent from './components/main_content/mainContent';
import Menu from './components/menu/Menu';

const AdminPanelLayout = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="admin-panel-layout">
      <Menu handleMenuClick={handleMenuClick} />
      <MainContent activePage={activePage} />
    </div>
  );
};

export default AdminPanelLayout;
