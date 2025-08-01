// src/components/Calendar/Header.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
import { GlassArrow } from '../UI/GlassArrow'; // or the default import

const Header = ({ month, year, onPrevMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button 
        className="nav-arrow left-arrow" 
        onClick={onPrevMonth}
        aria-label="Previous month"
      >
        <GlassArrow direction="left" size={32} />
      </button>
      <h2 className="calendar-title">
        {month} {year}
      </h2>
      <button 
        className="nav-arrow right-arrow" 
        onClick={onNextMonth}
        aria-label="Next month"
      >
        <GlassArrow direction="right" size={32} />
      </button>
    </div>
  );
};

Header.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired
};

export default Header;