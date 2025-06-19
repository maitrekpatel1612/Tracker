import React from 'react';
import Topic from './Topic';

const TopicGroup = ({ category, onTopicUpdate }) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-green-500 rounded-full"></div>
      </div>
      <div className="space-y-4">
        {category.topics.map(topic => (
          <Topic 
            key={topic.id} 
            topic={topic} 
            onTopicUpdate={(updatedTopic) => onTopicUpdate(topic.id, updatedTopic)} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopicGroup;
