import './tailwind.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SidebarToggle from './components/SidebarToggle';
import CategoryDrawer from './components/CategoryDrawer';
import RoadmapProvider from './contexts/RoadmapContext';
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
  const currentCategoryData = getCurrentCategory();  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        currentRoadmapType={currentRoadmapType}
        onRoadmapChange={handleRoadmapChange}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className={`hidden lg:block w-80 h-[calc(100vh-73px)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300`}>
          <Sidebar 
            categories={categories}
            currentCategory={currentCategory}
            onCategoryChange={handleCategoryChange}
            className=""
          />
        </div>
        
        {/* Mobile Sidebar Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 ${showSidebar ? 'block' : 'hidden'}`}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowSidebar(false)}></div>
          <div className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl">
            <Sidebar 
              categories={categories}
              currentCategory={currentCategory}
              onCategoryChange={handleCategoryChange}
              className={showSidebar ? 'show' : ''}
            />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 min-h-[calc(100vh-73px)] overflow-y-auto">
          <MainContent 
            stats={stats}
            currentCategory={currentCategory}
            categoryData={currentCategoryData}
            onTopicUpdate={handleTopicUpdate}
            overallProgress={overallProgress}
            currentRoadmapType={currentRoadmapType}
            categories={categories}
          />
        </div>
      </div>
      
      {/* Mobile Floating Toggle */}
      <div className="lg:hidden">
        <SidebarToggle toggleDrawer={toggleDrawer} />
      </div>
      
      <CategoryDrawer
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
      />
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