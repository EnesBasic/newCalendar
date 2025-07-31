import React from 'react';
import Calendar from './components/Calendar/Calendar';  // Importing the Calendar component
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Calendar />  {/* Using the imported Calendar component */}
    </div>
  );
}

export default App;