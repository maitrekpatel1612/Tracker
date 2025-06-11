import { useContext } from 'react';
import { RoadmapContext } from '../contexts/RoadmapContext';

export const useRoadmap = () => {
  const context = useContext(RoadmapContext);
  
  if (!context) {
    throw new Error('useRoadmap must be used within a RoadmapProvider');
  }
  
  return context;
};