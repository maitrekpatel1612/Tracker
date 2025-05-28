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
        className={`category-drawer-overlay ${isOpen ? 'show' : ''}`} 
        onClick={onClose}
      ></div>
      
      <div 
        ref={drawerRef}
        className={`category-drawer ${isOpen ? 'open' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="drawer-handle"></div>
        <div className="drawer-content">
          <h2><i className="fas fa-folder-tree"></i> Categories</h2>
          <ul className="category-grid">
            {categories.map(category => (
              <li
                key={category.id}
                className={currentCategory === category.id ? 'active' : ''}
                data-category={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  onClose();
                }}
              >
                <i className={`fas ${getCategoryIcon(category.id)}`}></i>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryDrawer;
