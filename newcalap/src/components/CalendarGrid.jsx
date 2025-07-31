import React from 'react';
import '../styles/global.css';

const CalendarGrid = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeks = [1, 2, 3, 4, 5, 6]; // Placeholder for week numbers

  return (
    <div className="calendar-grid">
      {/* Top row: Days of week */}
      <div className="grid-header">
        <div className="cell"></div> {/* Empty cell for week numbers */}
        {daysOfWeek.map((day) => (
          <div key={day} className="cell day-header">
            {day}
          </div>
        ))}
      </div>

      {/* Rows: Week numbers + days */}
      {weeks.map((week) => (
        <div key={week} className="grid-row">
          <div className="cell week-number">{week}</div>
          {daysOfWeek.map((day) => (
            <div key={`${week}-${day}`} className="cell day-cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;