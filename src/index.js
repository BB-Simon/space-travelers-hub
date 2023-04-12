import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as BrowserRoute } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRoute>
      <App />
    </BrowserRoute>
  </React.StrictMode>,
);
