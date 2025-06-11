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
    <div className="stats-cards beautiful-cards">
      {cardData.map(card => (
        <div
          className={`stat-card beautiful-card ${card.accentClass} bg-white shadow-lg rounded-xl p-6 relative flex flex-col items-center ring-1 ring-gray-100 hover:ring-gray-300 transform transition-all duration-300 hover:shadow-green`}
          key={card.key}
        >
          <div className={`stat-accent beautiful-accent ${card.accentClass} absolute top-0 left-0 h-1 w-full`}></div>
          <div className="stat-card-content text-center">
            <div className="stat-number beautiful-number text-2xl font-bold mb-2">
              {card.valueKey === 'overallProgress' 
                ? `${overallProgress}${card.isPercentage ? '%' : ''}`
                : stats[card.valueKey]
              }
            </div>
            <div className="stat-title beautiful-title text-gray-600">
              <i className={card.titleIcon}></i> {card.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
