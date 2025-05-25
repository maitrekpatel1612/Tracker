import React from 'react';

const Sidebar = ({ 
  categories, 
  currentCategory, 
  onCategoryChange, 
  overallProgress 
}) => {
  return (
    <div className="sidebar">      <div className="progress-overview">
        <h2><i className="fas fa-chart-pie"></i> Overall Progress</h2>
        <div className="progress-circle">
          <span className="progress-percentage">{overallProgress}%</span>
          <svg width="120" height="120" className="progress-ring">
            <circle className="progress-ring-circle-bg" cx="60" cy="60" r="54" />
            <circle 
              className="progress-ring-circle" 
              cx="60" 
              cy="60" 
              r="54" 
              style={{
                strokeDasharray: `${2 * Math.PI * 54} ${2 * Math.PI * 54}`,
                strokeDashoffset: `${2 * Math.PI * 54 - (overallProgress / 100) * 2 * Math.PI * 54}`
              }}
            />
          </svg>
        </div>
      </div>
      <div className="categories">
        <h2><i className="fas fa-folder-tree"></i> Categories</h2>
        <ul className="category-list">
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
