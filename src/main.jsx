import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource-variable/inter';
import './styles.css';
import App from './App.jsx';
import { LangProvider } from './i18n/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </LangProvider>
  </StrictMode>
);
