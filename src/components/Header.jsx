import React from 'react';
import { MdTerminal } from 'react-icons/md';

const Header = ({ 
  currentRoadmapType, 
  onRoadmapChange, 
  isDarkMode,
  isCarbonMode, 
  toggleDarkMode,
  toggleCarbonMode, 
  exportProgress 
}) => {
  const roadmapTypes = ['devops', 'frontend', 'backend', 'design', 'genai'];

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon"><MdTerminal /></span>
        <h1>Tracker</h1>
      </div>
      
      <nav className="roadmap-nav">
        <div className="roadmap-tabs">
          {roadmapTypes.map((type) => (
            <button 
              key={type}
              className={`roadmap-tab ${type === currentRoadmapType ? 'active' : ''}`} 
              data-roadmap={type}
              onClick={() => onRoadmapChange(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </nav>
        <div className="header-actions">        <div className="theme-toggle-group">
          <button 
            className={`theme-toggle ${isDarkMode ? 'active' : ''}`}
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            title="Toggle Dark Mode"
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button 
            className={`theme-toggle-carbon ${isCarbonMode ? 'active' : ''}`}
            aria-label="Toggle carbon mode"
            onClick={toggleCarbonMode}
            title="Toggle Carbon Green Theme"
          >
            <MdTerminal />
          </button>
        </div>
        <button 
          className="btn btn-primary export-btn"
          onClick={exportProgress}
        >
          <i className="fas fa-file-pdf"></i> Export to PDF
        </button>
      </div>
    </header>
  );
};

export default Header;
