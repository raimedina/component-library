import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider> {/* ✅ ThemeProvider no index */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
