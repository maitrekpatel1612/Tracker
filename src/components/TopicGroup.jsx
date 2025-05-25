import React from 'react';
import Topic from './Topic';

const TopicGroup = ({ category, onTopicUpdate }) => {
  return (
    <div className="topic-group">
      <h3 className="topic-group-header">{category.name}</h3>
      <div className="topic-list">
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
