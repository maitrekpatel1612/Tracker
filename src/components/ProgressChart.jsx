import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';
import { useRoadmap } from '../hooks/useRoadmap';

const ProgressChart = ({ isDarkMode, timeframe = 'week' }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeTimeframe, setActiveTimeframe] = useState(timeframe);
  const { roadmapData } = useRoadmap();
  
  // Icons for the timeframe buttons
  const timeframeIcons = {
    week: "fa-calendar-week",
    month: "fa-calendar-alt",
    year: "fa-calendar"
  };
  
  // Get real completion data
  const getRealCompletionData = () => {
    let totalTopics = 0;
    let completedTopics = 0;
    
    Object.keys(roadmapData).forEach(categoryId => {
      const category = roadmapData[categoryId];
      if (category && category.topics) {
        category.topics.forEach(topic => {
          totalTopics++;
          if (topic.status === 'completed') {
            completedTopics++;
          }
        });
      }
    });
    
    return { totalTopics, completedTopics };
  };
  
  // Generate chart data based on real completion
  const getChartData = useCallback((timeframe) => {
    const labels = [];
    const data = [];
    const { completedTopics } = getRealCompletionData();
    
    const currentDate = new Date();

    if (timeframe === 'week') {
      // Last 7 days - simulate progressive completion
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(currentDate.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
        // Show progressive completion over the week
        const progressPoint = Math.floor((completedTopics * (7 - i)) / 7);
        data.push(progressPoint);
      }
    } else if (timeframe === 'month') {
      // Last 4 weeks - simulate progressive completion
      for (let i = 3; i >= 0; i--) {
        const weekStart = new Date();
        weekStart.setDate(currentDate.getDate() - (i * 7));
        labels.push(`Week ${4 - i}`);
        // Show progressive completion over the month
        const progressPoint = Math.floor((completedTopics * (4 - i)) / 4);
        data.push(progressPoint);
      }
    } else if (timeframe === 'year') {
      // Last 12 months - simulate progressive completion
      for (let i = 11; i >= 0; i--) {
        const month = new Date();
        month.setMonth(currentDate.getMonth() - i);
        labels.push(month.toLocaleDateString('en-US', { month: 'short' }));
        // Show progressive completion over the year
        const progressPoint = Math.floor((completedTopics * (12 - i)) / 12);
        data.push(progressPoint);
      }
    }

    return { labels, data };
  }, []);
  
  useEffect(() => {
    // Destroy existing chart on component rerender
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const chartData = getChartData(activeTimeframe);

      // Create gradient for the chart
      const gradient = ctx.createLinearGradient(0, 0, 0, 250);
      gradient.addColorStop(0, 'rgba(0, 204, 102, 0.4)');
      gradient.addColorStop(0.5, 'rgba(0, 204, 102, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 204, 102, 0.05)');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.labels,
          datasets: [{
            label: 'Topics Completed',
            data: chartData.data,
            backgroundColor: gradient,
            borderColor: '#00cc66',
            borderWidth: 3,
            pointBackgroundColor: '#00cc66',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#00994d',
            pointHoverBorderColor: '#ffffff',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: 'index'
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                drawBorder: false
              },
              ticks: {
                stepSize: 1,
                color: isDarkMode ? '#a0a0a0' : '#6c757d',
                font: {
                  size: 12
                }
              }
            },
            x: {
              grid: {
                color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                drawBorder: false
              },
              ticks: {
                color: isDarkMode ? '#a0a0a0' : '#6c757d',
                font: {
                  size: 12
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: isDarkMode ? '#242444' : '#ffffff',
              titleColor: isDarkMode ? '#e6e6e6' : '#333333',
              bodyColor: isDarkMode ? '#a0a0a0' : '#6c757d',
              borderColor: '#00cc66',
              borderWidth: 2,
              padding: 16,
              displayColors: false,
              cornerRadius: 8,
              titleFont: {
                size: 14,
                weight: 'bold'
              },
              bodyFont: {
                size: 13
              },
              callbacks: {
                title: function (context) {
                  return context[0].label;
                },
                label: function (context) {
                  return `${context.parsed.y} topic(s) completed`;
                }
              }
            }
          },
          elements: {
            point: {
              hoverRadius: 8
            }
          }
        }
      });
    }

    // Clean up chart instance on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [activeTimeframe, isDarkMode, roadmapData, getChartData]);

  const handleTimeframeChange = (newTimeframe) => {
    setActiveTimeframe(newTimeframe.toLowerCase());
  };
  return (
    <div className="graph-container">
      <div className="graph-header">
        <h2><i className="fas fa-chart-line"></i> Progress Timeline</h2>
        <div className="graph-controls">
          {['Week', 'Month', 'Year'].map(tf => (
            <button 
              key={tf}
              className={`btn btn-small ${activeTimeframe === tf.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleTimeframeChange(tf)}
            >
              <i className={`fas ${timeframeIcons[tf.toLowerCase()]}`}></i> {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-wrapper">
        <canvas ref={chartRef} id="progressChart"></canvas>
      </div>
    </div>
  );
};

export default ProgressChart;
