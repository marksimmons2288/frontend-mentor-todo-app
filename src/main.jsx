import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/index.css';
import App from '@/App.jsx';

import { ThemeProvider } from '@/providers/themeProvider.jsx';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component inside StrictMode
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
