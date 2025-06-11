import React from 'react';

const Subtopic = ({ subtopic, onStatusChange }) => {
  // Add null check for subtopic
  if (!subtopic) {
    return null;
  }

  const getResourceLinks = () => {
    if (!subtopic.resources || subtopic.resources.length === 0) {
      return null;
    }

    return (
      <div className="subtopic-resources">
        <ul>
          {subtopic.resources.map((resource, index) => (
            <li key={index}>
              <a href={resource} target="_blank" rel="noopener noreferrer">
                Resource {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="subtopic-item">
      <div className="subtopic-header">
        <div className="subtopic-title-wrapper">
          <input 
            type="checkbox" 
            className="subtopic-checkbox"
            checked={subtopic?.status === 'completed'}
            onChange={(e) => {
              if (onStatusChange) {
                onStatusChange(
                  subtopic.id, 
                  e.target.checked ? 'completed' : 'not-started'
                );
              }
            }}
            id={`checkbox-${subtopic.id}`}
          />
          <span className="subtopic-title">
            <label htmlFor={`checkbox-${subtopic.id}`}>
              {subtopic.title}
            </label>
          </span>
        </div>
        <div className="subtopic-status">
          <span className={`status-pill ${subtopic.status}`}>
            {subtopic.status === 'completed' ? (
              <><i className="fas fa-check-circle"></i> Completed</>
            ) : (
              <><i className="fas fa-clock"></i> Not Started</>
            )}
          </span>
        </div>
      </div>
      {getResourceLinks()}
    </div>
  );
};

export default Subtopic;
