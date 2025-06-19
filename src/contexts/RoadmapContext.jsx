import React, { createContext, useState, useEffect, useCallback } from 'react';
import { roadmapData as devopsRoadmapData } from '../data/devopsRoadmap';
import { frontendRoadmapData } from '../data/frontendRoadmap';
import { backendRoadmapData } from '../data/backendRoadmap';
import { designRoadmapData } from '../data/designRoadmap';
import { genAIRoadmapData } from '../data/genaiRoadmap';
import { systemDesignRoadmapData } from '../data/systemdesignRoadmap';
import { computerNetworkRoadmapData } from '../data/computerNetworkRoadmap';
import { operatingSystemRoadmapData } from '../data/operatingSystemRoadmap';
import { dbmsRoadmapData } from '../data/dbmsRoadmap';

// Create context
const RoadmapContext = createContext();

// Context provider component
const RoadmapProvider = ({ children }) => {
  const [currentRoadmapType, setCurrentRoadmapType] = useState('devops');
  const [currentCategory, setCurrentCategory] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [roadmapData, setRoadmapData] = useState({});
  const [stats, setStats] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0,
    totalHours: 0
  });
  const [overallProgress, setOverallProgress] = useState(0);  // Get current roadmap based on selected type
  const getCurrentRoadmap = useCallback(() => {
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
      case 'systemdesign':
        return systemDesignRoadmapData;
      case 'networks':
        return computerNetworkRoadmapData;
      case 'os':
        return operatingSystemRoadmapData;
      case 'dbms':
        return dbmsRoadmapData;
      default:
        return devopsRoadmapData;
    }
  }, [currentRoadmapType]);
  // Load data from local storage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedRoadmapType = localStorage.getItem('currentRoadmapType');
    
    // Validate saved roadmap type
    const validRoadmapTypes = ['devops', 'frontend', 'backend', 'design', 'genai', 'systemdesign', 'networks', 'os', 'dbms'];
    
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
    
    if (savedRoadmapType && validRoadmapTypes.includes(savedRoadmapType)) {
      setCurrentRoadmapType(savedRoadmapType);
    } else {
      // If invalid roadmap type in localStorage, reset to default      setCurrentRoadmapType('devops');
      localStorage.setItem('currentRoadmapType', 'devops');
    }
  }, []);  // Update roadmap data when roadmap type changes
  useEffect(() => {
    const currentRoadmap = getCurrentRoadmap();
    
    // Debug specifically for DevOps
    if (currentRoadmapType === 'devops') {
      console.log('DevOps Debug - currentRoadmap:', currentRoadmap);
      console.log('DevOps Debug - currentRoadmap keys:', Object.keys(currentRoadmap || {}));
      
      // Force fresh data for DevOps to fix the issue
      setRoadmapData(currentRoadmap);
      if (currentRoadmap && Object.keys(currentRoadmap).length > 0) {
        const firstCategory = Object.keys(currentRoadmap)[0];
        console.log('DevOps Debug - setting category to:', firstCategory);
        setCurrentCategory(firstCategory);
      }
      localStorage.setItem('currentRoadmapType', currentRoadmapType);
      return;
    }
    
    // Try to load saved data from localStorage for this specific roadmap type
    const savedRoadmapDataKey = `roadmapData_${currentRoadmapType}`;
    const savedRoadmapData = localStorage.getItem(savedRoadmapDataKey);
    let loadedData = currentRoadmap;
    
    if (savedRoadmapData) {
      try {
        const parsedData = JSON.parse(savedRoadmapData);
        // Only use saved data if it has the same structure as current roadmap
        if (parsedData && typeof parsedData === 'object') {
          loadedData = parsedData;
        }
      } catch (err) {
        console.warn('Failed to parse saved roadmap data, using fresh data', err);
      }
    }
    
    setRoadmapData(loadedData);
    
    // Set first category as current when switching roadmaps
    if (loadedData && Object.keys(loadedData).length > 0) {
      setCurrentCategory(Object.keys(loadedData)[0]);
    }
    
    // Save current roadmap type to local storage
    localStorage.setItem('currentRoadmapType', currentRoadmapType);
  }, [currentRoadmapType, getCurrentRoadmap]);// Update statistics when roadmap data changes
  useEffect(() => {
    updateStats();
    saveToLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roadmapData]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    localStorage.setItem('darkMode', newDarkMode);
  };
  // Save roadmap data to local storage
  const saveToLocalStorage = () => {
    const savedRoadmapDataKey = `roadmapData_${currentRoadmapType}`;
    localStorage.setItem(savedRoadmapDataKey, JSON.stringify(roadmapData));
  };// Update topic status
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
  };  // Get current category data
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
    roadmapData,
    stats,
    overallProgress,
    updateTopic,
    getCategories,
    getCurrentCategory  };

  return (
    <RoadmapContext.Provider value={contextValue}>
      {children}
    </RoadmapContext.Provider>
  );
};

// Export both context and provider
export { RoadmapContext };
export default RoadmapProvider;
