import React from 'react';

const Header = ({
  currentRoadmapType,
  onRoadmapChange,
  isDarkMode,
  toggleDarkMode,
  toggleSidebar
}) => {
  const roadmapTypes = ['devops', 'frontend', 'backend', 'design', 'genai', 'systemdesign', 'networks', 'os', 'dbms'];
  
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-green-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-chart-line text-white text-sm"></i>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tracker</h1>
          </div>
        </div>
        
        {/* Center Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center max-w-4xl mx-8">
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1 space-x-1">
            {roadmapTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  type === currentRoadmapType
                    ? 'bg-white dark:bg-gray-700 text-primary shadow-sm ring-1 ring-primary/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
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
        </nav>
        
        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Mobile roadmap selector */}
          <div className="lg:hidden">
            <select
              value={currentRoadmapType}
              onChange={(e) => onRoadmapChange(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
            >
              {roadmapTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'systemdesign' ? 'System Design' :
                    type === 'networks' ? 'CN' :
                      type === 'os' ? 'OS' :
                        type === 'dbms' ? 'DBMS' :
                          type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
