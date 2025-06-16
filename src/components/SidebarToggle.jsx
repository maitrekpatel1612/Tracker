import React from 'react';

const SidebarToggle = ({ toggleDrawer }) => {
  return (    <button 
      className="drawer-toggle" 
      onClick={toggleDrawer}
      aria-label="Toggle categories"
    >
      <i className="fas fa-map"></i>
    </button>
  );
};

export default SidebarToggle;
