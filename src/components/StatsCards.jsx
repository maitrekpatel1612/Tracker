import React from 'react';

const cardData = [
  {
    key: 'overallprogress',
    icon: 'fas fa-chart-pie',
    accentClass: 'overallprogress',
    titleIcon: 'fas fa-chart-pie',
    title: 'Overall Progress',
    valueKey: 'overallProgress',
    isPercentage: true
  },
  {
    key: 'completed',
    icon: 'fas fa-trophy',
    accentClass: 'completed',
    titleIcon: 'fas fa-check-circle',
    title: 'Completed Topics',
    valueKey: 'completed'
  },
  {
    key: 'inprogress',
    icon: 'fas fa-cogs',
    accentClass: 'inprogress',
    titleIcon: 'fas fa-spinner',
    title: 'In Progress',
    valueKey: 'inProgress'
  },
  {
    key: 'notstarted',
    icon: 'fas fa-list-check',
    accentClass: 'notstarted',
    titleIcon: 'fas fa-hourglass-start',
    title: 'Not Started',
    valueKey: 'notStarted'
  },
  {
    key: 'totalhours',
    icon: 'fas fa-calendar-day',
    accentClass: 'totalhours',
    titleIcon: 'fas fa-clock',
    title: 'Total Hours',
    valueKey: 'totalHours'
  }
];

const StatsCards = ({ stats, overallProgress }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
      {cardData.map(card => (
        <div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 relative flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          key={card.key}
        >
          <div className={`absolute top-0 left-0 h-1 w-full rounded-t-xl ${
            card.accentClass === 'overallprogress' ? 'bg-blue-500' :
            card.accentClass === 'completed' ? 'bg-green-500' :
            card.accentClass === 'inprogress' ? 'bg-yellow-500' :
            card.accentClass === 'notstarted' ? 'bg-gray-400' :
            'bg-purple-500'
          }`}></div>
          
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
            card.accentClass === 'overallprogress' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
            card.accentClass === 'completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
            card.accentClass === 'inprogress' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' :
            card.accentClass === 'notstarted' ? 'bg-gray-100 dark:bg-gray-700 text-gray-600' :
            'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
          }`}>
            <i className={card.titleIcon}></i>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {card.valueKey === 'overallProgress' 
                ? `${overallProgress}${card.isPercentage ? '%' : ''}`
                : stats[card.valueKey]
              }
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {card.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
