import React from 'react';
import { upcomingAppointments } from '../../../data/appointments';
import CardWrapper from '../../CardWrapper';
import './UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <CardWrapper>
      <h3>Upcoming Schedule</h3>
      {upcomingAppointments.map((item, i) => (
        <div key={i} className="appointment-card">
          <span className="icon">{item.icon}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.time} on {item.day}</p>
          </div>
        </div>
      ))}
    </CardWrapper>
  );
}

export default UpcomingSchedule;
