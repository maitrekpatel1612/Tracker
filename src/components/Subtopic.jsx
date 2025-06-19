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
    }    return (
      <div className="mt-2">
        <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-1">
          <i className="fas fa-external-link-alt mr-1"></i>
          <span>Resources ({subtopic.resources.length})</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {subtopic.resources.map((resource, index) => (
            <a 
              key={index}
              href={resource} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
              title={`Resource ${index + 1}`}
            >
              <i className="fas fa-link mr-1"></i>
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

  const statusInfo = getStatusIcon();  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 transition-all duration-200 hover:shadow-sm hover:border-gray-300 dark:hover:border-gray-600 ${
        subtopic?.status === 'completed' ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800/50' : ''
      } ${isHovered ? 'transform scale-[1.01]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ><div className="flex items-start space-x-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-start space-x-3 flex-1">
            <div className="relative mt-1">
              <input 
                type="checkbox" 
                className="w-5 h-5 text-primary bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded focus:ring-primary focus:ring-2 transition-all duration-200 cursor-pointer"
                checked={subtopic?.status === 'completed'}
                onChange={handleCheckboxChange}
                id={`checkbox-${subtopic.id}`}
              />
              <div className="absolute inset-0 rounded pointer-events-none transition-all duration-200 hover:bg-primary hover:bg-opacity-10"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <label htmlFor={`checkbox-${subtopic.id}`} className={`block text-sm font-medium cursor-pointer transition-all duration-200 ${
                subtopic?.status === 'completed' 
                  ? 'text-green-700 dark:text-green-400 line-through' 
                  : 'text-gray-900 dark:text-white hover:text-primary'
              }`}>
                {subtopic.title}
              </label>
              {subtopic.description && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{subtopic.description}</p>
              )}
              {getResourceLinks()}
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-3">
            <div className={`w-2 h-2 rounded-full ${
              statusInfo.color === 'success' 
                ? 'bg-green-500'
                : statusInfo.color === 'warning'
                ? 'bg-yellow-500'
                : 'bg-gray-400'
            }`}>
            </div>
          </div>
        </div>
      </div>
        <div className={`mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${
        subtopic.status === 'completed' ? 'bg-green-200 dark:bg-green-800/50' : ''
      }`}>
        <div className={`h-full transition-all duration-500 ${
          subtopic.status === 'completed' ? 'w-full bg-green-500' : 'w-0 bg-primary'
        }`}></div>
      </div>
    </div>
  );
};

export default Subtopic;
