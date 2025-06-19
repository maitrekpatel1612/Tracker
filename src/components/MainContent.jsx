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
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-folder-open text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Category Selected</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Choose a category from the sidebar to start learning</p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              <p>Current roadmap: <span className="font-medium">{currentRoadmapType}</span></p>
              <p>Available categories: <span className="font-medium">{categories ? categories.length : 0}</span></p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="p-6">
      <div className="max-w-6xl mx-auto">
        <StatsCards stats={stats} overallProgress={overallProgress} />
        
        <div className="mt-8">
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
