import { startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';

import { 
  startOfMonth, endOfMonth, eachDayOfInterval, 
  format, getDay, addDays, subDays, startOfWeek, endOfWeek 
} from 'date-fns';

export const generateMonthDays = (date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachDayOfInterval({ start, end });
};

export const generateDateGrid = (date, weekStartsOn = 0) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const grid = [];
  const startDay = getDay(monthStart);
  
  // Add previous month's days if needed
  if (startDay !== weekStartsOn) {
    const daysToAdd = (startDay - weekStartsOn + 7) % 7;
    for (let i = daysToAdd; i > 0; i--) {
      grid.push(subDays(monthStart, i));
    }
  }
  
  // Add current month's days
  grid.push(...daysInMonth);
  
  // Add next month's days to complete grid
  const remainingCells = 42 - grid.length;
  for (let i = 1; i <= remainingCells; i++) {
    grid.push(addDays(monthEnd, i));
  }
  
  return grid.map(day => ({
    date: day,
    dayNumber: format(day, 'd'),
    isCurrentMonth: day >= monthStart && day <= monthEnd,
    formattedDate: format(day, 'yyyy-MM-dd')
  }));
};

export const organizeIntoWeeks = (dateArray, daysPerWeek = 7) => {
  const weeks = [];
  for (let i = 0; i < dateArray.length; i += daysPerWeek) {
    weeks.push(dateArray.slice(i, i + daysPerWeek));
  }
  return weeks;
};