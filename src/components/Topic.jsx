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
  }, [topic.subtopics]);  const handleSubtopicStatusChange = (subtopicId, newStatus) => {
    const updatedSubtopics = topic.subtopics.map(subtopic => 
      subtopic.id === subtopicId 
        ? { ...subtopic, status: newStatus } 
        : subtopic
    );
    
    const updatedTopic = {
      ...topic,
      subtopics: updatedSubtopics
    };
    
    if (onTopicUpdate) {
      onTopicUpdate(updatedTopic);
    }
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
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-4 transition-all duration-300 hover:shadow-lg ${
        expanded ? 'ring-2 ring-primary/20 shadow-lg' : ''
      } ${isHovered ? 'transform scale-[1.02] shadow-md' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >      <div className="p-6 cursor-pointer" onClick={toggleExpanded}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-primary border border-primary/20">
              <i className="fas fa-book-open text-lg"></i>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{topic.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{topic.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 ml-6">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <i className="fas fa-clock mr-1.5"></i>
                {topic.estimatedHours}h
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                <i className="fas fa-list-check mr-1.5"></i>
                {completedCount}/{totalSubtopics}
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div 
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${
                  statusDisplay.text === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : statusDisplay.text === 'In Progress'
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <i className={`fas ${statusDisplay.icon} mr-1.5`}></i>
                <span>{statusDisplay.text}</span>
              </div>
              
              <button className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 ${expanded ? 'rotate-180' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div><div className={`border-t border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden ${expanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                <i className="fas fa-list-ul mr-2 text-primary"></i>
                Subtopics ({completedCount}/{totalSubtopics} completed)
              </h5>
            </div>
            
            <div className="space-y-3">
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
    </div>
  );
};export default Topic;
