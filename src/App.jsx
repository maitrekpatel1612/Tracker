import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { RoadmapProvider } from './contexts/RoadmapContextProvider';
import { useRoadmap } from './hooks/useRoadmap';
import generatePDF from './utils/pdfExport';

// Import CSS from the original file
import './index.css';

function AppContent() {
  const { 
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
  } = useRoadmap();

  const handleRoadmapChange = (roadmapType) => {
    setCurrentRoadmapType(roadmapType);
  };

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  const handleTopicUpdate = (topicId, updatedTopic) => {
    updateTopic(currentCategory, topicId, updatedTopic);
  };

  const exportProgress = () => {
    generatePDF(currentRoadmapType, roadmapData);
  };
  
  const categories = getCategories();
  const currentCategoryData = getCurrentCategory();

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''} ${isCarbonMode ? 'carbon-mode' : ''}`}>
      <Header 
        currentRoadmapType={currentRoadmapType}
        onRoadmapChange={handleRoadmapChange}
        isDarkMode={isDarkMode}
        isCarbonMode={isCarbonMode}
        toggleDarkMode={toggleDarkMode}
        toggleCarbonMode={toggleCarbonMode}
        exportProgress={exportProgress}
      />

      <div className="dashboard">
        <Sidebar 
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
          overallProgress={overallProgress}
        />

        <MainContent 
          stats={stats}
          isDarkMode={isDarkMode}
          currentCategory={currentCategory}
          categoryData={currentCategoryData}
          onTopicUpdate={handleTopicUpdate}
        />
      </div>
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