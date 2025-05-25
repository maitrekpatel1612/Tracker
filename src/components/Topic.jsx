import React, { useState, useEffect } from 'react';
import Subtopic from './Subtopic';

const Topic = ({ topic, onTopicUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Calculate status based on subtopic completion
  const calculateStatus = () => {
    if (!topic.subtopics || topic.subtopics.length === 0) {
      return 'not-started';
    }
    
    const completedCount = topic.subtopics.filter(sub => sub.status === 'completed').length;
    const totalSubtopics = topic.subtopics.length;
    
    if (completedCount === 0) {
      return 'not-started';
    } else if (completedCount === totalSubtopics) {
      return 'completed';
    } else {
      return 'in-progress';
    }
  };
  
  // Update status whenever subtopics change
  useEffect(() => {
    const newStatus = calculateStatus();
    if (topic.status !== newStatus) {
      onTopicUpdate({
        ...topic,
        status: newStatus,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic.subtopics]);

  const handleSubtopicStatusChange = (subtopicId, newStatus) => {
    const updatedSubtopics = topic.subtopics.map(subtopic => 
      subtopic.id === subtopicId 
        ? { ...subtopic, status: newStatus } 
        : subtopic
    );
    
    onTopicUpdate({
      ...topic,
      subtopics: updatedSubtopics
    });
  };
  // Get status icon and text
  const getStatusDisplay = () => {
    const status = calculateStatus();
    switch(status) {
      case 'completed':
        return { icon: 'fa-check-circle', text: 'Completed', color: 'var(--success)' };
      case 'in-progress':
        return { icon: 'fa-spinner fa-spin', text: 'In Progress', color: 'var(--warning)' };
      case 'not-started':
      default:
        return { icon: 'fa-hourglass-start', text: 'Not Started', color: 'var(--text-muted)' };
    }
  };

  const statusDisplay = getStatusDisplay();
  const completedCount = topic.subtopics ? topic.subtopics.filter(sub => sub.status === 'completed').length : 0;
  const totalSubtopics = topic.subtopics ? topic.subtopics.length : 0;
  
  return (
    <div className={`topic-item ${expanded ? 'expanded' : ''}`}>
      <div className="topic-header" onClick={toggleExpanded}>
        <div className="topic-title-wrapper">
          <h4 className="topic-title"><i className="fas fa-tasks"></i> {topic.title}</h4>
          <p className="topic-description">{topic.description}</p>
        </div>
        <div className="topic-meta">
          <span className="topic-hours">
            <i className="fas fa-clock"></i> {topic.estimatedHours} hours
          </span>
          <span className="topic-progress">
            <i className="fas fa-list-check"></i> {completedCount}/{totalSubtopics}
          </span>
          <div className="topic-status">
            <span className={`status-pill ${topic.status}`}>
              <i className={`fas ${statusDisplay.icon}`}></i> {statusDisplay.text}
            </span>
          </div>
          <button className="expand-btn">
            <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
          </button>
        </div>
      </div>

      {expanded && (
        <div className="topic-details">
          <div className="subtopics-list" style={{ display: 'block' }}>
            <h5><i className="fas fa-list-ul"></i> Subtopics</h5>
            {topic.subtopics && topic.subtopics.map(subtopic => (
              <Subtopic 
                key={subtopic.id}
                subtopic={subtopic}
                onStatusChange={handleSubtopicStatusChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Topic;
