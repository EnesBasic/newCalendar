import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this path is correct
import { createRoot } from 'react-dom/client';
//import './styles/global.css'; // Base styles first
//import './index.css'; // Then index styles
// Then component-specific styles will load last


// Create a root
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);