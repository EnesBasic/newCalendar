import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Header = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="header">
      <button onClick={onPrevMonth}><ChevronLeft /></button>
      <h2>{format(currentDate, 'MMMM yyyy')}</h2>
      <button onClick={onNextMonth}><ChevronRight /></button>
    </div>
  );
};

export default Header;