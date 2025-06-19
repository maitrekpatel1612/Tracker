import React from 'react';
import StatsCards from './StatsCards';
import TopicGroup from './TopicGroup';

const MainContent = ({ 
  stats, 
  categoryData,
  onTopicUpdate,
  overallProgress,
  currentRoadmapType,
  categories
}) => {
  if (!categoryData) {
    return (
      <main className="content">
        <div className="empty-state">
          <p>No category selected or data available.</p>
          <p>Current roadmap: {currentRoadmapType}</p>
          <p>Available categories: {categories ? categories.length : 0}</p>
          {categories && categories.length > 0 && (
            <ul>
              {categories.map(cat => (
                <li key={cat.id}>{cat.id}: {cat.name}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
    );
  }  return (
    <main className="content">
      <StatsCards stats={stats} overallProgress={overallProgress} />
      
      <div className="roadmap-container">
        <div className="roadmap-content">
          <TopicGroup 
            category={categoryData} 
            onTopicUpdate={onTopicUpdate} 
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
