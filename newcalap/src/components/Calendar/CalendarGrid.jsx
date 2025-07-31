import React from 'react';
import { format, startOfWeek, addDays, getWeek } from 'date-fns';
import './Calendar.css';

const CalendarGrid = ({ currentDate }) => {
  const weekStart = startOfWeek(currentDate);
  const days = [];
  
  // Add empty cell for week number column
  days.push(<div key="weeknum-header" className="week-number-header">Week</div>);
  
  // Generate day headers
  for (let i = 0; i < 7; i++) {
    days.push(
      <div key={i} className="calendar-day-header">
        {format(addDays(weekStart, i), 'EEE')}
      </div>
    );
  }

  const date = new Date(currentDate);
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const startDate = startOfWeek(monthStart);
  const endDate = startOfWeek(monthEnd);

  const rows = [];
  let daysRow = [];
  let day = startDate;
  
  while (day <= endDate) {
    // Add week number cell
    daysRow.push(
      <div key={`week-${day}`} className="week-number">
        {getWeek(day)}
      </div>
    );
    
    // Add day cells
    for (let i = 0; i < 7; i++) {
      daysRow.push(
        <div 
          key={day} 
          className={`calendar-day ${
            format(day, 'MM') !== format(currentDate, 'MM') ? 'other-month' : ''
          }`}
        >
          {format(day, 'd')}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<div key={day} className="calendar-week">{daysRow}</div>);
    daysRow = [];
  }

  return (
    <div className="calendar-grid">
      <div className="calendar-week-header">{days}</div>
      {rows}
    </div>
  );
};

export default CalendarGrid;