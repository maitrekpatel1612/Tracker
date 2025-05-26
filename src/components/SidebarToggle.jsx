import React from 'react';

const SidebarToggle = ({ toggleSidebar }) => {
  return (
    <button 
      className="sidebar-toggle" 
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default SidebarToggle;
