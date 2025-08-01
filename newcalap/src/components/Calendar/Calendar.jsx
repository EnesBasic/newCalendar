// Calendar.jsx - Corrected version
import React from 'react';
import Header from './Header';
import CalendarGrid from './CalendarGrid';
import './CalendarGrid.css';
import './Calendar.css';
import EventsSection from './EventsSection';
import { getWeek, parseISO } from 'date-fns';



const Calendar = () => {
  // Sample data structure
  const weeks = [
    {
      weekNumber: getWeek(parseISO('2025-01-27')),
      days: [
        { date: '2025-01-27', dayOfMonth: 27, isCurrentMonth: false },
        // ... other days
      ]
    },
    // ... other weeks
  ];
   console.log("Calendar component rendering");
  return (
    <div className="calendar-container">
        <Header month="February" year={2025} />
         <CalendarGrid weeks={weeks} />
         <EventsSection />
      </div>
  );
};

export default Calendar;