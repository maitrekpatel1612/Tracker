import React from 'react';

const Sidebar = ({ 
  categories, 
  currentCategory, 
  onCategoryChange, 
  className = ''
}) => {
  return (
    <div className={`h-full overflow-y-auto ${className}`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <i className="fas fa-folder-tree mr-2 text-primary"></i>
          Categories
        </h2>
      </div>
      <div className="p-4 space-y-2">
        {categories.map(category => {
          // Get category-specific icon
          let icon;
          if (category.id.includes('linux')) icon = 'fa-linux';
          else if (category.id.includes('network')) icon = 'fa-network-wired';
          else if (category.id.includes('version-control')) icon = 'fa-code-branch';
          else if (category.id.includes('cloud')) icon = 'fa-cloud';
          else if (category.id.includes('container')) icon = 'fa-cubes';
          else if (category.id.includes('ci-cd')) icon = 'fa-sync-alt';
          else if (category.id.includes('infrastructure')) icon = 'fa-server';
          else if (category.id.includes('monitor')) icon = 'fa-chart-line';
          else if (category.id.includes('security')) icon = 'fa-shield-alt';
          else if (category.id.includes('frontend')) icon = 'fa-desktop';
          else if (category.id.includes('backend')) icon = 'fa-database';
          else if (category.id.includes('design')) icon = 'fa-palette';
          // New roadmap icons
          else if (category.id.includes('fundamentals')) icon = 'fa-book';
          else if (category.id.includes('protocols')) icon = 'fa-exchange-alt';
          else if (category.id.includes('routing')) icon = 'fa-route';
          else if (category.id.includes('process')) icon = 'fa-cogs';
          else if (category.id.includes('memory')) icon = 'fa-memory';
          else if (category.id.includes('storage')) icon = 'fa-hdd';
          else if (category.id.includes('protection')) icon = 'fa-lock';
          else if (category.id.includes('distributed')) icon = 'fa-sitemap';
          else if (category.id.includes('database')) icon = 'fa-database';
          else if (category.id.includes('relational')) icon = 'fa-table';
          else if (category.id.includes('transactions')) icon = 'fa-exchange-alt';
          else if (category.id.includes('indexing') || category.id.includes('optimization')) icon = 'fa-tachometer-alt';
          else if (category.id.includes('nosql') || category.id.includes('modern')) icon = 'fa-cubes';
          else if (category.id.includes('performance')) icon = 'fa-chart-line';
          else icon = 'fa-folder'; // default icon
            return (
            <button
              key={category.id}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                currentCategory === category.id 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                currentCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                <i className={`fas ${icon} text-sm ${
                  currentCategory === category.id 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}></i>
              </div>
              <span className="flex-1 font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
