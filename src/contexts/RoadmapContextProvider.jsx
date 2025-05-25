// RoadmapContext Provider
import React, { useState, useEffect } from 'react';
import { RoadmapContext } from './RoadmapContext';
import { roadmapData as devopsRoadmapData } from '../data/devopsRoadmap';
import { frontendRoadmapData } from '../data/frontendRoadmap';
import { backendRoadmapData } from '../data/backendRoadmap';
import { designRoadmapData } from '../data/designRoadmap';
import { genAIRoadmapData } from '../data/genaiRoadmap';

// Context provider component
export const RoadmapProvider = ({ children }) => {
  const [currentRoadmapType, setCurrentRoadmapType] = useState('devops');
  const [currentCategory, setCurrentCategory] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCarbonMode, setIsCarbonMode] = useState(false);
  const [roadmapData, setRoadmapData] = useState({});
  const [stats, setStats] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0,
    totalHours: 0
  });
  const [overallProgress, setOverallProgress] = useState(0);

  // Get current roadmap based on selected type
  const getCurrentRoadmap = () => {
    switch (currentRoadmapType) {
      case 'devops':
        return devopsRoadmapData;
      case 'frontend':
        return frontendRoadmapData;
      case 'backend':
        return backendRoadmapData;
      case 'design':
        return designRoadmapData;
      case 'genai':
        return genAIRoadmapData;
      default:
        return devopsRoadmapData;
    }
  };
  // Load data from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('roadmapData');
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedCarbonMode = localStorage.getItem('carbonMode');
    const savedRoadmapType = localStorage.getItem('currentRoadmapType');
    
    if (savedData) {
      setRoadmapData(JSON.parse(savedData));
    } else {
      setRoadmapData(getCurrentRoadmap());
    }
    
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else if (savedCarbonMode === 'true') {
      setIsCarbonMode(true);
      document.body.classList.add('carbon-mode');
    }
    
    if (savedRoadmapType) {
      setCurrentRoadmapType(savedRoadmapType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update roadmap data when roadmap type changes
  useEffect(() => {
    const currentRoadmap = getCurrentRoadmap();
    setRoadmapData(currentRoadmap);
    
    // Set first category as current when switching roadmaps
    if (currentRoadmap && Object.keys(currentRoadmap).length > 0) {
      setCurrentCategory(Object.keys(currentRoadmap)[0]);
    }
    
    // Save current roadmap type to local storage
    localStorage.setItem('currentRoadmapType', currentRoadmapType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoadmapType]);

  // Update statistics when roadmap data changes
  useEffect(() => {
    updateStats();
    saveToLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roadmapData]);
  // Toggle theme modes
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      setIsCarbonMode(false);
      document.body.classList.remove('carbon-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    localStorage.setItem('darkMode', newDarkMode);
  };
  
  // Toggle carbon mode
  const toggleCarbonMode = () => {
    const newCarbonMode = !isCarbonMode;
    setIsCarbonMode(newCarbonMode);
    
    if (newCarbonMode) {
      document.body.classList.add('carbon-mode');
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.remove('carbon-mode');
    }
    
    localStorage.setItem('carbonMode', newCarbonMode);
  };

  // Save roadmap data to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem('roadmapData', JSON.stringify(roadmapData));
  };

  // Update topic status
  const updateTopic = (categoryId, topicId, updatedTopic) => {
    const updatedRoadmap = { ...roadmapData };
    
    if (updatedRoadmap[categoryId]) {
      const categoryTopics = updatedRoadmap[categoryId].topics;
      const topicIndex = categoryTopics.findIndex(topic => topic.id === topicId);
      
      if (topicIndex !== -1) {
        categoryTopics[topicIndex] = updatedTopic;
        setRoadmapData(updatedRoadmap);
      }
    }
  };

  // Calculate statistics
  const updateStats = () => {
    let completedCount = 0;
    let inProgressCount = 0;
    let notStartedCount = 0;
    let totalHours = 0;
    let totalTopics = 0;
    
    Object.keys(roadmapData).forEach(categoryId => {
      const category = roadmapData[categoryId];
      
      category.topics.forEach(topic => {
        totalTopics++;
        totalHours += topic.estimatedHours || 0;
        
        if (topic.status === 'completed') {
          completedCount++;
        } else if (topic.status === 'in-progress') {
          inProgressCount++;
        } else {
          notStartedCount++;
        }
      });
    });
    
    setStats({
      completed: completedCount,
      inProgress: inProgressCount,
      notStarted: notStartedCount,
      totalHours: totalHours
    });
    
    const progress = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    setOverallProgress(progress);
  };

  // Get categories as an array with id property
  const getCategories = () => {
    return Object.keys(roadmapData).map(categoryId => ({
      id: categoryId,
      name: roadmapData[categoryId].name
    }));
  };

  // Get current category data
  const getCurrentCategory = () => {
    return roadmapData[currentCategory] || null;
  };
  // Define context value
  const contextValue = {
    currentRoadmapType,
    setCurrentRoadmapType,
    currentCategory,
    setCurrentCategory,
    isDarkMode,
    toggleDarkMode,
    isCarbonMode,
    toggleCarbonMode,
    roadmapData,
    stats,
    overallProgress,
    updateTopic,
    getCategories,
    getCurrentCategory
  };

  return (
    <RoadmapContext.Provider value={contextValue}>
      {children}
    </RoadmapContext.Provider>
  );
};
