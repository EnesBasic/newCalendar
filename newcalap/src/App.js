import React from 'react';
import Calendar from './components/Calendar/Calendar';  // Importing the Calendar component
import './App.css';

function App() {
   console.log("App component rendering"); // Check browser console
  return (
    <div className="app-container">
      <Calendar />  {/* Using the imported Calendar component */}
    </div>
  );
}

export default App;