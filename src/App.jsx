import './styles.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SidebarToggle from './components/SidebarToggle';
import CategoryDrawer from './components/CategoryDrawer';
import { RoadmapProvider } from './contexts/RoadmapContext';
import { useRoadmap } from './hooks/useRoadmap';

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
  const [showDrawer, setShowDrawer] = useState(false);

  // Close sidebar and drawer when changing route on mobile
  useEffect(() => {
    setShowSidebar(false);
    setShowDrawer(false);
  }, [currentCategory, currentRoadmapType]);
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const sidebarToggle = document.querySelector('.sidebar-toggle');
      
      if (showSidebar && 
          sidebar && 
          !sidebar.contains(event.target) && 
          !sidebarToggle?.contains(event.target)) {
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
  
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
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
          className={showSidebar ? 'show' : ''}
        />        <MainContent 
          stats={stats}
          isDarkMode={isDarkMode}
          currentCategory={currentCategory}
          categoryData={currentCategoryData}
          onTopicUpdate={handleTopicUpdate}
          overallProgress={overallProgress}
          currentRoadmapType={currentRoadmapType}
          categories={categories}
        />
        
        {/* New Category Drawer Component */}
        <CategoryDrawer
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
          isOpen={showDrawer}
          onClose={() => setShowDrawer(false)}
        />
      </div>
      
      <SidebarToggle toggleDrawer={toggleDrawer} />
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