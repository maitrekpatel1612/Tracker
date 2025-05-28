import React from 'react';
import StatsCards from './StatsCards';
import ProgressChart from './ProgressChart';
import TopicGroup from './TopicGroup';

const MainContent = ({ 
  stats, 
  isDarkMode,
  categoryData,
  onTopicUpdate,
  overallProgress
}) => {
  if (!categoryData) {
    return (
      <main className="content">
        <div className="empty-state">
          <p>No category selected or data available.</p>
        </div>
      </main>
    );
  }
    return (
    <main className="content">
      <StatsCards stats={stats} overallProgress={overallProgress} />
      <ProgressChart isDarkMode={isDarkMode} />
      
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
