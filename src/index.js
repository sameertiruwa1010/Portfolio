import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Custom function to handle web vitals
function sendToAnalytics(metric) {
  console.log(metric);
  // You can send to Google Analytics or other service here
}

reportWebVitals(sendToAnalytics);