import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure the path to App is correct

// Check if the element with ID 'root' exists
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Root element not found. Please ensure there's a <div id='root'></div> in your index.html file.");
} else {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}