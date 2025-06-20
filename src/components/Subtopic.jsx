import React, { useState } from 'react';

const Subtopic = ({ subtopic, onStatusChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Add null check for subtopic
  if (!subtopic) {
    return null;
  }
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const newStatus = isChecked ? 'completed' : 'not-started';
    
    if (onStatusChange) {
      onStatusChange(subtopic.id, newStatus);
    }
  };
  const getResourceLinks = () => {
    if (!subtopic.resources || subtopic.resources.length === 0) {
      return null;
    }

    return (
      <div className="subtopic-resources">
        <div className="resources-header">
          <i className="fas fa-external-link-alt"></i>
          <span>Resources ({subtopic.resources.length})</span>
        </div>
        <div className="resources-grid">
          {subtopic.resources.map((resource, index) => (
            <a 
              key={index}
              href={resource} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
              title={`Resource ${index + 1}`}
            >
              <i className="fas fa-link"></i>
              <span>#{index + 1}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };

  const getStatusIcon = () => {
    switch(subtopic.status) {
      case 'completed':
        return { icon: 'fa-check-circle', text: 'Completed', color: 'success' };
      case 'in-progress':
        return { icon: 'fa-clock', text: 'In Progress', color: 'warning' };
      default:
        return { icon: 'fa-circle', text: 'Not Started', color: 'neutral' };
    }
  };

  const statusInfo = getStatusIcon();

  return (
    <div 
      className={`subtopic-item ${subtopic.status} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >      <div className="subtopic-content">
        <div className="subtopic-main">          <div className="checkbox-wrapper">
            <input 
              type="checkbox" 
              className="subtopic-checkbox"
              checked={subtopic?.status === 'completed'}
              onChange={handleCheckboxChange}
              id={`checkbox-${subtopic.id}`}
            />
            <div className="checkbox-ripple"></div>
          </div>
          
          <div className="subtopic-info">
            <label htmlFor={`checkbox-${subtopic.id}`} className="subtopic-title">
              {subtopic.title}
            </label>
            {subtopic.description && (
              <p className="subtopic-description">{subtopic.description}</p>
            )}
            {getResourceLinks()}
          </div>

          <div className="subtopic-status-indicator">
            <div className={`status-dot ${statusInfo.color}`}>
              <i className={`fas ${statusInfo.icon}`}></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="subtopic-progress-bar">
        <div className={`progress-fill ${subtopic.status === 'completed' ? 'completed' : ''}`}></div>
      </div>
    </div>
  );
};

export default Subtopic;
