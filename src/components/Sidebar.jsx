import React from 'react';

const Sidebar = ({ 
  categories, 
  currentCategory, 
  onCategoryChange, 
  className = ''
}) => {  return (
    <div className={`sidebar ${className}`}>
      <div className="categories">
        <h2><i className="fas fa-folder-tree"></i> Categories</h2>
        <ul className="category-list">
          {categories.map(category => {            // Get category-specific icon
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
              <li
                key={category.id}
                className={currentCategory === category.id ? 'active' : ''}
                data-category={category.id}
                onClick={() => onCategoryChange(category.id)}
              >
                <i className={`fas ${icon}`}></i> {category.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
