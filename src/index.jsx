/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactBOM from 'react-dom/client';
import '@/main.css';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';

const root = ReactBOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
