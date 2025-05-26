import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SidebarToggle from './components/SidebarToggle';
import { RoadmapProvider } from './contexts/RoadmapContextProvider';
import { useRoadmap } from './hooks/useRoadmap';

// Import CSS from the original file and responsive CSS
import './index.css';
import './responsive.css';
import './theme-toggle-enhanced.css';

function AppContent() {
  const { 
    currentRoadmapType, 
    setCurrentRoadmapType,
    currentCategory,
    setCurrentCategory,
    isDarkMode,
    toggleDarkMode,
    stats,
    overallProgress,
    updateTopic,
    getCategories,
    getCurrentCategory
  } = useRoadmap();
  
  const [showSidebar, setShowSidebar] = useState(false);

  // Close sidebar when changing route on mobile
  useEffect(() => {
    setShowSidebar(false);
  }, [currentCategory, currentRoadmapType]);
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const sidebarToggle = document.querySelector('.sidebar-toggle');
      
      if (showSidebar && 
          sidebar && 
          !sidebar.contains(event.target) && 
          !sidebarToggle.contains(event.target)) {
        setShowSidebar(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSidebar]);

  const handleRoadmapChange = (roadmapType) => {
    setCurrentRoadmapType(roadmapType);
  };

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  const handleTopicUpdate = (topicId, updatedTopic) => {
    updateTopic(currentCategory, topicId, updatedTopic);
  };
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  const categories = getCategories();
  const currentCategoryData = getCurrentCategory();

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header 
        currentRoadmapType={currentRoadmapType}
        onRoadmapChange={handleRoadmapChange}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
      />

      <div className="dashboard">
        <div className={`mobile-overlay ${showSidebar ? 'show' : ''}`} onClick={() => setShowSidebar(false)}></div>
        
        <Sidebar 
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
          overallProgress={overallProgress}
          className={showSidebar ? 'show' : ''}
        />

        <MainContent 
          stats={stats}
          isDarkMode={isDarkMode}
          currentCategory={currentCategory}
          categoryData={currentCategoryData}
          onTopicUpdate={handleTopicUpdate}
        />
      </div>
      
      <SidebarToggle toggleSidebar={toggleSidebar} />
    </div>
  );
}

function App() {
  return (
    <RoadmapProvider>
      <AppContent />
    </RoadmapProvider>
  );
}

export default App;