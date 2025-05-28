import React from 'react';
import CalendarView from './CalendarView/CalendarView';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import AnatomySection from './AnatomySection/AnatomySection';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import './DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <div className="left-column">
          <AnatomySection />
          <ActivityFeed />
        </div>

        <div className="right-column">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default DashboardMainContent;
