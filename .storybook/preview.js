import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/styles/main.scss';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <div style={{ 
        maxWidth: '600px',  
        minHeight: '300px',
        margin: '0 auto',   
        padding: '20px',    
        border: '1px solid #ddd',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        overflow: 'auto'    
      }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }, 
  controls: {
    expanded: true, 
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: 800,
  },
  layout: 'padded', 
};
