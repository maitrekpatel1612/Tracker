import React, { useState, useRef, useEffect } from 'react';

const CategoryDrawer = ({ 
  categories, 
  currentCategory, 
  onCategoryChange,
  isOpen,
  onClose
}) => {
  const drawerRef = useRef(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Handle touch events for dragging
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };
  
  const handleTouchMove = (e) => {
    if (isDragging) {
      setCurrentY(e.touches[0].clientY);
      
      const drawer = drawerRef.current;
      const deltaY = currentY - startY;
      
      // Only allow dragging down (positive deltaY)
      if (deltaY > 0) {
        drawer.style.transform = `translateY(${deltaY}px)`;
      }
    }
  };
  
  const handleTouchEnd = () => {
    if (isDragging) {
      const drawer = drawerRef.current;
      const deltaY = currentY - startY;
      
      // If dragged more than 100px down, close the drawer
      if (deltaY > 100) {
        onClose();
      } else {
        // Otherwise snap back
        drawer.style.transform = '';
      }
      
      setIsDragging(false);
    }
  };
  
  // Reset transform when drawer opens/closes
  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.style.transform = '';
    }
  }, [isOpen]);

  // Get category-specific icon
  const getCategoryIcon = (categoryId) => {
    if (categoryId.includes('linux')) return 'fa-linux';
    else if (categoryId.includes('network')) return 'fa-network-wired';
    else if (categoryId.includes('version-control')) return 'fa-code-branch';
    else if (categoryId.includes('cloud')) return 'fa-cloud';
    else if (categoryId.includes('container')) return 'fa-cubes';
    else if (categoryId.includes('ci-cd')) return 'fa-sync-alt';
    else if (categoryId.includes('infrastructure')) return 'fa-server';
    else if (categoryId.includes('monitor')) return 'fa-chart-line';
    else if (categoryId.includes('security')) return 'fa-shield-alt';
    else if (categoryId.includes('frontend')) return 'fa-desktop';
    else if (categoryId.includes('backend')) return 'fa-database';
    else if (categoryId.includes('design')) return 'fa-palette';
    else return 'fa-folder'; // default icon
  };
    return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      
      <div 
        ref={drawerRef}
        className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mt-3 mb-4"></div>
        <div className="px-6 pb-6 max-h-96 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <i className="fas fa-folder-tree mr-2 text-primary"></i> Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
                  currentCategory === category.id 
                    ? 'border-primary bg-primary bg-opacity-10 text-primary'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                data-category={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  onClose();
                }}
              >
                <i className={`fas ${getCategoryIcon(category.id)} text-lg mb-2 block`}></i>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDrawer;
