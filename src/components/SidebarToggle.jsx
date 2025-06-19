import React from 'react';

const SidebarToggle = ({ toggleDrawer }) => {
  return (
    <button 
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-green-600 hover:from-primary-dark hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-30 transform hover:scale-110 active:scale-95" 
      onClick={toggleDrawer}
      aria-label="Toggle categories"
    >
      <i className="fas fa-map text-xl"></i>
    </button>
  );
};

export default SidebarToggle;
