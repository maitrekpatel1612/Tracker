import React from 'react';
import SidebarToggle from './SidebarToggle';

const Header = ({
  currentRoadmapType,
  onRoadmapChange,
  isDarkMode,
  toggleDarkMode,
  toggleSidebar
}) => {
  const roadmapTypes = ['devops', 'frontend', 'backend', 'design', 'genai', 'systemdesign', 'networks', 'os', 'dbms'];

  return (    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <h1>Tracker</h1>
      </div>
      <div className="mobile-sidebar-toggle">
        <SidebarToggle toggleSidebar={toggleSidebar} />
      </div>
      <nav className="roadmap-nav">
        <div className="roadmap-tabs-container">
          <div className="roadmap-tabs">            {roadmapTypes.map((type) => (
            <button
              key={type}
              className={`roadmap-tab ${type === currentRoadmapType ? 'active' : ''}`}
              data-roadmap={type}
              onClick={() => onRoadmapChange(type)}
            >
              {type === 'systemdesign' ? 'System Design' :
                type === 'networks' ? 'CN' :
                  type === 'os' ? 'OS' :
                    type === 'dbms' ? 'DBMS' :
                      type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <div className="theme-toggle-container">
          <label className="theme-switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              aria-label="Toggle dark mode"
            />
            <span className="theme-slider"></span>
            <i className="fas fa-sun theme-icon light"></i>
            <i className="fas fa-moon theme-icon dark"></i>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
