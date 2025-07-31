import React from 'react';
import './Calendar.css'; // Make sure this import path is correct

const Header = ({ month, year, onPrevMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button className="nav-arrow left-arrow" onClick={onPrevMonth}>
        &lt;
      </button>
<h2 className="calendar-title" style={{
  all: 'unset',
  display: 'block !important',
  color: 'black !important',
  fontSize: '24px !important',
  visibility: 'visible !important'
}}>
  {month} {year}
</h2>
      <button className="nav-arrow right-arrow" onClick={onNextMonth}>
        &gt;
      </button>
    </div>
  );
};

export default Header;
