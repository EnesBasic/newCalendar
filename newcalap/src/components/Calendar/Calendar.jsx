// src/components/Calendar/Calendar.jsx
import React from 'react';
import { generateDateGrid, organizeIntoWeeks } from '../../utils/calendarHelpers';
import './Calendar.css'; // Optional styling
import { generateMonthDays } from '../../utils/calendarHelpers';
import CalendarGrid from './CalendarGrid';
import './styles/global.css';

const CalendarGrid = ({ currentDate }) => {
  const days = generateMonthDays(currentDate);
  // Render days in the grid...
};

const Calendar = ({ date = new Date(), weekStartsOn = 0 }) => {
  const dateGrid = generateDateGrid(date, weekStartsOn);
  const weeks = organizeIntoWeeks(dateGrid);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Rotate weekdays if week starts on Monday
  if (weekStartsOn === 1) {
    weekdays.push(weekdays.shift());
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        {weekdays.map(day => (
          <div key={day} className="weekday-header">{day}</div>
        ))}
      </div>
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="calendar-week">
          {week.map((day, dayIndex) => (
            <div 
              key={day.formattedDate}
              className={`calendar-day ${
                day.isCurrentMonth ? 'current-month' : 'other-month'
              }`}
            >
              {day.dayNumber}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;