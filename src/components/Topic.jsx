import React, { useState, useEffect } from 'react';
import Subtopic from './Subtopic';

const Topic = ({ topic, onTopicUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
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
    
    onTopicUpdate?.({
      ...topic,
      subtopics: updatedSubtopics
    });
  };

  // Get status icon and text
  const getStatusDisplay = () => {
    const status = calculateStatus();
    switch(status) {
      case 'completed':
        return { 
          icon: 'fa-check-circle', 
          text: 'Completed', 
          color: 'var(--success)',
          bgColor: 'rgba(40, 167, 69, 0.1)' 
        };
      case 'in-progress':
        return { 
          icon: 'fa-clock', 
          text: 'In Progress', 
          color: 'var(--warning)',
          bgColor: 'rgba(255, 193, 7, 0.1)' 
        };
      case 'not-started':
      default:
        return { 
          icon: 'fa-circle', 
          text: 'Not Started', 
          color: 'var(--text-muted)',
          bgColor: 'rgba(160, 160, 160, 0.1)' 
        };
    }
  };

  if (!topic) {
    return null;
  }

  const statusDisplay = getStatusDisplay();
  const completedCount = topic.subtopics ? topic.subtopics.filter(sub => sub.status === 'completed').length : 0;
  const totalSubtopics = topic.subtopics ? topic.subtopics.length : 0;
  const progressPercentage = totalSubtopics > 0 ? (completedCount / totalSubtopics) * 100 : 0;
  
  return (
    <div 
      className={`topic-item ${expanded ? 'expanded' : ''} ${topic.status} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="topic-header" onClick={toggleExpanded}>
        <div className="topic-main-content">
          <div className="topic-icon">
            <i className="fas fa-book-open"></i>
          </div>
          
          <div className="topic-title-wrapper">
            <div className="topic-title-row">
              <h4 className="topic-title">{topic.title}</h4>
              <div className="topic-badges">
                <span className="topic-hours-badge">
                  <i className="fas fa-clock"></i>
                  {topic.estimatedHours}h
                </span>
                <span className="topic-progress-badge">
                  <i className="fas fa-list-check"></i>
                  {completedCount}/{totalSubtopics}
                </span>
              </div>
            </div>
            <p className="topic-description">{topic.description}</p>
            
            <div className="topic-progress-bar">
              <div className="progress-track">
                <div 
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="progress-text">{Math.round(progressPercentage)}%</span>
            </div>
          </div>
        </div>

        <div className="topic-controls">
          <div className="topic-status-indicator">
            <div 
              className="status-badge"
              style={{ 
                backgroundColor: statusDisplay.bgColor,
                color: statusDisplay.color 
              }}
            >
              <i className={`fas ${statusDisplay.icon}`}></i>
              <span>{statusDisplay.text}</span>
            </div>
          </div>
          
          <button className={`expand-btn ${expanded ? 'expanded' : ''}`}>
            <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
          </button>
        </div>
      </div>

      <div className={`topic-details ${expanded ? 'show' : ''}`}>
        <div className="subtopics-container">
          <div className="subtopics-header">
            <h5>
              <i className="fas fa-list-ul"></i>
              Subtopics ({completedCount}/{totalSubtopics} completed)
            </h5>
          </div>
          
          <div className="subtopics-list">
            {topic.subtopics && topic.subtopics.map((subtopic) => (
              <Subtopic 
                key={subtopic.id}
                subtopic={subtopic}
                onStatusChange={handleSubtopicStatusChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};export default Topic;
