import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource-variable/inter';
import './styles.css';
import App from './App.jsx';
import { LangProvider } from './i18n/index.jsx';

// Link cũ dạng horizonsxs.io.vn/#/guides/... (trước khi bỏ dấu #): chuyển sang đường dẫn mới.
if (location.hash.startsWith('#/')) history.replaceState(null, '', location.hash.slice(1));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </LangProvider>
  </StrictMode>
);
