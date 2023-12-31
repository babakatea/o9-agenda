import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/shared/assets/fonts/fonts.css';

import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
