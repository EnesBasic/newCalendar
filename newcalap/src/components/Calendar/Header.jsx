import React from 'react';
import './Calendar.css'; // Make sure this import path is correct


const Header = ({ month, year, onPrevMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button className="nav-arrow left-arrow" onClick={onPrevMonth}>
        ‹
      </button>
      <h2 className="calendar-title">
        {month} {year}
      </h2>
      <button className="nav-arrow right-arrow" onClick={onNextMonth}>
        ›
      </button>
    </div>
  );
};

export default Header;
