import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import Header from './components/Header';
import CalendarGrid from './components/CalendarGrid';
import '../styles/global.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="app">
      <Header 
        currentDate={currentDate} 
        onPrevMonth={handlePrevMonth} 
        onNextMonth={handleNextMonth} 
      />
      <CalendarGrid />
    </div>
  );
}

export default App;