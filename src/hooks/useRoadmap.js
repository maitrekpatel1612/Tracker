// Use Roadmap Hook
import { useContext } from 'react';
import { RoadmapContext } from '../contexts/RoadmapContext.js';

// Custom hook for using roadmap context
export const useRoadmap = () => useContext(RoadmapContext);
